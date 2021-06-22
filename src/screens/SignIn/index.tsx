import React from "react"
import { View, Text, Image } from "react-native"

import { useNavigation } from "@react-navigation/native"

import { ButtonIcon } from "../../components/ButtonIcon"
import { styles } from './styles'
import IllustrationImage from '../../assets/illustration.png'


export function SignIn() {
    const navigation = useNavigation()

    function handleSignIn() {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Image source={IllustrationImage} style={styles.image} resizeMode='stretch' />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organiza suas {'\n'}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus jogos
                </Text>

                <ButtonIcon title='Entrar com Discord' activeOpacity={.7} onPress={handleSignIn} />
            </View>
        </View>
    )
}