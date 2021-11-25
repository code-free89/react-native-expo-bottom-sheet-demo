import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type Props = {
  color?: string;
  borderColor?: string;
  fontSize?: number;
  value: string;
  selectedValue?: string;
  callback?: any;
}

const SelectableButton: React.FC<Props> = ({color, borderColor, fontSize = 16, value, selectedValue, callback}) => {
  return (
    <TouchableOpacity
      onPress={() => callback ? callback(value) : console.log(value)}
      style={{ 
        backgroundColor: value === selectedValue ? '#37BF6F' : '#fff',
        borderWidth: 1,
        borderColor: value === selectedValue ? '#37BF6F' : borderColor,
        borderRadius: 9999,
        paddingHorizontal: 24,
        paddingVertical: 6.5,
        marginHorizontal: 4,
      }}>
      <Text style={{
        fontFamily: 'Lato',
        fontSize: fontSize,
        color: value === selectedValue ? '#fff' : color,
        fontWeight: '700'
      }}>
        { value }
      </Text>
    </TouchableOpacity>
  );
};

export default SelectableButton
