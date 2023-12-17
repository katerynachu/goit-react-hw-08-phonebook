import React from 'react';
import { FilterInput, FilterTitle, WrappFilter } from './Flter.styled';
import { useDispatch} from 'react-redux';
import { filterContact} from 'components/redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (newFilterValue) => {
    dispatch(filterContact(newFilterValue));
  };

  return (
    <WrappFilter >
      <FilterTitle>Find contact by name</FilterTitle>
      <FilterInput onChange={event => handleFilterChange (event.target.value)} type="text" name="filter"
	 />
    </WrappFilter>
  );
};
