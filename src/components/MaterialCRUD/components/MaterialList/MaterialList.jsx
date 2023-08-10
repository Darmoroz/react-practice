import { Material } from './Material';

export const MaterialList = ({ items, ...otherProps }) => {
  return (
    <ul className="http">
      {items.map(item => (
        <li key={item.id} style={{ lineHeight: 2 }}>
          <Material item={item} {...otherProps} />
        </li>
      ))}
    </ul>
  );
};
