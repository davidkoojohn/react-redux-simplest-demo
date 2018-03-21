export const NEW_ITEM = 'NEW_ITEM';

export function deleteItem(index) {
  return {
    type: NEW_ITEM,
    payload: {
      index
    }
  }
}
