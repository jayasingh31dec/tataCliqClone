require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const giftCardRoutes = require('./routes/giftCardRoutes');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes');

const stripeRoutes = require('./routes/stripe');












const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: 'https://tatacliq-frontend.onrender.com',
  credentials: true
}));




app.use(express.json());

// Routes


app.use('/api',authRoutes);
app.use("/api/products", productRoutes);
app.use('/api/categories', categoryRoutes); 
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes); // Admin login route

app.use('/api/stripe', stripeRoutes);

app.use('/api/giftcards', giftCardRoutes);


// DB Connection and Server Start 
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log('✅ MongoDB connected');
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on http://localhost:${PORT}`);
//     });
//   })
//   .catch(err => console.error('❌ DB connection error:', err));


  







  // mongoose.connect(process.env.MONGO_URL)
  // .then(() => console.log('✅ MongoDB connected'))
  // .catch(err => console.error('❌ DB connection error:', err));





  mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('✅ MongoDB connected');
    // Server start only after DB is connected
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('❌ DB connection error:', err));


