const { Client } = require('pg');

const connectionString = 'postgresql://harsh:firstcry@localhost:5432/Project';
const client = new Client({
  connectionString: connectionString,
});

async function createSchema() {
  try {
    await client.connect();

    const UserSchema = `
    CREATE TABLE users (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
  `;
    await client.query(UserSchema);

    console.log('Schema created successfully!');
  } catch (error) {
    console.log("Error creating User Schema");
  } finally {
    await client.end();
  }
}

createSchema();