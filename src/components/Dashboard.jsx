// src/components/Dashboard.jsx
import { useFinanceStore } from '../store/useFinanceStore';
import SummaryCard from './SummaryCard';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

export default function Dashboard() {
  const { transactions } = useFinanceStore();

  // Calculate totals
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="space-y-6">
      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard 
          title="Total Balance" 
          amount={balance} 
          icon={Wallet} 
          colorClass="bg-blue-100 text-blue-600" 
        />
        <SummaryCard 
          title="Total Income" 
          amount={totalIncome} 
          icon={TrendingUp} 
          colorClass="bg-emerald-100 text-emerald-600" 
        />
        <SummaryCard 
          title="Total Expenses" 
          amount={totalExpense} 
          icon={TrendingDown} 
          colorClass="bg-rose-100 text-rose-600" 
        />
      </div>

      {/* Placeholder for Charts (Commit 5) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white border border-slate-200 rounded-xl h-80 flex items-center justify-center text-slate-400">
          Chart Space 1
        </div>
        <div className="bg-white border border-slate-200 rounded-xl h-80 flex items-center justify-center text-slate-400">
          Chart Space 2
        </div>
      </div>
    </div>
  );
}