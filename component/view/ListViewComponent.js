import React, { Component } from 'react';
import { AppRegistry, ListView, FlatList, StyleSheet, Text, View, StatusBar } from 'react-native';

class ListViewComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {  
	        dataSource: new ListView.DataSource({  
	            rowHasChanged: (r1, r2) => r1 !== r2,  
	        }),
		}
	}
	_fetchListData(url) {
		var self = this;
		fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			var datas = responseJson.result.map((item)=> { return {content: item.content}});
			self.setState({
		   		dataSource: self.state.dataSource.cloneWithRows(datas),  
			});
			console.log(self.state.dataSource);
		});
	}    
	renderRow(rowData, sectionID, rowID) {
		return (
			<View style={styles.item}>  
            	<Text>第{++rowID}篇</Text>  
              	<Text>{rowData.content}</Text>  
            </View>
        )
    }
	componentWillMount() {
	   	this._fetchListData('http://api.avatardata.cn/Joke/QueryJokeByTime?key=390e65bf59ed467482afbd4e2c489265&page=3&rows=20&sort=asc&time=1439283534'); 	
	}
	componentDidMount() {
		var self = this;
        
	}
    render() {
        return (
	      	<View style={styles.container}>
	      		<StatusBar backgroundColor={'transparent'} />
		        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
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

export default ListViewComponent;