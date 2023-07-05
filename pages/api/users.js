import { MongoClient } from 'mongodb';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  // Check if the user is authenticated
  if (!session) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  // User is authenticated, proceed with fetching the user data
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db();

    // Fetch all users from the database
    const users = await db.collection('users').find({}).toArray();

    // If no users found, return an error response
    if (!users || users.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: 'No users found' });
    }

    // Return the user data
    return res.status(200).json({ success: true, users: users });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error' });
  } finally {
    await client.close();
  }
}
