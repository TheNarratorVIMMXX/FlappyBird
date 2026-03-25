# 🐦 Flappy Bird
Un clon completamente funcional de Flappy Bird desarrollado con los módulos Tkinter y Pygame (para audio) del lenguaje Python. Este proyecto demuestra conceptos avanzados de programación GUI, incluyendo manipulación de canvas, detección de colisiones, gestión de sprites y física de juego en tiempo real.

---

# 👨‍🎓 Información del Desarrollador

- **Estudiante:** Magallanes López Carlos Gabriel
- **Correo:** cgmagallanes23@gmail.com
- **Fecha de Desarrollo:** 8 de noviembre de 2025

---

# 🎮 Descripción del Juego
Esta es una recreación completa del popular juego móvil Flappy Bird, construida desde cero usando la librería Tkinter de Python para los gráficos y el mixer de Pygame para el audio.

### 🔹 Características del Juego

- Jugabilidad basada en física con gravedad y mecánicas de salto
- Dificultad progresiva: las tuberías se mueven más rápido conforme aumenta el puntaje
- Sistema de detección de colisiones para una jugabilidad realista
- Efectos de sonido para saltos, puntuación y fin de partida
- Generación dinámica de tuberías con alturas aleatorias
- Seguimiento y visualización del puntaje
- Pantalla de fin de partida con funcionalidad de reinicio

---

# 🎯 Mecánicas de Juego

### 🔹 Controles
- **Barra espaciadora:** Hacer saltar al pájaro
- **Botón Reiniciar:** Reiniciar el juego tras el fin de partida

### 🔹 Objetivo
Navegar al pájaro a través de los espacios entre las tuberías sin golpearlas ni tocar el suelo o el techo. Cada paso exitoso a través de una tubería aumenta tu puntaje.

### 🔹 Progresión de Dificultad
- **Velocidad inicial:** 10 píxeles por fotograma
- La velocidad aumenta 0.5 con cada tubería superada
- **Velocidad máxima:** 20 píxeles por fotograma
- El espacio entre tuberías se mantiene constante en 250 píxeles

---

# 🚀 Funcionalidades

### 🔹 ✨ Características Principales
- **Sistema de Gravedad:** Aceleración descendente realista (5 píxeles por fotograma)
- **Mecánica de Salto:** Impulso vertical de -50 píxeles al presionar la barra espaciadora
- **Desplazamiento Infinito:** Las tuberías se regeneran continuamente con alturas aleatorias
- **Detección de Colisiones:** Detección precisa de hitbox para colisiones pájaro-tubería y pájaro-límite
- **Dificultad Progresiva:** La velocidad aumenta con el puntaje

### 🔹 🎨 Elementos Visuales
- Sprites personalizados para el pájaro y las tuberías
- Animaciones fluidas a 50ms por fotograma
- Redimensionamiento dinámico de tuberías según posicionamiento aleatorio
- Visualización del puntaje en tiempo real
- Pantalla de fin de partida con puntaje final

### 🔹 🔊 Sistema de Audio
- **Sonido swoosh:** Se reproduce en cada salto
- **Sonido de punto:** Se reproduce al pasar por las tuberías
- **Sonido de golpe:** Se reproduce al colisionar
- **Sonido de muerte:** Se reproduce al terminar la partida

---

# 📦 Instalación

Descarga el archivo ejecutable `.exe` directamente desde [Releases](https://github.com/TheNarratorVIMMXX/FlappyBird/releases) y ejecútalo, ¡sin necesidad de instalar Python ni ninguna dependencia adicional!

---

# 📊 Sistema de Puntuación

- +1 punto por cada tubería superada exitosamente
- Puntaje mostrado en tiempo real en la esquina superior izquierda
- Puntaje final mostrado en la pantalla de fin de partida
- Bonificación de velocidad: el juego se vuelve progresivamente más difícil (velocidad máxima: 20)

---

# 🎨 Diseño Visual

### 🔹 Esquema de Colores
- Fondo: Azul cielo (`#00bfff`)
- Texto del puntaje: Blanco, Arial Negrita 30pt
- Fin de partida: Rojo, Arial Negrita 40pt
- Puntaje final: Blanco, Arial Negrita 25pt
- Botón de reinicio: Naranja (`#ff6b35`) con texto blanco

### 🔹 Gestión de Sprites
- Sprite del pájaro cargado con PIL y convertido a PhotoImage
- Sprite de tubería redimensionado dinámicamente según el posicionamiento del espacio
- Tubería superior creada rotando la tubería base 180°

---

# 🐛 Limitaciones Conocidas

- Tamaño de ventana fijo de 1000x600 (no redimensionable)
- Bucle de juego de un solo hilo (bloqueante)
- Sin persistencia de puntuación máxima
- Sin funcionalidad de pausa
- Limitado a entrada por teclado (sin soporte para clic del ratón)

---

# 📚 Resultados de Aprendizaje

Este proyecto sirve como recurso educativo para comprender conceptos fundamentales del desarrollo de videojuegos:

### 🔹 🎓 Lo que Aprenderás
- Fundamentos del Desarrollo de Videojuegos
- Manipulación de Canvas en Tkinter
- Sistemas de Detección de Colisiones
- Programación Orientada a Eventos
- Gestión de Estados
- Integración de Recursos Multimedia
- Simulación de Física
- Principios de Diseño UI/UX
- Diseño de Algoritmos
- Depuración de Lógica de Juego

---

# 📄 Licencia
Este proyecto es de naturaleza educativa y está disponible para uso libre con fines de aprendizaje. El concepto original del juego Flappy Bird pertenece a sus respectivos propietarios.

---

# 🙏 Agradecimientos

- Flappy Bird original por Dong Nguyen
- Recursos creados con fines educativos
- Construido con las librerías Tkinter y Pygame de Python

---

# 🤝 Contribuciones

Estudiantes y desarrolladores son bienvenidos a:
- Reportar errores
- Sugerir nuevas funcionalidades
- Enviar pull requests con mejoras
- Compartir estrategias de juego

---

# 📧 Contacto

- **Autor:** Carlos Gabriel Magallanes López
- **Correo:** cgmagallanes23@gmail.com

---

⭐ ¡Si disfrutaste este juego o lo encontraste educativo, dale una estrella en GitHub!
🎮 ¡Buen juego!
