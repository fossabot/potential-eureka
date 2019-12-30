import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Navigation from './navigation';
import About from './about';
import Projects from './projects';

const attr = {
  name: 'Dishant Mishra',
  skills: [
    'Java',
    'C#',
    '.NET Core',
    'JavaScript',
    'PHP',
    'Python',
    'Golang',
    'HTML / CSS',
    'SQL',
    'MongoDB',
    'Neo4J',
    'Docker',
    'Jenkins',
    'JUnit'
  ],
  contacts: {
    linkedin: 'https://www.linkedin.com/in/damishra',
    github: 'https://github.com/damishra',
    email: 'mailto:dxm2269@rit.edu'
  }
};

class App extends Component {
  render() {
    return (
      <main className='app'>
        <Navigation name={attr.name} />
        <div className='inner'>
          <About
            name={attr.name}
            skills={attr.skills}
            linkedin={attr.contacts.linkedin}
            github={attr.contacts.github}
            email={attr.contacts.email}
          />
          <Projects />
        </div>
      </main>
    );
  }
}

export default hot(module)(App);
