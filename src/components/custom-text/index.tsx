import React from 'react'
import { Text } from 'react-native';

type Props = {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
  color?: string;
  lineHeight?: number;
  letterSpacing?: number;
  marginBottom?: string | number | undefined;
  textAlign?: "auto" | "left" | "right" | "center" | "justify" | undefined;
  width?: string | number | undefined;
  children?: any;
};

const CustomText: React.FC<Props> = ({
  fontFamily = 'Lato',
  fontSize = 16,
  fontWeight = '700',
  color = '#000',
  lineHeight,
  letterSpacing = 0,
  marginBottom = 0,
  width,
  textAlign,

  children,
}) => {
  return (
    <Text style={{
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeight: fontWeight,
      color: color,
      lineHeight: lineHeight,
      letterSpacing: letterSpacing,
      marginBottom: marginBottom,
      textAlign: textAlign,
      width: width,
    }}>
      { children }
    </Text>
  )
}

export default CustomText
