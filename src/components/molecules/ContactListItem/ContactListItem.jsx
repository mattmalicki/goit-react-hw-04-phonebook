import { Button } from 'components/atoms/Button/Button';
import { Span } from 'components/atoms/Span/Span';

export const ContactListItem = ({ item, classes }) => {
  return (
    <li className={classes.contactItem} id={item.id}>
      <Span className={classes.contactNumber}>{item.name}</Span>
      <Span className={classes.contactNumber}>{item.number}</Span>
      <Button className={classes.contactButton} type="button">
        Delete
      </Button>
    </li>
  );
};
