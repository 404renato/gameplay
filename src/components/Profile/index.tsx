import React, { useState } from 'react'
import { View, Text, Modal, Alert, TouchableOpacity } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import { Avatar } from './../Avatar'
import { useAuth } from '../../hooks/auth'
import { theme } from '../../global/styles/theme'

export function Profile() {
  const { user, signOut } = useAuth()
  const [visible, setVisible] = useState(false)

  return (
    <View style={styles.container}>
      <RectButton
        onPress={() => {
          setVisible(!visible)
        }}
      >
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>

          <Text style={styles.username}>{user.firstName}</Text>
        </View>

        <Text style={styles.message}> Hoje é dia de vitória</Text>
      </View>

      <Modal
        transparent
        statusBarTranslucent
        visible={visible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 90,
            }}
          >
            <Text style={styles.decision}>Deseja sair do Game</Text>

            <Text style={[styles.decision, { color: theme.colors.primary }]}>
              Play
            </Text>

            <Text style={styles.decision}>?</Text>
          </View>

          <View style={styles.decisionContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setVisible(false)}
              style={[
                styles.decisionButton,
                { backgroundColor: 'transparent' },
              ]}
            >
              <Text
                style={[
                  styles.decision,
                  { fontFamily: theme.fonts.text400, fontSize: 18 },
                ]}
              >
                Não
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => signOut()}
              style={[
                styles.decisionButton,
                { borderColor: theme.colors.primary },
              ]}
            >
              <Text
                style={[
                  styles.decision,
                  { fontFamily: theme.fonts.text400, fontSize: 18 },
                ]}
              >
                Sim
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}
