/* ============================================================
   Changement d'onglet
   ============================================================ */
function showTab(id) {
    // 1. Retirer "active" de la section d'accueil (#home)
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.remove('active');
    }

    // 2. Retirer "active" et le fondu de toutes les sections .tab
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active", "visible-tab");
    });

    // 3. Activer la section demandée, puis déclencher le fondu
    const current = document.getElementById(id);
    if (current) {
        current.classList.add("active");
        requestAnimationFrame(() => {
            requestAnimationFrame(() => current.classList.add("visible-tab"));
        });
    }

    // 4. Mettre à jour l'état visuel du menu (lien actif)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle("active", link.dataset.tab === id);
    });

    // 5. Revenir en haut
    window.scrollTo(0, 0);

    // 6. Mettre à jour l'affichage du globe
    toggleMapOnHome();
}


/* ============================================================
   Langue FR / ES (avec mémorisation dans localStorage)
   ============================================================ */
function setLang(lang) {
    // texte
    document.querySelectorAll("[data-fr]").forEach(el => {
        const value = el.dataset[lang];
        if (value) {
            el.textContent = value;
        }
    });

    // options de select (elles ont aussi data-fr / data-es)
    document.querySelectorAll("option[data-fr]").forEach(opt => {
        const value = opt.dataset[lang];
        if (value) opt.textContent = value;
    });

    // état visuel des boutons
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // attribut lang du document (accessibilité + SEO)
    document.documentElement.setAttribute("lang", lang);

    // mémoriser le choix pour la prochaine visite
    try {
        localStorage.setItem("siteLang", lang);
    } catch (e) {
        // stockage indisponible (mode privé, etc.) : on ignore simplement
    }
}


/* ============================================================
   Animation au scroll (sections)
   ============================================================ */
function revealOnScroll() {
    document.querySelectorAll(".reveal").forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
}

/* Met en évidence l'étape de la frise actuellement visible */
function highlightTimelineOnScroll() {
    const items = document.querySelectorAll(".timeline-item");
    const triggerLine = window.innerHeight * 0.6;

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isInView = rect.top < triggerLine && rect.bottom > 100;
        item.classList.toggle("in-view", isInView);
    });
}

window.addEventListener("scroll", () => {
    revealOnScroll();
    highlightTimelineOnScroll();
});

window.addEventListener("load", () => {
    revealOnScroll();
    highlightTimelineOnScroll();

    // langue mémorisée, sinon FR par défaut
    let savedLang = "fr";
    try {
        savedLang = localStorage.getItem("siteLang") || "fr";
    } catch (e) {
        savedLang = "fr";
    }
    setLang(savedLang);
});


/* ============================================================
   Compte à rebours jusqu'au 14 août 2027
   ============================================================ */
