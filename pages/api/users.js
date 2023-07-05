import { MongoClient } from 'mongodb';
import { getSession } from 'next-auth/react';
import { ObjectID } from 'mongodb';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    // Handle GET request to fetch users
    return handleGetRequest(req, res);
  } else if (method === 'POST') {
    // Handle POST request to create a new user
    return handlePostRequest(req, res);
  } else if (method === 'DELETE') {
    // Handle DELETE request to delete a user
    return handleDeleteRequest(req, res);
  } else {
    // Handle other HTTP methods
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}

async function handleGetRequest(req, res) {
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

async function handlePostRequest(req, res) {
  const { email, password, role } = req.body;

  // Perform any validation or sanitization of the data as needed

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db();

    // Create the new user document
    const newUser = {
        email,
        role: "customer",
      };

    // Insert the new user into the database
    await db.collection('users').insertOne(newUser);

    // Return a success response
    return res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  } finally {
    await client.close();
  }
}

async function handleDeleteRequest(req, res) {
  const { position } = req.query;

  // Check if the user is authenticated
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  // User is authenticated, proceed with deleting the user
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db();

    // Get the user by position
    const users = await db.collection('users').find({}).toArray();

    // If the position is out of range, return an error response
    if (position < 0 || position >= users.length) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const userToDelete = users[position];

    // Delete the user
    const result = await db.collection('users').deleteOne({ _id: userToDelete._id });

    // If no documents were deleted, return an error response
    if (result.deletedCount === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Return a success response
    return res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  } finally {
    await client.close();
  }
}


