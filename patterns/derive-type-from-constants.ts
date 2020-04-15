
const MOVES = {
  ROCK: { beats: 'SCISSOR' },
  PAPER: { beats: 'ROCK' },
  SCISSOR: { beats: 'PAPER' },
};

type Move = keyof typeof MOVES;
const move: Move = 'ROCK';