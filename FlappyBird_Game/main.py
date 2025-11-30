# ----------------------------------------------------------------------------------------------------------------------------------------
# DOCUMENTACIÓN:

""" Clase Pared """

# NOTE: Fecha de Realización: 8/11/2025
# NOTE: Alumno: Magallanes López Carlos Gabriel
# NOTE: Correo: a.24308051280865@cbtis128.edu.mx
# NOTE: Número de Control: 0865
# NOTE: Grupo: 3°J

# ----------------------------------------------------------------------------------------------------------------------------------------
""" ======================================================== Módulos Importados ============================================================= """
import os                                # Módulo de Sistema Operativo

# Configuración de Pygame
os.environ['PYGAME_HIDE_SUPPORT_PROMPT'] = "1"  # Ocultar Mensaje de Pygame

from PIL import Image, ImageTk            # Módulo de Imágenes
from pygame import mixer                  # Módulo de Sonido
import tkinter as tk                      # Módulo de Interfaz Gráfica (GUI)
import random                             # Módulo de Aleatoriedad

# ------------------------------------------------------------------------------------------------------------------------------------------
""" ========================================================= Configuración del Juego ============================================================= """

# Inicialización de Ventana
window = tk.Tk()                             # Ventana Principal
window.geometry('1000x600')                  # Tamaño de la Ventana
window.title('Flappy Bird')                  # Título de la Ventana
window.resizable(False, False)               # No redimensionable


# Variables de Control Globales
x, y = 150, 300                              # Posición Inicial del Pájaro
score = 0                                    # Puntuación Inicial
speed = 10                                   # Velocidad Inicial de las Tuberías
game_over = False                            # Estado del Juego
gravity = 5                                  # Gravedad Aplicada al Pájaro
PIPES_GAP = 250                              # Espacio entre Tuberías


# Carga de Imágenes
img_bird = Image.open(fp = 'imgs/bird.png')                             # Imagen del Pájaro
img_bird = ImageTk.PhotoImage(image = img_bird)                         # Convertir a PhotoImage para Tkinter
pipe_img = Image.open(fp = 'imgs/pipe.png')                             # Imagen de la Tubería
pipe_img_original = pipe_img.copy()                                     # Guardar Copia de la Imagen Original
img_pipe_down = ImageTk.PhotoImage(image = pipe_img)                    # Tubería Inferior
img_pipe_top = ImageTk.PhotoImage(image = pipe_img.rotate(180))         # Tubería Superior
PIPE_WIDTH = pipe_img_original.width                                    # Guardar Ancho Original


# Canvas
canvas = tk.Canvas(master = window, highlightthickness = 0, bg = '#00bfff')                        # Lienzo Principal
canvas.place(relwidth = 1, relheight = 1)                                                            # Tamaño del Lienzo
text_score = canvas.create_text(50, 50, text = '0', fill = 'white', font = ('Arial', 30, 'bold'))    # Texto de Puntuación
bird = canvas.create_image(x, y, anchor = 'nw', image = img_bird)                                    # Imagen del Pájaro
pipe_top = canvas.create_image(1200, -200, anchor = 'nw', image = img_pipe_top)                      # Imagen de Tubería Superior
pipe_down = canvas.create_image(1200, 400, anchor = 'nw', image = img_pipe_down)                     # Imagen de Tubería Inferior


# Configuración de Sonido
mixer.init()                                                            # Inicializar el Mezclador de Sonido
swoosh_sound = mixer.Sound('audio/swoosh.mp3')                          # Cargar Sonido de Salto
die_sound = mixer.Sound('audio/die.mp3')                                # Cargar Sonido de Muerte
hit_sound = mixer.Sound('audio/hit.mp3')                                # Cargar Sonido de Colisión

# Etiquetas 
lbl_game_over = tk.Label(master = window, text = '¡Game Over!', font = ('Arial', 40, 'bold'), fg = 'red', bg = '#00bfff') # Game Over
lbl_final_score = tk.Label(master = window, text = '', font = ('Arial', 25, 'bold'), fg = 'white', bg = '#00bfff')        # Puntos Final

# ------------------------------------------------------------------------------------------------------------------------------------------
""" ========================================================= Funciones del Juego ============================================================= """