function startCountdown() {
    const weddingDate = new Date("2027-08-14T00:00:00");

    const daysEl = document.getElementById("cd-days");
    const hoursEl = document.getElementById("cd-hours");
    const minutesEl = document.getElementById("cd-minutes");
    const secondsEl = document.getElementById("cd-seconds");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    function update() {
        const now = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {
            daysEl.textContent = "0";
            hoursEl.textContent = "0";
            minutesEl.textContent = "0";
            secondsEl.textContent = "0";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;
    }

    update();
    setInterval(update, 1000);
}

document.addEventListener("DOMContentLoaded", startCountdown);


/* ============================================================
   Formulaire RSVP -> envoi via Formspree (avec repli mailto)
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
    const rsvpForm = document.getElementById('rsvpForm');
    const successMsg = document.getElementById('rsvpSuccess');

    if (!rsvpForm) return;

    rsvpForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const submitBtn = rsvpForm.querySelector('button[type="submit"]');
        const formData = new FormData(rsvpForm);

        if (submitBtn) submitBtn.disabled = true;

        fetch(rsvpForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
            .then(response => {
                if (response.ok) {
                    rsvpForm.reset();
                    if (successMsg) successMsg.classList.add('visible');
                } else {
                    throw new Error('Erreur envoi formulaire');
                }
            })
            .catch(() => {
                // Repli : si Formspree n'est pas configuré / pas de réseau,
                // on propose l'envoi par email classique.
                sendViaMailto(formData);
            })
            .finally(() => {
                if (submitBtn) submitBtn.disabled = false;
            });
    });

    function sendViaMailto(formData) {
        const emailTo = "pierre3604@gmail.com";

        const nom       = (formData.get('nom') || '').trim();
        const email     = (formData.get('email') || '').trim();
        const personnes = (formData.get('personnes') || '').trim();
        const allergies = (formData.get('allergies') || '').trim();
        const adresse   = (formData.get('adresse') || '').trim();

        const subject = encodeURIComponent("RSVP mariage Pierre & Nathalya");

        const bodyText =
            "Bonjour Pierre et Nathalya,\n\n" +
            "Je confirme ma présence au mariage.\n\n" +
            "Nom : " + nom + "\n" +
            "Email : " + email + "\n" +
            "Nombre de personnes : " + personnes + "\n" +
            "Allergies : " + (allergies || "Aucune") + "\n" +
            "Mon adresse : " + adresse + "\n\n" +
            "Merci !";

        const body = encodeURIComponent(bodyText);

        window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    }
});


/* ============================================================
   Carte détaillée d'un pays (fenêtre modale) : lieux à visiter
   ============================================================ */
const countryPOIs = {
    'Ecuador': {
        center: [-1.4, -78.5],
        zoom: 6,
        titleFr: 'Équateur · à visiter',
        titleEs: 'Ecuador · lugares por visitar',
        subtitleFr: "Quelques lieux qui ont compté dans notre histoire, et d'autres à découvrir.",
        subtitleEs: 'Algunos lugares importantes en nuestra historia, y otros por descubrir.',
        places: [
            { name: 'Quito', lat: -0.1807, lng: -78.4678, desc: "Capitale, centre historique classé à l'UNESCO. C'est ici que tout a commencé pour nous." },
            { name: 'Îles Galápagos', lat: -0.9538, lng: -90.9656, desc: 'Faune unique au monde, snorkeling et tortues géantes.' },
            { name: 'Baños de Agua Santa', lat: -1.3958, lng: -78.4247, desc: "Cascades, sports d'aventure, sources thermales." },
            { name: 'Cuenca', lat: -2.9006, lng: -79.0045, desc: 'Ville coloniale, patrimoine mondial UNESCO.' },
            { name: 'Otavalo', lat: 0.2345, lng: -78.2616, desc: 'Célèbre marché artisanal andin.' },
            { name: 'Mindo', lat: 0.0500, lng: -78.7667, desc: "Forêt nuageuse, observation d'oiseaux et colibris." },
            { name: 'Cotopaxi', lat: -0.6836, lng: -78.4386, desc: 'Volcan actif emblématique, randonnée.' }
        ]
    }
};

let countryDetailMap = null;

function openCountryModal(countryName) {
    const data = countryPOIs[countryName];
    if (!data || typeof L === 'undefined') return; // pas de carte détaillée dispo pour ce pays

    const modal = document.getElementById('countryModal');
    const title = document.getElementById('countryModalTitle');
    const subtitle = document.getElementById('countryModalSubtitle');
    if (!modal || !title || !subtitle) return;

    const currentLang = document.documentElement.getAttribute('lang') === 'es' ? 'es' : 'fr';
    title.textContent = currentLang === 'es' ? data.titleEs : data.titleFr;
    subtitle.textContent = currentLang === 'es' ? data.subtitleEs : data.subtitleFr;

    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';

    // Leaflet doit s'initialiser une fois le conteneur visible et dimensionné
    requestAnimationFrame(() => {
        if (!countryDetailMap) {
            countryDetailMap = L.map('countryDetailMap');
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
                maxZoom: 18
            }).addTo(countryDetailMap);
        }

        countryDetailMap.setView(data.center, data.zoom);

        // Retirer les anciens marqueurs avant d'ajouter les nouveaux
        countryDetailMap.eachLayer(layer => {
            if (layer instanceof L.Marker) countryDetailMap.removeLayer(layer);
        });

        data.places.forEach(place => {
            L.marker([place.lat, place.lng])
                .addTo(countryDetailMap)
                .bindPopup(`<strong>${place.name}</strong><br>${place.desc}`);
        });

        // Leaflet a besoin d'être "réveillé" une fois le conteneur affiché
        setTimeout(() => countryDetailMap.invalidateSize(), 200);
    });
}

function closeCountryModal() {
    const modal = document.getElementById('countryModal');
    if (modal) modal.classList.remove('visible');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeCountryModal();
});

document.addEventListener('click', event => {
    const modal = document.getElementById('countryModal');
    if (modal && event.target === modal) closeCountryModal();
});


