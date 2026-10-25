/* ============================================================
   Traductions ES / FR
   ----------------------------------------------------------------
   Objet `translations` centralisant tous les textes UI et les
   descriptions des 17 POI du globe. Mis à jour automatiquement
   par `applyI18n(lang)` à chaque changement de langue.
   ============================================================ */
const translations = {
    fr: {
        // Navigation
        navHome: "Accueil",
        navStory: "Notre histoire",
        navDates: "Les dates",
        navInfos: "Infos pratiques",
        navRsvp: "RSVP",

        // Hero
        heroTitle: "Nous nous marions !",
        heroDate: "14 août 2027",
        heroCta: "RSVP - Confirmer ma présence",

        // Compte à rebours
        cdDays: "jours",
        cdHours: "heures",
        cdMinutes: "min",
        cdSeconds: "sec",

        // Map / Globe
        mapTitle: "Notre map monde",
        mapHint: "Glisse pour explorer · Ecuador · Lat 0°",
        mapLoading: "Chargement du globe…",
        mapUnavailable: "Globe indisponible — la bibliothèque 3D n'a pas pu être chargée.",
        mapClickCity: "Clique sur une ville",
        mapSelectPrompt: "Clique sur une ville",
        mapInfoTitle: "Clique sur une ville",
        mapInfoBody: "Sélectionne un marqueur sur le globe pour en savoir plus.",

        // Story
        storyTitle: "Notre histoire",
        storyIntro: "Quelques moments importants qui ont façonné notre histoire d'amour, entre l'Équateur, l'Espagne, le Portugal… et Toffee-Topito.",
        storyItem1Title: "Notre rencontre",
        storyItem1Text: "Tout commence à Quito. Deux vies, deux pays, une rencontre qui change tout.",
        storyItem1Fig: "Quito · Nos premiers souvenirs ensemble",
        storyItem2Title: "Madrid, une nouvelle étape",
        storyItem2Text: "Madrid devient un de nos points de repère, entre rires, balades et projets qui se dessinent.",
        storyItem2Fig: "Madrid · Terrasses, balades et projets à deux",
        storyItem3Title: "Rencontre des familles",
        storyItem3Text: "La rencontre avec la famille de Nathalya.",
        storyItem3Fig: "Équateur · La famille réunie autour de nous",
        storyItem4Title: "Séville, ville de lumière",
        storyItem4Text: "Séville et l'Andalousie nous voilà ! Une nouvelle aventure commence.",
        storyItem4Fig: "Séville · Entre flamenco, soleil et complicité",
        storyItem5Title: "Adoption de Toffee-Topito",
        storyItem5Text: "La famille s'agrandit avec Toffee-Topito.",
        storyItem5Fig: "Toffee-Topito · La famille s'agrandit",
        storyItem6Title: "La demande en mariage",
        storyItem6Text: "Au bord de l'océan, en Algarve, la question est posée… et la réponse est oui.",
        storyItem6Fig: "Algarve · Le « oui » qui change une vie",
        storyItem7Title: "Le grand jour",
        storyItem7Text: "Et enfin, nous nous marions. On a hâte de célébrer ça avec vous !",

        // Dates
        datesTitle: "La date importante",
        datesCeremony: "Cérémonie — 14 août 2027",

        // Infos pratiques
        infosTitle: "Infos pratiques",
        infosDressTitle: "👗 Dress code",
        infosDress: "Tenue chic et estivale. Pensez au sable si la cérémonie a lieu en extérieur !",
        infosTransportTitle: "🚗 Transport",
        infosTransport: "Détails sur les options de transport à venir. Un covoiturage sera organisé si besoin.",
        infosHotelTitle: "🏨 Hébergement",
        infosHotel: "Une liste d'hôtels et logements recommandés sera communiquée prochainement.",
        infosGiftTitle: "🎁 Cadeaux",
        infosGift: "Votre présence est le plus beau des cadeaux. Une cagnotte sera toutefois disponible si vous le souhaitez.",

        // RSVP
        rsvpTitle: "Confirmez votre présence",
        rsvpName: "Nom et prénom",
        rsvpNamePh: "Votre nom complet",
        rsvpEmail: "Email",
        rsvpEmailPh: "vous@example.com",
        rsvpGuests: "Nombre de personnes",
        rsvpAllergies: "Allergies",
        rsvpAllergiesPh: "Aucune",
        rsvpAddress: "Mon adresse",
        rsvpAddressPh: "Votre adresse postale",
        rsvpSubmit: "Envoyer",
        rsvpSuccess: "Merci ! Votre réponse a bien été envoyée. 💌",
        rsvpError: "Oups, l'envoi a échoué. Vous pouvez aussi nous écrire directement.",

        // Footer
        footerHashtag: "#NathalyaEtPierre2027",
        footerContact: "Une question ? Écrivez-nous : ",
        footerNote: "Avec amour, Nathalya & Pierre",

        // Modale pays
        countryCloseAria: "Fermer",
        countryTitleEcuador: "Équateur · à visiter",
        countrySubtitleEcuador: "Quelques lieux qui ont compté dans notre histoire, et d'autres à découvrir.",

        // 17 POI Équateur (noms + descriptions)
        poi_quito_name: "Quito · Centre historique",
        poi_quito_desc: "Capitale de l'Équateur, fondée au XVIᵉ siècle, son centre colonial est classé UNESCO. C'est ici que tout a commencé pour nous.",
        poi_mitad_name: "Mitad del Mundo",
        poi_mitad_desc: "Le monument de la Mitad del Mundo marque la ligne de l'équateur, à 28 km au nord de Quito. Latitude 0°0'0\".",
        poi_galapagos_name: "Îles Galápagos",
        poi_galapagos_desc: "Archipel volcanique, faune endémique unique au monde (tortues géantes, iguanes, frégates).",
        poi_cotopaxi_name: "Cotopaxi",
        poi_cotopaxi_desc: "Volcan actif (5 897 m) culminant dans la Cordillère des Andes, randonnée et refuge.",
        poi_otavalo_name: "Otavalo",
        poi_otavalo_desc: "Célèbre pour son marché artisanal andin, l'un des plus colorés d'Amérique du Sud.",
        poi_cuenca_name: "Cuenca",
        poi_cuenca_desc: "Ville coloniale du sud, son centre historique est inscrit au patrimoine mondial de l'UNESCO.",
        poi_podocarpus_name: "Parc national Podocarpus",
        poi_podocarpus_desc: "Forêt nuageuse andine près de Loja, riche en biodiversité et cascades.",
        poi_tena_name: "Tena · Amazonie",
        poi_tena_desc: "Porte d'entrée de l'Amazonie équatorienne, rivières, communautés Kichwa et lodges.",
        poi_yasuni_name: "Yasuní",
        poi_yasuni_desc: "Réserve de biosphère UNESCO, l'une des zones les plus biodiversifiées de la planète.",
        poi_montanita_name: "Montañita",
        poi_montanita_desc: "Village balnéaire célèbre pour ses vagues et son ambiance bohème.",
        poi_banos_name: "Baños de Agua Santa",
        poi_banos_desc: "Au pied du Tungurahua, cascades, sports d'aventure et sources thermales.",
        poi_quilotoa_name: "Quilotoa",
        poi_quilotoa_desc: "Cratère d'un volcan éteint avec un lac turquoise, randonnée emblématique.",
        poi_mindo_name: "Mindo",
        poi_mindo_desc: "Forêt nuageuse, observation de colibris (300+ espèces), papillons et cascades.",
        poi_guayaquil_name: "Guayaquil",
        poi_guayaquil_desc: "Plus grande ville du pays, port sur le fleuve Guayas, malecón et animation.",
        poi_chimborazo_name: "Chimborazo",
        poi_chimborazo_desc: "Plus haut volcan d'Équateur (6 263 m), point le plus éloigné du centre de la Terre.",
        poi_vilcabamba_name: "Vilcabamba",
        poi_vilcabamba_desc: "Vallée andine surnommée la « vallée de l'éternité » pour sa longévité.",
        poi_lopez_name: "Puerto López",
        poi_lopez_desc: "Côte pacifique, point de départ pour l'île de la Plata et observation des baleines."
    },
    es: {
        navHome: "Inicio",
        navStory: "Nuestra historia",
        navDates: "Fechas importantes",
        navInfos: "Información práctica",
        navRsvp: "RSVP",

        heroTitle: "¡Nos casamos!",
        heroDate: "14 agosto 2027",
        heroCta: "RSVP - Confirmar asistencia",

        cdDays: "días",
        cdHours: "horas",
        cdMinutes: "min",
        cdSeconds: "seg",

        mapTitle: "Nuestro mapa del mundo",
        mapHint: "Arrastra para explorar · Ecuador · Lat 0°",
        mapLoading: "Cargando el globo…",
        mapUnavailable: "Globo no disponible — no se pudo cargar la biblioteca 3D.",
        mapClickCity: "Haz clic en una ciudad",
        mapSelectPrompt: "Haz clic en una ciudad",
        mapInfoTitle: "Haz clic en una ciudad",
        mapInfoBody: "Selecciona un marcador en el globo para saber más.",

        storyTitle: "Nuestra historia",
        storyIntro: "Algunos momentos importantes que marcaron nuestra historia de amor, entre Ecuador, España, Portugal… y Toffee-Topito.",
        storyItem1Title: "Nuestro encuentro",
        storyItem1Text: "Todo empieza en Quito. Dos vidas, dos países, un encuentro que lo cambia todo.",
        storyItem1Fig: "Quito · Nuestros primeros recuerdos juntos",
        storyItem2Title: "Madrid, una nueva etapa",
        storyItem2Text: "Madrid se convierte en uno de nuestros puntos de referencia, entre risas, paseos y proyectos que van tomando forma.",
        storyItem2Fig: "Madrid · Terrazas, paseos y proyectos en pareja",
        storyItem3Title: "Encuentro de las familias",
        storyItem3Text: "El encuentro con la familia de Nathalya.",
        storyItem3Fig: "Ecuador · La familia reunida a nuestro alrededor",
        storyItem4Title: "Sevilla, ciudad de luz",
        storyItem4Text: "¡Sevilla y Andalucía, aquí estamos! Comienza una nueva aventura.",
        storyItem4Fig: "Sevilla · Entre flamenco, sol y complicidad",
        storyItem5Title: "Adopción de Toffee-Topito",
        storyItem5Text: "La familia crece con Toffee-Topito.",
        storyItem5Fig: "Toffee-Topito · La familia crece",
        storyItem6Title: "La pedida de mano",
        storyItem6Text: "A orillas del océano, en el Algarve, se hace la pregunta… y la respuesta es sí.",
        storyItem6Fig: "Algarve · El «sí» que cambia una vida",
        storyItem7Title: "El gran día",
        storyItem7Text: "Y por fin, nos casamos. ¡Estamos deseando celebrarlo con vosotros!",

        datesTitle: "Fecha importante",
        datesCeremony: "Ceremonia — 14 agosto 2027",

        infosTitle: "Información práctica",
        infosDressTitle: "👗 Código de vestimenta",
        infosDress: "Vestimenta elegante y de verano. ¡Pensad en la arena si la ceremonia es al aire libre!",
        infosTransportTitle: "🚗 Transporte",
        infosTransport: "Más información sobre el transporte próximamente. Se organizará un coche compartido si es necesario.",
        infosHotelTitle: "🏨 Alojamiento",
        infosHotel: "Próximamente compartiremos una lista de hoteles y alojamientos recomendados.",
        infosGiftTitle: "🎁 Regalos",
        infosGift: "Vuestra presencia es el mejor regalo. Aun así, habrá disponible una lista de regalos si lo deseáis.",

        rsvpTitle: "Confirma tu asistencia",
        rsvpName: "Nombre y apellido",
        rsvpNamePh: "Tu nombre completo",
        rsvpEmail: "Correo electrónico",
        rsvpEmailPh: "tu@ejemplo.com",
        rsvpGuests: "Número de personas",
        rsvpAllergies: "Alergias",
        rsvpAllergiesPh: "Ninguna",
        rsvpAddress: "Mi dirección",
        rsvpAddressPh: "Tu dirección postal",
        rsvpSubmit: "Enviar",
        rsvpSuccess: "¡Gracias! Tu respuesta se ha enviado correctamente. 💌",
        rsvpError: "¡Ups! El envío falló. También puedes escribirnos directamente.",

        footerHashtag: "#NathalyaEtPierre2027",
        footerContact: "¿Alguna pregunta? Escríbenos: ",
        footerNote: "Con amor, Nathalya & Pierre",

        countryCloseAria: "Cerrar",
        countryTitleEcuador: "Ecuador · lugares por visitar",
        countrySubtitleEcuador: "Algunos lugares importantes en nuestra historia, y otros por descubrir.",

        poi_quito_name: "Quito · Centro histórico",
        poi_quito_desc: "Capital de Ecuador, fundada en el siglo XVI, con centro colonial declarado Patrimonio UNESCO. Aquí empezó todo para nosotros.",
        poi_mitad_name: "Mitad del Mundo",
        poi_mitad_desc: "El monumento de la Mitad del Mundo marca la línea del ecuador, a 28 km al norte de Quito. Latitud 0°0'0\".",
        poi_galapagos_name: "Islas Galápagos",
        poi_galapagos_desc: "Archipiélago volcánico con fauna endémica única (tortugas gigantes, iguanas, fragatas).",
        poi_cotopaxi_name: "Cotopaxi",
        poi_cotopaxi_desc: "Volcán activo (5 897 m) en la Cordillera de los Andes, refugio y senderismo.",
        poi_otavalo_name: "Otavalo",
        poi_otavalo_desc: "Famosa por su mercado artesanal andino, uno de los más coloridos de Sudamérica.",
        poi_cuenca_name: "Cuenca",
        poi_cuenca_desc: "Ciudad colonial del sur, su centro histórico es Patrimonio Mundial UNESCO.",
        poi_podocarpus_name: "Parque nacional Podocarpus",
        poi_podocarpus_desc: "Bosque nuboso andino cerca de Loja, rico en biodiversidad y cascadas.",
        poi_tena_name: "Tena · Amazonía",
        poi_tena_desc: "Puerta de entrada a la Amazonía ecuatoriana, ríos, comunidades Kichwa y lodges.",
        poi_yasuni_name: "Yasuní",
        poi_yasuni_desc: "Reserva de biósfera UNESCO, una de las zonas más biodiversas del planeta.",
        poi_montanita_name: "Montañita",
        poi_montanita_desc: "Pueblo costero célebre por sus olas y su ambiente bohemio.",
        poi_banos_name: "Baños de Agua Santa",
        poi_banos_desc: "Al pie del Tungurahua: cascadas, deportes de aventura y aguas termales.",
        poi_quilotoa_name: "Quilotoa",
        poi_quilotoa_desc: "Cráter de un volcán apagado con lago turquesa, senderismo emblemático.",
        poi_mindo_name: "Mindo",
        poi_mindo_desc: "Bosque nuboso, observación de colibríes (300+ especies), mariposas y cascadas.",
        poi_guayaquil_name: "Guayaquil",
        poi_guayaquil_desc: "Ciudad más grande del país, puerto sobre el río Guayas, malecón y animación.",
        poi_chimborazo_name: "Chimborazo",
        poi_chimborazo_desc: "Volcán más alto de Ecuador (6 263 m), punto más lejano del centro de la Tierra.",
        poi_vilcabamba_name: "Vilcabamba",
        poi_vilcabamba_desc: "Valle andino apodado el «valle de la eterna juventud» por su longevidad.",
        poi_lopez_name: "Puerto López",
        poi_lopez_desc: "Costa pacífica, punto de partida a la Isla de la Plata y avistamiento de ballenas."
    }
};


