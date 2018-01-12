import React, {Component} from 'react';
import classNames from 'classnames';

export default class extends Component {

  static defaultProps = {
    value: false,
    onChange: nx.noop
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    const {value} = nextProps;
    if (value !== this.state.value) {
      this.setState({value});
    }
  }

  _onClick = e => {
    const {onChange} = this.props;
    this.setState({value: !this.state.value}, () => {
      onChange({
        target: {
          value: this.state.value
        }
      });
    });
  };

  render() {
    const {value, ...props} = this.props;
    return (
      <button {...props}
              className={ classNames("dc-rotate-music-icon infinite animated", {'rotation': this.state.value})}
              onClick={this._onClick}>&nbsp;
      </button>
    );
  }

}
