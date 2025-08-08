import { useState } from "react";
import Modal from "@/components/Modal";

const ClientList = () => {
  const [clients] = useState([
    { id: 1, company_name: "PT. Maju Mundur", owner_name: "Budi", phone: "08123456789", category: "IT", package: "Gold" },
    { id: 2, company_name: "CV. Sukses Selalu", owner_name: "Siti", phone: "08234567890", category: "Konsultan", package: "Silver" },
    { id: 3, company_name: "UD. Jaya Abadi", owner_name: "Andi", phone: "08345678901", category: "Manufaktur", package: "Bronze" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editClient, setEditClient] = useState<Client | null>(null);
  const [formData, setFormData] = useState({
    company_name: "",
    owner_name: "",
    phone: "",
    category: "",
    package: "",
  });

  const handleEdit = (client: Client) => {
    setEditClient(client);
    setFormData({
      company_name: client.company_name,
      owner_name: client.owner_name,
      phone: client.phone,
      category: client.category,
      package: client.package,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editClient) {
      // Update logic here
    } else {
      // Create logic here
    }
    setIsModalOpen(false);
    setEditClient(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Clients</h2>
        <button
          onClick={() => {
            setEditClient(null);
            setFormData({ company_name: "", owner_name: "", phone: "", category: "", package: "" });
            setIsModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Client
        </button>
      </div>

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Company</th>
            <th className="p-2">Owner</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Category</th>
            <th className="p-2">Package</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c) => (
            <tr key={c.id} className="border-t">
              <td className="p-2">{c.company_name}</td>
              <td className="p-2">{c.owner_name}</td>
              <td className="p-2">{c.phone}</td>
              <td className="p-2">{c.category}</td>
              <td className="p-2">{c.package}</td>
              <td className="p-2 flex gap-2">
                <button onClick={() => handleEdit(c)} className="text-blue-600 hover:underline">
                  Edit
                </button>
                <button onClick={() => handleDelete(c.id)} className="text-red-600 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editClient ? "Edit Client" : "Add Client"}
      >
        <form onSubmit={handleSubmit} className="space-y-3">
          {["company_name", "owner_name", "phone", "category", "package"].map((field) => (
            <input
              key={field}
              placeholder={field.replace("_", " ")}
              value={(formData as any)[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              className="border p-2 w-full rounded"
            />
          ))}
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
          >
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ClientList;
