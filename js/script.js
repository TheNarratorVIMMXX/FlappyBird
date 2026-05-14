/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/*                                                                  Scripts para el Proyecto Flappy Bird                                                                     */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/* Autor: Magallanes López Carlos Gabriel                                                                                                                                    */
/* Versión del Proyecto: 1.0                                                                                                                                                 */
/* Correo: cgmagallanes23@gmail.com                                                                                                                                          */
/* Ultima Modificación: 13/05/2025                                                                                                                                           */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/

// i18n - Traducciones
const translations = {
    es: {
        // Nav
        navMech:            "MECÁNICAS",
        navScreens:         "CAPTURAS",
        navControls:        "CONTROLES",
        navDownload:        "DESCARGAR",
        // Hero
        heroT3:             "Python · Tkinter · Pygame",
        heroSub:            "Clon completo del clásico juego de móvil, desarrollado desde cero con Python. Física real, dificultad progresiva y efectos de sonido.",
        heroBtn1:           "▶ JUGAR AHORA",
        heroBtn2:           "📸 VER CAPTURAS",
        // Stats
        stat1Label:         "DISK SPACE",
        stat2Label:         "SPEED MAX",
        stat3Label:         "GAP PIPES",
        stat4Label:         "SPD / PIPE",
        // Mechanics
        mechTag:            "GAME MECHANICS",
        mechTitle:          "¿Cómo <span>Funciona</span>?",
        mech1Title:         "FÍSICA DEL PÁJARO",
        mech1Desc:          "Gravedad constante de 5px por frame. Al presionar ESPACIO el pájaro recibe un impulso de -50px hacia arriba.",
        mech2Title:         "TUBERÍAS INFINITAS",
        mech2Desc:          "Las tuberías se generan con alturas aleatorias al salir de la pantalla, creando un desafío infinito y siempre distinto.",
        mech3Title:         "DIFICULTAD PROGRESIVA",
        mech3Desc:          "Cada tubería superada aumenta la velocidad en 0.5px. La velocidad máxima es 20px por frame — imposible predecir.",
        mech4Title:         "COLISIONES PRECISAS",
        mech4Desc:          "Sistema de hitbox con bbox de canvas para detectar colisiones con tuberías, suelo y techo con máxima precisión.",
        mech5Title:         "AUDIO CON PYGAME",
        mech5Desc:          "4 efectos de sonido: swoosh al saltar, punto al pasar tubería, hit al colisionar y die al terminar la partida.",
        mech6Title:         "SPRITES CON PIL",
        mech6Desc:          "Los sprites se cargan con PIL/Pillow y se redimensionan dinámicamente. La tubería superior se genera rotando 180° la inferior.",
        // Screenshots
        screensTag:         "SCREENSHOTS",
        screensTitle:       "Así se <span>Ve el Juego</span>",
        sc1Name:            "Flappy Bird — Gameplay",
        sc1Label:           "▶ PARTIDA EN CURSO — Pájaro esquivando tuberías",
        sc2Name:            "Flappy Bird — Game Over",
        sc2Label:           "💀 GAME OVER — Puntuación final y botón reiniciar",
        // Controls
        controlsTag:        "CONTROLS",
        controlsTitle:      "<span>Controles</span> del Juego",
        thKey:              "TECLA / ACCIÓN",
        thFunc:             "FUNCIÓN",
        thDetail:           "DETALLE",
        ctrl1Func:          "Hacer saltar al pájaro",
        ctrl1Detail:        "Impulso de -50px · Suena swoosh.mp3",
        ctrl2Func:          "Reiniciar partida",
        ctrl2Detail:        "Botón naranja en pantalla Game Over",
        // Download
        dlTitle:            "DESCARGA EL JUEGO",
        dlSub:              "Sin instalar Python ni dependencias. Solo descarga el .exe y a jugar.",
        dlBtn:              "⬇ FlappyBird.exe",
        spec1:              "🪟 WINDOWS 10/11",
        spec2:              "📐 1000×600 FIX",
        spec3:              "💾 ~30 MB",
        spec4:              "🔊 CON AUDIO",
        spec5:              "⚡ SIN INSTALACIÓN",
        // Footer
        footerLeft:         "Clon en Python",
        footerCopy:         "© 2025 Carlos Gabriel Magallanes López",
        footerGh:           "GITHUB",
        footerContact:      "CONTACTO",
        // Lang Button
        langBtn:            "🌐 English"
    },
    en: {
        // Nav
        navMech:            "MECHANICS",
        navScreens:         "SCREENSHOTS",
        navControls:        "CONTROLS",
        navDownload:        "DOWNLOAD",
        // Hero
        heroT3:             "Python · Tkinter · Pygame",
        heroSub:            "Full clone of the classic mobile game, built from scratch with Python. Real physics, progressive difficulty and sound effects.",
        heroBtn1:           "▶ PLAY NOW",
        heroBtn2:           "📸 SEE SCREENSHOTS",
        // Stats
        stat1Label:         "DISK SPACE",
        stat2Label:         "SPEED MAX",
        stat3Label:         "GAP PIPES",
        stat4Label:         "SPD / PIPE",
        // Mechanics
        mechTag:            "GAME MECHANICS",
        mechTitle:          "How does it <span>Work</span>?",
        mech1Title:         "BIRD PHYSICS",
        mech1Desc:          "Constant gravity of 5px per frame. Pressing SPACE gives the bird an upward impulse of -50px.",
        mech2Title:         "INFINITE PIPES",
        mech2Desc:          "Pipes are generated with random heights as they exit the screen, creating an infinite and always different challenge.",
        mech3Title:         "PROGRESSIVE DIFFICULTY",
        mech3Desc:          "Every pipe passed increases speed by 0.5px. Max speed is 20px per frame — impossible to predict.",
        mech4Title:         "PRECISE COLLISIONS",
        mech4Desc:          "Hitbox system using canvas bbox to detect collisions with pipes, ground and ceiling with maximum precision.",
        mech5Title:         "AUDIO WITH PYGAME",
        mech5Desc:          "4 sound effects: swoosh on jump, point when passing a pipe, hit on collision and die when the game ends.",
        mech6Title:         "SPRITES WITH PIL",
        mech6Desc:          "Sprites are loaded with PIL/Pillow and resized dynamically. The top pipe is generated by rotating the bottom one 180°.",
        // Screenshots
        screensTag:         "SCREENSHOTS",
        screensTitle:       "See how the <span>Game Looks</span>",
        sc1Name:            "Flappy Bird — Gameplay",
        sc1Label:           "▶ GAME IN PROGRESS — Bird dodging pipes",
        sc2Name:            "Flappy Bird — Game Over",
        sc2Label:           "💀 GAME OVER — Final score and restart button",
        // Controls
        controlsTag:        "CONTROLS",
        controlsTitle:      "<span>Game</span> Controls",
        thKey:              "KEY / ACTION",
        thFunc:             "FUNCTION",
        thDetail:           "DETAIL",
        ctrl1Func:          "Make the bird jump",
        ctrl1Detail:        "-50px impulse · Plays swoosh.mp3",
        ctrl2Func:          "Restart game",
        ctrl2Detail:        "Orange button on Game Over screen",
        // Download
        dlTitle:            "DOWNLOAD THE GAME",
        dlSub:              "No Python or dependencies needed. Just download the .exe and play.",
        dlBtn:              "⬇ FlappyBird.exe",
        spec1:              "🪟 WINDOWS 10/11",
        spec2:              "📐 1000×600 FIX",
        spec3:              "💾 ~30 MB",
        spec4:              "🔊 WITH AUDIO",
        spec5:              "⚡ NO INSTALL",
        // Footer
        footerLeft:         "Python Clone",
        footerCopy:         "© 2025 Carlos Gabriel Magallanes López",
        footerGh:           "GITHUB",
        footerContact:      "CONTACT",
        // Lang Button
        langBtn:            "🌐 Español"
    }
};

