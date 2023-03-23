import { ITeam } from '../../store/gameStore';

interface ICountryFlagProps {
  team: ITeam;
  altText: string;
}

export const CountryFlag: React.FC<ICountryFlagProps> = ({ team, altText }) => {
  return (
    <div className="flex flex-col items-center content-center  w-full">
      <div className="text-md text-center font-bold uppercase">{team.name}</div>
      <div>
        <img
          src={`https://flagsapi.com/${team.code}/flat/64.png`}
          alt={altText}
        />
      </div>
    </div>
  );
};
