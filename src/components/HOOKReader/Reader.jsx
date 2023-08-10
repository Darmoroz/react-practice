import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Controls } from './components/Controls/Controls';
import { Progress } from './components/Progress/Progress';
import { Publication } from './components/Publication/Publication';
import items from 'assets/publications.json';

const LS_KEY = 'reader_item_idx';

const Reader = () => {
  const [activeIdx, setActiveIdx] = useState(() => {
    return Number(window.localStorage.getItem(LS_KEY)) ?? 0;
  });
  const currentItem = items[activeIdx];
  const totalItems = items.length;

  const changeIdx = value => {
    setActiveIdx(state => {
      return state + value;
    });
  };

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, activeIdx);
  }, [activeIdx]);

  return (
    <div>
      <Controls
        current={activeIdx + 1}
        total={totalItems}
        onChange={changeIdx}
      />
      <Progress current={activeIdx + 1} total={totalItems} />
      <Publication item={currentItem} />
    </div>
  );
};
export default Reader;

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
};
// export class Reader extends Component {
//   static propTypes = {
//     items: PropTypes.arrayOf(
//       PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired,
//       }).isRequired
//     ).isRequired,
//   };
//   state = {
//     activeIdx: 0,
//   };
//   componentDidMount() {
//     const saveState = localStorage.getItem(LS_KEY);
//     if (saveState) {
//       this.setState({ activeIdx: Number(saveState) });
//     }
//   }

//   // componentWillUnmount() {}

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.activeIdx !== this.state.activeIdx) {
//       localStorage.setItem(LS_KEY, this.state.activeIdx);
//     }
//   }

//   changeIdx = value => {
//     this.setState(state => ({ activeIdx: state.activeIdx + value }));
//   };

//   render() {
//     const { activeIdx } = this.state;
//     const { items } = this.props;
//     const currentItem = items[activeIdx];
//     const totalItems = items.length;
//     return (
//       <div>
//         <Controls
//           current={activeIdx + 1}
//           total={totalItems}
//           onChange={this.changeIdx}
//         />
//         <Progress current={activeIdx + 1} total={totalItems} />
//         <Publication item={currentItem} />
//       </div>
//     );
//   }
// }
