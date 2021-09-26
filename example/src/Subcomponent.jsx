import React, { Component } from 'react'
class Subcomponent extends React.Component {
    state={
        Number:[
            {
                num1:0,
                num2:0                
            }  
        ]
    }
    render() { 
        return <div >
            
            <div style={{display:'grid' ,placeItems:"center",   
        
        
        
        
        
        
        }}>
                <h3 style={{color:"gray"}}>Insert Two Number</h3>
            <input placeholder="Enter Number1" onChange={e=>this.setState({num1:e.target.value})}type="text"  />
            <br/>
            <input placeholder="Enter Number2" onChange={e=>this.setState({num2:e.target.value})}type="text"  />
            <br/>
            <label style={{color:"blue"}}><b><span style={{color:"gray"}} >SUM</span> :{parseInt(this.state.num1)+parseInt(this.state.num2)} </b> </label>
           <hr/>
           </div>

            

            
      
        </div>;
    }
}
 
export default Subcomponent;