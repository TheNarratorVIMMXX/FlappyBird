[![es](https://img.shields.io/badge/lang-es-red.svg)](README.es.md)

# 🐦 Flappy Bird

![Python](https://img.shields.io/badge/Python-3.11-blue?style=for-the-badge&logo=python&logoColor=white)
![Tkinter](https://img.shields.io/badge/Tkinter-GUI-238636?style=for-the-badge&logo=python&logoColor=white)
![Pygame](https://img.shields.io/badge/Pygame-2.6.1-FF6B6B?style=for-the-badge&logo=python&logoColor=white)
![Type](https://img.shields.io/badge/Type-Game_Clone-8B008B?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0-gold?style=for-the-badge)

A fully functional Flappy Bird clone developed with Python's Tkinter and Pygame (for audio) modules. This project demonstrates advanced GUI programming concepts including canvas manipulation, collision detection, sprite management, and real-time game physics.

---

## 🎬 Preview

<div align="center">
  <img src="assets/gifs/preview.gif" alt="Flappy Bird Preview"/>
</div>

---

## 👨‍🎓 Developer Info

- **Author:** Carlos Gabriel Magallanes López
- **Email:** cgmagallanes23@gmail.com
- **Development Date:** November 8, 2025

---

## 🎮 Game Description

This is a complete recreation of the popular mobile game Flappy Bird, built from scratch using Python's Tkinter library for graphics and Pygame mixer for audio.

### Key Features
- Physics-based gameplay with gravity and jump mechanics
- Progressive difficulty: pipes move faster as the score increases
- Collision detection system for realistic gameplay
- Sound effects for jumps, scoring, and game over
- Dynamic pipe generation with random heights
- Score tracking and display
- Game over screen with restart functionality

---

## 🎯 Game Mechanics

### Controls

| Control | Action |
|---------|--------|
| **Spacebar** | Make the bird jump |
| **Restart Button** | Restart the game after game over |

### Objective
Navigate the bird through the gaps between pipes without hitting them or touching the ground or ceiling. Each successful pass through a pipe increases your score.

### Difficulty Progression

| Parameter | Value |
|-----------|-------|
| **Starting Speed** | 10 pixels per frame |
| **Speed Increase** | +0.5 per pipe passed |
| **Maximum Speed** | 20 pixels per frame |
| **Pipe Gap** | 250 pixels (constant) |

---

## 🚀 Features

### ✨ Core Game Features
- **Gravity System:** Realistic downward acceleration (5 pixels per frame)
- **Jump Mechanic:** Vertical impulse of -50 pixels on spacebar press
- **Infinite Scrolling:** Pipes continuously regenerate with random heights
- **Collision Detection:** Precise hitbox detection for bird-pipe and bird-boundary collisions
- **Progressive Difficulty:** Speed increases with score

### 🎨 Visual Elements
- Custom sprites for the bird and pipes
- Smooth animations at 50ms per frame
- Dynamic pipe resizing based on random positioning
- Real-time score display
- Game over screen with final score

### 🔊 Audio System

| Sound | Trigger |
|-------|---------|
| **Swoosh** | Plays on each jump |
| **Point** | Plays when passing through pipes |
| **Hit** | Plays on collision |
| **Die** | Plays when the game ends |

---

## 🎨 Visual Design

### Color Scheme

| Element | Color | Value |
|---------|-------|-------|
| **Background** | Sky Blue | `#00bfff` |
| **Score Text** | White | Arial Bold 30pt |
| **Game Over** | Red | Arial Bold 40pt |
| **Final Score** | White | Arial Bold 25pt |
| **Restart Button** | Orange | `#ff6b35` |

### Sprite Management
- Bird sprite loaded with PIL and converted to PhotoImage
- Pipe sprite dynamically resized based on gap positioning
- Top pipe created by rotating the base pipe 180°

---

## 📊 Scoring System

- **+1 point** for each pipe successfully passed
- Score displayed in real time in the top-left corner
- Final score shown on the game over screen
- Speed bonus: game becomes progressively harder (max speed: 20)

---

## 📦 Installation

### Quick Start — No Installation!

Download the `.exe` directly from [Releases](https://github.com/TheNarratorVIMMXX/FlappyBird/releases) and run it — no Python or additional dependencies needed!

| Component | Requirement |
|-----------|-------------|
| **OS** | Windows 10 / 11 |
| **RAM** | 2 GB minimum |
| **Storage** | ~30 MB free space |
| **Dependencies** | None — bundled in executable |

---

## 🐛 Known Limitations

- Fixed window size of 1000×600 (not resizable)
- Single-threaded game loop (blocking)
- No high score persistence
- No pause functionality
- Keyboard input only (no mouse click support)

---

## 📚 Learning Outcomes

This project serves as an educational resource for understanding fundamental video game development concepts:

### 🎓 What You'll Learn
- Video game development fundamentals
- Canvas manipulation in Tkinter
- Collision detection systems
- Event-driven programming
- State management
- Multimedia resource integration
- Physics simulation
- UI/UX design principles
- Algorithm design
- Game logic debugging

---

## 🙏 Acknowledgements

- Original Flappy Bird by Dong Nguyen
- Assets created for educational purposes
- Built with Python's Tkinter and Pygame libraries

---

## 🤝 Contributions

Students and developers are welcome to:
- Report bugs
- Suggest new features
- Submit pull requests with improvements
- Share gameplay strategies

---

## 📄 License

This project is educational in nature and available for free use for learning purposes. The original Flappy Bird game concept belongs to its respective owners.

---

## 📧 Contact

- **Author:** Carlos Gabriel Magallanes López
- **Email:** cgmagallanes23@gmail.com

---

⭐ **If you enjoyed this game or found it educational, give it a star on GitHub!**

**🎮 Have fun playing!**
