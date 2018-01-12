import React,{Component} from 'react';
import classNames from 'classnames';
import arrowImg from 'images/arrow.png';

export default class extends Component {
  render() {
    return (
      <button className="abs z3 b0 webkit-sassui-transform-center-x dc-blink-arrow blink-element">
        <img src={arrowImg} alt=""/>
      </button>
    )
  }
}
