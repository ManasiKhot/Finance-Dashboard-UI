# 📊 Finance Dashboard UI

A clean, interactive, and responsive frontend dashboard for tracking financial activity. Built as an evaluation project for a frontend development internship.

## 🚀 Tech Stack

- **Framework:** React (bootstrapped with Vite for speed)
- **Styling:** Tailwind CSS (for rapid, responsive UI development)
- **State Management:** Zustand (lightweight, hook-based state management)
- **Charts:** Recharts (composable charting library)
- **Icons:** Lucide-React
- **Persistence:** LocalStorage (via Zustand persist middleware)

## ✨ Features

1. **Dashboard Overview:** Displays total balance, income, and expenses using summary cards, alongside interactive charts for cash flow trends and categorical spending.
2. **Transactions Table:** A dynamic list of financial transactions with text-based search filtering by category or date.
3. **Role-Based Access Control (RBAC):** Simulated on the frontend. 
   - **Viewers** have read-only access.
   - **Admins** can add new transactions via a responsive modal form.
4. **Insights Engine:** Automatically calculates top spending categories, largest single expenses, and overall savings rates.
5. **Data Persistence:** Financial data and user roles are saved to the browser's `localStorage` to persist across page refreshes.

## 🛠️ Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <https://github.com/ManasiKhot/Finance-Dashboard-UI>

2.  Navigate into the project directory:
    ```bash
    cd finance-dashboard

3. Install the dependencies:
    ```bash
    npm install

4. Start the development server:
    ```bash
    npm run dev

5. Open your browser and visit http://localhost:5173

## Design & Architecture Decisions
**State Management**: I chose Zustand over Redux or Context API because it requires significantly less boilerplate, handles complex state updates cleanly, and has a very simple API for localStorage persistence.

**Routing**: To keep the application lightweight and focused on UI/UX, I opted for conditional component rendering (state-based view switching) rather than implementing a heavy router like React Router.

**Styling**: Tailwind CSS was used to ensure the application is fully responsive out-of-the-box and maintains a consistent design system without needing bloated CSS files.

