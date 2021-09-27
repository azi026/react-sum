import React, { Component } from 'react'
class Subcomponent extends React.Component {
  state = {
    Number: [
      {
        num1: 0,
        num2: 0,  
        sum:0         
      }        
    ]
  }
  handleChange1=(e)=>{
    this.setState({ num1:e.target.value });
    this.props.onSumChange(this.props.id,parseInt(this.state.num2)+parseInt(e.target.value))
  }
  handleChange2=(e)=>{
    this.setState({ num2:e.target.value });
    this.props.onSumChange(this.props.id,parseInt(this.state.num1)+parseInt(e.target.value))
  }
  
  render() {
    const sumnum=parseInt(this.state.num1)+parseInt(this.state.num2);
    
    console.log(sumnum)

    return (
       
            <div style={{backgroundColor:"lightgreen",padding:"10px"}}>

                <div style={{ display: 'grid', placeItems: 'center' }}>
                <h3 style={{ color: 'gray' }}>Insert Two Number</h3>
                <input
                placeholder='Enter Number1'
                onChange={this.handleChange1}
                type='text'
                    />

                <br />
                <input
                    placeholder='Enter Number2'                  
                    onChange={this.handleChange2}
                    // onChange={(e) =>{this.setState({ num2: e.target.value })}}
                    type='text'
                />
                <br />
                <label style={{ color: 'blue' }}>
                        <b>
                        <span 
                        ref={this.span}style={{ color: 'gray' }}>SUM</span> :
                        {/* {sumnum} {this.props.onSumChange(this.props.id,sumnum)} */}
                        {isNaN(sumnum)?parseInt(0):sumnum} {this.props.onSumChange(this.props.id,isNaN(sumnum)?parseInt(0):sumnum)}
                        {/* {isNaN(parseInt(this.state.num1) + parseInt(this.state.num2))?"---":parseInt(this.state.num1) + parseInt(this.state.num2)} */}
                        {/* {this.state.sumStr} */}
                        </b>
                </label>
                <hr />
                </div>
      </div>
    )
  }
}

export default Subcomponent
