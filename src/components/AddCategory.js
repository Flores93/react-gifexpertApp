import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCat }) => {
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputVal.trim().length > 2) {
      setCat((prev) => [inputVal, ...prev]);
      setInputVal("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputVal} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCat: PropTypes.func.isRequired,
};

export default AddCategory;
