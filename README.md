🐦 Flappy Bird - Tkinter Game
A fully functional Flappy Bird clone developed entirely with Tkinter and Pygame (for audio). This project demonstrates advanced GUI programming concepts including canvas manipulation, collision detection, sprite management, and real-time game physics.

👨‍🎓 Developer Information

Student: Magallanes López Carlos Gabriel
Email: cgmagallanes23@gmail.com
School: Centro de Bachillerato Tecnológico Industrial y de Servicios No. 128
Group: 3°J
Development Date: November 8, 2025


🎮 Game Overview
This is a complete recreation of the popular mobile game Flappy Bird, built from scratch using Python's Tkinter library for graphics and Pygame's mixer for audio. The game features:

Physics-based gameplay with gravity and jump mechanics
Progressive difficulty - pipes move faster as score increases
Collision detection system for realistic gameplay
Sound effects for jumps, scoring, and game over
Dynamic pipe generation with randomized heights
Score tracking and display
Game over screen with restart functionality


🎯 Gameplay Mechanics
Controls

Spacebar: Make the bird jump
Reset Button: Restart the game after game over

Objective
Navigate the bird through gaps between pipes without hitting them or the ground/ceiling. Each successful pass through a pipe increases your score.
Difficulty Progression

Starting speed: 10 pixels per frame
Speed increases by 0.5 with each pipe cleared
Maximum speed cap: 20 pixels per frame
Pipe gap remains constant at 250 pixels


🚀 Features
✨ Core Gameplay Features

Gravity System: Realistic downward acceleration (5 pixels per frame)
Jump Mechanics: -50 pixel vertical boost on spacebar press
Infinite Scrolling: Pipes regenerate continuously with random heights
Collision Detection: Precise hitbox detection for bird-pipe and bird-boundary collisions
Progressive Difficulty: Speed increases with score

🎨 Visual Elements

Custom sprites for bird and pipes
Smooth animations at 50ms frame rate
Dynamic pipe resizing based on random positioning
Score display in real-time
Game over screen with final score

🔊 Audio System

Swoosh sound: Plays on each jump
Point sound: Plays when passing through pipes
Hit sound: Plays on collision
Die sound: Plays on game over


📦 Requirements
Python Libraries
bashPython 3.x
tkinter (included in standard Python installations)
Pillow (PIL)
pygame
Installation
bashpip install Pillow pygame
```

### Asset Structure
```
project/
│
├── flappy_bird.py          # Main game file
├── imgs/
│   ├── bird.png            # Bird sprite
│   └── pipe.png            # Pipe sprite
└── audio/
    ├── swoosh.mp3          # Jump sound
    ├── point.mp3           # Score sound
    ├── hit.mp3             # Collision sound
    └── die.mp3             # Game over sound

🎮 How to Run

Clone the repository:

bashgit clone https://github.com/yourusername/flappy-bird-tkinter.git
cd flappy-bird-tkinter

Ensure all assets are in place:

Place bird and pipe images in imgs/ folder
Place sound files in audio/ folder


Run the game:

bashpython flappy_bird.py

🔧 Technical Implementation
Game Architecture
python# Main Components:
1. Window Setup (Tkinter)
2. Canvas for Rendering
3. Image Management (PIL)
4. Sound System (Pygame Mixer)
5. Game Loop Functions
6. Event Handlers
Key Functions
move_bird_key(event)
Handles spacebar input to make the bird jump by moving it 50 pixels upward and playing the jump sound.
move_bird()
Applies gravity to the bird continuously, updating position every 50ms. Checks for ceiling/floor collisions.
move_pipe()

Moves pipes left at current speed
Regenerates pipes when they exit screen
Handles collision detection
Updates score
Increases difficulty progressively

reset_game()
Resets all game variables to initial state:

Bird position: (150, 300)
Score: 0
Speed: 10
Pipes repositioned
Hides game over screen

game_end()
Triggered on collision:

Stops game loop
Displays game over screen
Shows final score
Plays collision and death sounds
Reveals restart button


📊 Scoring System

+1 point for each pipe successfully passed
Score displayed in real-time at top-left corner
Final score shown on game over screen
Speed bonus: Game gets progressively harder (max speed: 20)


🎨 Visual Design
Color Scheme

Background: Sky Blue (#00bfff)
Score Text: White with Arial Bold 30pt
Game Over: Red with Arial Bold 40pt
Final Score: White with Arial Bold 25pt
Reset Button: Orange (#ff6b35) with white text

Sprite Management

Bird sprite loaded with PIL and converted to PhotoImage
Pipe sprite dynamically resized based on gap positioning
Top pipe created by rotating base pipe 180°

🐛 Known Limitations

Fixed 1000x600 window size (not resizable)
Single-threaded game loop (blocking)
No high score persistence
No pause functionality
Limited to keyboard input (no mouse click support)

📚 Learning Outcomes
This project serves as an educational resource for understanding fundamental game development concepts:
🎓 What You'll Learn

Game Development Fundamentals
Canvas Manipulation in Tkinter
Collision Detection Systems
Event-Driven Programming
State Management
Multimedia Asset Integration
Physics Simulation
UI/UX Design Principles
Algorithm Design
Debugging Game Logic

📄 License
This project is educational in nature and available for free use for learning purposes. Original Flappy Bird game concept belongs to its respective owners.

🙏 Acknowledgments

Original Flappy Bird by Dong Nguyen
Assets created for educational purposes
Built with Python's amazing Tkinter and Pygame libraries


🤝 Contributing
Students and developers are welcome to:

Report bugs
Suggest new features
Submit pull requests for improvements
Share gameplay strategies


📧 Contact
Carlos Gabriel Magallanes López
Email: cgmagallanes23@gmail.com
School: CBTis No. 128

⭐ If you enjoyed this game or found it educational, please give it a star on GitHub!
🎮 Happy Gaming!
