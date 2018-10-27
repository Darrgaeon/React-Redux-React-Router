import React from 'react';
import { Alert } from 'reactstrap';

const dataListHome = [
  {description: "The official React documentation", link: "https://reactjs.org/docs/hello-world.html"},
  {description: "Getting Started with Redux - Egghead{'\\''}s video lessons from Dan Abramov", link: "https://egghead.io/courses/getting-started-with-redux'>https://egghead.io/courses/getting-started-with-redux"},
  {description: "React Redux [RU tutorial]", link: "https://maxfarseer.gitbooks.io/redux-course-ru/content/'>https://maxfarseer.gitbooks.io/redux-course-ru/content/"},
  {description: "Redux Step by Step: A Simple and Robust Workflow for Real Life Apps", link: "https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092'>https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092"}
];

class ListHome extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a href={this.props.link}>{this.props.description}</a>
        </li>
      </ul>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <Alert color="primary">
      <h3>Useful react and redux links</h3>
      {dataListHome.map((item, index) => (
        <ListHome key={index} link={item.link} description={item.description}/>
      ))}
      </Alert>
    )
  }
}

export default Home;