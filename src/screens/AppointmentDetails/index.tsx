import React from 'react'
import { View, Text, FlatList, ImageBackground } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Fontisto } from '@expo/vector-icons'

import { Header } from './../../components/Header'
import { Background } from './../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { ListDivider } from '../../components/ListDivider'
import { Member } from '../../components/Member'
import { ButtonIcon } from '../../components/ButtonIcon'

import { theme } from './../../global/styles/theme'
import { styles } from './styles'
import BannerImg from '../../assets/banner.png'

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'online',
    },

    {
      id: '2',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'offline',
    },
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={20} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma paritda da
            mds10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
        renderItem={({ item }) => <Member data={item} />}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na Partida" />
      </View>
    </Background>
  )
}
