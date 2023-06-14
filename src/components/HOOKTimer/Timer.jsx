import Modal from 'components/HOOKModal/Modal';

import { TimerModal } from './TimerModal';
import { useToggle } from 'react-use';

const Timer = () => {
  const [on, toggle] = useToggle(false);
  return (
    <div className="d-flex my-5">
      <button type="button" className="btn btn-primary my-5" onClick={toggle}>
        Open timer
      </button>

      {on && (
        <Modal onClose={toggle}>
          <TimerModal />
        </Modal>
      )}
    </div>
  );
};

export default Timer;
