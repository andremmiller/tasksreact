import React, {Component} from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { showError } from '../common'
import { CommonActions } from '@react-navigation/native';

export default class AuthOrApp extends Component {
    
    componentDidMount = async () => {
        const userDataJson = await AsyncStorage.getItem('userData')
        let userData = null

        try {
            userData = JSON.parse(userDataJson)
        } catch (e) {
            // userData está inválido
        }

        if (userData && userData.token) {
            console.log('Token no storage:' + userData.token)
            axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`
            // this.props.navigation.navigate('Home', userData)
            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Home',
                            params: userData,
                        },
                    ],
                })
            );
        } else {
            // this.props.navigation.navigate('Auth')
            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Auth',
                        },
                    ],
                })
            )
        }
    }
  
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color="grey" key={'chave'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    }
})