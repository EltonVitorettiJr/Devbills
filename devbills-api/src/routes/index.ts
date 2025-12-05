import type { FastifyInstance } from "fastify";

async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.get("/health", async () => {
    return {
      status: 201,
      message: "Devbills running normally",
    };
  });
}

export default routes;
