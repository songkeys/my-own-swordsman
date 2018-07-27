import React, { Component } from 'react'
import { Link } from '@reach/router'
import './SourceSwitch.css'

export default class SourceSwitch extends Component {
  static defaultProps = {
    sourceList: [
      { name: '渣画质', key: 's1', index: 0 },
      { name: '优酷高清', key: 's2', index: 1 },
      { name: '爱奇艺渣画质（待修复）', key: 's3', index: 2 },
    ],
  }

  state = {
    current: 1,
    shadowOn: false,
  }

  componentDidMount() {
    const sourceIndex = localStorage.getItem('sourceIndex')
    if (sourceIndex) {
      this.setState({ current: parseInt(sourceIndex, 10) })
    }
  }

  handleSourceChange = i => {
    this.setState({ current: i })
    localStorage.setItem('sourceIndex', i)
  }

  hideShadow = () => {
    this.setState({ shadowOn: false })
  }

  showShadow = () => {
    this.setState({ shadowOn: true })
  }

  render() {
    return (
      <div>
        {/* page-list */}
        <div className="index__partBox__src-videoPage-multiP-">
          <div className="index__pagesContainer__src-videoPage-multiP-">
            <div className="index__scrollContainer__src-videoPage-multiP-">
              {this.props.sourceList.map((s, i) => (
                <div
                  key={s.name}
                  className={
                    i === this.state.current
                      ? 'index__curPart__src-videoPage-multiP-part-'
                      : 'index__part__src-videoPage-multiP-part-'
                  }
                  onClick={this.handleSourceChange.bind(this, i)}
                >
                  <Link to="." state={{ s }}>
                    <p>{s.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div
            className="index__switchContainer__src-videoPage-multiP-"
            onClick={this.showShadow}
          >
            <svg
              className="index__icon__src-videoPage-multiP-"
              aria-hidden="true"
            >
              <svg
                id="icon-xialaxiao"
                viewBox="0 0 1024 1024"
                width="100%"
                height="100%"
              >
                <path d="M515.2 649.6L169.6 304c-12.8-12.8-32-12.8-44.8 0s-12.8 35.2 0 48l368 364.8c12.8 12.8 32 12.8 44.8 0l361.6-361.6c12.8-12.8 12.8-35.2 0-48s-32-12.8-44.8 0L515.2 649.6z" />
              </svg>
            </svg>
          </div>
        </div>

        {/* cover */}
        <div
          id="shadow"
          className={`index__layer__src-videoPage-multiP- ${
            this.state.shadowOn ? 'index__on__src-videoPage-multiP-' : ''
          }`}
          onClick={this.hideShadow}
        >
          <div className="index__intro__src-videoPage-multiP-">
            <div className="index__partNum__src-videoPage-multiP-">
              <p>视频源 ({this.props.sourceList.length})</p>
            </div>
            <div className="index__closeBtn__src-videoPage-multiP-">
              <img
                src="//s1.hdslb.com/bfs/static/mult/images/ic_close.png"
                alt=""
              />
            </div>
            <div className="index__clear__src-videoPage-multiP-" />
          </div>
          <div className="index__pagesContainer__src-videoPage-multiP-">
            <div className="index__commonContainer__src-videoPage-multiP-">
              {this.props.sourceList.map((s, i) => (
                <div
                  key={s.name}
                  className={
                    i === this.state.current
                      ? 'index__curOpenPart__src-videoPage-multiP-openPart-'
                      : 'index__openPart__src-videoPage-multiP-openPart-'
                  }
                  onClick={this.handleSourceChange.bind(this, i)}
                >
                  <Link to="." state={{ s }}>
                    <p>{s.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
