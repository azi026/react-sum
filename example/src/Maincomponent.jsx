import React, { Component } from 'react'
import Subcomponent from './Subcomponent'
class Maincomponent extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    compArray: [],
    count: 0,
    sumArray: []
  }
  componentDidMount = () => {
    this.CreateSubComponents(3)
  }
  handleSumChange = (id, sum) => {
    const sumArray = [...this.state.sumArray]
    sumArray[id] = sum
    this.setState({ sumArray })
  }
  handelSumReduce = () => {
    const sum = this.state.sumArray.reduce()
  }

  handleCountChange = (e) => {
    this.setState({ count: e.target.value })
    let param = parseInt(e.target.value)
    this.CreateSubComponents(param)

    console.log(this.state.Numbers)
  }

  CreateSubComponents(count) {
    const compArray = []
    const sumArray = []
    for (let i = 0; i < count; i++) {
      compArray.push(
        <Subcomponent key={i} id={i} onSumChange={this.handleSumChange} />
      )
      sumArray.push(0)
    }
    this.setState({ compArray, sumArray })

  }
  computeSum=(array)=> {
    const sum = array.reduce((total, number) => total + number, 0);
    console.log("sum",sum);
    return sum;
 
    //   console.log("arr",array)
    //   let sum = 0
    // for (let index = 0; index < array; index++) {
       
    //   sum += array[index]    
  
     
    // }

    //     return sum
  
    
  }
  render() {
    return (
      <div>
        <label>{this.computeSum( this.state.sumArray )}</label>
        <h1 style={{ color: 'gray' }}>Count </h1>
        <input
          onChange={this.handleCountChange}
          type='number'
          defaultValue='3'
          min='0'
          max='10'
          placeholder='Type...'
        />

        <div
          style={{
            padding: '10px',
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto',
            gap: '10px',
            fontWeight: 'bold',
            backgroundColor: 'pink'
          }}
        >
          {/* {this.state.Numbers.map((number) => (
            <Subcomponent key={number.id} />
          ))} */}
          {this.state.compArray}
        </div>
      </div>
    )
  }
}

export default Maincomponent
