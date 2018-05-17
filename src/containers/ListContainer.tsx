import * as React from 'react';
import { listActions, Info } from '../store/modules/list';
import List from '../components/List';
import { connect } from 'react-redux';
import { State } from '../store/modules';
import { bindActionCreators } from 'redux';

interface ListContainerProps {
  ListActions: typeof listActions;
  input: string;
  list: Info[];
}

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

export default connect(
  ({ list }: State) => ({
    input: list.input,
    list: list.list,
  }),
  dispatch => ({
    ListActions: bindActionCreators(listActions, dispatch),
  })
)(ListContainer);
