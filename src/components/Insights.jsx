// src/components/Insights.jsx
import { useFinanceStore } from '../store/useFinanceStore';
import { Lightbulb, AlertTriangle, Trophy } from 'lucide-react';

export default function Insights() {
  const { transactions } = useFinanceStore();

  const expenses = transactions.filter(t => t.type === 'expense');
  const incomes = transactions.filter(t => t.type === 'income');

  // 1. Calculate Highest Spending Category
  const categoryTotals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});
  
  let highestCategory = { name: 'N/A', amount: 0 };
  Object.entries(categoryTotals).forEach(([name, amount]) => {
    if (amount > highestCategory.amount) {
      highestCategory = { name, amount };
    }
  });

  // 2. Largest Single Expense
  const largestExpense = expenses.length > 0 
    ? expenses.reduce((max, t) => t.amount > max.amount ? t : max, expenses[0])
    : { category: 'N/A', amount: 0, date: 'N/A' };

  // 3. Savings Rate
  const totalIncome = incomes.reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);
  const savingsRate = totalIncome > 0 ? (((totalIncome - totalExpense) / totalIncome) * 100).toFixed(1) : 0;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Financial Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Insight 1 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
          <div className="bg-amber-100 p-4 rounded-full text-amber-600 mb-4">
            <Lightbulb size={28} />
          </div>
          <h3 className="text-slate-500 font-medium text-sm mb-1">Top Spending Category</h3>
          <p className="text-xl font-bold text-slate-800">{highestCategory.name}</p>
          <p className="text-sm text-slate-500 mt-1">${highestCategory.amount.toLocaleString()} total</p>
        </div>

        {/* Insight 2 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
          <div className="bg-rose-100 p-4 rounded-full text-rose-600 mb-4">
            <AlertTriangle size={28} />
          </div>
          <h3 className="text-slate-500 font-medium text-sm mb-1">Largest Single Expense</h3>
          <p className="text-xl font-bold text-slate-800">{largestExpense.category}</p>
          <p className="text-sm text-slate-500 mt-1">${largestExpense.amount.toLocaleString()} on {largestExpense.date}</p>
        </div>

        {/* Insight 3 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
          <div className="bg-emerald-100 p-4 rounded-full text-emerald-600 mb-4">
            <Trophy size={28} />
          </div>
          <h3 className="text-slate-500 font-medium text-sm mb-1">Savings Rate</h3>
          <p className="text-xl font-bold text-slate-800">{savingsRate}%</p>
          <p className="text-sm text-slate-500 mt-1">of total income saved</p>
        </div>

      </div>
    </div>
  );
}