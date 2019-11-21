import React from 'react'

class SimpleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = (e) => {
    const toggle = {
      'happy': 'sad',
      'sad': 'happy'
    }
    this.setState({
      mood: toggle[this.state.mood]
    })
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }
}

export default SimpleComponent