import React, { useCallback } from 'react'
import HomeScreenView from './HomeScreenView'
import { useNavigation } from '@react-navigation/native'
import { screenNames, screenNavigators } from '../../constants'

const LoginScreenContainer: React.FC = () => {
  const navigation = useNavigation()

  const goToDetails = (item) => {
    navigation.navigate(screenNames.DETAILS, { item });
  }

  const DATA = [{
    id: 0,
    title: 'some text from item 1',
    description: 'description text from item 1'
  }, {
    id: 1,
    title: 'some text from item 2',
    description: 'description text item 2'
  }, {
    id: 2,
    title: 'some text from item 3',
    description: 'description text from item 3'
  }, {
    id: 3,
    title: 'some text from item 4',
    description: 'description text from item 4'
  }, {
    id: 4,
    title: 'some text from item 5',
    description: 'description text from item 5'
  }, {
    id: 5,
    title: 'some text from item 6',
    description: 'description text from item 6'
  }]

  return (
    <HomeScreenView DATA={DATA} goToDetails={goToDetails} />
  )
}

export default LoginScreenContainer
