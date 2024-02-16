import PropTypes from "prop-types";

const Tag = ({ isChecked, onToggle, labelText }) => {
  return (
    <label htmlFor={labelText}>
      <div
        className={`cursor-pointer relative w-24 rounded-xl h-8  transition-colors duration-300 ${
          isChecked ? "bg-blue-500" : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        <input
          id={labelText}
          type="checkbox"
          className="w-0 h-0 opacity-0"
          checked={isChecked}
          onChange={onToggle}
        />
        <div className="absolute -top-0.5 left-6">{labelText}</div>
        <div className="absolute text-xl top-0 right-2">x</div>
      </div>
    </label>
  );
};

Tag.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default Tag;
