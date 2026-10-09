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
