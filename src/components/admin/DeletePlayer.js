import React from "react";
import "../../App.css"; // Import CSS file for styling

const DeletePlayer = ({ player, deletePlayer, onCancel }) => {
  if (!player) {
    return <div className="delete-player">No player data available</div>;
  }

  const handleDelete = () => {
    deletePlayer(player.role);
  };

  return (
    <div className="delete-player">
      <h2>Delete Player</h2>
      <p>Are you sure you want to delete {player.role}?</p>
      <div className="button-group">
        <button onClick={handleDelete} className="delete-btn">Delete</button>
        <button onClick={onCancel} className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default DeletePlayer;
