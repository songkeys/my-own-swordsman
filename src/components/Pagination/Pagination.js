import React, { Component } from 'react'
import { Link } from '@reach/router'
import './Pagination.css'

export default class Pagination extends Component {
  state = {
    current: 1,
    shadowOn: false,
  }

  componentDidMount() {
    this.setState({ current: parseInt(this.props.id || 1, 10) })
  }

  handlePChange = p => {
    this.setState({ current: p })
  }

  hideShadow = () => {
    this.setState({ shadowOn: false })
  }

  showShadow = () => {
    this.setState({ shadowOn: true })
  }

  render() {
    const navTo = p => (this.props.id ? `../${p}` : `${p}`)
    return (
      <div>
        {/* page-list */}
        <div className="index__partBox__src-videoPage-multiP-">
          <div className="index__pagesContainer__src-videoPage-multiP-">
            <div className="index__scrollContainer__src-videoPage-multiP-">
              {[...Array(81).keys()].map(key => key + 1).map(p => (
                <div
                  key={p}
                  className={
                    p === this.state.current
                      ? 'index__curPart__src-videoPage-multiP-part-'
                      : 'index__part__src-videoPage-multiP-part-'
                  }
                  onClick={this.handlePChange.bind(this, p)}
                >
                  <Link to={navTo(p)}>
                    <p>{p}</p>
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
              <p>分集 (24)</p>
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
              {[...Array(81).keys()].map(key => key + 1).map(p => (
                <div
                  key={p}
                  className={
                    p === this.state.current
                      ? 'index__curOpenPart__src-videoPage-multiP-openPart-'
                      : 'index__openPart__src-videoPage-multiP-openPart-'
                  }
                  onClick={this.handlePChange.bind(this, p)}
                >
                  <Link to={navTo(p)}>
                    <p>{p}</p>
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
