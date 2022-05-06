export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Aayush',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
	}, {
		id: 'u2',
		name: 'Suchi',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you, Suchi!',
		createdAt: '2022-05-06T03:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Aayush',
		},
	}, {
		id: 'm2',
		content: 'I am good, good',
		createdAt: '2022-05-06T03:53:00.000Z',
		user: {
			id: 'u2',
			name: 'Suchi',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2022-05-06T03:53:00.000Z',
		user: {
			id: 'u2',
			name: 'Suchi',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the stream now.',
		createdAt: '2022-05-06T03:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Aayush',
		},
	}, {
		id: 'm5',
		content: 'How is your uni going?',
		createdAt: '2022-05-06T03:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Aayush',
		},
	}, {
		id: 'm6',
		content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
		createdAt: '2022-05-06T03:53:00.000Z',
		user: {
			id: 'u2',
			name: 'Suchi',
		},
	}, {
		id: 'm7',
		content: 'Big Data is really interesting. Cannot wait to go through all the material.',
		createdAt: '2022-05-06T03:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Aayush',
		},
	}]
}

