import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    return (
      <div
        className="index__infoBlock__src-videoPage-infoBlock- index__descWrap__src-videoPage-infoBlock-"
        style={{ height: '100%' }}
      >
        <div className="xxx">
          <div className="index__videoInfo__src-videoPage-videoInfo-">
            <div
              id="vTitle"
              className="index__title__src-videoPage-videoInfo- "
              itemProp="name"
            >
              武林外传【全 81 集 + B 站弹幕】
            </div>
            {/* <div className="index__foldSwitch__src-videoPage-videoInfo-">
              <svg
                data-name="\u56FE\u5C42 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#9f9f9f"
                className="index__foldBtn__src-videoPage-videoInfo- "
              >
                <title>general_pulldown big</title>
                <path d="M8 10.29L2.83 5.18a.49.49 0 0 0-.69 0 .51.51 0 0 0 0 .71l5.52 5.47a.46.46 0 0 0 .67 0l5.52-5.48a.51.51 0 0 0 0-.71.49.49 0 0 0-.69 0z" />
              </svg>
            </div> */}
            <div className="index__info__src-videoPage-videoInfo-">
              <span className="index__writer__src-videoPage-videoInfo-">
                帮我照顾好我七舅老爷
              </span>
              <span className="index__clickTxt__src-videoPage-videoInfo-">
                他三外甥女
              </span>
              <span className="index__dmTxt__src-videoPage-videoInfo-">
                以及
              </span>
              <span className="index__pubdate__src-videoPage-videoInfo-">
                她前丈母娘
              </span>
            </div>
            {/* <div>
              <div>
                <div
                  id="vDesc"
                  className="index__desc__src-videoPage-videoInfo- "
                >
                  <p>
                    <span itemprop="description">简介</span>
                  </p>
                </div>
                <div className="index__position__src-videoPage-videoInfo-">
                  <a
                    target="_self"
                    className="index__crumb__src-videoPage-videoInfo-"
                  >
                    主页
                  </a>
                  <a
                    target="_self"
                    className="index__crumb__src-videoPage-videoInfo-"
                  >
                    电视剧
                  </a>
                  <a
                    target="_self"
                    className="index__crumb__src-videoPage-videoInfo-"
                  >
                    国产剧
                  </a>av2333
                </div>
              </div>
            </div> */}
          </div>
          {/* <div
            className="index__relativeTag__src-videoPage-relativeTag- report-wrap-module"
            id="tags"
          >
            <div className="index__tags__src-videoPage-relativeTag-">
              <a target="_self" className="index__tag__src-videoPage-relativeTag-">
                标签
              </a>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}
