import React, { Component } from 'react'
import store from '../../redux/store.js'

import { Input, Button, List, message } from 'antd';
import './index.scss'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState().homeReducer
    this.inputChange = this.inputChange.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        ...store.getState().homeReducer
      })
    })
  }
  inputChange(e) {
    const action = {
      type: 'changeInput',
      value: e.target.value
    }
    store.dispatch(action)
  }

  addItem() {
    if (!this.state.inputValue) {
      message.warning('请输入')
      return
    }
    const action = {
      type: 'addItem'
    }
    store.dispatch(action)
  }

  deleteItem(index) {
    const action = {
      type: 'deleteItem',
      index
    }
    store.dispatch(action)
  }

  render() {
    const { inputValue, items } = this.state
    return ( 
      <div style={{padding: 20}}>
        <div>
          <Input
            value={inputValue}
            onChange={this.inputChange} 
            placeholder="请输入" 
            style={{ width: '20%', marginRight: 10 }}
          ></Input>
          <Button onClick={this.addItem}>新增</Button>
        </div>
        <List
          size="small"
          bordered
          dataSource={items}
          renderItem={(item, index) => <List.Item actions={[<span onClick={() => this.deleteItem(index)} className="link">删除</span>]}>{item}</List.Item>}
          style={{width: '20%', marginTop: 4}}
        />
      </div>
    )
  }
}