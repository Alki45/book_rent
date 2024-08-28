const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bcrypt = require('bcrypt'); // For password hashing

const app = express();
const port = 5000;

const pool = new Pool({
  user: 'alki',
  host: 'localhost',
  database: 'book_rent',
  password: 'alki',
  port: 5432,
});

app.use(cors());
app.use(express.json()); // Built-in JSON parser

// Password hashing configuration
const saltRounds = 10;

app.post('/register', async (req, res) => {
  const { username, email, password, full_name, phone_number, address, date_of_birth } = req.body;

  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const result = await pool.query(
      'INSERT INTO users (username, email, password, full_name, phone_number, address, date_of_birth) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [username, email, hashedPassword, full_name, phone_number, address, date_of_birth]
    );

    res.status(201).json({ message: 'User registered successfully', user: result.rows[0] });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'An error occurred while registering the user' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query to get the user with the given email
    const result = await pool.query('SELECT email, password FROM users WHERE email = $1', [email]);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      
      // Compare the provided password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        // Generate a token or handle login success
        res.json({ success: true, message: 'Login successful', token: 'your-generated-token' });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during Login:', error);
    res.status(500).json({ success: false, message: 'An error occurred during login' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
