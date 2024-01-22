const { Client } = require('pg');

const connectionString = 'postgresql://harsh:firstcry@localhost:5432/Project';
const client = new Client({
  connectionString: connectionString,
});

async function createSchema() {
  try {
    await client.connect();

    const PostsSchema = `
    CREATE TABLE posts (
        post_id SERIAL PRIMARY KEY,
        user_id INT,
        content TEXT,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
      );
      
  `;
    await client.query(PostsSchema);

    console.log('Schema created successfully!');
  } catch (error) {
    console.log("Error creating Posts Schema");
  } finally {
    await client.end();
  }
}

createSchema();