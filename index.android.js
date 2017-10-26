import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView, Image, View } from 'react-native';

import ListViewComponent from './component/view/ListViewComponent';

class RNtest extends Component {
	render() {
		return (
			<ListViewComponent />
		);
	}
}

AppRegistry.registerComponent('RNtest', () => RNtest);
