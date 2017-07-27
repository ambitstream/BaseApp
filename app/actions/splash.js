import {
  BASES_UPDATED,
} from './actionTypes';

export function storeBasesData(list) {
  return {
    type: BASES_UPDATED,
    list: list
  };
}
