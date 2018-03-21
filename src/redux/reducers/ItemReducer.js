import { NEW_ITEM } from '../actions/ItemAction';

const initialValues = {
  items: [
    {
      title: 'title',
      description: 'description',
      value: 'value'
    }
  ]
}

export default function(state = initialValues, action) {
  switch (action.type) {
    case NEW_ITEM: {
      return {
        ...state,
        /*items: state.items.concat([
          {
            title: 'title',
            description: 'description',
            value: 'value'
          }
        ])*/

        items: [
          ...state.items,
          {
            title: `title${action.payload.index}`,
            description: 'description',
            value: 'value'
          }
        ]
      }
    }

    default:
      return state;
  }
}
