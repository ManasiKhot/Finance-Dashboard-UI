
import { useFinanceStore } from '../store/useFinanceStore';
import { UserCircle } from 'lucide-react';

export default function Topbar() {
  const { role, setRole } = useFinanceStore();

  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8">
      <h2 className="text-lg font-medium text-slate-800 capitalize">Overview</h2>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm">
          <UserCircle className="text-slate-400" size={20} />
          <span className="text-slate-600 font-medium">Role:</span>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-md px-2 py-1 outline-none focus:border-blue-500"
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>
    </header>
  );
}