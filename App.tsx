import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';
import { setCustomText } from 'react-native-global-props';
import RBSheet from "react-native-raw-bottom-sheet";
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 
import { roundValues } from './src/constants/main';
import SelectableButton from './src/components/selectable-button';
import CustomText from './src/components/custom-text';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lato': require('./src/assets/fonts/Lato-Regular.ttf'),
  });
  const refRBSheet = useRef<RBSheet>(new RBSheet({}));
  const [currentRoundValue, setCurrentRoundValue] = useState<number>(105);

  useEffect(() => {
    if(fontsLoaded) {
      const customTextProps = {
        style: {
          fontFamily: 'Lato'
        }
      };
      setCustomText(customTextProps);
    }
  }, [fontsLoaded]);

  return (
    <View style={styles.container}>
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current?.open()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={Dimensions.get('window').height - 50}
        customStyles={{
          wrapper: {
            backgroundColor: "#000000B2"
          },
          draggableIcon: {
            backgroundColor: "#DBDBDB",
            marginBottom: 8,
          },
          container: styles.drawerContainer,
        }}
      >
        <View style={styles.navMenu}>
          <AntDesign name='left' size={24} color={'black'} />
          <CustomText color='#4A4A4A' fontSize={17} lineHeight={20.4}>Confirmation</CustomText>
          <AntDesign name='close' size={22} color='#4A4A4A' onPress={() => {refRBSheet.current?.close();}} />
        </View>

        <CustomText fontSize={24} lineHeight={29} marginBottom={8} >Issue a loan</CustomText>

        <View style={styles.contactContainer}>
          <View style={{backgroundColor: '#EAFFF3', padding: 12, borderRadius: 9999, marginRight: 8}}>
            <FontAwesome name='arrow-up' size={16} color={'#37BF6F'} style={{fontWeight: 'bold'}} />
          </View>
          <CustomText color='#9EA6A6' lineHeight={19} >To: Leslee Moss</CustomText>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <CustomText fontWeight='400' lineHeight={17.6}>Loan Amount</CustomText>
            <CustomText color='#4A4A4A'>$5,000</CustomText>
          </View>
          <View style={styles.detailRow}>
          <CustomText fontWeight='400' lineHeight={17.6}>Loan Term</CustomText>
            <CustomText color='#4A4A4A'>5 months</CustomText>
          </View>
          <View style={styles.detailRow}>
          <CustomText fontWeight='400' lineHeight={17.6}>Repayment Amount</CustomText>
            <CustomText color='#4A4A4A'>${currentRoundValue}/month</CustomText>
          </View>
        </View>

        <View style={styles.roundContainer}>
          <CustomText color='#4A4A4A' lineHeight={19.2} textAlign='center' width='100%'>Round it up</CustomText>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 8}}>
            {
              roundValues.map((roundValue: number, key: number) => (
                <SelectableButton
                  key={`rounded-value-${key}`}
                  color='#37BF6F'
                  borderColor='#D6D8E6'
                  value={roundValue.toString()}
                  selectedValue={currentRoundValue.toString()}
                  callback={(value: string) => setCurrentRoundValue(parseInt(value))}
                />
              ))
            }
          </View>
          <CustomText fontSize={12} textAlign='center' color='#37BF6F'>Enter custom Amount</CustomText>
        </View>

        <View style={styles.resultContainer}>
          <CustomText color='#4A4A4A' lineHeight={19.2}>Total Receivable</CustomText>
          <CustomText fontSize={32} color='#37BF6F'>
            ${(5000 * 5 * currentRoundValue).toFixed(2)}
          </CustomText>
        </View>

        <LinearGradient
          // Button Linear Gradient
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          colors={['#41BFBD', '#3DE883']}
          style={styles.confirmButton}>
          <CustomText fontSize={22} color='#fff' textAlign='center' letterSpacing={1.4}>
              Confirm
            </CustomText>
        </LinearGradient>

        <TouchableOpacity
          onPress={() => {}}
          style={{ 
            
          }}>
        </TouchableOpacity>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  drawerContainer: {
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    paddingHorizontal: 16,
  },
  navMenu: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  detailsContainer: {
    marginBottom: 25,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Lato',
    fontSize: 16,
    lineHeight: 17,
    marginVertical: 5,
  },
  roundContainer: {
    marginBottom: 33,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  confirmButton: {
    borderRadius: 9999,
    paddingVertical: 15,
    position: 'absolute',
    bottom: 10,
    left: 16,
    width: '100%',
  },
});
