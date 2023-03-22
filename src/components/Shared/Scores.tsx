import { IGame } from '../../store/gameStore';

interface IScoresProps {
  game: IGame;
}

export const Scores: React.FC<IScoresProps> = ({ game }) => {
  return (
    <div className="text-6xl font-bold  text-center w-full">
      {game.home.score} <span className="text-gray-400">:</span>{' '}
      {game.away.score}
    </div>
  );
};
