import React, {Component} from 'react';
import bgVideo from 'assets/bg-video.mp4';
import videoPoster from 'images/video-poster.jpg';

export default class extends Component {

  componentDidMount() {
    const {root} = this.refs;
    root.setAttribute('x-webkit-airplay', 'true');
    root.setAttribute('x5-video-player-type', 'h5');
    root.setAttribute('x5-video-player-fullscreen', 'true');
    root.setAttribute('x5-video-ignore-metadata', 'true');
  }

  action(inAction){
    const {root} = this.refs;
    root[inAction]();
  }


  render() {
    const { ...props }  = this.props;
    return (
      <video {...props} ref="root"
             width="100%" height="100%"
             muted
             autoPlay={true}
             playsInline="true"
             className="video"
             preload="auto"
             poster={videoPoster}
             src='http://file.ih5.cn/v3/files/1633997/20180109/b04b6294.mp4'/>
    );
  }
}
