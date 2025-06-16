import express from 'express';
import { countriesCodes } from './Public_APIs/Country/countryCodes';
import { countriesPhoneNumber } from './Public_APIs/Country/countryPhoneNumber';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (_req, res) => {
  res.send('Hello from TypeScript API!');
});


app.get('/api/country_code', (_req, res) => {
 
  res.json({ countriesCodes });
});

app.get('/api/country_phone_number', (_req, res) => {
 
  res.json({ countriesPhoneNumber });
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