# Función: Movimiento del Pájaro con Tecla
def move_bird_key(event) -> None:
    
    """
       - Función: Mover el Pájaro con la Tecla
       - Argumentos: event (Evento de Teclado)
       - Retorno: Ninguno
       - Objetivo: Permitir que el Pájaro Salte al Presionar la Barra Espaciadora o Clic del Mouse
    """
    
    # Salto del Pájaro al Presionar la Tecla
    global y                                    # Declarar Variable Global
    if not game_over:                           # Si el Juego no ha Terminado
        y -= 50                                 # Mover el Pájaro hacia Arriba
        canvas.coords(bird, x, y)               # Actualizar la Posición del Pájaro en el Lienzo
        swoosh_sound.play()                      # Reproducir Sonido de Salto




# Función: Movimiento del Pájaro
def move_bird() -> None:
    
    """
       - Función: Mover el Pájaro
       - Argumentos: Ninguno
       - Retorno: Ninguno
       - Objetivo: Aplicar Gravedad al Pájaro
    """
    
    # Mover el Pájaro hacia Abajo por Gravedad
    global y, game_over                                            # Declarar Variables Globales
    if not game_over:                                              # Si el Juego no ha Terminado
        y += gravity                                               # Aplicar Gravedad
        canvas.coords(bird, x, y)                                  # Actualizar la Posición del Pájaro en el Lienzo
        if y < 0 or y > window.winfo_height() - 50: game_end()     # Verificar Colisión con el Suelo o Techo y Terminar el Juego   
        window.after(50, move_bird)                                # Llamar a la Función de Nuevo después de 50 ms




# Función: Movimiento de las Tuberías
def move_pipe() -> None:
    
    """
       - Función: Mover las Tuberías
       - Argumentos: Ninguno
       - Retorno: Ninguno
       - Objetivo: Mover las Tuberías hacia la Izquierda
    """
    
    global score, game_over, speed                                                             # Declarar Variables Globales
    if not game_over:                                                                          # Si el Juego no ha Terminado
        canvas.move(pipe_top, -speed, 0)                                                       # Mover Tubería Superior
        canvas.move(pipe_down, -speed, 0)                                                      # Mover Tubería Inferior
        if canvas.coords(pipe_down)[0] < -100:                                                 # Si Tubería Sale de Pantalla (Horizontalmente)
            score += 1                                                                         # Incrementar Puntuación
            speed = min(speed + 0.5, 20)                                                       # Limitar Velocidad Máxima
            canvas.itemconfigure(text_score, text = str(score))                                # Actualizar Texto de Puntuación
            pipe_y_down = random.randint(PIPES_GAP + 150, window.winfo_height() - 100)         # Nueva Posición Y Tubería Inferior
            top_pipe_resized = pipe_img_original.resize((PIPE_WIDTH, pipe_y_down - PIPES_GAP)) # Redimensionar Tubería Superior
            img_pipe_top_new = ImageTk.PhotoImage(image = top_pipe_resized.rotate(180))        # Crear Nueva Imagen de Tubería Superior 
            canvas.itemconfig(pipe_top, image = img_pipe_top_new)                              # Actualizar Imagen de Tubería Superior
            canvas.coords(pipe_top, window.winfo_width(), 0)                                   # Reubicar Tuberías al Lado Derecho
            canvas.coords(pipe_down, window.winfo_width(), pipe_y_down)                        # Reubicar Tuberías al Lado Derecho
            canvas.img_pipe_top_ref = img_pipe_top_new                                         # Reubicar Tuberías al Lado Derecho
        if 0 < canvas.coords(pipe_down)[0] < 160:                                              # Si Tubería Inferior está en el Rango
            mixer.music.load('audio/point.mp3')                                                # Cargar Sonido de Puntuación
            mixer.music.play()                                                                 # Reproducir Sonido de Puntuación
        if (                                                                                   # Detección de Colisión

            canvas.coords(pipe_down) and                                                       # Asegurarse de que las Tuberías Existan
            (canvas.bbox(bird)[0] + 20 < canvas.bbox(pipe_down)[2]) and                        # Verificar Colisión Horizontal
            (canvas.bbox(bird)[2] - 30 > canvas.bbox(pipe_top)[0]) and                         # Verificar Colisión Horizontal
            (
                canvas.bbox(bird)[1] + 20 < canvas.bbox(pipe_top)[3] or                        # Verificar Colisión Vertical
                canvas.bbox(bird)[3] - 30 > canvas.bbox(pipe_down)[1]                          # Verificar Colisión Vertical
            )
            
        ): game_end()                                                                          # Terminar el Juego si hay Colisión
        window.after(50, move_pipe)                                                            # Llamar a la Función de Nuevo después de 50 ms




