import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import List from '../components/List';
import { State } from '../store/modules';
import { listActions } from '../store/modules/list';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type ListContainerProps = StateProps & DispatchProps;

class ListContainer extends React.Component<ListContainerProps> {
  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { ListActions } = this.props;
    ListActions.setInput(e.target.value);
  };
  public handleInsert = () => {
    const { input, ListActions } = this.props;
    ListActions.insert(input);
    ListActions.setInput('');
  };
  public render() {
    const { input, list } = this.props;
    return (
      <List onChange={this.handleChange} onInsert={this.handleInsert} input={input} list={list} />
    );
  }
}

const mapStateToProps = ({ list }: State) => ({
  input: list.input,
  list: list.list,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ListActions: bindActionCreators(listActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
