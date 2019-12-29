import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Navigation from './navigation';
import Projects from './projects';
import Contact from './contact';

const attr = {
  name: 'Dishant Mishra',
  skills: [
    'Java',
    'C#',
    '.NET Core',
    'JavaScript',
    'PHP',
    'HTML / CSS',
    'Python',
    'Golang',
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
          <section></section>
          <Projects />
          <Contact
            linkedin={attr.contacts.linkedin}
            github={attr.contacts.github}
            email={attr.contacts.email}
          />
        </div>
      </main>
    );
  }
}

export default hot(module)(App);
