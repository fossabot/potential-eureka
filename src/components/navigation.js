import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Save } from 'react-feather';

import '../styles/components/navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <nav id='navigation'>
        <div id='center'>
          <section id='brand'>
            <BrandItem name={this.props.name} />
          </section>
          <section></section>
          <section id='nav'>
            <NavItem name='About Me' link='#about' />
            <NavItem name='Projects' link='#projects' />
          </section>
        </div>
      </nav>
    );
  }
}

class NavItem extends Component {
  render() {
    return (
      <div className='nav-item'>
        <a href={this.props.link}>{this.props.name}</a>
      </div>
    );
  }
}

class BrandItem extends Component {
  render() {
    return (
      <div className='brand-item'>
        <a href='#'>{this.props.name}</a>
      </div>
    );
  }
}

export default hot(module)(Navigation);
