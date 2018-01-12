import React, {Component} from 'react';
import classNames from 'classnames';
import page3Text1 from 'images/page3-text1.png';
import btnYq from 'images/btn-yuqi.png';
import btnZc from 'images/btn-zc.png';
import AppBase, {
  $api, $app
} from 'components/scripts/index';

export default class extends Component {

  _onClick1 = e =>{
    console.log('click11111');
  };

  _onClick2 = e =>{
    console.log('click222');
  };

  render() {
    const { isWechat } = AppBase.$.memory;
    return (
      <section className="rel h100 dc-page3">
        <div className="inner webkit-sassui-transform-center-xy">
          <img className="page3-text1" src={page3Text1} alt=""/>

          <div className="tc actions blink-element" hidden={isWechat}>
            <button onClick={this._onClick1} className="btn btn-yq">
              <img src={btnYq} alt=""/>
            </button>
            <button onClick={this._onClick2} className="ml20 btn btn-zc">
              <img src={btnZc} alt=""/>
            </button>
          </div>
        </div>
      </section>
    )
  }
}