/* ============================================================
   Données des 17 POI de l'Équateur (focus équateur)
   ----------------------------------------------------------------
   lat / lng en degrés décimaux. Le focus de caméra est centré
   sur la ligne équatoriale pour mettre l'Équateur en valeur.
   ============================================================ */
const POI_LANG_KEYS = {
    quito:     { name: "poi_quito_name",     desc: "poi_quito_desc" },
    mitad:     { name: "poi_mitad_name",     desc: "poi_mitad_desc" },
    galapagos: { name: "poi_galapagos_name", desc: "poi_galapagos_desc" },
    cotopaxi:  { name: "poi_cotopaxi_name",  desc: "poi_cotopaxi_desc" },
    otavalo:   { name: "poi_otavalo_name",   desc: "poi_otavalo_desc" },
    cuenca:    { name: "poi_cuenca_name",    desc: "poi_cuenca_desc" },
    podocarpus:{ name: "poi_podocarpus_name",desc: "poi_podocarpus_desc" },
    tena:      { name: "poi_tena_name",      desc: "poi_tena_desc" },
    yasuni:    { name: "poi_yasuni_name",    desc: "poi_yasuni_desc" },
    montanita: { name: "poi_montanita_name", desc: "poi_montanita_desc" },
    banos:     { name: "poi_banos_name",     desc: "poi_banos_desc" },
    quilotoa:  { name: "poi_quilotoa_name",  desc: "poi_quilotoa_desc" },
    mindo:     { name: "poi_mindo_name",     desc: "poi_mindo_desc" },
    guayaquil: { name: "poi_guayaquil_name", desc: "poi_guayaquil_desc" },
    chimborazo:{ name: "poi_chimborazo_name",desc: "poi_chimborazo_desc" },
    vilcabamba:{ name: "poi_vilcabamba_name",desc: "poi_vilcabamba_desc" },
    lopez:     { name: "poi_lopez_name",     desc: "poi_lopez_desc" }
};

