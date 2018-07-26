import React, { Component } from 'react'
import Dplayer from 'react-dplayer'
import axios from 'axios'
import './DplayerContainer.css'

const prefix = 'https://kakazy-yun.com'
export default class DplayerContainer extends Component {
  state = {
    loaded: false,
    list: [],
  }

  componentDidMount() {
    this.init(this.props.id || 1)
  }

  componentWillReceiveProps(props) {
    console.log(props)
    this.init(props.id || 1)
  }

  init = async id => {
    this.setState({ loaded: false })
    // init list
    if (this.state.list.length === 0) {
      const urls = await axios
        .get('https://songkeys.github.io/50wz/videos.json')
        .then(res => res.data)

      this.setState({ list: urls.data })
    }
    // init danmu
    const danmu =
      this.props.id === '81'
        ? `https://songkeys.github.io/50wz/danmu/json/附赠DVD-81集.json`
        : `https://songkeys.github.io/50wz/danmu/json/第${id}回.json`

    this.setState({ danmu }, () => {
      this.setState({ loaded: true })
    })
  }

  render() {
    const listIndex = this.props.id ? parseInt(this.props.id, 10) - 1 : 0
    return (
      <div className="dplayer-container">
        {this.state.loaded && (
          <Dplayer
            video={{
              url: prefix + this.state.list[listIndex],
            }}
            danmaku={{
              id: this.state.list[listIndex],
              api: 'https://api.prprpr.me/dplayer3/',
              token: 'tokendemo',
              addition: [this.state.danmu],
              user: '50wz',
              // bottom: '15%',
              // unlimited: true,
            }}
            mutex={[]}
          />
        )}
        {!this.state.loaded && <div>加载中</div>}
      </div>
    )
  }
}
