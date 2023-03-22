import { Selector } from './Selector';

import { render, screen } from '@testing-library/react';
import countries from '../../store/countries.json';

describe('Selector component', () => {
  test.todo('should render select with countries', () => {
    render(
      <Selector
        countries={countries}
        teamType="home"
        onChangeCountry={() => {}}
      />
    );
  });

  test.todo('should render label: teamType team', () => {});
  test.todo('should render default Select a Country');
});
