import { ITeam } from '../../store/gameStore';

interface ICountryFlagProps {
  team: ITeam;
}

export const CountryFlag: React.FC<ICountryFlagProps> = ({ team }) => {
  return (
    <div className="flex flex-col items-center content-center  w-full">
      <div className="text-md text-center font-bold uppercase">{team.name}</div>
      <div>
        <img src={`https://flagsapi.com/${team.code}/flat/64.png`} />
      </div>
    </div>
  );
};
