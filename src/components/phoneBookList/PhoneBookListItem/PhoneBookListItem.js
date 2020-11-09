import React from 'react';
import s from './PhoneBookListItem.module.css';

function PhoneBookListItem(props) {
	return (
		<li className={s.ListItem}>
			<div>
				<p className={s.Text}>{props.contactName}</p>
				<p className={s.Text}>{props.contactPhoneNumber}</p>
			</div>
			<button className='btn btn-danger'>Delete</button>
		</li>
	);
}

export default PhoneBookListItem;
