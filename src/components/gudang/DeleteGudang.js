import React from "react";

const DeleteGudang = ({ item, deleteGudang, onCancel }) => {
  if (!item) {
    return <div>No player data available</div>;
  }

  const handleDelete = () => {
    deleteGudang(item.id);

    // Mengambil data gudang dari localStorage
    const gudangList = JSON.parse(localStorage.getItem("gudangList")) || [];

    // Memperbarui data dengan menghapus item yang dihapus
    const updatedGudangList = gudangList.filter(
      (gudang) => gudang.id !== item.id
    );

    // Menyimpan data yang diperbarui kembali ke localStorage
    localStorage.setItem("gudangList", JSON.stringify(updatedGudangList));
  };

  return (
    <div className="delete-gudang-container">
      <h2 className="delete-gudang-header">Delete Player</h2>
      <p className="delete-gudang-message">
        Are you sure you want to delete {item.id}?
      </p>
      <div className="delete-gudang-buttons">
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteGudang;
