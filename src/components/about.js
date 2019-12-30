import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { GitHub, Linkedin, Mail } from 'react-feather';

import '../styles/components/about.scss';

class About extends Component {
  render() {
    return (
      <section id='about'>
        <div className='center'>
          <div className='banner'>
            Hi, I am <span>{this.props.name}</span>. I am a software developer
            majoring in Web and Mobile Computing at the Rochester Institute of
            Technology.
          </div>
          <div className='skills'>
            {this.props.skills.map((skill, index) => {
              return <Skill key={skill} value={skill} index={index} />;
            })}
          </div>
          <div id='other-contacts'>
            <a href={this.props.linkedin}>
              <Linkedin size={30} />
              <span>LinkedIn</span>
            </a>
            <a href={this.props.github}>
              <GitHub size={30} />
              <span>GitHub</span>
            </a>
            <a href={this.props.email}>
              <Mail size={30} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

class Skill extends Component {
  render() {
    return (
      <div className='skill' index={this.props.index}>
        {this.props.value}
      </div>
    );
  }
}

export default hot(module)(About);
