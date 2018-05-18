import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Counter from '../components/Counter';
import { State } from '../store/modules';
import { counterActions } from '../store/modules/counter';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
  somethingExtra?: string;
};

type CounterContainerProps = StateProps & DispatchProps & OwnProps;

class CounterContainer extends React.Component<CounterContainerProps> {
  public handleIncrease = () => {
    this.props.CounterActions.increment(3);
  };

  public handleDecrease = () => {
    this.props.CounterActions.decrement(5);
  };

  public render() {
    return (
      <Counter
        value={this.props.value}
        onIncrease={this.handleIncrease}
        onDecrease={this.handleDecrease}
      />
    );
  }
}

const mapStateToProps =  ({ counter }: State) => ({
  value: counter.value,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  CounterActions: bindActionCreators(counterActions, dispatch),
});

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
