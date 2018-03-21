import { UPDATE_KEY_VALUE } from '../actions/action-sample';

const initialValues = {
  title: 'title',
  description: 'description',
  value: 'value'
}

export default function(state = initialValues, action) {
  switch (action.type) {
    case UPDATE_KEY_VALUE: {
      return {
        ...state,
        receive: state[action.payload.key] = action.payload.value
      }
    }

    default:
      return state;
  }
}
