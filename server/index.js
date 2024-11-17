// Import required packages
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import route handlers
import blogRoutes from './routes/blogs.js';
import userRouter from "./routes/user.js";

// Initialize express application
const app = express();
dotenv.config();

// Middleware setup
// Parse JSON bodies with size limit of 30mb
app.use(bodyParser.json({ limit: '30mb', extended: true }))
// Parse URL-encoded bodies with size limit of 30mb
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
// Enable CORS for all routes
app.use(cors());

// Mount blog routes at /blogs path
app.use('/blogs', blogRoutes);
// Mount user routes at /user path
app.use("/user", userRouter);

// Root route handler
app.get('/',(req,res) => {
  res.send('Welcome to Blogs API.');
});

// Set port from environment variables or default to 5000
const PORT = process.env.PORT|| 5000;

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);