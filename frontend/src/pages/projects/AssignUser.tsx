import { useState } from "react";

const AssignUser = () => {
  const [projects] = useState([
    { id: 1, name: "Website Redesign" },
    { id: 2, name: "Mobile App" },
    { id: 3, name: "ERP System" },
  ]);
  const [users] = useState([
    { id: 1, name: "Budi" },
    { id: 2, name: "Siti" },
    { id: 3, name: "Andi" },
  ]);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const handleAssign = () => {
    if (selectedProject && selectedUser) {
      alert(`User ${selectedUser} assigned to project ${selectedProject}!`);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Assign User to Project</h2>
      <select
        className="border p-2 w-full mb-3"
        value={selectedProject}
        onChange={(e) => setSelectedProject(e.target.value)}
      >
        <option value="">Select Project</option>
        {projects.map((p) => (
          <option key={p.id} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      <select
        className="border p-2 w-full mb-3"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">Select User</option>
        {users.map((u) => (
          <option key={u.id} value={u.name}>
            {u.name}
          </option>
        ))}
      </select>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAssign}
      >
        Assign
      </button>
    </div>
  );
};

export default AssignUser;
