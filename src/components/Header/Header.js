import React, { Component } from 'react'
// import { Link } from '@reach/router'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div
        className="index__topArea__src-commonComponent-topArea-"
        style={{ position: 'unset' }}
      >
        <a className="index__logo__src-commonComponent-topArea-">
          <img
            src="https://i.loli.net/2018/07/27/5b5a882f40583.png"
            alt="logo"
            style={{ height: '100%', width: '100%' }}
          />
        </a>
        <a
          className="index__searchIcon__src-commonComponent-topArea-"
          name="search"
        >
          <p>search</p>
          <svg
            className="index__icon__src-commonComponent-topArea-"
            aria-hidden="true"
          >
            <use href="#icon-sousuo" />
          </svg>
        </a>
        <a
          href="https://github.com/songkeys/my-own-swordsman"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div className="index__openAppBtn__src-commonComponent-topArea-">
            <p>GitHub</p>
          </div>
        </a>
      </div>
    )
  }
}
