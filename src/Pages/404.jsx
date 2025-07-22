import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    // Check winner
    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setScore(prev => ({ ...prev, [board[a]]: prev[board[a]] + 1 }));
        return;
      }
    }

    if (!board.includes(null)) setWinner('Draw');
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  // Animation variants for boxes
  const boxVariants = {
    initial: { scale: 1, boxShadow: '0 0 0 rgba(255, 0, 0, 0)', backgroundColor: '#374151' },
    hover: {
      scale: [1, 1.1, 1],
      boxShadow: '0 0 25px rgba(255, 0, 0, 0.9), 0 0 50px rgba(255, 0, 0, 0.7)',
      backgroundColor: '#4b5563',
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
    click: {
      scale: [1, 1.2, 1],
      boxShadow: '0 0 40px rgba(255, 0, 0, 1), 0 0 70px rgba(255, 0, 0, 0.8)',
      backgroundColor: '#6b7280',
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    filled: {
      scale: 1,
      boxShadow: '0 0 20px rgba(255, 0, 0, 0.6)',
      backgroundColor: '#4a5568',
      transition: { duration: 0.7, ease: 'easeIn' },
    },
    particle: {
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      x: [0, Math.random() * 50 - 25, 0],
      y: [0, Math.random() * 50 - 25, 0],
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-red-900 flex flex-col items-center justify-center relative overflow-hidden p-2 sm:p-4">
      {/* Title */}
      <motion.h1
        className="text-5xl sm:text-9xl font-bold text-red-400 mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: [1, 0.8, 1], y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <p className="text-gray-300 mb-4 sm:mb-8 text-center max-w-md text-sm sm:text-base">
        Oops! Page not found. Play a quick Tic-Tac-Toe to pass the time!
      </p>

      {/* Tic-Tac-Toe Game */}
      <div className="w-full max-w-xs sm:max-w-md mb-4 sm:mb-8">
        <div className="grid grid-cols-3 gap-1 sm:gap-2 bg-gray-800/50 rounded-lg p-1 sm:p-2 relative">
          {board.map((value, index) => (
            <motion.div
              key={index}
              className="w-full aspect-square bg-gray-700 rounded relative overflow-hidden"
              variants={boxVariants}
              initial="initial"
              whileHover="hover"
              whileTap="click"
              animate={value ? "filled" : "initial"}
              onClick={() => handleClick(index)}
            >
              <motion.span
                className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold"
                animate={value ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                {value}
              </motion.span>
              {value && (
                <motion.div className="absolute inset-0">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-red-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      variants={boxVariants.particle}
                      initial="initial"
                      animate="particle"
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        {winner && (
          <p className="text-center mt-2 text-yellow-400 text-sm sm:text-base">
            {winner === 'Draw' ? 'It\'s a Draw!' : `${winner} Wins!`}
          </p>
        )}
        <div className="flex justify-between mt-2 text-sm sm:text-base">
          <span>Score - X: {score.X}</span>
          <span>O: {score.O}</span>
        </div>
        <button
          onClick={resetGame}
          className="mt-2 w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm sm:text-base"
        >
          Restart Game
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-2 sm:gap-4">
        <motion.button
          onClick={() => window.history.back()}
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-gray-700 text-white text-xs sm:text-sm rounded"
          whileHover={{ scale: 1.05 }}
        >
          <ArrowLeft size={14} sm:size={18} /> Back
        </motion.button>
        <motion.button
          onClick={() => (window.location.href = '/')}
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-red-600 text-white text-xs sm:text-sm rounded"
          whileHover={{ scale: 1.05 }}
        >
          <Home size={14} sm:size={18} /> Home
        </motion.button>
      </div>
    </div>
  );
}