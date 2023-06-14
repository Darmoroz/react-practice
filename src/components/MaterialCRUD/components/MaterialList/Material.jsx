import { Component } from 'react';
import Modal from 'components/HOOKModal/Modal';
import { EditMaterialModal } from '../EditMaterialModal/EditMaterialModal';

export class Material extends Component {
  state = {
    isModalOpen: false,
  };
  handleToogleModal = () => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  };
  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <em style={{ marginLeft: '16px', marginRight: '16px' }}>
          {item.title}
        </em>
        <button
          style={{ marginRight: '8px' }}
          type="button"
          onClick={() => onDelete(item.id)}
        >
          delete
        </button>
        <button type="button" onClick={this.handleToogleModal}>
          Edit
        </button>
        {isModalOpen && (
          <Modal onClose={this.handleToogleModal}>
            <EditMaterialModal
              item={item}
              onClose={this.handleToogleModal}
              onEdit={() =>
                onUpdate({ id: item.id, title: new Date().toString() })
              }
            />
          </Modal>
        )}
      </div>
    );
  }
}
