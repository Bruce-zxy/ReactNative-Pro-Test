import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ListViewDetailsComponent extends Component {
	static navigationOptions = {
        title: '详情页',
    }
	_getDetails(datas) {
		return <Text style={{color: '#00f1f1'}}>{datas[0].content}</Text>  
    }
    render() {
    	const content = this.props.navigation.state.params.content;
        return (
	      	<View style={styles.container}>
	      		<Text style={{color: '#333', padding: 10}}>{content}</Text>
	      	</View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
    },
    item: {
        padding: 10,
    },
})

export default ListViewDetailsComponent;