const POIS = [
    { id: "quito",     lat: -0.1807, lng: -78.4678 },
    { id: "mitad",     lat:  0.0022, lng: -78.4559 },
    { id: "galapagos", lat: -0.7893, lng: -91.0824 },
    { id: "cotopaxi",  lat: -0.6817, lng: -78.4378 },
    { id: "otavalo",   lat:  0.2345, lng: -78.2616 },
    { id: "cuenca",    lat: -2.9001, lng: -79.0059 },
    { id: "podocarpus",lat: -4.1067, lng: -79.1186 },
    { id: "tena",      lat: -0.9930, lng: -77.8129 },
    { id: "yasuni",    lat: -1.0667, lng: -75.9667 },
    { id: "montanita", lat: -1.8265, lng: -80.7540 },
    { id: "banos",     lat: -1.3958, lng: -78.4247 },
    { id: "quilotoa",  lat: -0.8636, lng: -78.8986 },
    { id: "mindo",     lat:  0.0500, lng: -78.7667 },
    { id: "guayaquil", lat: -2.1709, lng: -79.9224 },
    { id: "chimborazo",lat: -1.4692, lng: -78.8175 },
    { id: "vilcabamba",lat: -4.2586, lng: -79.2236 },
    { id: "lopez",     lat: -1.5547, lng: -80.8536 }
];