/* ============================================================
   Globe interactif : Montpellier, Madrid, Sevilla, Quito
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
    const globeContainer = document.getElementById('globe-container');
    if (!globeContainer || typeof Globe === 'undefined') return;

    const cityInfoBox = document.getElementById('city-info');
    const globeLoader = document.getElementById('globeLoader');

    function hideGlobeLoader() {
        if (globeLoader) globeLoader.classList.add('hidden');
    }

    // Filet de sécurité : si le chargement traîne, on masque quand même après 6s
    setTimeout(hideGlobeLoader, 6000);

    const cities = [
        {
            name: 'Montpellier, France',
            lat: 43.6119,
            lng: 3.8772,
            text: 'Montpellier · Là où a vu naître le petit pierre'
        },
        {
            name: 'Madrid, España',
            lat: 40.4168,
            lng: -3.7038,
            text: 'Madrid · Une première experience de vie à deux, des projets qui se dessinent au rythme de la ville qui ne dort jamais.'
        },
        {
            name: 'Sevilla, España',
            lat: 37.3891,
            lng: -5.9845,
            text: 'Sevilla · Flamenco, chaleur andalouse et les despedidas interminables'
        },
        {
            name: 'Quito, Ecuador',
            lat: -0.1807,
            lng: -78.4678,
            text: 'Quito · Là où tout a commencé. Deux vies, deux continents, une seule histoire.'
        }
    ];

    // Trajet : Montpellier → Madrid → Sevilla → Quito
    const arcs = [
        {
            startLat: cities[0].lat,
            startLng: cities[0].lng,
            endLat: cities[1].lat,
            endLng: cities[1].lng,
            color: ['#f97373', '#fbbf77']
        },
        {
            startLat: cities[1].lat,
            startLng: cities[1].lng,
            endLat: cities[2].lat,
            endLng: cities[2].lng,
            color: ['#fbbf77', '#f97373']
        },
        {
            startLat: cities[2].lat,
            startLng: cities[2].lng,
            endLat: cities[3].lat,
            endLng: cities[3].lng,
            color: ['#f97373', '#6b9cff']
        }
    ];

    const world = Globe()(globeContainer)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-day.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('#f8b4b4')
        .atmosphereAltitude(0.22)
        .pointsData(cities)
        .pointLat(d => d.lat)
        .pointLng(d => d.lng)
        .pointAltitude(0.03)
        .pointColor(() => '#e11d48')
        .pointRadius(0.22)
        .pointsMerge(true)
        .pointLabel(d => d.name)
        .arcsData(arcs)
        .arcColor(d => d.color)
        .arcStroke(0.7)
        .arcAltitude(0.22)
        .arcDashLength(0.5)
        .arcDashGap(0.2)
        .arcDashAnimateTime(3000);

        // 🏷️ Labels pour tes lieux importants
const globeLabels = [
  // VILLES
  { lat: 48.8566, lng: 2.3522,   name: 'Paris',        type: 'city' },
  { lat: 43.6119, lng: 3.8772,   name: 'Montpellier',  type: 'city' },
  { lat: 40.4168, lng: -3.7038,  name: 'Madrid',       type: 'city' },
  { lat: 37.3891, lng: -5.9845,  name: 'Seville',      type: 'city' },
  { lat: -0.1807, lng: -78.4678, name: 'Quito',        type: 'city' },

  // PAYS (positionnés grossièrement au centre)
  { lat: 46.7,  lng: 2.5,    name: 'France',   type: 'country' },
  { lat: 40.0,  lng: -4.0,   name: 'Espagne',  type: 'country' },
  { lat: -1.5,  lng: -78.0,  name: 'Equateur', type: 'country' }
];
world
  .labelsData(globeLabels)
  .labelLat(d => d.lat)
  .labelLng(d => d.lng)
  .labelText(d => d.name)
  .labelSize(d => d.type === 'country' ? 0.9 : 0.7)   // pays un peu plus gros que villes
  .labelColor(d => d.type === 'country' ? '#0f172a' : '#e11d48') // pays sombre, villes rose
  .labelAltitude(d => d.type === 'country' ? 0.06 : 0.045)
  .labelResolution(3)
  .labelDotRadius(0.22);  // petit point sous chaque label

        // Frontières des pays + clic pour faire apparaître un pays
        let selectedCountryName = null;

        // Petits textes pour les pays qui comptent dans votre histoire
        const countryTexts = {
            'France': "France · Là où a vu naître le petit Pierre.",
            'Spain': "Espagne · Madrid, Sevilla... une bonne partie de votre histoire s'écrit ici.",
            'Ecuador': "Équateur · Là où tout a commencé, à Quito.",
            'Portugal': "Portugal · L'Algarve, où la demande en mariage a eu lieu."
        };

        function getCapColor(feat) {
            return feat.properties.name === selectedCountryName
                ? '#c9a46c'
                : 'rgba(255, 255, 255, 0.04)';
        }

        function getAltitude(feat) {
            return feat.properties.name === selectedCountryName ? 0.02 : 0.006;
        }

        // Calcule un centre approximatif du pays pour recentrer la caméra dessus
        function getPolygonCentroid(geometry) {
            let ring;
            if (geometry.type === 'Polygon') {
                ring = geometry.coordinates[0];
            } else {
                // MultiPolygon : on prend le plus grand anneau (l'île/zone principale)
                ring = geometry.coordinates.reduce((biggest, poly) =>
                    poly[0].length > biggest.length ? poly[0] : biggest
                , geometry.coordinates[0][0]);
            }
            const total = ring.reduce((acc, [lng, lat]) => {
                acc.lng += lng;
                acc.lat += lat;
                return acc;
            }, { lng: 0, lat: 0 });
            return { lat: total.lat / ring.length, lng: total.lng / ring.length };
        }

        function showCountryInfo(name) {
            if (!cityInfoBox) return;
            const text = countryTexts[name] || `${name} · Cliquez sur un autre pays pour l'explorer.`;
            cityInfoBox.innerHTML = `
                <h3>${name}</h3>
                <p>${text}</p>
            `;
        }

fetch('//unpkg.com/world-atlas@2/countries-110m.json')
  .then(res => res.json())
  .then(worldData => {
    const countries = topojson.feature(worldData, worldData.objects.countries).features;

    world
      .polygonsData(countries)
      .polygonCapColor(getCapColor)
      .polygonSideColor(() => 'rgba(0, 0, 0, 0.4)')
      .polygonStrokeColor(() => 'rgba(255, 255, 255, 0.35)')  // contour discret
      .polygonLabel(({ properties: d }) => d.name)        // tooltip au survol (optionnel)
      .polygonAltitude(getAltitude)
      .polygonsTransitionDuration(300)
      .onPolygonClick(polygon => {
          selectedCountryName = polygon.properties.name;

          world
              .polygonCapColor(getCapColor)
              .polygonAltitude(getAltitude);

          const centroid = getPolygonCentroid(polygon.geometry);
          world.pointOfView({ lat: centroid.lat, lng: centroid.lng, altitude: 1.3 }, 1000);

          showCountryInfo(selectedCountryName);

          // Si on a une carte détaillée pour ce pays (ex: Équateur), on l'ouvre
          openCountryModal(selectedCountryName);
      });

    hideGlobeLoader();
  });

    // === Forcer un globe parfaitement centré et carré dans le cercle ===
    function resizeGlobe() {
        // on prend la largeur du conteneur rond
        const size = globeContainer.offsetWidth || 460;
        world.width(size);
        world.height(size);
    }

    resizeGlobe();
    window.addEventListener('resize', resizeGlobe);

    // Vue de départ (on voit Europe + Amérique du Sud)
    world.pointOfView({ lat: 15, lng: -20, altitude: 1.3 }, 1200);

    // Limiter le zoom : on ne peut pas dézoomer plus que la vue de départ
const controls = world.controls();

setTimeout(() => {
  const cam = world.camera();
  const baseDistance = cam.position.length(); // distance actuelle caméra-globe

  controls.maxDistance = baseDistance;        // 🚫 pas plus "loin" que ça
  controls.minDistance = baseDistance * 0.55; // ✅ on peut zoomer ~2x plus près
  controls.enableZoom = true;
  // optionnel : éviter de décaler le globe à l'écran
  // controls.enablePan = false;
}, 1300); // un peu plus que la durée de ton pointOfView (1200 ms)


    // Animation de rotation douce (désactivée si l'utilisateur préfère moins d'animations)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
        world.controls().autoRotate = true;
        world.controls().autoRotateSpeed = 0.55;
    }

    function showCityInfo(city) {
        if (!cityInfoBox) return;
        cityInfoBox.innerHTML = `
            <h3>${city.name}</h3>
            <p>${city.text}</p>
        `;
    }

    // Clic sur un point = affiche le texte
    world.onPointClick(showCityInfo);

    // Optionnel : click sur le panneau pour passer à la ville suivante
    let currentIndex = 0;
    if (cityInfoBox) {
        cityInfoBox.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % cities.length;
            const city = cities[currentIndex];
            showCityInfo(city);
            world.pointOfView(
                { lat: city.lat, lng: city.lng, altitude: 1.9 },
                1000
            );
        });
    }
});


/* ============================================================
   Afficher le globe UNIQUEMENT quand la section #home est active
   ============================================================ */
function toggleMapOnHome() {
    const home = document.getElementById('home');
    const map = document.getElementById('map-journey');
    if (!home || !map) return;

    if (home.classList.contains('active')) {
        map.style.display = 'block';
    } else {
        map.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', toggleMapOnHome);
