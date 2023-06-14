export const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Edit Modal Window</h1>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Edit title to date now
      </button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};
