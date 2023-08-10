import styled from 'styled-components';

const Wrapper = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const Container = styled(Wrapper)`
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`;
