import React from 'react';
import { Link } from 'react-router';

export default class SubmissonEntryVideo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let url = `https://www.youtube.com/embed/${ this.props.submission.link }`
    return (
      <div>
        <iframe width="560" height="315" src={ url } frameBorder="0" allowFullScreen />
      </div>
    )
  }
}