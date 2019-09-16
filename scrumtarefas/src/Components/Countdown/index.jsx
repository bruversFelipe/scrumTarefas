import React from "react";
import Icon from "antd/lib/icon";
import CountdownWrapper from "./style";

class Countdown extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      interval: f => f,
      count: 0,
      velocity: 30
    };
  }

  componentDidMount() {
    this.interval();
  }

  componentWillUnmount = () => {
    const { interval } = this.state;
    clearInterval(interval);
  };

  interval = () => {
    const { velocity } = this.state;
    this.setState({
      interval: setInterval(this.increment, velocity)
    });
  };

  increment = () => {
    const {
      state: { count, interval },
      props: { numberMax }
    } = this;
    if (count < numberMax) {
      this.setState({ count: count + 1 });
    } else {
      clearInterval(interval);
    }
  };

  render() {
    const {
      props: { color, title, icon },
      state: { count }
    } = this;

    return (
      <CountdownWrapper color={color}>
        <div className="count">{count}</div>
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="icon-back">
          <Icon type={icon} />
        </div>
      </CountdownWrapper>
    );
  }
}

export default Countdown;
