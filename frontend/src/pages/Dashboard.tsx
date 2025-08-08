import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "@/services/axios";
import { useAuth } from "@/contexts/useAuth";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Stats {
  clients: number;
  projects: number;
  tasks: number;
}

const StatCard = ({
  label,
  value,
  color,
  onClick,
}: {
  label: string;
  value: number;
  color: string;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="bg-white shadow-sm rounded-xl p-5 flex flex-col gap-2 border border-transparent hover:border-gray-200 hover:shadow-md transition cursor-pointer group"
  >
    <span className="text-sm font-medium text-gray-500 tracking-wide">{label}</span>
    <span className={`text-4xl font-bold ${color} leading-none`}>{value}</span>
    <span className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition">
      Lihat {label.toLowerCase()} →
    </span>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({ clients: 0, projects: 0, tasks: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    let active = true;
    const fetchStats = async () => {
      try {
        const [clientsRes, projectsRes, tasksRes] = await Promise.all([
          axios.get("/api/clients"),
          axios.get("/api/projects"),
          axios.get("/api/tasks"),
        ]);
        if (!active) return;
        setStats({
          clients: clientsRes.data.length,
            projects: projectsRes.data.length,
            tasks: tasksRes.data.length,
        });
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchStats();
    return () => { active = false; };
  }, []);

  const chartData = {
    labels: ["Clients", "Projects", "Tasks"],
    datasets: [
      {
        data: [stats.clients, stats.projects, stats.tasks],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
        borderWidth: 2,
        borderColor: "#ffffff",
      },
    ],
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard Overview</h2>
          <p className="text-sm text-gray-500 mt-1">
            Ringkasan cepat data sistem kamu.
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Logout
        </button>
      </div>

      {/* Stats Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="h-32 bg-white rounded-xl animate-pulse p-5">
              <div className="h-4 w-24 bg-gray-200 rounded mb-4"></div>
              <div className="h-8 w-16 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard
            label="Clients"
            value={stats.clients}
            color="text-blue-500"
            onClick={() => navigate("/clients")}
          />
          <StatCard
            label="Projects"
            value={stats.projects}
            color="text-green-500"
            onClick={() => navigate("/projects")}
          />
            <StatCard
            label="Tasks"
            value={stats.tasks}
            color="text-yellow-500"
            onClick={() => navigate("/tasks")}
          />
        </div>
      )}

      {/* Chart Section */}
      <div className="bg-white shadow-sm rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Project Overview</h3>
        </div>
        {loading ? (
          <div className="h-64 flex items-center justify-center text-gray-400 text-sm">
            Memuat chart...
          </div>
        ) : (
          <div className="max-w-xs">
            <Doughnut data={chartData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