# Función: Reiniciar el Juego
def reset_game() -> None:
    
    """
       - Función: Reiniciar el Juego
       - Argumentos: Ninguno
       - Retorno: Ninguno
       - Objetivo: Reiniciar todas las variables y elementos del juego
    """

    # Reiniciar Variables y Elementos del Juego
    die_sound.stop()                                             # Detener Sonido de Muerte
    global x, y, score, speed, game_over                         # Declarar Variables Globales
    x, y = 150, 300                                              # Posición Inicial del Pájaro 
    score = 0                                                    # Puntuación Inicial
    speed = 10                                                   # Velocidad Inicial
    game_over = False                                            # Estado del Juego
    canvas.coords(bird, x, y)                                    # Reubicar el Pájaro
    canvas.coords(pipe_top, 1200, -200)                          # Reubicar Tubería Superior
    canvas.coords(pipe_down, 1200, 400)                          # Reubicar Tubería Inferior
    canvas.itemconfigure(text_score, text="0")                   # Reiniciar Texto de Puntuación
    lbl_game_over.place_forget()                                 # Ocultar Etiqueta de Game Over
    lbl_final_score.place_forget()                               # Ocultar Etiqueta de Puntuación Final
    bt_reset.place_forget()                                      # Ocultar Botón de Reinicio
    move_bird()                                                  # Iniciar Movimiento del Pájaro
    move_pipe()                                                  # Iniciar Movimiento de las Tuberías




# Función: Terminar el Juego
def game_end():
    
    """
       - Función: Terminar el Juego
       - Argumentos: Ninguno
       - Retorno: Ninguno
       - Objetivo: Finalizar el juego y mostrar la pantalla de Game Over
    """
    
    # Terminar el Juego y Mostrar Pantalla de Game Over
    global game_over                                                     # Declarar Variable Global
    if not game_over:                                                    # Si el Juego no ha Terminado
        game_over = True                                                 # Cambiar Estado del Juego
        lbl_game_over.place(relx = 0.5, rely = 0.4, anchor = 'center')   # Mostrar Etiqueta de Game Over
        lbl_final_score.config(text = f'Puntuación: {score}')            # Actualizar Texto de Puntuación Final
        lbl_final_score.place(relx = 0.5, rely = 0.5, anchor='center')   # Mostrar Etiqueta de Puntuación Final
        bt_reset.place(relx = 0.5, rely = 0.65, anchor = 'center')       # Mostrar Botón de Reinicio
        hit_sound.play()                                                 # Reproducir Sonido de Colisión
        while mixer.music.get_busy(): continue                           # Esperar a que termine el Sonido de Colisión
        die_sound.play()                                                 # Reproducir Sonido de Muerte

# ------------------------------------------------------------------------------------------------------------------------------------------
""" ========================================================= Inicio del Juego ============================================================= """

# Botón de Reinicio
bt_reset = tk.Button(
    
    master = window,                                            # Ventana Principal
    text = '🔄 REINICIAR',                                     # Texto del Botón
    font = ('Arial', 18, 'bold'),                               # Fuente del Texto
    fg = 'white', bg = '#ff6b35',                             # Colores del Botón
    activebackground = '#ff8c5a', activeforeground = 'white', # Colores Activos
    border = 0,                                                 # Bordes
    padx = 30, pady = 15,                                       # Relleno
    command = reset_game,                                       # Comando al Hacer Clic
    cursor = 'hand2',                                           # Cursor al Pasar por Encima
    relief = 'raised', bd = 3                                   # Estilo del Botón
    
)


# Movimiento con Barra Espaciadora
window.bind("<space>", move_bird_key)      


# Iniciar Juego
window.after(50, move_bird)   # Mover Pájaro
window.after(50, move_pipe)   # Mover Tuberías


# Establecer Icono de la Ventana
window.call('wm', 'iconphoto', window._w, img_bird) 


# Bucle Principal de la Ventana
window.mainloop()

# ------------------------------------------------------------------------------------------------------------------------------------------
