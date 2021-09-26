import React, { Component } from 'react';
import Subcomponent from './Subcomponent';
class Maincomponent extends React.Component {
    state={
        Numbers:[],
        count:0
    }

    handelcount=(e)=>{
        this.setState({count:e.target.value});   
        const compArray=[];
        let param=this.state.count;
        console.log(param);
        for (let i = 0; i < param; i++)
            {  
            
                compArray.push({id:i,num1:0,num2:0,sum:0})
                this.setState({Numbers:compArray});  
                            
            } 
           
            console.log(this.state.Numbers)
        }
        
    render() { 
        return <div>
        
            <h1 style={{color:"gray"}}>Count </h1>
            <input style={{marginTop:0,height:20}} onChange={this.handelcount}type="text" placeholder="Type..."/>  
            <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto",gap:10,backgroundColor:"pink"}} >     
            {this.state.Numbers.map(number=>

            <Subcomponent  key={number.id} /> 



            )}
        </div>
        
    </div>
    }
}
 
export default Maincomponent;