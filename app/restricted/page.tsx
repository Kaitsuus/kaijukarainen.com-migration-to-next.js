import { nextauthOptions } from '@/lib/nextauthOptions';
import { getServerSession } from 'next-auth/next';
import React from 'react';
import { redirect } from 'next/navigation';
import UserList from '@/components/userList';

export default async function RestrictedPage() {
  // get the session
  const session = await getServerSession(nextauthOptions);

  // redirect to signin if there is no session.
  if (!session) {
    const url = new URL('/api/auth/signin', 'http://localhost:3000');
    url.searchParams.append('callbackUrl', '/restricted');
    redirect(url.toString());
  }

  // display the page
  return (
    <div>
      <h1>Welcome to the Restricted Page, {session?.user?.email}</h1>
      <UserList />
    </div>
  );
}
