import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react';

interface SnippetShowPageProps {
	params: {
		id: string;
	};
}

const SnippetShowPage = async (props: SnippetShowPageProps) => {
	const snippet = await db.snippet.findFirst({
		where: {
			id: parseInt(props.params.id),
		},
	});

	if (!snippet) {
		return notFound();
	}

	return <div>{snippet.title}</div>;
};

export default SnippetShowPage;
