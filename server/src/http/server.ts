import fastify from 'fastify';
import z from 'zod';
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod';

import { createGoalRoute } from './routes/create-goal';
import { getPendingGoalsRoute } from './routes/get-pending-goals';
import { createCompletionRoute } from './routes/create-completion';
import { getWeekSummaryRoute } from './routes/get-week-summary';
import fastifyCors from '@fastify/cors';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: '*',
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createGoalRoute);
app.register(createCompletionRoute);
app.register(getPendingGoalsRoute);
app.register(getWeekSummaryRoute);

const PORT = 3333;

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`Server Running on port ${PORT}`);
  });
