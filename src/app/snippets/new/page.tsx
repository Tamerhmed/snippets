import { db } from '@/db';
import { redirect } from 'next/navigation';
import React from 'react';

const SnippetCreatePage = () => {
  const createSnippet = async(formData: FormData)=> {
      'use server';

      const title = formData.get('title') as string;
      const code =  formData.get('code') as string;

      const snippet = await db.snippet.create({
        data: {
          title,
          code
        }
      });
    //   console.log(snippet);

    redirect('/');
  }

	return (
		<form action={createSnippet}>
			<h3 className='font-bold m-3'>Create a Snippet</h3>
			<div className='flex flex-col gap-4'>
				<div className='flex gap-4'>
					<label
						htmlFor='title'
						className='w-12'
					>
						Title
					</label>
					<input
						name='title'
						className='border rounded p-2 w-full'
						id='title'
					/>
				</div>
				<div className='flex gap-4'>
					<label
						htmlFor='code'
						className='w-12'
					>
						Code
					</label>
					<textarea
						name='code'
						className='border rounded p-2 w-full'
						id='code'
					/>
				</div>
        <button type='submit' className='border rounded p-2 bg-blue-200'>create</button>
			</div>
		</form>
	);
};

export default SnippetCreatePage;