/* ============================================================
   Changement d'onglet
   ============================================================ */
function showTab(id) {
    const homeSection = document.getElementById('home');
    if (homeSection) homeSection.classList.remove('active');

    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active", "visible-tab");
    });

    const current = document.getElementById(id);
    if (current) {
        current.classList.add("active");
        requestAnimationFrame(() => {
            requestAnimationFrame(() => current.classList.add("visible-tab"));
        });
    }

    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle("active", link.dataset.tab === id);
    });

    window.scrollTo(0, 0);
    toggleMapOnHome();
}


/* ============================================================
   Bilinguisme FR / ES — utilise `translations` et data-i18n
   ----------------------------------------------------------------
   Compatibilité :
     - data-fr / data-es (ancien format)
     - data-i18n            (texte)
     - data-i18n-placeholder (placeholder d'input)
     - data-i18n-aria-label  (attribut aria-label)
   ============================================================ */
function getCurrentLang() {
    const stored = (() => {
        try { return localStorage.getItem("siteLang"); } catch (e) { return null; }
    })();
    if (stored === "fr" || stored === "es") return stored;
    return "es"; // défaut : espagnol
}

function applyI18n(lang) {
    const dict = translations[lang] || translations.es;

    // 1. Attributs data-i18n (texte)
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] != null) el.textContent = dict[key];
    });

    // 2. data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });

    // 3. data-i18n-aria-label
    document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
        const key = el.getAttribute("data-i18n-aria-label");
        if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });

    // 4. Compatibilité avec data-fr / data-es existants
    document.querySelectorAll("[data-fr]").forEach(el => {
        const value = el.dataset[lang];
        if (value) el.textContent = value;
    });
    document.querySelectorAll("option[data-fr]").forEach(opt => {
        const value = opt.dataset[lang];
        if (value) opt.textContent = value;
    });

    // 5. État visuel des boutons langue
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // 6. <html lang>
    document.documentElement.setAttribute("lang", lang);

    // 7. Mémorisation
    try { localStorage.setItem("siteLang", lang); } catch (e) {}

    // 8. Re-rendu des contenus dynamiques
    renderGlobeTooltip();
    renderCityInfo();
}

