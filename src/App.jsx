// src/App.jsx
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-8">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'transactions' && <div>Transactions View</div>}
          {activeTab === 'insights' && <div>Insights View</div>}
          {activeTab === 'transactions' && <Transactions />}
        </main>
      </div>
    </div>
  );
}

export default App;