import React from 'react';
import './SearchBar.css';

interface Props {
  taskContent: string;
  setTaskContent: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const SearchBar: React.FC<Props> = ({
  taskContent,
  setTaskContent,
  handleAdd,
}) => {
  return (
    <div>
      <form className="form" onSubmit={handleAdd}>
        <input
          type="input"
          name="content"
          value={taskContent}
          onChange={(e) => setTaskContent(e.target.value)}
          className="form__input"
          placeholder="Write your task!"
        />
        <button type="submit" className="form__button">
          Add
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
