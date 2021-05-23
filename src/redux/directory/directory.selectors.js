import { createSelector } from 'reselect';


// Take whole state and return a slice of it.
const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);