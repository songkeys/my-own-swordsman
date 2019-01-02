import React, { Component } from 'react'
import Dplayer from 'react-dplayer'
import './DplayerContainer.css'

export default class DplayerContainer extends Component {
  static defaultProps = {
    resources: {},
  }

  state = {
    loaded: false,
    list: [],
  }

  componentDidMount() {
    this.init(this.props)
  }

  componentWillReceiveProps(props) {
    this.init(props)
  }

  init = async props => {
    // props.id = props.id || 1

    this.setState({ loaded: false })
    console.log(props.resources)
    if (JSON.stringify(props.resources) !== '{}') {
      // resources loaded

      // init list
      const { s } = props.location.state || {}
      if (s) {
        this.setState({ list: props.resources[s.key] })
      } else {
        const sourceIndex = localStorage.getItem('sourceIndex') || 1
        const skey = 's' + (parseInt(sourceIndex, 10) + 1)
        if (sourceIndex) {
          this.setState({ list: props.resources[skey] })
        }
      }

      // init danmu
      const danmu =
        props.id === '81'
          ? `https://songkeys.github.io/50wz/danmu/json/附赠DVD-81集.json`
          : `https://songkeys.github.io/50wz/danmu/json/第${props.id ||
              1}回.json`

      this.setState({ danmu }, () => {
        this.setState({ loaded: true })
      })
    }
  }

  render() {
    const listIndex = this.props.id ? parseInt(this.props.id, 10) - 1 : 0
    return (
      <div className="dplayer-container">
        {this.state.loaded && (
          <Dplayer
            video={{
              url: this.state.list[listIndex],
            }}
            danmaku={{
              id: `50WZ${listIndex}`,
              api: 'https://api.prprpr.me/dplayer/',
              token: 'tokendemo',
              addition: [this.state.danmu],
              user: '50wz',
              // bottom: '15%',
              // unlimited: true,
            }}
            contextmenu={[
              {
                text: 'Songkeys',
                link: 'http://songkeys.github.io',
              },
              {
                text: 'GitHub',
                link: 'https://github.com/Songkeys/my-own-swordsman',
              },
            ]}
          />
        )}
        {!this.state.loaded && <div>加载中</div>}
      </div>
    )
  }
}
