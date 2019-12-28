import { Component } from 'react';
import { hot } from 'react-hot-loader';

class Projects extends Component {
  render() {
    return (
      <section id='projects'>
        <div className='banner'>Projects</div>
        <div className='content'>
          <Project id='' title=''></Project>
        </div>
      </section>
    );
  }
}

class Project extends Component {
  render() {
    return (
      <div className='project' id={this.props.id}>
        <div className='title'>{this.props.title}</div>
        <div className='stack'>{this.props.children}</div>
      </div>
    );
  }
}

class StackItem extends Component {
  render() {
    return (
      <div className='stack-item' id={props.id}>
        {props.name}
      </div>
    );
  }
}

class Skills extends Component {
  render() {
    return <div />;
  }
}

export default hot(module)(Projects);