function setLang(lang) {
    applyI18n(lang);
}


/* ============================================================
   Animation au scroll (sections + frise chronologique)
   ============================================================ */
function revealOnScroll() {
    document.querySelectorAll(".reveal").forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) section.classList.add("visible");
    });
}

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
    let saved = getCurrentLang();
    // préférence navigateur si rien n'est sauvegardé
    if (!saved) {
        const navLang = (navigator.language || "es").toLowerCase();
        saved = navLang.startsWith("fr") ? "fr" : "es";
    }
    applyI18n(saved);
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
            daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = "0";
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
                } else { throw new Error('Erreur envoi formulaire'); }
            })
            .catch(() => sendViaMailto(formData))
            .finally(() => { if (submitBtn) submitBtn.disabled = false; });
    });

    function sendViaMailto(formData) {
        const emailTo = "pierre3604@gmail.com";
        const nom = (formData.get('nom') || '').trim();
        const email = (formData.get('email') || '').trim();
        const personnes = (formData.get('personnes') || '').trim();
        const allergies = (formData.get('allergies') || '').trim();
        const adresse = (formData.get('adresse') || '').trim();
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
   Modale pays (Leaflet)
   ============================================================ */
const countryPOIs = {
    'Ecuador': {
        center: [-1.4, -78.5],
        zoom: 6,
        titleFrKey: 'countryTitleEcuador',
        subtitleFrKey: 'countrySubtitleEcuador',
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
    if (!data || typeof L === 'undefined') return;
    const modal = document.getElementById('countryModal');
    const title = document.getElementById('countryModalTitle');
    const subtitle = document.getElementById('countryModalSubtitle');
    if (!modal || !title || !subtitle) return;

    const lang = document.documentElement.getAttribute('lang') === 'fr' ? 'fr' : 'es';
    const dict = translations[lang] || translations.es;
    title.textContent = dict[data.titleFrKey] || data.titleFrKey;
    subtitle.textContent = dict[data.subtitleFrKey] || data.subtitleFrKey;

    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
        if (!countryDetailMap) {
            countryDetailMap = L.map('countryDetailMap');
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
                maxZoom: 18
            }).addTo(countryDetailMap);
        }
        countryDetailMap.setView(data.center, data.zoom);
        countryDetailMap.eachLayer(layer => {
            if (layer instanceof L.Marker) countryDetailMap.removeLayer(layer);
        });
        data.places.forEach(place => {
            L.marker([place.lat, place.lng])
                .addTo(countryDetailMap)
                .bindPopup(`<strong>${place.name}</strong><br>${place.desc}`);
        });
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
   Affichage du globe quand la section #home est active
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


/* ============================================================
   Globe Three.js (r128) — focus équateur
   ----------------------------------------------------------------
   Sphère en rotation automatique (pause pendant interaction,
   reprise après ~2,5 s). 17 POI cliquables / survolables.
   Raycaster pour la sélection. Fallback si THREE indisponible.
   ============================================================ */
(function initGlobe() {
    const container = document.getElementById('globe-container');
    const loader = document.getElementById('globeLoader');
    if (!container) return;

    // Si Three.js n'est pas chargé (CDN bloqué, etc.) — message de secours.
    if (typeof THREE === 'undefined') {
        if (loader) loader.classList.add('hidden');
        const lang = (translations[document.documentElement.getAttribute('lang') || 'es']) || translations.es;
        const fb = document.createElement('div');
        fb.className = 'globe-fallback';
        fb.setAttribute('role', 'status');
        fb.textContent = lang.mapUnavailable || translations.es.mapUnavailable;
        container.appendChild(fb);
        return;
    }

    // 1. Scene / camera / renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 460;
    const height = container.clientHeight || 460;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.domElement.classList.add('globe-canvas');
    container.appendChild(renderer.domElement);

    // 2. Sphère (le globe)
    const RADIUS = 2;
    const geometry = new THREE.SphereGeometry(RADIUS, 64, 64);
    const textureLoader = new THREE.TextureLoader();

    // Couleur de base (bleu nuit si texture absente).
    const material = new THREE.MeshPhongMaterial({
        color: 0x1f4f7a,
        emissive: 0x0b1d33,
        shininess: 12,
        specular: 0x223344
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Halo lumineux (atmosphère)
    const haloGeom = new THREE.SphereGeometry(RADIUS * 1.04, 64, 64);
    const haloMat = new THREE.MeshBasicMaterial({
        color: 0x6cb3d4,
        transparent: true,
        opacity: 0.10,
        side: THREE.BackSide
    });
    scene.add(new THREE.Mesh(haloGeom, haloMat));

    // 3. Lumières
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.85);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    // 4. POI : conversion lat/lng -> position sur la sphère
    //     (lat 0 → équateur visible ; on incline le groupe POI pour
    //     centrer l'Équateur face caméra).
    const poiGroup = new THREE.Group();
    scene.add(poiGroup);

    function latLngToVector3(lat, lng, r) {
        const phi = (90 - lat) * Math.PI / 180;
        const theta = (lng + 180) * Math.PI / 180;
        return new THREE.Vector3(
            -r * Math.sin(phi) * Math.cos(theta),
             r * Math.cos(phi),
             r * Math.sin(phi) * Math.sin(theta)
        );
    }

    const poiMeshes = [];

    POIS.forEach(poi => {
        const pos = latLngToVector3(poi.lat, poi.lng, RADIUS * 1.005);

        const dotMat = new THREE.MeshBasicMaterial({ color: 0xf6c89f });
        const dot = new THREE.Mesh(new THREE.SphereGeometry(0.025, 12, 12), dotMat);
        dot.position.copy(pos);
        dot.userData = { poiId: poi.id };
        poiGroup.add(dot);
        poiMeshes.push(dot);

        // Anneau discret (RingGeometry orienté vers l'extérieur)
        const ringGeom = new THREE.RingGeometry(0.045, 0.06, 24);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0xffffff, transparent: true, opacity: 0.55, side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(ringGeom, ringMat);
        ring.position.copy(pos);
        ring.lookAt(pos.clone().multiplyScalar(2));
        ring.userData = { poiId: poi.id };
        poiGroup.add(ring);
    });

    // 5. Focus équateur : on incline le groupe POI pour mettre
    //    la ligne 0° face caméra, et on règle la rotation initiale.
    poiGroup.rotation.z = 0; // équateur = horizontal
    sphere.rotation.y = Math.PI * 0.85; // centrage approximatif Équateur

    // 6. Interaction : drag souris / tactile
    let isDragging = false;
    let lastX = 0, lastY = 0;
    let autoRotate = true;
    let autoRotateVelocity = 0.0012;
    let resumeTimer = null;
    const RESUME_DELAY = 2500;

    function pauseAutoRotate() {
        autoRotate = false;
        if (resumeTimer) { clearTimeout(resumeTimer); resumeTimer = null; }
    }
    function scheduleResumeAutoRotate() {
        if (resumeTimer) clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => { autoRotate = true; }, RESUME_DELAY);
    }

    function onPointerDown(e) {
        isDragging = true;
        renderer.domElement.classList.add('is-dragging');
        const p = pointerXY(e);
        lastX = p.x; lastY = p.y;
        pauseAutoRotate();
    }
    function onPointerMove(e) {
        if (!isDragging) return;
        const p = pointerXY(e);
        const dx = p.x - lastX;
        const dy = p.y - lastY;
        sphere.rotation.y += dx * 0.005;
        sphere.rotation.x += dy * 0.005;
        sphere.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, sphere.rotation.x));
        lastX = p.x; lastY = p.y;
    }
    function onPointerUp() {
        if (!isDragging) return;
        isDragging = false;
        renderer.domElement.classList.remove('is-dragging');
        scheduleResumeAutoRotate();
    }
    function pointerXY(e) {
        if (e.touches && e.touches.length) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        return { x: e.clientX, y: e.clientY };
    }

    renderer.domElement.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    renderer.domElement.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // 7. Raycaster : survol + clic
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let hoveredId = null;

    function setMouseFromEvent(e) {
        const rect = renderer.domElement.getBoundingClientRect();
        const p = pointerXY(e);
        mouse.x = ((p.x - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((p.y - rect.top) / rect.height) * 2 + 1;
    }

    function showTooltip(poiId) {
        const tip = document.getElementById('globe-tooltip');
        if (!tip) return;
        const lang = (document.documentElement.getAttribute('lang') === 'fr') ? 'fr' : 'es';
        const dict = translations[lang] || translations.es;
        const keys = POI_LANG_KEYS[poiId];
        if (!keys) return;
        tip.innerHTML =
            '<strong>' + (dict[keys.name] || poiId) + '</strong><br>' +
            '<span>' + (dict[keys.desc] || '') + '</span>';
        tip.classList.add('visible');
    }
    function hideTooltip() {
        const tip = document.getElementById('globe-tooltip');
        if (tip) tip.classList.remove('visible');
    }

    renderer.domElement.addEventListener('mousemove', (e) => {
        if (isDragging) { hideTooltip(); return; }
        setMouseFromEvent(e);
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(poiMeshes);
        if (hits.length) {
            const id = hits[0].object.userData.poiId;
            hoveredId = id;
            showTooltip(id);
            renderer.domElement.style.cursor = 'pointer';
        } else {
            hoveredId = null;
            hideTooltip();
            renderer.domElement.style.cursor = 'grab';
        }
    });

    renderer.domElement.addEventListener('click', (e) => {
        setMouseFromEvent(e);
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(poiMeshes);
        if (hits.length) {
            const id = hits[0].object.userData.poiId;
            pauseAutoRotate();
            scheduleResumeAutoRotate();
            selectPOI(id);
        }
    });

    function selectPOI(poiId) {
        const lang = (document.documentElement.getAttribute('lang') === 'fr') ? 'fr' : 'es';
        const dict = translations[lang] || translations.es;
        const keys = POI_LANG_KEYS[poiId];
        if (!keys) return;

        const infoEl = document.getElementById('city-info');
        if (!infoEl) return;

        const nameEl = infoEl.querySelector('[data-poi-name]') || (() => {
            const h = document.createElement('h3');
            h.setAttribute('data-poi-name', '');
            infoEl.insertBefore(h, infoEl.firstChild);
            return h;
        })();
        const descEl = infoEl.querySelector('[data-poi-desc]') || (() => {
            const p = document.createElement('p');
            p.setAttribute('data-poi-desc', '');
            infoEl.appendChild(p);
            return p;
        })();

        nameEl.textContent = dict[keys.name] || poiId;
        descEl.textContent = dict[keys.desc] || '';

        infoEl.classList.add('selected');
    }

    // 8. Resize
    window.addEventListener('resize', () => {
        const w = container.clientWidth || 460;
        const h = container.clientHeight || 460;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });

    // 9. Animation
    function animate() {
        requestAnimationFrame(animate);
        if (autoRotate && !isDragging) {
            sphere.rotation.y += autoRotateVelocity;
        }
        // Synchroniser le groupe POI avec la sphère (POI enfants de sphere)
        if (poiGroup.parent !== sphere) {
            sphere.add(poiGroup);
            poiGroup.position.set(0, 0, 0);
            poiGroup.rotation.set(0, 0, 0);
        }
        renderer.render(scene, camera);
    }

    // Ajout du hint discret sous le canvas
    const hint = document.createElement('div');
    hint.className = 'globe-hint';
    hint.setAttribute('data-i18n', 'mapHint');
    const initLang = (document.documentElement.getAttribute('lang') === 'fr') ? 'fr' : 'es';
    hint.textContent = (translations[initLang] || translations.es).mapHint;
    container.appendChild(hint);

    if (loader) loader.classList.add('hidden');
    animate();
})();

/* Re-rendu du tooltip / info selon la langue courante */
function renderGlobeTooltip() {
    const tip = document.getElementById('globe-tooltip');
    if (!tip) return;
    // Efface le tooltip pour éviter texte périmé
    tip.classList.remove('visible');
    // Met à jour le hint
    const hint = document.querySelector('.globe-hint');
    if (hint) {
        const lang = (document.documentElement.getAttribute('lang') === 'fr') ? 'fr' : 'es';
        const dict = translations[lang] || translations.es;
        hint.textContent = dict.mapHint || '';
    }
}
function renderCityInfo() {
    const infoEl = document.getElementById('city-info');
    if (!infoEl) return;
    const lang = (document.documentElement.getAttribute('lang') === 'fr') ? 'fr' : 'es';
    const dict = translations[lang] || translations.es;
    const titleEl = infoEl.querySelector('h3[data-poi-name]') || infoEl.querySelector('h3');
    const descEl = infoEl.querySelector('p[data-poi-desc]') || infoEl.querySelector('p');
    if (titleEl && !titleEl.dataset.poiName) titleEl.textContent = dict.mapInfoTitle;
    if (descEl && !descEl.dataset.poiDesc) descEl.textContent = dict.mapInfoBody;
}
