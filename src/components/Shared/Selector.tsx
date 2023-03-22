import * as React from 'react';
import { ICountry } from '../../store/gameStore';

interface ISelectorProps {
  countries: ICountry[];
  teamType: string;
  onChangeCountry: (country: ICountry, teamType: string) => void;
}

export const Selector: React.FC<ISelectorProps> = ({
  countries,
  teamType,
  onChangeCountry,
}) => {
  const handleChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [country] = countries.filter(
      (country) => country.code === e.target.value
    );
    onChangeCountry(country, teamType);
  };
  const countriesOption = countries.map((country) => (
    <option key={country.code} value={country.code}>
      {country.name}
    </option>
  ));
  return (
    <div className="flex flex-wrap">
      <div className="w-full px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          {teamType} Team
        </label>
        <div className="relative">
          <select
            onChange={handleChangeCountry}
            defaultValue={''}
            className="block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white border border-gray-200 focus:border-gray-600"
          >
            <option disabled value="">
              Select a Country
            </option>
            {countriesOption}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
