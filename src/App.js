import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import PhoneBook from './components/phoneBookList/PhoneBookList';

function App() {
	return (
		<Container fluid className='mainAppContainer'>
			<Row className='mainRow'>
				<Col className={'col-12 d-flex'}>
					<h1 className='mx-auto mb-5'>PhoneBook</h1>
				</Col>
				<Col md={6} className='mx-auto'>
					<PhoneBook></PhoneBook>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
