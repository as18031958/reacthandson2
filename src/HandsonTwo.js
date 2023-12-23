import React, { Component } from 'react'
import './Style.css'
export default class Handsontwo extends Component {
  state={
    name:"",
    Departement:"",
    Rating:'',
    data:[]
  }
  
  handleChange=(e)=>{
  console.log("change")
  this.setState({[e.target.name]:e.target.value})
  }
  handleClick=()=>{
    const obj={
        name:this.state.name,
        Departement:this.state.Departement,
        Rating:this.state.Rating
    }
    const value = this.state.data
    value.push(obj)

    this.setState({[this.state.data]:value})
    // console.log(this.state.data)
  }
  
  
  
    render() {
    return (
      <div class="main">
        <label class="one">Name</label>
        <input class="two"name='name' type='text' placeholder='Enter your name'onChange={this.handleChange}/>
        <label class="one">Departement</label>
        <input class="two"name='Departement' type='text' placeholder='Enter your Departement'onChange={this.handleChange}/>
        <label class="one">Rating</label>
        <input class="two"name='Rating' type='number' placeholder='please rate us'onChange={this.handleChange}/>

        <button onClick={this.handleClick}>Submit</button>

        {this.state.data.map((item,index)=>{
            return(
              <>
              <div class="second">
                <h1>|{item.name}|  </h1>
                <h1>|{item.Departement}|  </h1>
                <h1>|{item.Rating}|  </h1>
                </div>
                </>
            )
        })}
      </div>
    )
  }
}
