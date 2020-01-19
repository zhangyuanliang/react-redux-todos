import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Input, Button, List } from 'antd';
import './index.scss'

class Home extends Component {

  componentDidMount() {
    
  }

  render() {
    const {
      inputValue,
      items,
      inputChange,
      addItem,
      deleteItem
    } = this.props
    return ( 
      <div style={{padding: 20}}>
        <div>
          <Input
            value={inputValue}
            onChange={inputChange}
            placeholder="请输入"
            style={{ width: '20%', marginRight: 10 }}
          ></Input>
          <Button onClick={addItem}>新增</Button>
        </div>
        <List
          size="small"
          bordered
          dataSource={items}
          renderItem={(item, index) => <List.Item actions={[<span onClick={() => deleteItem(index)} className="link">删除</span>]}>{item}</List.Item>}
          style={{width: '20%', marginTop: 4}}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.homeReducer.inputValue,
    items: state.homeReducer.items
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    inputChange(e) {
      const action = {
        type: 'changeInput',
        value: e.target.value
      }
      dispatch(action)
    },
    addItem() {
      const action = {
        type: 'addItem'
      }
      dispatch(action)
    },
    deleteItem(index) {
      const action = {
        type: 'deleteItem',
        index
      }
      dispatch(action)
    }
  }
}

Home = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home