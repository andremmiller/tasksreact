import {Alert, Platform} from 'react-native'

// const server = Platform.OS === 'ios' ? 'http://192.168.0.17:3000' : 'http://192.168.0.17:3000'
const server = 'http://tasks.api.amapps.com.br/api'

function showError(err) {
    if(err.response && err.response.data) {
        Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err.response.data}`)
    } else {
        Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`)
    }
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess }