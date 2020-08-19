import { createStandardAction } from 'typesafe-actions';

export const search = createStandardAction('dashboardPage/SEARCH')<string>();
