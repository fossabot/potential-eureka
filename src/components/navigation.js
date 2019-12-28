import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import '../styles/components/navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <section id='brand'>
          <BrandItem name={this.props.name} />
        </section>
        <section></section>
        <section id='nav'>
          <NavItem name='Home' />
          <NavItem name='Projects' />
          <NavItem name='Contact' />
        </section>
      </nav>
    );
  }
}

class NavItem extends Component {
  render() {
    return (
      <div className='nav-item'>
        <a href='#'>{this.props.name}</a>
      </div>
    );
  }
}

class BrandItem extends Component {
  render() {
    return <div className='brand-item'>{this.props.name}</div>;
  }
}

export default hot(module)(Navigation);
