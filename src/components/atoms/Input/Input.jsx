export const Input = ({
  className,
  type = 'text',
  name = '',
  pattern = '',
  title = '',
  isRequired = false,
  onChange = () => {},
}) => {
  return (
    <input
      className={className}
      type={type}
      onChange={onChange}
      name={name}
      pattern={pattern}
      title={title}
      required={isRequired}
    />
  );
};
