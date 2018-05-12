import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { State } from '../store/modules';
import { counterActions } from '../store/modules/counter';

interface CounterContainerProps {
  number: number;
  CounterActions: typeof counterActions;
}
class CounterContainer extends React.Component<CounterContainerProps> {
  public handleIncrease = () => {
    this.props.CounterActions.increment(1);
  };

  public render() {
    return <Counter onIncrease={this.handleIncrease} number={this.props.number} />;
  }
}

export default connect(
  ({ counter }: State) => ({
    number: counter.number,
  }),
  dispatch => ({
    CounterActions: bindActionCreators(counterActions, dispatch),
  })
)(CounterContainer);
