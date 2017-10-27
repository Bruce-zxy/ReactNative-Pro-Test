import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView, Image, View } from 'react-native';

import App from './component/App';

class RNtest extends Component {
	render() {
		return (
			<App />
		);
	}
}

AppRegistry.registerComponent('RNtest', () => RNtest);
