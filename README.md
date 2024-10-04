# Tic-Tac-Toe Game

A simple Tic-Tac-Toe game built using React and styled with TailwindCSS. This project allows users to play in two modes: Single Player (where the player always plays as 'X') and Two Player (local multiplayer).

## Features

- Single Player Mode: The player always plays as 'X', while the 'O' moves are handled by basic game logic (the computer automatically takes turns as 'O').
- Two Player Mode: Two players can take turns playing on the same device.
- Responsive design using TailwindCSS for smooth gameplay on various devices.
- A simple, intuitive interface with a minimalistic design

## Demo

Check out the live demo [here](https://rizalfahlevi8-tictactoe.vercel.app/)

## Installation

Follow these steps to run the project on your local machine:

1. Clone this repository:
   
   ```
   git clone https://github.com/rizalfahlevi8/game-TicTacToe.git
   ```
2. Navigate into the project directory:
   
   ```
   cd game-TicTacToe
   ```
3. Install the dependencies:
   
   ```
   npm install
   ```
4. Start the development server:
   
   ```
   npm run dev
   ```
5. Open the app in your browser with the address that appears in terminal

## How to Play

Once the app is running, you can choose between two modes:

- **Single Player Mode:** The player always plays as 'X', and the 'O' moves are controlled by basic game logic.
- **Two Player Mode:** Two players take turns playing on the same device. Player 1 plays as 'X', and Player 2 plays as 'O'.

Players take turns selecting squares on the board to place their symbol. The game ends when one player gets three of their symbols in a row (horizontally, vertically, or diagonally), or if all the squares are filled and there is no winner, the game ends in a draw.

## Technologies Used

- **React:** A JavaScript library for building dynamic user interfaces.
- **TailwindCSS:** A utility-first CSS framework for rapid styling and responsiveness.
- **Vite:** A fast frontend build tool for modern web development.
