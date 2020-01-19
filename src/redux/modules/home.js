import { message } from 'antd';

// State
const initState = {
  inputValue: '',
  items: [
    '111', '2222'
  ]
}

// reducer
const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'changeInput':
      return Object.assign({}, state, {
        inputValue: action.value
      })
    case 'addItem':
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
    case 'deleteItem':
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