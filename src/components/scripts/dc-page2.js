import React, {Component} from 'react';
import AppBase, {
  $api, $app
} from 'components/scripts/index';
import QueueAnim from 'rc-queue-anim';
import page2Text2 from 'images/page2-text2.png';

export default class extends Component {
  render() {
    const {member} = AppBase.$.memory;
    return (
      <section className="rel h100 dc-page2">
        <div className="inner webkit-sassui-transform-center-xy">
          <QueueAnim type="top" duration={1000} delay={300}>
            <p key="page2-text1" className="c-primary f16 mb30">
              亲爱的 { ( member && member.nickname) ? member.nickname : '堂小古'}:</p>
          </QueueAnim>
          <QueueAnim type="top" duration={2400} delay={800}>
            <img key="page2-text2" className="page2-text2" src={page2Text2}/>
          </QueueAnim>
        </div>
      </section>
    )
  }
}
