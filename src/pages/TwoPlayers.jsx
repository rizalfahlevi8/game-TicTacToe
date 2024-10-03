/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackSound from '../assets/FoamRubber.mp3';

// Function Square
function Square({ value, onSquareClick }) {
  let colorValue = 'bg-gradient-to-t from-[#7B9E2C] to-[#9DC544] bg-clip-text text-transparent';

  if (value === 'O') {
    colorValue = 'bg-gradient-to-tr from-[#E95656] to-[#BFA165] bg-clip-text text-transparent';
  }

  return (
    <button className="flex items-center justify-center shadow-md cursor-pointer w-32 h-32  rounded-2xl text-6xl font-fredoka font-bold bg-[#F9E9D0] animate__animated animate__zoomIn animate__faster" onClick={onSquareClick}>
      <div className={colorValue}>{value}</div>
    </button>
  );
}

function Reload({ onReloadClick }) {
  return (
    <button className='fixed top-[8%] right-0 w-10 h-10 bg-gradient-to-tl from-red-700 to-red-500 mt-4 mr-4 rounded-lg font-fredoka font-semibold animate__animated animate__slideInRight animate__faster' onClick={onReloadClick}>
      <span className="material-symbols-outlined pt-2 font-bold text-white">
        refresh
      </span>
    </button>
  );
}

function Status({ order }) {
  const card = 'flex items-center justify-center shadow-md cursor-pointer w-[187px] h-28 rounded-2xl text-6xl font-fredoka font-bold bg-[#F9E9D0]';
  let borderX = '';
  let borderO = '';

  if (order) {
    borderX = 'boxborder-me rounded-2xl';
  } else {
    borderO = 'boxborder-me rounded-2xl';
  }

  return (
    <div className='grid grid-cols-2 gap-4 mb-5'>
      <div className={`${borderX} animate__animated animate__zoomIn animate__faster`}>
        <div className={card}>X</div>
      </div>
      <div className={`${borderO} animate__animated animate__zoomIn animate__faster`}>
        <div className={card}>O</div>
      </div>
    </div>
  );
}

function Score({ value }) {
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  useEffect(() => {
    if (value === "X") {
      setScoreX(score => score + 1);
    } else if (value === "O") {
      setScoreO(score => score + 1);
    }
  }, [value]);

  return (
    <div className='fixed sm:top-1/2 left-0 top-0 transform sm:-translate-y-1/2 text-white font-semibold font-sans bg-gradient-to-tr from-red-700 to-red-500 p-4 shadow-md rounded-br-lg sm:rounded-r-lg animate__animated animate__slideInLeft animate__faster'>
      <p>Score</p>
      <p className='grid grid-cols-2 gap-1'>
        <div>X</div>
        <div>: {scoreX}</div>
      </p>
      <p className='grid grid-cols-2 gap-1'>
        <div>O</div>
        <div>: {scoreO}</div>
      </p>
    </div>
  );
}

export default function App() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [showWinnerMessage, setShowWinnerMessage] = useState(false);
  const [showDrawMessage, setShowDrawMessage] = useState(false);

  useEffect(function () {
    let handleWinner = function () {
      const winner = calculateWinner(squares);

      if (winner) {
        setShowWinnerMessage(true);
        setTimeout(function () {
          setShowWinnerMessage(false);
          var nextSquares = Array(9).fill(null);
          setSquare(nextSquares);
        }, 1500);
      } else if (squares.every((square) => square !== null)) {
        // Periksa kondisi seri ketika semua kotak terisi dan tidak ada pemenang
        setShowDrawMessage(true);
        setTimeout(function () {
          setShowDrawMessage(false);
          var nextSquares = Array(9).fill(null);
          setSquare(nextSquares);
        }, 1000);
      }
    };

    handleWinner();
  }, [squares]);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquare = squares.slice();
    nextSquare[i] = xIsNext ? 'X' : 'O';
    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  }

  function handleReload() {
    const nextSquares = Array(9).fill(null);
    setSquare(nextSquares);
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div>
        <Status order={xIsNext} />
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {squares.map((value, index) => (
          <Square key={index} value={value} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
      <div className='fixed left-0 bottom-0 pr-5 transform text-black font-semibold font-fredoka bg-gradient-to-tr from-white to-white p-4 shadow-md rounded-r-full sm:fixed sm:left-0 sm:bottom-[89%] animate__animated animate__slideInLeft animate__faster'>
        Two Player
      </div>
      <div>
        <Score value={winner} />
      </div>
      <div className='fixed top-0 right-0 w-10 h-10 bg-gradient-to-tl from-red-700 to-red-500 mt-4 mr-4 rounded-lg font-fredoka font-semibold animate__animated animate__slideInRight animate__faster'>
        <Link to="/">
          <span className="material-symbols-outlined p-2 font-[550] text-white">
            home
          </span>
        </Link>
      </div>
      <div className='text-center'>
        <Reload onReloadClick={() => handleReload()} />
      </div>
      <audio className='hidden' controls loop autoPlay>
        <source src={BackSound} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      {showWinnerMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white text-4xl font-bold">
          <p>Winner! </p>
          <div className='bg-gradient-to-t from-orange-600 to-yellow-400 bg-clip-text text-transparent font-fredoka' style={{ marginLeft: '8px' }}>{winner}</div>
        </div>
      )}
      {showDrawMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white text-4xl font-bold">
          <p>Draw!</p>
        </div>
      )}
    </div>
  );
}

//Function calculateWinner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    // const a = lines[i][0]; //0
    // const b = lines[i][1]; //1
    // const c = lines[i][2]; //2
    // supaya rapi pakai teknik destructuring js
    const [a, b, c] = lines[i];

    //["X", "X", "X", "O", "O", null, null, null, null]
    if (squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return false;
}
