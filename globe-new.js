/*
 * Globe de mariage — implementation originale, Three.js r128.
 * Les textures Earth sont des exemples publics three-globe charges par CDN;
 * les nuages et les etoiles sont generes localement, sans asset Spin&go.
 */
(function () {
  'use strict';
  var TAU = Math.PI * 2, DEG = Math.PI / 180;
  var CITIES = [
    { name: 'Montpellier, France', lat: 43.6119, lng: 3.8772, text: 'Montpellier · Là où a vu naître le petit Pierre.' },
    { name: 'Madrid, España', lat: 40.4168, lng: -3.7038, text: 'Madrid · Une première expérience de vie à deux.' },
    { name: 'Sevilla, España', lat: 37.3891, lng: -5.9845, text: 'Séville · Flamenco, chaleur andalouse et despedidas.' },
    { name: 'Quito, Ecuador', lat: -0.1807, lng: -78.4678, text: 'Quito · Là où tout a commencé.' }
  ];
  var LABELS = [
    { name:'Paris',lat:48.8566,lng:2.3522,type:'city' },
    { name:'Montpellier',lat:43.6119,lng:3.8772,type:'city' },
    { name:'Madrid',lat:40.4168,lng:-3.7038,type:'city' },
    { name:'Séville',lat:37.3891,lng:-5.9845,type:'city' },
    { name:'Quito',lat:-0.1807,lng:-78.4678,type:'city' },
    { name:'France',lat:46.7,lng:2.5,type:'country' },
    { name:'Espagne',lat:40,lng:-4,type:'country' },
    { name:'Équateur',lat:-1.5,lng:-78,type:'country' }
  ];
  function v(lat,lng,r){ var a=lat*DEG,b=lng*DEG; return new THREE.Vector3(Math.cos(a)*Math.sin(b)*r,Math.sin(a)*r,Math.cos(a)*Math.cos(b)*r); }
  function canvasTexture(draw,w,h){ var c=document.createElement('canvas'); c.width=w;c.height=h;draw(c.getContext('2d'),w,h);return new THREE.CanvasTexture(c); }
  function cloudTexture(){
    return canvasTexture(function(g,w,h){
      var im=g.createImageData(w,h), d=im.data, seed=9173;
      function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647;}
      var blobs=[]; for(var i=0;i<110;i++) blobs.push([rnd()*w,rnd()*h,(.018+rnd()*.08)*w,(.012+rnd()*.04)*h]);
      for(var y=0;y<h;y++) for(var x=0;x<w;x++){var a=0; for(var j=0;j<blobs.length;j++){var b=blobs[j],dx=(x-b[0])/b[2],dy=(y-b[1])/b[3],q=dx*dx+dy*dy; if(q<1)a=Math.max(a,(1-q)*.8);} var k=(y*w+x)*4; d[k]=d[k+1]=d[k+2]=255; d[k+3]=Math.round(a*145);}
      g.putImageData(im,0,0);
    },512,256);
  }
  function labelSprite(text, country){
    var c=document.createElement('canvas'),g=c.getContext('2d'); c.width=country?256:220;c.height=64;
    g.font=(country?'600 22px':'500 19px')+' Inter, Arial, sans-serif'; g.textAlign='center';g.textBaseline='middle';
    g.fillStyle=country?'rgba(255,239,183,.96)':'rgba(245,250,255,.95)';g.shadowColor='rgba(0,0,0,.8)';g.shadowBlur=8;g.fillText(text,c.width/2,28);
    var t=new THREE.CanvasTexture(c), m=new THREE.SpriteMaterial({map:t,transparent:true,depthTest:false}); var s=new THREE.Sprite(m); s.scale.set(country?.48:.38,country?.12:.1,1); return s;
  }
  function init(){
    var host=document.getElementById('globe-container'); if(!host||!window.THREE)return;
    var loader=document.getElementById('globeLoader'), info=document.getElementById('city-info');
    var canvas=document.createElement('canvas'); canvas.setAttribute('aria-label','Globe 3D interactif'); host.insertBefore(canvas,host.firstChild);
    var renderer,scene,camera;
    try { renderer=new THREE.WebGLRenderer({canvas:canvas,alpha:true,antialias:true,powerPreference:'high-performance'}); }
    catch(e){ if(loader)loader.classList.add('hidden'); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)); renderer.setClearColor(0,0);
    scene=new THREE.Scene(); camera=new THREE.PerspectiveCamera(32,1,.1,100); camera.position.set(0,0,3.15);
    var root=new THREE.Group(); root.rotation.y=-18*DEG; scene.add(root);
    var earth=new THREE.Mesh(new THREE.SphereGeometry(1,96,64),new THREE.MeshPhongMaterial({color:0xffffff,specular:0x274b68,shininess:18})); root.add(earth);
    var clouds=new THREE.Mesh(new THREE.SphereGeometry(1.012,64,48),new THREE.MeshPhongMaterial({map:cloudTexture(),transparent:true,opacity:.7,depthWrite:false})); root.add(clouds);
    var atmo=new THREE.Mesh(new THREE.SphereGeometry(1.07,64,48),new THREE.ShaderMaterial({transparent:true,side:THREE.BackSide,depthWrite:false,uniforms:{c:{value:new THREE.Color(0x62c9ff)},p:{value:3.8}},vertexShader:'varying vec3 vN; void main(){vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'uniform vec3 c; uniform float p; varying vec3 vN; void main(){float a=pow(1.0-max(0.0,dot(vN,vec3(0.,0.,1.))),p); gl_FragColor=vec4(c,a*.72);}' })); root.add(atmo);
    var light=new THREE.DirectionalLight(0xfff4d0,1.35); light.position.set(-3,2,4); scene.add(light); scene.add(new THREE.AmbientLight(0x38506c,.45));
    var stars=new THREE.Points(new THREE.BufferGeometry(),new THREE.PointsMaterial({color:0xffffff,size:.018,transparent:true,opacity:.75,sizeAttenuation:true}));
    var sp=[]; for(var i=0;i<900;i++){var z=2.5+Math.random()*3.5, a=Math.random()*TAU,b=Math.acos(2*Math.random()-1);sp.push(Math.sin(b)*Math.cos(a)*z,Math.cos(b)*z,Math.sin(b)*Math.sin(a)*z);} stars.geometry.setAttribute('position',new THREE.Float32BufferAttribute(sp,3));scene.add(stars);
    var texLoader=new THREE.TextureLoader(), earthUrl='https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg', bumpUrl='https://unpkg.com/three-globe/example/img/earth-topology.png';
    texLoader.load(earthUrl,function(t){t.encoding=THREE.sRGBEncoding;earth.material.map=t;earth.material.needsUpdate=true;if(loader)loader.classList.add('hidden');},undefined,function(){if(loader)loader.classList.add('hidden');});
    texLoader.load(bumpUrl,function(t){earth.material.bumpMap=t;earth.material.bumpScale=.055;earth.material.needsUpdate=true;});
    var markers=new THREE.Group();root.add(markers);
    CITIES.forEach(function(c){var p=v(c.lat,c.lng,1.018), dot=new THREE.Mesh(new THREE.SphereGeometry(.027,12,8),new THREE.MeshBasicMaterial({color:0xffc66d}));dot.position.copy(p);dot.userData.city=c;markers.add(dot);});
    LABELS.forEach(function(l){var s=labelSprite(l.name,l.type==='country');s.position.copy(v(l.lat,l.lng,1.055));s.userData.label=l;markers.add(s);});
    var route=new THREE.Group(); root.add(route); for(var j=0;j<CITIES.length-1;j++){var a=v(CITIES[j].lat,CITIES[j].lng,1.025),b=v(CITIES[j+1].lat,CITIES[j+1].lng,1.025),mid=a.clone().add(b).normalize().multiplyScalar(1.13),curve=new THREE.QuadraticBezierCurve3(a,mid,b),geo=new THREE.BufferGeometry().setFromPoints(curve.getPoints(32));route.add(new THREE.Line(geo,new THREE.LineBasicMaterial({color:0xffc66d,transparent:true,opacity:.72})));}
    var down=false,lastX=0,lastY=0,vel=0,hover=false;
    function resize(){var w=host.clientWidth||460,h=host.clientHeight||460; renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}
    function cityInfo(c){if(!info)return;info.innerHTML='<h3>'+c.name+'</h3><p>'+c.text+'</p>';}
    function ray(e){var r=canvas.getBoundingClientRect(),m=new THREE.Vector2(((e.clientX-r.left)/r.width)*2-1,-((e.clientY-r.top)/r.height)*2+1),rc=new THREE.Raycaster();rc.setFromCamera(m,camera);return rc.intersectObjects(markers.children,true);}
    canvas.addEventListener('pointerdown',function(e){down=true;lastX=e.clientX;lastY=e.clientY;vel=0;canvas.classList.add('is-dragging');canvas.setPointerCapture(e.pointerId);});
    canvas.addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-lastX,dy=e.clientY-lastY;root.rotation.y+=dx*.006;root.rotation.x=Math.max(-.38,Math.min(.38,root.rotation.x+dy*.004));vel=dx*.006;lastX=e.clientX;lastY=e.clientY;});
    canvas.addEventListener('pointerup',function(e){down=false;canvas.classList.remove('is-dragging');try{canvas.releasePointerCapture(e.pointerId);}catch(_){}});
    canvas.addEventListener('click',function(e){var hit=ray(e)[0];if(hit&&hit.object.userData.city)cityInfo(hit.object.userData.city);});
    function frame(){requestAnimationFrame(frame);if(!down&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){root.rotation.y+=.0017+vel;vel*=.94;clouds.rotation.y+=.00045;} renderer.render(scene,camera);}
    var hint=document.createElement('div');hint.className='globe-hint';hint.textContent='Glissez pour faire tourner · cliquez sur une ville';host.appendChild(hint);
    resize();window.addEventListener('resize',resize);frame();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
}());
