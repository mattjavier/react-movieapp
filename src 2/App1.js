import React, { Component } from 'react'

class App extends Component {
  
  state = {
    count: 0,
    val: 0
  }

  valueChange = event => {
    this.setState({ val: parseInt(event.target.value) })
  }

  add = event => {
    console.log(this.state)
    this.setState({ count: this.state.count + this.state.val})
  }

  reset = () => {
    this.setState({ count: 0 })
  }

  render () {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        { [...Array(10).keys()].splice(1).map(num => <button onClick={this.add} value={this.state.val} onChange={this.valueChange}>{num}</button>) }
        <button onClick={this.reset}>Reset</button>
      </>
    )
  }
}

export default App