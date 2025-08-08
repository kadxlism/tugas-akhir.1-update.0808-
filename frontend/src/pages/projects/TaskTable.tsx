import { useState } from 'react';

const TaskTable = () => {
  const [tasks] = useState([
    { id: 1, title: 'Design UI', due_date: '2025-08-10', status: 'In Progress' },
    { id: 2, title: 'Setup Database', due_date: '2025-08-12', status: 'Completed' },
    { id: 3, title: 'API Integration', due_date: '2025-08-15', status: 'Pending' },
  ]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Task Table</h2>
      <table className="min-w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Due Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td className="border px-4 py-2">{task.title}</td>
              <td className="border px-4 py-2">{task.due_date}</td>
              <td className="border px-4 py-2">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;