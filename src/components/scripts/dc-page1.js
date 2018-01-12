import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import bgPage1Img from 'images/bg-page1.jpg';
import page1Text1 from 'images/page1-text1.png';
import page1Text2 from 'images/page1-text2.png';

export default class extends Component {
  render() {
    return (
      <section className="dc-page1">
        <QueueAnim type="top" duration={1000}>
          <img key="page1" src={bgPage1Img} className="w100 webkit-sassui-transform-center-y" style={{top: '0.64rem'}}
               alt=""/>
        </QueueAnim>
        <QueueAnim type="bottom" duration={1000} delay={1000} className="abs"
                   style={{left: '0.5rem', bottom: '4.2rem'}}>
          <img key="page1-text1" className="page1-text1" src={page1Text1}/>
        </QueueAnim>
        <QueueAnim type="bottom" duration={1000} delay={2000} className="abs"
                   style={{left: '0.5rem', bottom: '1.6rem'}}>
          <img key="page1-text2" className="page1-text2" src={page1Text2}/>
        </QueueAnim>
      </section>
    )
  }
}