// Detección y Aplicación de Idioma
function detectLanguage() {
    const saved = localStorage.getItem('lang');                                                  // Obtener el Lenguaje del Local Storage
    if (saved) return saved;                                                                     // Si se obtuvo el Lenguaje del Local Storage Retornar
    const browserLang = navigator.language || navigator.userLanguage;                            // Obtener el Lenguaje del Browser
    return browserLang.startsWith('es') ? 'es' : 'en';                                          // Español si es es-*, inglés para todo lo demás
}

// Aplicar Traducciones al DOM
function applyLanguage(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {                                     // Traducir Elementos con Texto Simple
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {                                // Traducir Elementos con HTML Interno
        const key = el.getAttribute('data-i18n-html');
        if (t[key]) el.innerHTML = t[key];
    });
    document.documentElement.setAttribute('lang', lang);                                         // Actualizar Atributo lang del HTML para Accesibilidad
    const btn = document.getElementById('langToggleBtn');
    if (btn) btn.textContent = t.langBtn;
    localStorage.setItem('lang', lang);                                                          // Guardar Idioma Seleccionado en localStorage
}

// Crear Botón Flotante de Cambio de Idioma
function createLangButton() {
    const btn = document.createElement('button');                                                // Crear el Elemento
    btn.id = 'langToggleBtn';                                                                    // ID para Aplicar Estilos desde CSS
    btn.addEventListener('click', () => {                                                        // Agregar Callback para el Botón
        const current = localStorage.getItem('lang') || detectLanguage();                        // Obtener Lenguaje Actual
        const next = current === 'es' ? 'en' : 'es';                                            // Alternar entre Español e Inglés
        applyLanguage(next);                                                                     // Aplicar el Lenguaje
    });
    document.body.appendChild(btn);                                                              // Agregar Botón al Documento
}

// Efecto Fade In al hacer Scroll
const observer = new IntersectionObserver((entries) => {                                         // Instanciar Observador Intersección, Detección Elementos en Viewport
    entries.forEach(entry => {                                                                   // Para Cada Elemento Detectado en el Viewport
        if (entry.isIntersecting) {                                                              // Si esta en Viewport
            entry.target.classList.add('visible');                                               // Agregar Clase 'visible' para Efecto Fade In
            observer.unobserve(entry.target);                                                    // Dejar de Observar el Elemento para Mejorar Rendimiento
        }
    });
}, { threshold: 0.1 });                                                                          // Activar cuando el 10% del Elemento sea Visible

const fadeInElements = document.querySelectorAll('.fade-in');                                    // Seleccionar Todos los Elementos con Clase 'fade-in'
fadeInElements.forEach(element => observer.observe(element));                                    // Observar Cada Elemento para Activar Efecto Fade In

// Inicialización
createLangButton();                                                                              // Creación del Botón del Lenguaje
applyLanguage(detectLanguage());                                                                 // Aplicación del Lenguaje

/*****************************************************************************************************************************************************************************/
