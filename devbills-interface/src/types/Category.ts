import type { TransactionType } from "./Transactions";

export interface Category {
  id: string;
  name: string;
  color: string;
  type: typeof TransactionType;
}

export interface CategorySummary {
  categoryId: string;
  categoryName: string;
  categoryColor: string;
  amount: number;
  percentage: number;
}
