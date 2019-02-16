import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, Button, FormGroup, Input, Col } from 'reactstrap';
import doc from '../assets/images/doc.jpg';
import CardText from "reactstrap/es/CardText";
// require('../assets/css/home.css');

const MainScreen = () => {
	return (
		<div className="container-fluid">
		<Card>
			<CardImg width="100%" src={doc} alt={"Doctor Image"}/>
			<CardImgOverlay className="d-none d-xl-inline-block">
				<CardTitle style={card1.title}>
					{'Your Affordable Neighbourhood Healthcare Provider'}
				</CardTitle>
				<CardText style={card1.text}>
					{'We provide you with trusted, affordable and convenient primary' +
					' healthcare services. Explore our services like second opinion,' +
					' onspot vital tests and one click tracking on mobile app'}
				</CardText>
				<Button style={card1.button}> EXPLORE </Button>
			</CardImgOverlay>


			<div className="d-xs-block d-xl-none">
				<CardTitle style={card1.titleSmall} className='heading'>
					{'Your Affordable Neighbourhood Healthcare Provider'}
				</CardTitle>
				<CardText style={card1.textSmall} className="text">
					{'We provide you with trusted, affordable and convenient primary' +
					' healthcare services. Explore our services like second opinion,' +
					' onspot vital tests and one click tracking on mobile app'}
				</CardText>
			</div>
		</Card>
		</div>
	);
};

const SearchServices = () => {
		return (
			<div className="container-fluid">
			<Card style={{ backgroundColor: '#2e69c9' }}>
				<CardTitle style={card2.title}> Search services near you </CardTitle>
				<CardBody className="card1body">
					<FormGroup row style={{ marginLeft: 40 }}>
						<Col md={2} style={card2.col}>
							<Input size="1" style={card2.input} type="select" name="city" id="city">
								<option> New Delhi </option>
								<option> Mumbai </option>
							</Input>
						</Col>
						<Col md={2} style={card2.col}>
							<Input size={1} style={card2.input} type="select" name="place" id="place">
								<option> Rajiv Chowk </option>
								<option> Jasola </option>
							</Input>
						</Col>
						<Col md={2} style={card2.col}>
							<Input size={1} style={card2.input} type="select" name="service">
								<option> Doctors </option>
								<option> Nurses </option>
							</Input>
						</Col>
						<Col md={2} style={card2.col}>
							<Input size={1} style={card2.input} type="select" name="speciality">
								<option> Speciality </option>
								<option> Nurses </option>
							</Input>
						</Col>
						<Col md={2}> <Button style={card2.button} size="lg" className="mt-4 mt-md-auto"> Search </Button> </Col>
					</FormGroup>
				</CardBody>
			</Card>
			</div>
		);
};


class Home extends Component {
	render() {
		return (
			<div>
				<MainScreen />
				<SearchServices />
			</div>
		);
	}
}

let card1 = {
	title: {
		width: 500,
		margin: 80,
		marginBottom: 20,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 600,
	},
	text: {
		width: 600,
		textAlign: 'center',
		marginLeft: 70,
		fontSize: 15,
	},
	titleSmall: {
		textAlign: 'center',
		fontSize: 20,
		margin: 10,
		marginTop: 40,

	},
	textSmall: {
		textAlign: 'center',
		fontSize: 15,
		margin: 10
	},
	button: {
		marginLeft: 320,
		borderRadius: 20,
		paddingLeft: 25,
		paddingRight: 25,
		fontSize: 13,
		fontWeight: 'bold',
		backgroundColor: '#25a8e3',
		borderWidth: 0
	}
};

let card2 = {
	title: {
		color: 'white',
		fontSize: 20,
		marginTop: 30,
		marginLeft: 60,
	},
	input: {
		paddingTop: 15,
		paddingBottom: 15,
		color: '#5d5d5d',
		borderWidth: 1,
		borderColor: '#aeaeae',
		borderRadius: 0
	},
	button: {
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 40,
		paddingRight: 40,
		backgroundColor: '#669ac9'
	},
	col: {
		marginLeft: -14,
		marginRight: -18,
	}
};

export default Home;