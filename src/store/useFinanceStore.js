import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Some realistic mock data to start with
const initialTransactions = [
  { id: '1', date: '2026-04-01', amount: 5000, category: 'Salary', type: 'income' },
  { id: '2', date: '2026-04-02', amount: 1200, category: 'Rent', type: 'expense' },
  { id: '3', date: '2026-04-03', amount: 150, category: 'Groceries', type: 'expense' },
  { id: '4', date: '2026-04-04', amount: 60, category: 'Entertainment', type: 'expense' },
  { id: '5', date: '2026-04-05', amount: 200, category: 'Freelance', type: 'income' },
];

export const useFinanceStore = create(
  persist(
    (set) => ({
      // State
      transactions: initialTransactions,
      role: 'viewer', // 'viewer' or 'admin'

      // Actions
      setRole: (newRole) => set({ role: newRole }),
      
      addTransaction: (transaction) => 
        set((state) => ({ 
          transactions: [{ ...transaction, id: crypto.randomUUID() }, ...state.transactions] 
        })),
        
      deleteTransaction: (id) => 
        set((state) => ({
          transactions: state.transactions.filter(t => t.id !== id)
        }))
    }),
    {
      name: 'finance-dashboard-storage', // name of the item in local storage
    }
  )
);