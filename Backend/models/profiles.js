const { Client } = require('pg');

const connectionString = 'postgresql://harsh:firstcry@localhost:5432/Project';
const client = new Client({
  connectionString: connectionString,
});

async function createSchema() {
  try {
    await client.connect();

    const ProfilesSchema = `
    CREATE TABLE profiles (
        profile_id SERIAL PRIMARY KEY,
        user_id INT UNIQUE,
        full_name VARCHAR(100),
        bio TEXT,
        profile_picture_url VARCHAR(255),
        cover_photo_url VARCHAR(255),
        FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
      )`;
    await client.query(ProfilesSchema);

    console.log('Schema created successfully!');
  } catch (error) {
    console.log("Error creating Profiles Schema");
  } finally {
    await client.end();
  }
}
createSchema();