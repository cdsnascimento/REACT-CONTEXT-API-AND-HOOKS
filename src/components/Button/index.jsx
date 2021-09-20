import P from 'prop-types';

export const Button = ({ children, onButtonClick }) => {
  return <button onClick={onButtonClick}>Increase</button>;
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
}
