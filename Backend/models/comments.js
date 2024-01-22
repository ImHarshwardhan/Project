const { Client } = require('pg');

const connectionString = 'postgresql://harsh:firstcry@localhost:5432/Project';
const client = new Client({
  connectionString: connectionString,
});

async function createSchema() {
  try {
    await client.connect();

    const CommentsSchema = `
    CREATE TABLE comments (
      comment_id SERIAL PRIMARY KEY,
      user_id INT,
      post_id INT,
      content TEXT,
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
      FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE
    );
  `;
    await client.query(CommentsSchema);

    console.log('Schema created successfully!');
  } catch (error) {
    console.log("Error creating Comments Schema");
  } finally {
    await client.end();
  }
}

createSchema();