import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { Searchquery} from "../../store/slices/searchSlice";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const text = useSelector((state) => state.search.text);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(Searchquery(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop?${text}`);
  };

  return (
    <form
      style={{ display: "flex", alignItems: "center", position: "relative" }}
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        value={text}
        placeholder="Search..."
        onChange={handleChange}
        style={{
          padding: "0.5rem 2rem", // Adjust the padding as needed
          borderRadius: "4px", // Adjust the border radius as needed
          border: "1px solid #ccc", // Add a border to the input field
          marginRight: "0.5rem",
        }}
      />
      <button
        type="submit"
        style={{
          position: "absolute",
          right: "0.5rem",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <SearchOutlined style={{ fontSize: "1.2rem", color: "#1890ff" }} />
      </button>
    </form>
  );
};

export default Search;
