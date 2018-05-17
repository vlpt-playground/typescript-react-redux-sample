import * as React from 'react';
import { Info } from '../store/modules/list';

interface ListProps {
  input: string;
  list: Info[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInsert: () => void;
}

const List: React.SFC<ListProps> = ({ input, list, onChange, onInsert }) => (
  <div>
    <input value={input} onChange={onChange} />
    <button onClick={onInsert}>INSERT</button>
    <ul>{list.map(info => <li key={info.id}>{info.text}</li>)}</ul>
  </div>
);

export default List;
