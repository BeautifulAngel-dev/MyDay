import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
import { Props } from '../../types'


export const Header: React.FC<Props.ILinkProps> = ({
  label,
  onPress,
  type,
}) => {
  const navigation = useNavigation();
  return (
    <></>
  )
}

