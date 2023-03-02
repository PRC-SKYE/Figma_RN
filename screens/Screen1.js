import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity

} from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const Screen1 = ({ navigation }) => {

  return (
    <View style={styles.parentContainer}>
      <View style={styles.firstText}>
        <Text style={styles.topText}>
          Today's Games
        </Text>
        <View styles={styles.imageStyle}>
          <ImageBackground source={require('../assets/group.png')} style={styles.image} >
            <Text style={styles.imagetext}>UNDER OR OVER</Text>
            <Text style={styles.clockText}> Starting in </Text>
            <Image source={require('../assets/clock.png')} style={styles.clock} />
            <Text style={styles.time}>03:23:12</Text>

            <Text style={styles.bitcoin1}>Bitcoin price will be under </Text>
            <Text style={styles.bitcoin2}>$24,524 at 7 a ET on 22nd Jan'21</Text>
          </ImageBackground>
          <View style={styles.secndView}>
            <Text style={styles.textprize}>PRIZE POOL</Text>
            <Text style={styles.under}>UNDER</Text>
            <Text style={styles.over}>OVER</Text>
            <Text style={styles.entry}>ENTRY FEES</Text>

            <Text style={styles.value1}>$12,000</Text>
            <Text style={styles.value2}>3.25x</Text>
            <Text style={styles.value3}>1.25x</Text>
            <Text style={styles.value4}>5</Text>
            <Image source={require('../assets/coin.png')} style={styles.coin} />

            <Text style={styles.ques}>What's your prediction?
            </Text>
            <View style={styles.btnview}>
              <TouchableOpacity style={styles.button1}>
                <Image source={require('../assets/down.png')} style={{ width: 11.5, height: 11, marginLeft: 44, marginTop: 25, position: 'absolute' }} />
                <Text style={{ color: '#FFFFFF', marginLeft: 59, marginTop: 20, position: 'absolute',fontFamily:'Montserrat_medium' }}>UNDER</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Screen2')}>
                <Image source={require('../assets/up.png')} style={{ width: 11.5, height: 11, marginLeft: 44, marginTop: 25, position: 'absolute' }} />
                <Text style={{ color: '#FFFFFF', marginLeft: 59, marginTop: 22, position: 'absolute',fontFamily:'Montserrat_medium' }}>OVER</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.endview}>
              <Image source={require('../assets/user.png')} style={styles.userimg} />
              <Image source={require('../assets/vector.png')} style={styles.vector} />
              <Text style={{ color: '#727682', marginTop: 21, marginLeft: 35, fontSize: 14, fontWeight: 600 }}>355 Players</Text>
              <Text style={{ color: '#727682', position: 'absolute', marginTop: 21, marginLeft: 248, fontSize: 14, fontWeight: 600 }}>View chart</Text>
              <ProgressBar progress={0.75} style={styles.progress} color={MD3Colors.error2} />
              <Text style={{ position: 'absolute', color: '#B5C0C8', marginLeft: 15, marginTop: 74.01, fontSize: 12, fontWeight: 500,fontFamily:'Montserrat_medium' }}>232 predicted under</Text>
              <Text style={{ position: 'absolute', color: '#B5C0C8', marginLeft: 216, marginTop: 74.01, fontSize: 12, fontWeight: 500,fontFamily:'Montserrat_medium' }}>123 predicted over</Text>
            </View>

          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'relative'
  },
  topText: {
    color: 'black',
    fontWeight: 600,
    fontSize: 16,
  },
  firstText: {
    marginTop: 13,
    marginLeft: 16,


  },
  image: {
    width: 341,
    height: 104,
    marginTop: 17

  },
  imagetext: {
    color: '#D2BAF5',
    position: 'absolute',
    fontSize: 12,
    fontWeight: 600,
    marginTop: 19,
    marginLeft: 15,
    fontFamily:'Montserrat_medium'
  },
  imageStyle: {
    width: 343,
    height: 389,


  },
  clockText: {
    marginLeft: 178,
    marginTop: 19,
    fontFamily:'Montserrat_medium'
  },
  clock: {
    position: 'absolute',
    width: 14,
    height: 14,
    marginLeft: 251,
    marginTop: 20
  },
  time: {
    position: 'absolute',
    marginTop: 17,
    marginLeft: 273
  },
  bitcoin1: {
    color: '#D2BAF5',
    marginTop: 16,
    marginLeft: 15,
    fontWeight: 600,
    fontFamily:'Montserrat_medium'

  },
  bitcoin2: {
    marginLeft: 16,
    fontSize: 14,
    fontWeight: 700,
    fontFamily:'Montserrat_medium'
  },
  coin: {
    position: 'absolute',
    width: 9,
    height: 9,
    marginTop: 47.08,
    marginLeft: 316.08
  },
  secndView: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEAF3'


  },
  textprize: {
    position: 'absolute',
    color: '#B5C0C8',
    marginLeft: 16,
    marginTop: 20,
    fontFamily:'Montserrat_medium'

  },
  under: {
    position: 'absolute',
    color: '#B5C0C8',
    marginLeft: 113,
    marginTop: 20,
    fontFamily:'Montserrat_medium'
  },
  over: {
    color: '#B5C0C8',
    marginLeft: 188,
    marginTop: 20,
    fontFamily:'Montserrat_medium'
  },
  entry: {
    position: 'absolute',
    color: '#B5C0C8',
    marginLeft: 251,
    marginTop: 20,
    fontFamily:'Montserrat_medium'
  },
  value1: {
    position: 'relative',
    marginLeft: 16,
    marginTop: 8,
    color: 'black'
  },
  value2: {
    position: 'absolute',
    marginLeft: 117,
    marginTop: 43,
    color: 'black'
  },
  value3: {
    position: 'absolute',
    marginLeft: 190,
    marginTop: 43,
    color: 'black'
  },
  value4: {
    position: 'absolute',
    marginLeft: 295,
    marginTop: 43,
    color: 'black'

  },
  ques: {
    color: '#5e686b',
    marginLeft: 16,
    marginTop: 20,
    fontWeight: 600,
    fontSize: 14,
    fontFamily:'Montserrat_medium'
  },
  btnview: {
    width: 341,
    height: 74,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button1: {
    marginTop: 14,
    padding: 20,
    borderRadius: 45,
    width: 147.5,

    backgroundColor: '#452C55',

  },
  button2: {
    padding: 20,
    marginTop: 14,
    borderRadius: 45,
    width: 147.5,

    backgroundColor: '#6231AD'
  },

  endview: {
    width: 341,
    height: 110,
    marginTop: 20,
    backgroundColor: '#F6F3FA'
  },
  userimg: {
    position: 'absolute',
    width: 12,
    height: 12,
    marginLeft: 15,
    marginTop: 24
  },
  vector: {
    width: 16.67,
    height: 16.67,
    position: 'absolute',
    marginTop: 24,
    marginLeft: 223
  },
  progress: {
    height: 10,
    width: 311,
    borderRadius: 10,
    marginLeft: 15,
    backgroundColor: '#2DABAD',
    marginTop: 14
  }
});

export default Screen1;
