export const UPDATE_KEY_VALUE = 'UPDATE_KEY_VALUE';

export function updateKeyValue(key, value) {
  return {
    type: UPDATE_KEY_VALUE,
    payload: {
      key,
      value
    }
  }
}
