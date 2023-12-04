require('dotenv').config();
import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Use the routes defined in the routes/index.ts file under the prefix /api
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
