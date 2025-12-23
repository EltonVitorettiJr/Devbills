import type { Category, CategorySummary } from "./Category";

export const TransactionType = {
  INCOME: "income",
  EXPENSE: "expense",
} as const;

export interface Transaction {
  id: string;
  description: string;
  categoryId: string;
  type: typeof TransactionType;
  updatedAt: string | Date;
  createdAt: string | Date;
  date: string | Date;
  amount: number;
  category: Category;
  userId: string;
}

export interface TransactionFilter {
  month: number;
  year: number;
  categoryId?: string;
  type?: typeof TransactionType;
}

export interface TransactionSummary {
  totalExpenses: number;
  totalIncomes: number;
  balance: number;
  expensesByCategory: CategorySummary[];
}
export interface MonthlyItem {
  name: string;
  expenses: number;
  incomes: number;
}
