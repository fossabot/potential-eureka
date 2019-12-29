import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class Contact extends Component {
  render() {
    return (
      <section id='contact'>
        <form>
          <div className='row'>
            <label name='name'>Name</label>
            <input type='text' name='name' />
          </div>
          <div className='row' id='from'>
            <label name='from'>Email</label>
            <input type='text' name='from' />
          </div>
          <div className='row'>
            <label name='message'>Message</label>
            <textarea name='message'></textarea>
          </div>
        </form>
        <div id='other-contacts'>
          <a href={this.props.linkedin}>LinkedIn</a>
          <a href={this.props.github}>Github</a>
          <a href={this.props.email}>Email</a>
        </div>
      </section>
    );
  }
}

export default hot(module)(Contact);
