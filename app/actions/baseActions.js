import {
  COMMENTS_UPDATED,
} from './actionTypes';

export function storeCommentsData(list) {
  return {
    type: COMMENTS_UPDATED,
    comments: list
  };
}
