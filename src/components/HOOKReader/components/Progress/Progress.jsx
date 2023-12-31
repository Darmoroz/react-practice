import PropTypes from 'prop-types';

export const Progress = ({ current, total }) => {
  return (
    <p>
      {current}/{total}
    </p>
  );
};
Progress.ropTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
