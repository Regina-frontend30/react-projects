import { useRef } from 'react';
import './Card.css';
import { useAutoFocus } from './useAutoFocus';

export const Card = ({
  id,
  title,
  done,
  onToggle,
  onDelete,
  onTitleChange,
}) => {
  const inputRef = useRef(null);
  useAutoFocus(inputRef);

  const handleTitleChange = (event) => {
    onTitleChange(id, event.target.value);
  };

  return (
    <div className={`card ${done ? 'card--done' : ''}`}>
      <input
        className="card__done"
        type="checkbox"
        checked={done}
        onChange={() => onToggle(id)}
      />

      <input
        ref={inputRef}
        className="card__title"
        type="text"
        value={title}
        onChange={handleTitleChange}
        onBlur={() => {
          if (!title.trim()) {
            onDelete(id);
          }
        }}
      />
    </div>
  );
};