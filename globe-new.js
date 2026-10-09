/* Globe interactif — Three.js r128, autonome et tolérant aux pannes. */
(function () {
  'use strict';
  var DEG = Math.PI / 180, TAU = Math.PI * 2;
  var CITIES = [
    {name:'Montpellier, France',lat:43.6119,lng:3.8772,text:'Montpellier · Là où a vu naître le petit Pierre.'},
    {name:'Madrid, España',lat:40.4168,lng:-3.7038,text:'Madrid · Une première expérience de vie à deux.'},
    {name:'Sevilla, España',lat:37.3891,lng:-5.9845,text:'Séville · Flamenco, chaleur andalouse et despedidas.'},
    {name:'Quito, Ecuador',lat:-0.1807,lng:-78.4678,text:'Quito · Là où tout a commencé.'}
  ];
  var LABELS = [
    ['Paris',48.8566,2.3522,0],['Montpellier',43.6119,3.8772,0],['Madrid',40.4168,-3.7038,0],
    ['Séville',37.3891,-5.9845,0],['Quito',-0.1807,-78.4678,0],['France',46.7,2.5,1],
    ['Espagne',40,-4,1],['Équateur',-1.5,-78,1]
  ];
  function point(lat,lng,r){var a=lat*DEG,b=lng*DEG;return new THREE.Vector3(Math.cos(a)*Math.sin(b)*r,Math.sin(a)*r,Math.cos(a)*Math.cos(b)*r);}
  function texture(draw,w,h){var c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);var t=new THREE.CanvasTexture(c);t.needsUpdate=true;return t;}
  function earthTexture(){
    return texture(function(g,w,h){
      var grad=g.createLinearGradient(0,0,0,h);grad.addColorStop(0,'#173e72');grad.addColorStop(.5,'#247da0');grad.addColorStop(1,'#102e58');g.fillStyle=grad;g.fillRect(0,0,w,h);
      /* Continents stylisés : le rendu reste visible même sans CDN. */
      g.fillStyle='#6e9f72';
      [[.18,.28,.16,.18],[.27,.55,.11,.24],[.47,.23,.13,.13],[.53,.48,.12,.25],[.70,.31,.18,.20],[.77,.63,.10,.16],[.88,.22,.10,.14]].forEach(function(q){g.beginPath();g.ellipse(q[0]*w,q[1]*h,q[2]*w,q[3]*h,0,0,TAU);g.fill();});
      g.fillStyle='rgba(244,231,184,.7)';g.fillRect(0,.47*h,w,.012*h);
    },1024,512);
  }
  function cloudTexture(){return texture(function(g,w,h){g.clearRect(0,0,w,h);g.fillStyle='rgba(255,255,255,.3)';for(var i=0;i<70;i++){g.beginPath();g.ellipse(Math.random()*w,Math.random()*h,8+Math.random()*35,3+Math.random()*12,0,0,TAU);g.fill();}},512,256);}
  function labelSprite(text,isCountry){var c=document.createElement('canvas'),g=c.getContext('2d');c.width=isCountry?256:220;c.height=64;g.font=(isCountry?'600 22px':'500 19px')+' Inter,Arial,sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillStyle=isCountry?'#ffefb7':'#f5faff';g.shadowColor='#000';g.shadowBlur=8;g.fillText(text,c.width/2,28);var s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthTest:false}));s.scale.set(isCountry?.48:.38,isCountry?.12:.1,1);return s;}
  function init(){
    var host=document.getElementById('globe-container'),loader=document.getElementById('globeLoader'),info=document.getElementById('city-info');
    if(!host||!window.THREE)return;
    try {
      var canvas=document.createElement('canvas');canvas.setAttribute('aria-label','Globe 3D interactif');host.insertBefore(canvas,host.firstChild);
      var renderer=new THREE.WebGLRenderer({canvas:canvas,alpha:true,antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));renderer.setClearColor(0,0);
      var scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(32,1,.1,100);camera.position.z=3.15;
      var root=new THREE.Group();root.rotation.y=-18*DEG;scene.add(root);
      var earth=new THREE.Mesh(new THREE.SphereGeometry(1,72,48),new THREE.MeshPhongMaterial({map:earthTexture(),color:0xffffff,specular:0x274b68,shininess:18}));root.add(earth);
      var clouds=new THREE.Mesh(new THREE.SphereGeometry(1.012,48,32),new THREE.MeshPhongMaterial({map:cloudTexture(),transparent:true,opacity:.7,depthWrite:false}));root.add(clouds);
      root.add(new THREE.Mesh(new THREE.SphereGeometry(1.07,48,32),new THREE.MeshBasicMaterial({color:0x62c9ff,transparent:true,opacity:.10,side:THREE.BackSide,depthWrite:false})));
      scene.add(new THREE.DirectionalLight(0xfff4d0,1.35)).position.set(-3,2,4);scene.add(new THREE.AmbientLight(0x38506c,.5));
      var stars=new THREE.Points(new THREE.BufferGeometry(),new THREE.PointsMaterial({color:0xffffff,size:.018,transparent:true,opacity:.75})),sp=[];for(var i=0;i<700;i++){var z=2.5+Math.random()*3.5,a=Math.random()*TAU,b=Math.acos(2*Math.random()-1);sp.push(Math.sin(b)*Math.cos(a)*z,Math.cos(b)*z,Math.sin(b)*Math.sin(a)*z);}stars.geometry.setAttribute('position',new THREE.Float32BufferAttribute(sp,3));scene.add(stars);
      var markers=new THREE.Group();root.add(markers);CITIES.forEach(function(c){var dot=new THREE.Mesh(new THREE.SphereGeometry(.027,12,8),new THREE.MeshBasicMaterial({color:0xffc66d}));dot.position.copy(point(c.lat,c.lng,1.018));dot.userData.city=c;markers.add(dot);});
      LABELS.forEach(function(l){var s=labelSprite(l[0],!!l[3]);s.position.copy(point(l[1],l[2],1.055));markers.add(s);});
      var route=new THREE.Group();root.add(route);for(var j=0;j<CITIES.length-1;j++){var a=point(CITIES[j].lat,CITIES[j].lng,1.025),b=point(CITIES[j+1].lat,CITIES[j+1].lng,1.025),mid=a.clone().add(b).normalize().multiplyScalar(1.13),geo=new THREE.BufferGeometry().setFromPoints(new THREE.QuadraticBezierCurve3(a,mid,b).getPoints(32));route.add(new THREE.Line(geo,new THREE.LineBasicMaterial({color:0xffc66d,transparent:true,opacity:.72})));}
      var down=false,lastX=0,lastY=0,vel=0;
      function resize(){var w=Math.max(1,host.clientWidth||460),h=Math.max(1,host.clientHeight||460);renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();} function show(c){if(info)info.innerHTML='<h3>'+c.name+'</h3><p>'+c.text+'</p>';}
      canvas.addEventListener('pointerdown',function(e){down=true;lastX=e.clientX;lastY=e.clientY;vel=0;canvas.classList.add('is-dragging');if(canvas.setPointerCapture)canvas.setPointerCapture(e.pointerId);});
      canvas.addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-lastX,dy=e.clientY-lastY;root.rotation.y+=dx*.006;root.rotation.x=Math.max(-.38,Math.min(.38,root.rotation.x+dy*.004));vel=dx*.006;lastX=e.clientX;lastY=e.clientY;});
      canvas.addEventListener('pointerup',function(e){down=false;canvas.classList.remove('is-dragging');if(canvas.releasePointerCapture)try{canvas.releasePointerCapture(e.pointerId);}catch(_){}});
      canvas.addEventListener('click',function(e){var r=canvas.getBoundingClientRect(),m=new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),hits=new THREE.Raycaster();hits.setFromCamera(m,camera);var hit=hits.intersectObjects(markers.children,true)[0];if(hit&&hit.object.userData.city)show(hit.object.userData.city);});
      function frame(){requestAnimationFrame(frame);if(!down&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){root.rotation.y+=.0017+vel;vel*=.94;clouds.rotation.y+=.00045;}renderer.render(scene,camera);} resize();window.addEventListener('resize',resize);if(loader)loader.classList.add('hidden');frame();
    } catch(e) { console.error('[globe] initialisation impossible',e); if(loader)loader.classList.add('hidden'); }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
}());
