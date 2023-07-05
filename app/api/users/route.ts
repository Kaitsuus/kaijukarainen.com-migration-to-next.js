import { connectToDb } from '../../../lib/mongo';
import { NextResponse, NextRequest } from "next/server";

/**
 * This function handles the GET request to fetch all users from the database.
 * It excludes sensitive fields like password, email, and emailVerified from the response.
 * If no users are found, it returns a message "No users found".
 * @param {NextRequest} req - The incoming request object
 * @returns {NextResponse} The response object containing either an error message or the user data
 */
export async function GET(req: NextRequest) {
  const { client } = await connectToDb();
  
  // Get the database
  const db = client.db('playbook');
 
  /**
   * Fetch all users from the database
   * Exclude sensitive fields like password, email, and emailVerified
   */
  const users = await db.collection("users").find(
    {},
    { projection: { password: 0, email: 0, emailVerified: 0 } }
  ).toArray(); 
  
  // If no users found, return an error response
  if (!users || users.length === 0) {
    return NextResponse.json({ success: false, message: "No users found" });
  }
  
  // Return the user data
  return NextResponse.json({ success: true, users: users });
}
