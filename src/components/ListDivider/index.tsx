import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

type Props = {
  centered?: boolean
}

export function ListDivider({ centered }: Props) {
  return (
    <View
      style={[
        styles.container,
        centered ? { marginVertical: 12 } : { marginTop: 2, marginBottom: 31 },
      ]}
    />
  )
}
