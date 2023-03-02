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


const Screen3 = ({navigation}) => {

  return (
    <View style={styles.parentContainer}>
      <View style={styles.myinfo}>
        <Image source={require('../assets/icon1.png')} style={{ width: 28.73, height: 30.1, marginTop: 40.64, marginLeft: 16.66 }} />
        <Image source={require('../assets/message.png')} style={{ width: 30, height: 31, position: 'absolute', marginTop: 40.64, marginLeft: 332 }} />
        <Text style={{ color: '#727682', marginTop: 40.64, position: 'absolute', marginLeft: 164, fontSize: 14, fontWeight: 500,fontFamily:'Montserrat_medium' }} >Profile</Text>
        <Image source={require('../assets/profile.png')} style={{ width: 75, height: 75, marginLeft: 150, marginTop: 26 }} />
        <Text style={{
          fontSize: 14, fontWeight: 500, marginLeft: 149, color: 'black', marginTop: 14,fontFamily:'Montserrat_medium'
        }}>Jina Simons</Text>
        <Text style={{
          color: '#727682', marginLeft: 163,
          marginTop: 8,
        }}>6000 Pts</Text>
        <Text style={{
          fontSize: 14,
          fontWeight: 500, color: '#727682', marginLeft: 16, marginTop: 8,fontFamily:'Montserrat_medium'
        }}>I’m a software developer that has been in the  </Text>
        <Text style={{
          fontSize: 14,
          fontWeight: 500, color: '#727682', marginLeft: 16,fontFamily:'Montserrat_medium'
        }}>crypto space since 2012. And I’ve seen it grow</Text>
        <Text style={{
          fontSize: 14,
          fontWeight: 500, color: '#727682', marginLeft: 16,fontFamily:'Montserrat_medium'
        }}> and falter over a period of time. Really happy to</Text>
        <Text style={{
          fontSize: 14,
          fontWeight: 500, color: '#727682', marginLeft: 16,fontFamily:'Montserrat_medium'
        }}>be here!</Text>
        <Image source={require('../assets/logout.png')} style={{ width: 18, height: 14, marginTop: 23, marginLeft: 149 }} />
        <Text style={{ marginLeft: 176, marginTop: -18, color: '#727682', fontSize: 14, fontWeight: 500,fontFamily:'Montserrat_medium' }}>Logout</Text>
        <View style={{ marginTop: 44, width: 343, height: 103, borderWidth: 1, borderColor: '#EEEAF3', backgroundColor: 'white', marginLeft: 16 }} >
          <Text style={{ color: '#727682', marginTop: 20, marginLeft: 20, fontSize: 14, fontWeight: 600 }}>
            Under or Over {`                         `}  Top 5
          </Text>
          <Image source={require('../assets/star.png')} style={{ width: 26.87, height: 31, marginLeft: 158, marginTop: -13, position: 'absolute' }} />
          <Image source={require('../assets/green_up.png')} style={{ width: 22, height: 18, marginTop: 20, marginLeft: 26 }} />
          <Text style={{ fontWeight: 700, fontSize: 24, color: '#4F4F4F', marginLeft: 58, marginTop: 51, position: 'absolute',fontFamily:'Montserrat_medium' }}>81%</Text>
          <Text style={{ fontWeight: 700, fontSize: 24, color: '#4F4F4F', marginLeft: 195, marginTop: 51, position: 'absolute',fontFamily:'Montserrat_medium' }}>-51%</Text>
          <Image source={require('../assets/red_down.png')} style={{ width: 18.75, height: 16, position: 'absolute', marginTop: 57.62, marginLeft: 175.5 }} />
        </View>
        <View style={{ width: '100%', height: 4, backgroundColor: '#F3F2F7', marginTop: 28 }}></View>
        <View style={{ width: '100%', height: 60, backgroundColor: 'white' }}>
          <Text style={{ fontSize: 14, fontWeight: 500, color: '#727682', marginLeft: 43, marginTop: 20,fontFamily:'Montserrat_medium' }}>Games played</Text>
          <Text style={{ fontSize: 14, fontWeight: 600, color: '#727682', marginLeft: 256, marginTop: 20, position: 'absolute' ,fontFamily:'Montserrat_medium'}}>Badges</Text>
          <View style={{ width: 187.5, height: 2, marginTop: 71, marginLeft: 188, backgroundColor: '#6231AD', position: 'absolute',fontFamily:'Montserrat_medium' }}></View>

        </View>
      </View>
      <ScrollView style={{ marginTop: 220, backgroundColor: '#F3F2F7' }}>
        <View style={{
          width: 343, height: 105, borderWidth: 1, borderColor: '#EEEAF3'
          , marginLeft: 16, backgroundColor: 'white', marginTop: 20
        }}>
          <Image source={require('../assets/repeat.png')} style={{ width: 60, height: 60, marginLeft: 16, marginTop: 20, position: 'absolute' }} />
          <Text style={{ color: 'black', marginLeft: 92, marginTop: 20, position: 'absolute', fontWeight: 600,fontFamily:'Montserrat_medium' }}>First Stripe Earned </Text><Text style={{ color: '#FFA600', position: 'absolute', marginTop: 20, marginLeft: 200 }}>x 3</Text>
          <Text style={{ color: 'black', marginLeft: 92, marginTop: 45, position: 'absolute' ,fontFamily:'Montserrat_medium'}}>Top 10% of highest spending {`                  `}players in a month</Text>
        </View>
        <View style={{
          width: 343, height: 105, borderWidth: 1, borderColor: '#EEEAF3'
          , marginLeft: 16, backgroundColor: 'white', marginTop: 20
        }}>
          <Image source={require('../assets/repeat.png')} style={{ width: 60, height: 60, marginLeft: 16, marginTop: 20, position: 'absolute' }} />
          <Text style={{ color: 'black', marginLeft: 92, marginTop: 20, position: 'absolute', fontWeight: 600 ,fontFamily:'Montserrat_medium'}}>Born Winner </Text>
          <Text style={{ color: 'black', marginLeft: 92, marginTop: 45, position: 'absolute',fontFamily:'Montserrat_medium'}}>Top 10% of highest spending {`                  `}players in a month</Text>
        </View>
        <View style={{
          width: 343, height: 105, borderWidth: 1, borderColor: '#EEEAF3'
          , marginLeft: 16, backgroundColor: 'white', marginTop: 20
        }}>
          <Image source={require('../assets/repeat.png')} style={{ width: 60, height: 60, marginLeft: 16, marginTop: 20, position: 'absolute' }} />
          <Text style={{ color: 'black', marginLeft: 92, marginTop: 20, position: 'absolute', fontWeight: 600 ,fontFamily:'Montserrat_medium'}}>Trader of the month </Text>
          <Text style={{ color: 'black', marginLeft: 92, marginTop: 45, position: 'absolute',fontFamily:'Montserrat_medium' }}>Won 7 under-over games in a {`                     `} row</Text>
        </View>
        <View style={{
          width: 343, height: 105, borderWidth: 1, borderColor: '#EEEAF3'
          , marginLeft: 16, backgroundColor: 'white', marginTop: 20
        }}>
          <Image source={require('../assets/repeat.png')} style={{ width: 60, height: 60, marginLeft: 16, marginTop: 20, position: 'absolute' }} />
          <Text style={{ color: 'black', marginLeft: 92, marginTop: 20, position: 'absolute', fontWeight: 600,fontFamily:'Montserrat_medium' }}>Rising Star</Text>
          <Text style={{ color: 'black', marginLeft: 92, marginTop: 45, position: 'absolute',fontFamily:'Montserrat_medium' }}>Top 10% of highest spending {`                  `}players in a month</Text>
        </View>
        <View style={{
          width: 343, height: 105, borderWidth: 1, borderColor: '#EEEAF3'
          , marginLeft: 16, backgroundColor: 'white', marginTop: 20
        }}>
          <Image source={require('../assets/repeat.png')} style={{ width: 60, height: 60, marginLeft: 16, marginTop: 20, position: 'absolute' }} />
          <Text style={{ color: 'black', marginLeft: 92, marginTop: 20, position: 'absolute', fontWeight: 600,fontFamily:'Montserrat_medium' }}>Jackpot </Text>
          <Text style={{ color: 'black', marginLeft: 92, marginTop: 45, position: 'absolute' ,fontFamily:'Montserrat_medium'}}>Top 10% of highest spending {`                  `}players in a month</Text>
        </View>
        <View style={{
          width: 343, height: 105, borderWidth: 1, borderColor: '#EEEAF3'
          , marginLeft: 16, backgroundColor: 'white', marginTop: 20
        }}>
          <Image source={require('../assets/repeat.png')} style={{ width: 60, height: 60, marginLeft: 16, marginTop: 20, position: 'absolute' }} />
          <Text style={{ fontFamily:'Montserrat_medium',color: 'black', marginLeft: 92, marginTop: 20, position: 'absolute', fontWeight: 600,fontFamily:'Montserrat_medium' }}>Impossible </Text>
          <Text style={{ fontFamily:'Montserrat_medium',color: 'black', marginLeft: 92, marginTop: 45, position: 'absolute',fontFamily:'Montserrat_medium' }}>Top 10% of highest spending {`                  `}players in a month</Text>
        </View>

      </ScrollView>
      <View style={{ width: '100%', height: 50, backgroundColor: 'white' }}>
        <Image source={require('../assets/Home.png')} style={{ width: 25, height: 20, marginTop: 11, marginLeft: 27 }} />
        <Text style={{ color: '#6231AD', marginLeft: 22.42, fontSize: 10, fontWeight: 600 }}>Home</Text>
        <Image source={require('../assets/trophy.png')} style={{ width: 25, height: 19, marginLeft: 102, marginTop: 10.11, position: 'absolute' }} />
        <Text style={{ marginLeft: 91.42, color: '#727682', position: 'absolute', marginTop: 33, fontSize: 10, fontWeight: 500 ,fontFamily:'Montserrat_medium'}}> Leagues</Text>
        <Image source={require('../assets/search.png')} style={{ width: 24, height: 24, marginLeft: 174, marginTop: 5.6, position: 'absolute' }} />
        <Text style={{ marginLeft: 165, color: '#727682', position: 'absolute', marginTop: 33, fontSize: 10, fontWeight: 500 ,fontFamily:'Montserrat_medium'}}> Research</Text>
        <Image source={require('../assets/profile_2.png')} style={{ width: 24, height: 24, marginTop: 9, position: 'absolute', marginLeft: 328 }} />
        <Text style={{ marginLeft: 326, color: '#727682', position: 'absolute', marginTop: 33, fontSize: 10, fontWeight: 500 ,fontFamily:'Montserrat_medium'}}>Profile</Text>
        <Image source={require('../assets/leaders.png')} style={{ width: 25, height: 25, position: 'absolute', marginLeft: 251, marginTop: 10 }} />
        <Text style={{ marginLeft: 233, color: '#727682', position: 'absolute', marginTop: 33, fontSize: 10, fontWeight: 500,fontFamily:'Montserrat_medium' }}>Leaderboard</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  myinfo: {
    width: '100%',
    height: '45%',
    backgroundColor: 'white'
  }




});

export default Screen3;

