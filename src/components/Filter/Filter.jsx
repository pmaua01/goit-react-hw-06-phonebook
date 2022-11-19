import PropTypes from 'prop-types';
import React from 'react';
import { FilterLabel, FilterInput } from './Filer.styles';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redax/filterContactSlice';

export const Filter = () => {
  const filtersValue = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const onHandleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by Name
      <FilterInput
        type="text"
        value={filtersValue}
        onChange={onHandleChange}
      ></FilterInput>
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
