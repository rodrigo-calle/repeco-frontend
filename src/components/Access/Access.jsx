import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';
import { useAppState } from '../../context/store';

const Access = ({ children, roleUser }) => {
  const { user } = useAppState();

  return user?.role === roleUser ? (
    <div>{children}</div>
  ) : (
    <Navigate to="/login" />
  );
};

Access.propTypes = {
  roleUser: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Access;
