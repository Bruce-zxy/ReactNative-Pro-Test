import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import ListViewComponent from './view/ListViewComponent';
import ListViewDetailsComponent from './view/ListViewDetailsComponent';
 
const App = StackNavigator({
  Main: {screen: ListViewComponent},
  Details: {screen: ListViewDetailsComponent},
});

export default App;