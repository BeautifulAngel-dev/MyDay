import React from 'react'
import { FlatList, Pressable, Text } from 'react-native'
import { BackgroundView } from '../../components'
import { styles } from './style'

interface IProps {
  DATA: Array<object>
  goToDetails: (item) => void
}

const HomeScreenView: React.FC<IProps> = ({ DATA, goToDetails }) => {
  const renderItem = ({ item }) => {
    console.log(item, 'item from FlatList');
    return (
      <Pressable style={styles.itemContainer} onPress={() => goToDetails(item)}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </Pressable>
    )
  }

  return (
    <BackgroundView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </BackgroundView>
  )
}

export default HomeScreenView