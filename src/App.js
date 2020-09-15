import React, { Component } from 'react'
import Card from './components/Card'
import axios from 'axios'

class App extends Component {

  state = {
    title: '',
    movie: {}
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAddMovie = event => {
    event.preventDefault()
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${this.state.title}`)
      .then(({ data }) => {
        this.setState({ movie: data, title: '' })
      })
      .catch(err => console.error(err))
    // let movies = JSON.parse(JSON.stringify(this.state.movies))
    // movies.push({
    //   title: this.state.title,
    //   plot: this.state.plot,
    //   poster: this.state.poster
    // })
    // this.setState({ movies, title: '', plot: '', poster: '' })
  }

  render () {
    return (
      <>
        <form>
          <label htmlFor="title">Movie Title</label>
          <input 
            type="text" 
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}/>
{/* 
          <label htmlFor="plot">Plot</label>
          <input 
            type="text" 
            name="plot"
            value={this.state.plot}
            onChange={this.handleInputChange}/>

          <label htmlFor="poster">Poster Link</label>
          <input 
            type="text" 
            name="poster"
            value={this.state.poster}
            onChange={this.handleInputChange}/> */}

          <button onClick={this.handleAddMovie}>Search</button>
        </form>
        <Card movie={this.state.movie} />
        {/* <ul>
          {
            this.state.movies.map(movie => <Card movie={movie} />)
          }
        </ul> */}
      </>
    )
  }
}

export default App