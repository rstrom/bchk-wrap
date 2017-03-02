import React from 'react'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  componentWillMount () {
    const expiration = Date.now() + 3600000 * 48
    setInterval(() => {
      const e = expiration - Date.now()
      const hours = Math.floor(e / 3600000).toFixed(0)
      const minutes = Math.floor(e % 3600000 / 60000).toFixed(0)
      const seconds = Math.floor(e % 60000 / 1000).toFixed(0)
      this.setState({
        remaining: `${hours}:${minutes}:${seconds}`
      })
    }, 1000)
  }

  render () {
    return (
      <span style={{float:'right'}}>Time remaining: {this.state.remaining}</span>
    )
  }
}
