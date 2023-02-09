import React, { Component } from 'react'

// const NavBar = (totalItems) =>{
// };
class NavBar extends Component {
    render() { 
        const {totalItems,total}=this.props;
        return (
            <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar 
              <span className='span.badge.badge-pill.badge-bg-secendary m-3'>
                {total}</span></a>
            </div>
          </nav>
          );
    }
}
 
export default NavBar;