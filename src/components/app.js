import { h, Component } from 'preact';
import { Router } from 'preact-router';

import { Container, Menu } from 'semantic-ui-react';

import Home from '../routes/home';
import Profile from '../routes/profile';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
	state = {}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	handleRoute = (e) => { this.currentUrl = e.url; };

	render() {
		const { activeItem } = this.state;

		return (
			<div id="app">
				<Menu fixed="top" inverted>
					<Menu.Item header>Wobsite!</Menu.Item>
					<Menu.Item name="home" href="/" active={activeItem === 'home'} onClick={this.handleItemClick} />
					<Menu.Item name="profile" href="/profile/me" active={activeItem === 'profile'} onClick={this.handleItemClick} />
				</Menu>

				<Container text>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
					</Router>
				</Container>
			</div>
		);
	}
}
