import React, { useEffect, useState } from "react";

const EditPlayer = ({ player, editPlayer, onCancel }) => {
  const [id, setId] = useState(player.id);
  const [username, setUsername] = useState(player.username);
  const [password, setPassword] = useState(player.password);
  const [role, setRole] = useState(player.role);

  const handleIdChange = (e) => setId(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPlayer = {
      id,
      username,
      password,
      role,
    };
    editPlayer(updatedPlayer);
  };

  return (
    <div className="edit-player">
      <h2>Edit Player</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            className="form-control"
            value={role}
            onChange={handleRoleChange}
          />
        </div>
        <div className="buttons">
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditPlayer;
