// Import the necessary dependencies
const sql = require('mssql');

// Configuration for the MSSQL connection
const config = {
  server: 'localhost',
  database: 'RMWIN_new_test',
  user: 'sa',
  password: 'ajoshi94',
  trustServerCertificate: true,
  options: {
    encrypt: true, // Use encryption if needed
  },
};

// Function to execute a SQL query
async function executeQuery(query) {
  try {
    // Create a new connection pool
    const pool = await sql.connect(config);

    // Execute the query
    const result = await pool.request().query(query);

    // Return the query result
    return result.recordset;
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  }
}

// Export the executeQuery function
module.exports = {
  executeQuery,
};
