import React, { Component } from 'react';
import { ListView, StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

class ListViewComponent extends Component {
	static navigationOptions = {
        title: '列表页',
    }
	constructor(props) {
		super(props);
		this.state = {  
	        dataSource: new ListView.DataSource({  
	            rowHasChanged: (r1, r2) => r1 !== r2,  
	        }),
	        datas: [{content: '请求中。。。'}],
		}
	}
	_fetchListData(url) {
		var self = this;
		fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			var datas = responseJson.result.map((item)=> { return {content: item.content}});
			self.setState({
		   		datas: datas,  
			});
		});
	}    
	renderRow(rowData, sectionID, rowID) {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.item} >
            	<Text>第{++rowID}篇</Text>
            	<TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#e1e1e1')}>
	            	<View style={{height: 40, backgroundColor: '#ccc'}}>
	              		<Text>{rowData.content.slice(0,20)}...</Text>  
	              		<Text style={{color: '#666', textAlign: 'right'}} onPress={() => navigate('Details', {content: rowData.content})}>查看更多</Text>
	            	</View>
            	</TouchableNativeFeedback>
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
	      	<View style={styles.container} >
		        <ListView dataSource={this.state.dataSource.cloneWithRows(this.state.datas)} renderRow={this.renderRow.bind(this)} />
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