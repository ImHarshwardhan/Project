const { Client } = require('pg');

const connectionString = 'postgresql://harsh:firstcry@localhost:5432/Project';
const client = new Client({
  connectionString: connectionString,
});

async function createSchema() {
  try {
    await client.connect();

    const FriendshipsSchema = `
    CREATE TABLE friendships (
        friendship_id SERIAL PRIMARY KEY,
        user_id1 INT,
        user_id2 INT,
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id1) REFERENCES users(user_id) ON DELETE CASCADE,
        FOREIGN KEY (user_id2) REFERENCES users(user_id) ON DELETE CASCADE
      );
  `;
    await client.query(FriendshipsSchema);

    console.log('Schema created successfully!');
  } catch (error) {
    console.log("Error creating Friendships Schema");
  } finally {
    await client.end();
  }
}

createSchema();