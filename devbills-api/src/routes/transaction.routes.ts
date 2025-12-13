import type { FastifyInstance } from "fastify";
import * as z from "zod";
import { createTransaction } from "../controllers/transactions/createTransaction.controller";
import { deleteTransaction } from "../controllers/transactions/deleteTransaction.controller";
import { getSummaryTransactions } from "../controllers/transactions/getSummaryTransactions.controller";
import { getTransactions } from "../controllers/transactions/getTransactions.controller";
import {
  createTransactionSchema,
  deleteTransactionSchema,
  getSummaryTransactionsSchema,
  getTransactionsSchema,
} from "../schemas/transaction.schema";

export const transactionRoutes = async (
  fastify: FastifyInstance,
): Promise<void> => {
  const postBodySchema = z.toJSONSchema(createTransactionSchema);
  delete postBodySchema.$schema;

  const getQueryParamsSchema = z.toJSONSchema(getTransactionsSchema);
  delete getQueryParamsSchema.$schema;

  const summaryQueryParamsSchema = z.toJSONSchema(getSummaryTransactionsSchema);
  delete summaryQueryParamsSchema.$schema;

  const deleteQueryTransactionSchema = z.toJSONSchema(deleteTransactionSchema);
  delete deleteQueryTransactionSchema.$schema;

  //Criação de uma transação
  fastify.route({
    method: "POST",
    url: "/",
    schema: {
      body: postBodySchema,
    },
    handler: createTransaction,
  });

  //Consultar as transações com filtros
  fastify.route({
    method: "GET",
    url: "/",
    schema: {
      querystring: getQueryParamsSchema,
    },
    handler: getTransactions,
  });

  fastify.route({
    method: "GET",
    url: "/summary",
    schema: {
      querystring: summaryQueryParamsSchema,
    },
    handler: getSummaryTransactions,
  });

  fastify.route({
    method: "DELETE",
    url: "/:id",
    schema: {
      params: deleteQueryTransactionSchema,
    },
    handler: deleteTransaction,
  });
};
