import React from 'react';
import PhoneBookEntry from './PhoneBookListItem/PhoneBookListItem';
import s from './PhoneBookList.module.css';

const contactsArray = [
	{
		name: 'Bryan',
		phoneNumber: '305-555-5555',
	},
	{
		name: 'John',
		phoneNumber: '305-856-5555',
	},
	{
		name: 'Garret',
		phoneNumber: '305-423-5555',
	},
	{
		name: 'Candace',
		phoneNumber: '305-579-5555',
	},
];

function PhoneBookList() {
	return (
		<div className={s.PhoneBookContainer}>
			<Title>My Contacts</Title>
			<ul className={s.List}>
				{contactsArray.map((contact) => {
					return <PhoneBookEntry contactPhoneNumber={contact.phoneNumber} contactName={contact.name} />;
				})}
			</ul>
			<div className={s.InputContainer}>
				<input className={s.Input} type='text' placeholder='Enter Name' />
				<input className={s.Input} type='text' placeholder='Enter Phone Number' />
				<button className='btn btn-success'>Add Contact</button>
			</div>
		</div>
	);
}

function Title(props) {
	return (
		<div className={s.Title}>
			<h2>{props.children}</h2>
		</div>
	);
}

export default PhoneBookList;
