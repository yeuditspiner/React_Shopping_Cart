import React, { Component } from 'react';

class Counter extends Component {
    state ={
        value:this.props.counter.value,
        tags :[]
    };
    styles={
        fontSize:30,
        fontWidth:'bold'
    }
    //binding דרך 1 לפתור את הבעיה של 
    // constructor(){
    //     super();
    //     this.handlerIncrement=this.handlerIncrement.bind(this);
    // }

    //רנדור בתנאי
    rendreTags(){
        if(this.state.tags.length===0) return <p style={this.styles}>No Tags!</p>;

         return  <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)} </ul>

    }
// פונקצית חץ - דרך 2 לפתור את הבעיה
   handlerIncrement = produt =>{
    this.setState({value:this.state.value+1});
   }
   doHandlerIncrement =() =>{
     this.handlerIncrement({id:1});
   }
   handlerDelete = produt =>{
    this.setState({value:this.state.value-1});
   }
   doHandlerDelete=()=>{
    this.handlerDelete({id:1});
   }
    render() { 
        const {onIncrement,onDelete,counter}=this.props;
        return (
            <div>
            <span style={this.styles} className={this.getBadegClass()}>{this.fromatCount()} </span>
            <button onClick={() => onIncrement(counter)} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={()=>onDelete(counter)} className='btn btn-danger btn-sm.m-2'>Delete </button>
            </div>
           
        );
            
    }

    getBadegClass() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0 ? "warning" : "primary");
        return classes;
    }

    fromatCount(){
        if(this.props.counter.value <= 0)
        return "Zero";
        else return this.props.counter.value;
 
    }
}
 
export default Counter;