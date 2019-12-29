import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

const projects = [
  {
    name: 'All The News',
    stack: ['PHP', 'MongoDB'],
    description: `Designed and developed a website in PHP with a MongoDB 
      backend with over 1.4 million records.Implemented a custom Bulma template
      for the front-end and a custom optimized search feature.`,
    repository: 'https://github.com/damishra/all-the-news',
    website: 'archived'
  },
  {
    name: 'Student Information System Redesign',
    stack: ['PHP', 'MariaDB', 'Laravel', 'NGINX', 'Fedora Linux'],
    description: `Worked in a team as the project manager and lead developer to 
      develop a new prototype for the student management system in the form of 
      a dynamic web app based on the existing student information system.`,
    repository: 'https://github.com/damishra/SISReDesign',
    website: 'archived'
  },
  {
    name: 'Project Dialog',
    stack: ['Java', 'Java Swing FX'],
    description: `An encrypted SMPT server/client system written in Java. The 
      server is multi-threaded to facilitate multiple clients networking at
      once. All the encryption is handled on the client side ensuring
      end-to-end encryption.`,
    repository: 'https://github.com/damishra/smtpV2.0',
    website: ''
  },
  {
    name: 'Timekeeping REST API',
    stack: ['Node', 'Express', 'Mongoose', 'MongoDB'],
    description: `Timekeeping REST API made with Node and Express connecting to 
      a remote Mongo database over a pre-built Mongoose bridge for the Server
      Programming final project.`,
    repository: 'https://github.com/damishra/MishraDP3',
    website: 'archived'
  }
];

class Projects extends Component {
  render() {
    return (
      <section id='projects'>
        <div className='banner'>Projects</div>
        <div className='content'>
          {projects.map((project, index) => (
            <Project
              id={index}
              title={project.name}
              description={project.description}
              repository={project.repository}
              website={project.website}>
              {project.stack.map((stackItem, index) => (
                <StackItem key={index}>{stackItem}</StackItem>
              ))}
            </Project>
          ))}
        </div>
      </section>
    );
  }
}

class Project extends Component {
  isArchived = content => {
    if (content === '') return '';
    else if (content === 'archived')
      return <div className='archived'>Archived</div>;
    else
      return (
        <a href={content} target='_blank'>
          Website
        </a>
      );
  };
  render() {
    return (
      <div className='project' id={this.props.id}>
        <div className='title'>{this.props.title}</div>
        <div className='stack-wrapper'>{this.props.children}</div>
        <div className='description'>
          <p>{this.props.description}</p>
        </div>
        <div className='link-wrapper'>
          <a href={this.props.repository} target='_blank'>
            repository
          </a>
          {this.isArchived(this.props.website)}
        </div>
      </div>
    );
  }
}

class StackItem extends Component {
  render() {
    return <div className='stack-item'>{this.props.children}</div>;
  }
}

export default hot(module)(Projects);
