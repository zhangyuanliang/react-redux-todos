import { message } from 'antd';

// ActionTypes
export const types = {
  CHANGE_INPUT: 'HOME/CHANGE_INPUT',
  ADD_ITEM: 'HOME/ADD_ITEM',
  DELETE_ITEM: 'HOME/DELETE_ITEM'
}

// State
const initState = {
  inputValue: '',
  items: [
    '111', '2222'
  ]
}

// Action
export const actions = {
  changeInputAction: value => {
      return {
        type: types.CHANGE_INPUT,
        value
      }
  },
  addItemAction: () => ({
    type: types.ADD_ITEM
  }),
  deleteItemAction: index => ({
    type: types.DELETE_ITEM,
    index
  })
}

// reducer
const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_INPUT:
      return Object.assign({}, state, {
        inputValue: action.value
      })
    case types.ADD_ITEM:
      if (state.inputValue.trim() === '') {
        message.warning('请输入')
        return state
      }
      return Object.assign({}, state, {
        inputValue: '',
        items: [
          ...state.items,
          state.inputValue
        ]
      })
    case types.DELETE_ITEM:
      return Object.assign({}, state, {
        inputValue: '',
        items: state.items.filter((item, index) => {
          return index !== action.index
        })
      })
    default:
      return state
  }
}

export default homeReducer