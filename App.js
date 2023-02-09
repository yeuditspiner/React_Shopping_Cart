
import React, { Component } from 'react';
import NavBar from './componnets/navbar';
import './App.css';
import Counters from './componnets/counters';

class App extends Component {

  state = { 
    counters:[
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
    ],
    total:0
 } 
 handeleIncrement = counter =>{
    const counters=[...this.state.counters]
    const index=counters.indexOf(counter);
    counters[index]={...counter}
    counters[index].value++;
    this.setState({counters});

    const result1 = this.state.counters.reduce((total, currentValue) => total = total + currentValue.value,0);
    console.log(result1+"before");
    const result = this.state.counters.reduce((total, currentValue) => total = total + currentValue.value,0);
    console.log(result+"result")
    if(result>0)
    {this.state.total=result+1};
    console.log(this.state.total+"bafter");

 }
 handeleReset = () =>{
   const counters = this.state.counters.map(c=>{
    c.value = 0;
    return c; 
});
   {this.state.total=0}
    this.setState({counters});
 }
 //מחיקת קומפוננטה
 handeleDelete = counter =>{
//  const counters=this.state.counters.filter(c=>c.id !== countId);
//  const count=this.state.total;
//    this.setState({counters});

const counters=[...this.state.counters]
    const index=counters.indexOf(counter);
    counters[index]={...counter}
    if( counters[index].value>0)
     counters[index].value--;
    this.setState({counters});

  const counters1=this.state.counters.filter(c=>c.id !==counter.id );
   const result1 = counters1.reduce((total, currentValue) => total = total + currentValue.value,0);
   const result = this.state.counters.reduce((total, currentValue) => total = total + currentValue.value,0);
   console.log(result+"result")
   if(result>0)
   {
     {this.state.total=result-1};
   }
    else
    {
          {this.state.total=0};
    }
 
   
 }
 
 render(){

  return (

    <>
    <NavBar total={this.state.total} totalItems={this.state.counters.filter(c=>c.value>0).length}/><main className='contanier'>
      <Counters
        counters={this.state.counters}
        onReset={this.handeleReset}
        onIncrement={this.handeleIncrement}
        onDelete={this.handeleDelete} />
        <h4>heloo  {this.updateTotalItems}</h4>
    </main></>
 
   );
 }
  

}

export default App;
