import { MongoClient } from "mongodb";

/** 
 * @global 
 * @type {MongoClient | null}
 */
declare global {
  var client: MongoClient | null;
}

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * This function connects to the MongoDB database using the MONGODB_URI environment variable.
 * It uses a global MongoClient object to maintain the connection throughout the application.
 * If the MongoClient is already connected, it returns the existing client.
 * Otherwise, it creates a new MongoClient, connects to the database, and assigns it to the global client.
 * @returns {Promise<{ client: MongoClient }>} A promise that resolves to an object containing the MongoClient.
 */
export async function connectToDb() {
  if (global.client) {
    return {
      client: global.client,
    };
  }

  const client = (global.client = new MongoClient(MONGODB_URI!, {}));

  await global.client.connect();
  console.log("Connected to the Database ");
  return { client };
}
