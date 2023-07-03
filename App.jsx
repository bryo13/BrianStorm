import React from 'react';
import {View, Text} from 'react-native';

class BrainStorm extends React.Component {
	render() {
		return (
			<View> 
			{/* header component*/}
				<Text>Header</Text>
			</View>
			<View> {/* goal component*/}
				<Text>Goal Text input</Text>
			</View>
			<View> {/* ideas component*/}
				<Text>Header</Text>
			</View>

		);
	}
}

export default BrainStorm;
