import React, {Component} from 'react';
import classNames from 'classnames';
import bgMusic from 'assets/bg-music.mp3';

export default class extends Component {

  action(inAction){
    const {root} = this.refs;
    root[inAction]();
  }

  render() {
    return (
      <audio {...this.props}
             ref="root" className="dn dc-audio" loop preload src={bgMusic}>
        您的浏览器不支持 audio 标签。
      </audio>
    )
  }
}
