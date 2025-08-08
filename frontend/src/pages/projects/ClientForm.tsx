import { useState } from 'react';
import axios from '@/services/axios';

const ClientForm = () => {
  const [form, setForm] = useState({
    company_name: '',
    owner: '',
    phone: '',
    category: '',
    package: '',
    dp: '',
    paid: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('/api/clients', form);
    alert('Client created');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow">
      <input type="text" placeholder="Company Name" value={form.company_name}
        onChange={e => setForm({...form, company_name: e.target.value})} className="input" />
      <input type="text" placeholder="Owner" value={form.owner}
        onChange={e => setForm({...form, owner: e.target.value})} className="input" />
      <input type="text" placeholder="Phone" value={form.phone}
        onChange={e => setForm({...form, phone: e.target.value})} className="input" />
      <input type="text" placeholder="Category" value={form.category}
        onChange={e => setForm({...form, category: e.target.value})} className="input" />
      <input type="text" placeholder="Package" value={form.package}
        onChange={e => setForm({...form, package: e.target.value})} className="input" />
      <input type="number" placeholder="DP" value={form.dp}
        onChange={e => setForm({...form, dp: e.target.value})} className="input" />
      <input type="number" placeholder="Paid" value={form.paid}
        onChange={e => setForm({...form, paid: e.target.value})} className="input" />
      <button type="submit" className="btn">Save</button>
    </form>
  );
};

export default ClientForm;
