/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/*                                                                  Scripts para el Proyecto Flappy Bird                                                                     */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/* Autor: Magallanes López Carlos Gabriel                                                                                                                                    */
/* Versión del Proyecto: 1.0                                                                                                                                                 */
/* Correo: cgmagallanes23@gmail.com                                                                                                                                          */
/* Ultima Modificación: 25/03/2025                                                                                                                                           */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/

// Efecto Fade In al hacer Scroll
const observer = new IntersectionObserver((entries) => {                                           // Instanciar Observador Intersección, Detección Elementos en Viewport 
    entries.forEach(entry => {                                                                     // Para Cada Elemento Detectado en el Viewport
        if (entry.isIntersecting){                                                                 // Si esta en Viewport
            entry.target.classList.add('visible');                                                 // Agregar Clase 'visible' para Efecto Fade In
            observer.unobserve(entry.target);                                                      // Dejar de Observar el Elemento para Mejorar Rendimiento
        }                         
    });
}, {threshold: 0.1});                                                                              // Configuración del Observador: Activar cuando el 10% del Elemento sea Visible

// Observar Elementos de la Clase 'Fade-In' para Activar Efecto al Entrar en el Viewport
const fadeInElements = document.querySelectorAll('.fade-in');                                      // Seleccionar Todos los Elementos con Clase 'fade-in' 
fadeInElements.forEach(element => observer.observe(element));                                      // Observar Cada Elemento para Activar Efecto Fade In al Entrar en el Viewport                         

/*****************************************************************************************************************************************************************************/