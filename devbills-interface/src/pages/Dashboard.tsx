import { ArrowUp, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import MonthYearSelect from "../components/MonthYearSelect";
import { getTransactionsSummary } from "../services/transactionService";
import type { TransactionSummary } from "../types/Transactions";
import { formatCurrency } from "../utils/Formatters";

const initialSummary: TransactionSummary = {
  balance: 0,
  expensesByCategory: [],
  totalExpenses: 0,
  totalIncomes: 0,
};

const Dashboard = () => {
  const currentDate = new Date();
  // por padrão, jan é o mês 0
  const [month, setMonth] = useState<number>(currentDate.getMonth() + 1);
  const [year, setYear] = useState<number>(currentDate.getFullYear());
  const [summary, setSummary] = useState(initialSummary);

  useEffect(() => {
    async function loadTransactionsSummary() {
      const result = await getTransactionsSummary(month, year);

      setSummary(result);
    }

    loadTransactionsSummary();
  }, [month, year]);

  return (
    <div className="container-app py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Dashboard</h1>
        <MonthYearSelect
          month={month}
          year={year}
          onMonthChange={setMonth}
          onYearChange={setYear}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Cards
          title="Saldo"
          icon={<Wallet className="text-primary-500" size={20} />}
          hover
          glowEffect={summary.balance > 0}
        >
          <p
            className={`text-2xl font-semibold mt-2
            ${summary.balance > 0 ? "text-primary-500" : "text-red-500"}
            
          `}
          >
            {summary.balance < 0 ? "- " : ""}
            {formatCurrency(summary.balance)}
          </p>
        </Cards>

        <Cards
          title="Receitas"
          icon={<ArrowUp className="text-primary-500" size={20} />}
          hover
        >
          <p className={"text-2xl font-semibold mt-2 text-primary-500"}>
            {formatCurrency(summary.totalIncomes)}
          </p>
        </Cards>

        <Cards
          title="Despesas"
          icon={<Wallet className="text-red-500" size={20} />}
        >
          <p className="text-2xl font-semibold mt-2 text-red-500">
            - {formatCurrency(summary.totalExpenses)}
          </p>
        </Cards>
      </div>
    </div>
  );
};

export default Dashboard;
