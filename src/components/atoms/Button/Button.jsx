export const Button = ({ children, className, type }) => {
  return (
    <button id={children} className={className} type={type}>
      {children}
    </button>
  );
};
