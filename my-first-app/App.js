import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Pressable,
	Alert,
	ToastAndroid,
	Image,
	ImageBackground,
} from 'react-native';

const App = () => {

	const [name, SetName] = useState('');
	const [age, SetAge] = useState('');
	const [password, setPassword] = useState(null);  //-może się przyda

	const [submit, setSubmit] = useState(false);

	const onPressHandler = () => {
		if (name.length > 3) {

			if (age === '') {
				// Alert.alert('Proszę wpisz swój wiek')

			 ToastAndroid.show('Proszę wpisz swój wiek', ToastAndroid.SHORT) // - na moim komputerze nie działa
			} else {
				setSubmit(!submit);
			}

		} else {
			Alert.alert('Imię musi zawierać minimum 3 znaki')

			// ToastAndroid.show('Imię musi zawierać minimum 3 znaki', ToastAndroid.SHORT)// - na moim komputerze nie działa
		}
	}

	return (

		<ImageBackground style={styles.body}
			source={require('./assets/mountains.jpg')}
		>
			<View>
				<Text style={styles.header}>
					Proszę się zarejestrować
				</Text>
			</View>
			<View style={styles.main} >

				<View style={styles.initialize}>
					<Text style={styles.text}>
						Twoje imię*:
					</Text>

					<TextInput
						style={styles.input}
						placeholder='write name'      
            placeholderTextColor = '#aaa'
						onChangeText={(value) => SetName(value)}
					/>
				</View>

				<View style={styles.initialize}>
					<Text style={styles.text}>
						Twój wiek*:
					</Text>

					<TextInput
						style={styles.input}
						placeholder='write age' 
            placeholderTextColor = '#aaa'
						keyboardType="numeric"
						onChangeText={(value) => SetAge(value)}
					/>
				</View>

				<View style={styles.initialize}>
					<Text style={styles.text}>
						Podaj hasło
						:
					</Text>

					<TextInput
						style={styles.input}
						placeholder='password'
            placeholderTextColor = '#aaa'
						secureTextEntry
						onChangeText={(value) => setPassword(value)}
					/>
				</View>
			</View>

			<Pressable
				style={({ pressed }) => [
					{ backgroundColor: pressed ? '#fff' : '#000' },
					{ color: pressed ? '#000' : '#fff' },
					styles.button
				]}
				onLongPress={onPressHandler}
				delayLongPress={300}
				hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
			>
				<Text
					style={styles.textButton}>
					{submit ? 'Witaj' : 'Zarejestruj się'}
				</Text>
			</Pressable>

			{submit ? <View>
				<Text style={styles.textRegister}>You are registered as {name}. Masz {age} lat</Text>
				<Image
					source={age < 18 ? require('./assets/candy.png') : require('./assets/alcohol.png')}
					style={age < 18 ? styles.imageKid : styles.imageAdult}
					resizeMode={'stretch'}
				/>
			</View> :
				null
			}

		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
	},
	header: {
		margin: 10,
		padding: 20,
		fontSize: 30,
		backgroundColor: '#000',
		color: '#f00',
		borderRadius: 10,
	},
	main: {
		marginTop: 20,
	},
	initialize: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		width: '100%',
		padding: 10,
	},

	text: {
		margin: 10,
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000',
	},
	textButton: {
		margin: 10,
		fontWeight: 'bold',
		fontSize: 20,
		color: '#f00',
	},
	textRegister: {
		marginLeft: 50,
    marginRight: 50,
		marginTop: 10,
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000',
	},
	input: {
		width: 200,
		height: 50,
		marginBottom: 10,
		fontSize: 20,
		color: '#f00',
		backgroundColor: '#000',
		textAlign: 'center',
		borderColor: '#555',
		borderRadius: 5,
		borderWidth: 1,
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 200,
		height: 50,
		marginTop: 20,
		marginLeft: 10,
		borderRadius: 20,
	},
	imageAdult: {
		width: 100,
		height: 150,
		marginVertical: 20,
		marginHorizontal: 150,

	},
	imageKid: {
		width: 150,
		height: 100,
		marginVertical: 20,
		marginHorizontal: 150,
	}

});

export default App;