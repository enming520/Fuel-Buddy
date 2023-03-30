const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Serve the static files from the React app
// const path = require('path');
// app.use(express.static(path.join(__dirname, '../build')));
// app.use('/static', express.static(path.join(__dirname, 'build//static')));

// allow server to access to different port
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const JWT_SECRET = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4MDAyNzUxMSwiaWF0IjoxNjgwMDI3NTExfQ.eolbqX4qqzWc4YbDyuG9l7P4mFh0yAtrYUswUul8zHA';

// Connect to MongoDB
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {

  mongoose.set("strictQuery", true);
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.ztbtldb.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // mongodb+srv://admin:<password>@cluster0.ztbtldb.mongodb.net/?retryWrites=true&w=majority
}

// Define schema for gas prices
const gasPricesSchema = new mongoose.Schema({
  petrolPrice: Number,
  dieselPrice: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice = mongoose.model('GasPrice', gasPricesSchema);

// Define API endpoints
app.get('/prices', async (req, res) => {
  try {
    const prices = await GasPrice.find().sort('-createdAt');
    res.json(prices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices', async (req, res) => {
  const { petrolPrice, dieselPrice } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices = await GasPrice.findOne().sort('-createdAt');

    // Update the prices if the new prices are different
    if (latestPrices.petrolPrice !== petrolPrice || latestPrices.dieselPrice !== dieselPrice) {
      latestPrices.petrolPrice = petrolPrice || latestPrices.petrolPrice;
      latestPrices.dieselPrice = dieselPrice || latestPrices.dieselPrice;
      await latestPrices.save();
      res.status(200).json(latestPrices);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices3
const gasPrices3Schema = new mongoose.Schema({
  petrolPrice3: Number,
  dieselPrice3: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice3 = mongoose.model('GasPrice3', gasPrices3Schema);

// Define API endpoints
app.get('/prices3', async (req, res) => {
  try {
    const prices3 = await GasPrice3.find().sort('-createdAt');
    res.json(prices3);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices3', async (req, res) => {
  const { petrolPrice3, dieselPrice3 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices3 = await GasPrice3.findOne().sort('-createdAt');

    // Update the prices if the new prices are different
    if (latestPrices3.petrolPrice3 !== petrolPrice3 || latestPrices3.dieselPrice3 !== dieselPrice3) {
      latestPrices3.petrolPrice3 = petrolPrice3 || latestPrices3.petrolPrice3;
      latestPrices3.dieselPrice3 = dieselPrice3 || latestPrices3.dieselPrice3;
      await latestPrices3.save();
      res.status(200).json(latestPrices3);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices4
const gasPrices4Schema = new mongoose.Schema({
  petrolPrice4: Number,
  dieselPrice4: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice4 = mongoose.model('GasPrice4', gasPrices4Schema);

// Define API endpoints
app.get('/prices4', async (req, res) => {
  try {
    const prices4 = await GasPrice4.find().sort('-createdAt');
    res.json(prices4);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices4', async (req, res) => {
  const { petrolPrice4, dieselPrice4 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices4 = await GasPrice4.findOne().sort('-createdAt');

    // Update the prices if the new prices are different
    if (!latestPrices4) {
      // If no records exist, create a new entry with the provided prices
      const newPrices4 = new GasPrice4({ petrolPrice4, dieselPrice4 });
      await newPrices4.save();
      res.status(200).json(newPrices4);
    }
    else if (latestPrices4.petrolPrice4 !== petrolPrice4 || latestPrices4.dieselPrice4 !== dieselPrice4) {
      latestPrices4.petrolPrice4 = petrolPrice4 || latestPrices4.petrolPrice4;
      latestPrices4.dieselPrice4 = dieselPrice4 || latestPrices4.dieselPrice4;
      await latestPrices4.save();
      res.status(200).json(latestPrices4);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices5
const gasPrices5Schema = new mongoose.Schema({
  petrolPrice5: Number,
  dieselPrice5: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice5 = mongoose.model('GasPrice5', gasPrices5Schema);

// Define API endpoints
app.get('/prices5', async (req, res) => {
  try {
    const prices5 = await GasPrice5.find().sort('-createdAt');
    res.json(prices5);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices5', async (req, res) => {
  const { petrolPrice5, dieselPrice5 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices5 = await GasPrice5.findOne().sort('-createdAt');

    // Update the prices if the new prices are different
    if (!latestPrices5) {
      // If no records exist, create a new entry with the provided prices
      const newPrices5 = new GasPrice5({ petrolPrice5, dieselPrice5 });
      await newPrices5.save();
      res.status(200).json(newPrices5);
    }
    else if (latestPrices5.petrolPrice5 !== petrolPrice5 || latestPrices5.dieselPrice5 !== dieselPrice5) {
      latestPrices5.petrolPrice5 = petrolPrice5 || latestPrices5.petrolPrice5;
      latestPrices5.dieselPrice5 = dieselPrice5 || latestPrices5.dieselPrice5;
      await latestPrices5.save();
      res.status(200).json(latestPrices5);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices6
const gasPrices6Schema = new mongoose.Schema({
  petrolPrice6: Number,
  dieselPrice6: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice6 = mongoose.model('GasPrice6', gasPrices6Schema);

// Define API endpoints
app.get('/prices6', async (req, res) => {
  try {
    const prices6 = await GasPrice6.find().sort('-createdAt');
    res.json(prices6);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices6', async (req, res) => {
  const { petrolPrice6, dieselPrice6 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices6 = await GasPrice6.findOne().sort('-createdAt');

    // Update the prices if the new prices are different
    if (!latestPrices6) {
      // If no records exist, create a new entry with the provided prices
      const newPrices6 = new GasPrice6({ petrolPrice6, dieselPrice6 });
      await newPrices6.save();
      res.status(200).json(newPrices6);
    }
    else if (latestPrices6.petrolPrice6 !== petrolPrice6 || latestPrices6.dieselPrice6 !== dieselPrice6) {
      latestPrices6.petrolPrice6 = petrolPrice6 || latestPrices6.petrolPrice6;
      latestPrices6.dieselPrice6 = dieselPrice6 || latestPrices6.dieselPrice6;
      await latestPrices6.save();
      res.status(200).json(latestPrices6);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices7
const gasPrices7Schema = new mongoose.Schema({
  petrolPrice7: Number,
  dieselPrice7: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice7 = mongoose.model('GasPrice7', gasPrices7Schema);

// Define API endpoints
app.get('/prices7', async (req, res) => {
  try {
    const prices7 = await GasPrice7.find().sort('-createdAt');
    res.json(prices7);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices7', async (req, res) => {
  const { petrolPrice7, dieselPrice7 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices7 = await GasPrice7.findOne().sort('-createdAt');


    // Update the prices if the new prices are different
    if (!latestPrices7) {
      // If no records exist, create a new entry with the provided prices
      const newPrices7 = new GasPrice7({ petrolPrice7, dieselPrice7 });
      await newPrices7.save();
      res.status(200).json(newPrices7);
    }
    else if (latestPrices7.petrolPrice7 !== petrolPrice7 || latestPrices7.dieselPrice7 !== dieselPrice7) {
      latestPrices7.petrolPrice7 = petrolPrice7 || latestPrices7.petrolPrice7;
      latestPrices7.dieselPrice7 = dieselPrice7 || latestPrices7.dieselPrice7;
      await latestPrices7.save();
      res.status(200).json(latestPrices7);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices8
const gasPrices8Schema = new mongoose.Schema({
  petrolPrice8: Number,
  dieselPrice8: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice8 = mongoose.model('GasPrice8', gasPrices8Schema);

// Define API endpoints
app.get('/prices8', async (req, res) => {
  try {
    const prices8 = await GasPrice8.find().sort('-createdAt');
    res.json(prices8);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices8', async (req, res) => {
  const { petrolPrice8, dieselPrice8 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices8 = await GasPrice8.findOne().sort('-createdAt');


    // Update the prices if the new prices are different
    if (!latestPrices8) {
      // If no records exist, create a new entry with the provided prices
      const newPrices8 = new GasPrice8({ petrolPrice8, dieselPrice8 });
      await newPrices8.save();
      res.status(200).json(newPrices8);
    }
    else if (latestPrices8.petrolPrice8 !== petrolPrice8 || latestPrices8.dieselPrice8 !== dieselPrice8) {
      latestPrices8.petrolPrice8 = petrolPrice8 || latestPrices8.petrolPrice8;
      latestPrices8.dieselPrice8 = dieselPrice8 || latestPrices8.dieselPrice8;
      await latestPrices8.save();
      res.status(200).json(latestPrices8);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices9
const gasPrices9Schema = new mongoose.Schema({
  petrolPrice9: Number,
  dieselPrice9: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice9 = mongoose.model('GasPrice9', gasPrices9Schema);

// Define API endpoints
app.get('/prices9', async (req, res) => {
  try {
    const prices9 = await GasPrice9.find().sort('-createdAt');
    res.json(prices9);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices9', async (req, res) => {
  const { petrolPrice9, dieselPrice9 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices9 = await GasPrice9.findOne().sort('-createdAt');

    // Update the prices if the new prices are different
    if (!latestPrices9) {
      // If no records exist, create a new entry with the provided prices
      const newPrices9 = new GasPrice9({ petrolPrice9, dieselPrice9 });
      await newPrices9.save();
      res.status(200).json(newPrices9);
    }
    else
      if (latestPrices9.petrolPrice9 !== petrolPrice9 || latestPrices9.dieselPrice9 !== dieselPrice9) {
        latestPrices9.petrolPrice9 = petrolPrice9 || latestPrices9.petrolPrice9;
        latestPrices9.dieselPrice9 = dieselPrice9 || latestPrices9.dieselPrice9;
        await latestPrices9.save();
        res.status(200).json(latestPrices9);
      } else {
        // If the new prices are the same as the latest entry, return a 204 status code (no content)
        res.status(204).send();
      }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices10
const gasPrices10Schema = new mongoose.Schema({
  petrolPrice10: Number,
  dieselPrice10: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice10 = mongoose.model('GasPrice10', gasPrices10Schema);

// Define API endpoints
app.get('/prices10', async (req, res) => {
  try {
    const prices10 = await GasPrice10.find().sort('-createdAt');
    res.json(prices10);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices10', async (req, res) => {
  const { petrolPrice10, dieselPrice10 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices10 = await GasPrice10.findOne().sort('-createdAt');


    // Update the prices if the new prices are different
    if (!latestPrices10) {
      // If no records exist, create a new entry with the provided prices
      const newPrices10 = new GasPrice10({ petrolPrice10, dieselPrice10 });
      await newPrices10.save();
      res.status(200).json(newPrices10);
    }
    else if (latestPrices10.petrolPrice10 !== petrolPrice10 || latestPrices10.dieselPrice10 !== dieselPrice10) {
      latestPrices10.petrolPrice10 = petrolPrice10 || latestPrices10.petrolPrice10;
      latestPrices10.dieselPrice10 = dieselPrice10 || latestPrices10.dieselPrice10;
      await latestPrices10.save();
      res.status(200).json(latestPrices10);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices11
const gasPrices11Schema = new mongoose.Schema({
  petrolPrice11: Number,
  dieselPrice11: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice11 = mongoose.model('GasPrice11', gasPrices11Schema);

// Define API endpoints
app.get('/prices11', async (req, res) => {
  try {
    const prices11 = await GasPrice11.find().sort('-createdAt');
    res.json(prices11);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices11', async (req, res) => {
  const { petrolPrice11, dieselPrice11 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices11 = await GasPrice11.findOne().sort('-createdAt');


    // Update the prices if the new prices are different
    if (!latestPrices11) {
      // If no records exist, create a new entry with the provided prices
      const newPrices11 = new GasPrice11({ petrolPrice11, dieselPrice11 });
      await newPrices11.save();
      res.status(200).json(newPrices11);
    }
    else if (latestPrices11.petrolPrice11 !== petrolPrice11 || latestPrices11.dieselPrice11 !== dieselPrice11) {
      latestPrices11.petrolPrice11 = petrolPrice11 || latestPrices11.petrolPrice11;
      latestPrices11.dieselPrice11 = dieselPrice11 || latestPrices11.dieselPrice11;
      await latestPrices11.save();
      res.status(200).json(latestPrices11);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices12
const gasPrices12Schema = new mongoose.Schema({
  petrolPrice12: Number,
  dieselPrice12: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice12 = mongoose.model('GasPrice12', gasPrices12Schema);

// Define API endpoints
app.get('/prices12', async (req, res) => {
  try {
    const prices12 = await GasPrice12.find().sort('-createdAt');
    res.json(prices12);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices12', async (req, res) => {
  const { petrolPrice12, dieselPrice12 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices12 = await GasPrice12.findOne().sort('-createdAt');


    // Update the prices if the new prices are different
    if (!latestPrices12) {
      // If no records exist, create a new entry with the provided prices
      const newPrices12 = new GasPrice12({ petrolPrice12, dieselPrice12 });
      await newPrices12.save();
      res.status(200).json(newPrices12);
    }
    else if (latestPrices12.petrolPrice12 !== petrolPrice12 || latestPrices12.dieselPrice12 !== dieselPrice12) {
      latestPrices12.petrolPrice12 = petrolPrice12 || latestPrices12.petrolPrice12;
      latestPrices12.dieselPrice12 = dieselPrice12 || latestPrices12.dieselPrice12;
      await latestPrices12.save();
      res.status(200).json(latestPrices12);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices13
const gasPrices13Schema = new mongoose.Schema({
  petrolPrice13: Number,
  dieselPrice13: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice13 = mongoose.model('GasPrice13', gasPrices13Schema);

// Define API endpoints
app.get('/prices13', async (req, res) => {
  try {
    const prices13 = await GasPrice13.find().sort('-createdAt');
    res.json(prices13);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices13', async (req, res) => {
  const { petrolPrice13, dieselPrice13 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices13 = await GasPrice13.findOne().sort('-createdAt');


    // Update the prices if the new prices are different
    if (!latestPrices13) {
      // If no records exist, create a new entry with the provided prices
      const newPrices13 = new GasPrice13({ petrolPrice13, dieselPrice13 });
      await newPrices13.save();
      res.status(200).json(newPrices13);
    }
    else if (latestPrices13.petrolPrice13 !== petrolPrice13 || latestPrices13.dieselPrice13 !== dieselPrice13) {
      latestPrices13.petrolPrice13 = petrolPrice13 || latestPrices13.petrolPrice13;
      latestPrices13.dieselPrice13 = dieselPrice13 || latestPrices13.dieselPrice13;
      await latestPrices13.save();
      res.status(200).json(latestPrices13);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices14
const gasPrices14Schema = new mongoose.Schema({
  petrolPrice14: Number,
  dieselPrice14: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice14 = mongoose.model('GasPrice14', gasPrices14Schema);

// Define API endpoints
app.get('/prices14', async (req, res) => {
  try {
    const prices14 = await GasPrice14.find().sort('-createdAt');
    res.json(prices14);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices14', async (req, res) => {
  const { petrolPrice14, dieselPrice14 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices14 = await GasPrice14.findOne().sort('-createdAt');


    // Update the prices if the new prices are different
    if (!latestPrices14) {
      // If no records exist, create a new entry with the provided prices
      const newPrices14 = new GasPrice14({ petrolPrice14, dieselPrice14 });
      await newPrices14.save();
      res.status(200).json(newPrices14);
    }
    else if (latestPrices14.petrolPrice14 !== petrolPrice14 || latestPrices14.dieselPrice14 !== dieselPrice14) {
      latestPrices14.petrolPrice14 = petrolPrice14 || latestPrices14.petrolPrice14;
      latestPrices14.dieselPrice14 = dieselPrice14 || latestPrices14.dieselPrice14;
      await latestPrices14.save();
      res.status(200).json(latestPrices14);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices15
const gasPrices15Schema = new mongoose.Schema({
  petrolPrice15: Number,
  dieselPrice15: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice15 = mongoose.model('GasPrice15', gasPrices15Schema);

// Define API endpoints
app.get('/prices15', async (req, res) => {
  try {
    const prices15 = await GasPrice15.find().sort('-createdAt');
    res.json(prices15);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices15', async (req, res) => {
  const { petrolPrice15, dieselPrice15 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices15 = await GasPrice15.findOne().sort('-createdAt');


    // Update the prices if the new prices are different
    if (!latestPrices15) {
      // If no records exist, create a new entry with the provided prices
      const newPrices15 = new GasPrice15({ petrolPrice15, dieselPrice15 });
      await newPrices15.save();
      res.status(200).json(newPrices15);
    }
    else if (latestPrices15.petrolPrice15 !== petrolPrice15 || latestPrices15.dieselPrice15 !== dieselPrice15) {
      latestPrices15.petrolPrice15 = petrolPrice15 || latestPrices15.petrolPrice15;
      latestPrices15.dieselPrice15 = dieselPrice15 || latestPrices15.dieselPrice15;
      await latestPrices15.save();
      res.status(200).json(latestPrices15);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices16
const gasPrices16Schema = new mongoose.Schema({
  petrolPrice16: Number,
  dieselPrice16: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice16 = mongoose.model('GasPrice16', gasPrices16Schema);

// Define API endpoints
app.get('/prices16', async (req, res) => {
  try {
    const prices16 = await GasPrice16.find().sort('-createdAt');
    res.json(prices16);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices16', async (req, res) => {
  const { petrolPrice16, dieselPrice16 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices16 = await GasPrice16.findOne().sort('-createdAt');


    // Update the prices if the new prices are different
    if (!latestPrices16) {
      // If no records exist, create a new entry with the provided prices
      const newPrices16 = new GasPrice16({ petrolPrice16, dieselPrice16 });
      await newPrices16.save();
      res.status(200).json(newPrices16);
    }
    else if (latestPrices16.petrolPrice16 !== petrolPrice16 || latestPrices16.dieselPrice16 !== dieselPrice16) {
      latestPrices16.petrolPrice16 = petrolPrice16 || latestPrices16.petrolPrice16;
      latestPrices16.dieselPrice16 = dieselPrice16 || latestPrices16.dieselPrice16;
      await latestPrices16.save();
      res.status(200).json(latestPrices16);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define schema for gas prices17
const gasPrices17Schema = new mongoose.Schema({
  petrolPrice17: Number,
  dieselPrice17: Number,
}, { timestamps: true });

// Define model for gas prices
const GasPrice17 = mongoose.model('GasPrice17', gasPrices17Schema);

// Define API endpoints
app.get('/prices17', async (req, res) => {
  try {
    const prices17 = await GasPrice17.find().sort('-createdAt');
    res.json(prices17);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/prices17', async (req, res) => {
  const { petrolPrice17, dieselPrice17 } = req.body;

  try {
    // Find the most recent gas prices entry
    const latestPrices17 = await GasPrice17.findOne().sort('-createdAt');


    // Update the prices if the new prices are different
    if (!latestPrices17) {
      // If no records exist, create a new entry with the provided prices
      const newPrices17 = new GasPrice17({ petrolPrice17, dieselPrice17 });
      await newPrices17.save();
      res.status(200).json(newPrices17);
    }
    else if (latestPrices17.petrolPrice17 !== petrolPrice17 || latestPrices17.dieselPrice17 !== dieselPrice17) {
      latestPrices17.petrolPrice17 = petrolPrice17 || latestPrices17.petrolPrice17;
      latestPrices17.dieselPrice17 = dieselPrice17 || latestPrices17.dieselPrice17;
      await latestPrices17.save();
      res.status(200).json(latestPrices17);
    } else {
      // If the new prices are the same as the latest entry, return a 204 status code (no content)
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// User registration
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

    // Server-side validation
    if (!name || !email || !password) {
      res.status(400).json({ success: false, message: 'All fields are required' });
      return;
    }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    if (error.code === 11000) {
      res.status(400).json({ success: false, message: 'Email already in use' });
    } else {
      res.status(500).json({ success: false, message: 'Error registering user' });
    }
  }
});

// User Login function
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ success: false, message: 'User not found' });
    } else {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        // Generate JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
          expiresIn: '1h',
        });
        const userWithoutPassword = {
          _id: user._id,
          name: user.name,
          email: user.email,
        };

        res.status(200).json({ success: true, message: 'User authenticated successfully', token, user: userWithoutPassword,});
      } else {
        res.status(400).json({ success: false, message: 'Incorrect password' });
      }
    }
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).json({ success: false, message: 'Error during authentication' });
  }
});

// Middleware to verify JWT token
const verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    res.status(401).json({ success: false, message: 'No token provided' });
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ success: false, message: 'Failed to authenticate token' });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};


app.listen(port, () => {
  console.log(`Fuel Buddy listening on port ${port}`)
})

