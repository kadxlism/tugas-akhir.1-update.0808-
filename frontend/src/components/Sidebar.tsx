import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Project Manager</h2>
      <nav className="space-y-3">
        <Link to="/dashboard" className="block hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/clients" className="block hover:bg-gray-700 p-2 rounded">Clients</Link>
        <Link to="/projects" className="block hover:bg-gray-700 p-2 rounded">Projects</Link>
        <Link to="/tasks" className="block hover:bg-gray-700 p-2 rounded">Tasks</Link>
        <Link to="/timeline" className="block hover:bg-gray-700 p-2 rounded">Timeline</Link>
        <Link to="/assign" className="block hover:bg-gray-700 p-2 rounded">Assign Users</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
