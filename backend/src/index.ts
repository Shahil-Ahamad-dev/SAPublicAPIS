import express from 'express';
import { countriesCodes } from './Public_APIs/Country/countryCodes';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (_req, res) => {
  res.send('Hello from TypeScript API!');
});


app.get('/api/country_code', (_req, res) => {
 
  res.json({ countriesCodes });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
