import dotenv from "dotenv";
import * as z from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string(),
  NODE_ENV: z.enum(["dev", "test", "prod"]),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.log("❌Variáveis de ambiente inválidas.");
  process.exit(1); //para a aplicação indicando que tem um erro
}

export const env = _env.data;
