import React, { Component } from 'react';
import Counter from "./counter";
class Counters extends Component {
  
    render() { 
        const  { counters,onReset,onIncrement,onDelete}=this.props;
        return (<div>
          <button onClick={this.props.onReset}
           className='btn btn-primary btn-sm .btn m-2'>Reset</button>  
           {this.props.counters.map(counter=> 
           <Counter 
           key={counter.id} 
           onDelete={onDelete}
           onIncrement = {onIncrement}
           counter ={counter}>
           </Counter>
           
        )}
        </div>);
    }
}
 
export default Counters;