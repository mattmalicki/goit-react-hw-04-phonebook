export const Label = ({ name, className, children }) => {
  return (
    <label name={name} className={className}>
      {children}
    </label>
  );
};
