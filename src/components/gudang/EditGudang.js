import React, { useState } from "react";

const EditGudang = ({ item, editGudang, onCancel }) => {
  const [id, setId] = useState(item.id);
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);

  const handleNameChange = (e) => setName(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedGudang = {
      id,
      name,
      quantity,
    };
    editGudang(updatedGudang);
  };

  return (
    <div className="edit-form-container">
      <h2>Edit Gudang</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="form-control"
          />
        </div>
        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button type="button" onClick={onCancel} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditGudang;
