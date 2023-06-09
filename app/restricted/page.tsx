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
    const url = new URL('/api/auth/signin', 'https://kaijukarainen.com/');
    url.searchParams.append('callbackUrl', '/restricted');
    redirect(url.toString());
  }

  // display the page
  return (
    <div className='w-full h-screen container mx-auto px-4 py-8'>
      <div className='w-full my-5'>
      <h1 className='text-xl mx-5 my-5'>Welcome to the Restricted Page, {session?.user?.email}</h1>
      <UserList />
      </div>
    </div>
  );
}
