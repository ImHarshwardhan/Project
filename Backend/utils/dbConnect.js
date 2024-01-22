const { Client } = require('pg');

// Connection parameters
const connectionString = 'postgresql://harsh:firstcry@localhost:5432/Project';
const client = new Client({
  connectionString: connectionString,
});

async function createDatabase() {
  try {
    // Connect to the default PostgreSQL database (e.g., 'postgres')
    await client.connect();

    // Create the database
    //await client.query('CREATE DATABASE "Project"');

    console.log('Database created successfully');
  } catch (error) {
    console.error('Error creating the database:', error);
  } finally {
    // Disconnect from the default database
    await client.end();
  }
}

// Call the function to create the database
createDatabase();
