import React,{useState} from 'react';
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
  TouchableOpacity,
  Modal

} from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const Screen2 = ({ navigation }) => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={styles.parentContainer}>
      <View style={styles.firstText}>
        <Text style={styles.topText}>
          Today's Games
        </Text>
        <View style={{ width: 341, height: '50%', marginTop: 17, marginLeft: 17, borderWidth: 1, borderColor: '#EEEAF3' }}>
          <View style={{ width: 230, height: 2, backgroundColor: '#6988b3' }}></View>
          <Text style={styles.imagetext}>UNDER OR OVER</Text>
          <Text style={styles.clockText}> Starting in </Text>
          <Image source={require('../assets/clock.png')} style={styles.clock} />
          <Text style={styles.time}>03:23:12</Text>
          <Image source={require('../assets/up_down.png')} style={{ width: 22, height: 20, marginTop: 2, marginLeft: 310, position: 'absolute' }} />
          <Text style={{ color: 'black', marginLeft: 15, marginTop: 13, fontSize: 14 }}>Shifu predicts Bitcoin's value will reach</Text>
          <Text style={{ color: 'black', marginLeft: 15, marginTop: 10, fontWeight: 'bold', fontSize: 16 }}>$24524</Text>
          <Text style={{ color: 'black', marginLeft: 15, marginTop: 30 }}>232 chose under</Text>
          <Text style={{ color: 'black', marginTop: 125, position: 'absolute', marginLeft: 233 }}>123 chose over</Text>
          <ProgressBar progress={0.75} style={styles.progress} color={MD3Colors.error4} />

          <Image source={require('../assets/user.png')} style={styles.userimg} />
          <Text style={{ color: 'black', marginLeft: 35, marginTop: -14 }}>355</Text>
          <Image source={require('../assets/vector.png')} style={styles.vector} />
          <Text style={{ color: 'black', marginLeft: 250, marginTop: -16 }}>View Chart</Text>
        </View>
        <Modal transparent visible={true} >
          <View style={{height:'80%',width:'100%',backgroundColor:'white',justifyContent:'center',marginTop:270,borderRadius:20}}>
            <Image source={require('../assets/modal.png')} style={{width:'95%',height:'60%',marginLeft:14,marginTop:-180}} />
            <TouchableOpacity onPress={()=> navigation.navigate('Screen3')} style={{width:343,height:40,backgroundColor:'#6231AD',borderRadius:33,justifyContent:'center',alignItems:'center',marginTop:36,marginLeft:30}}>
              <Text>Submit my prediction</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
    position: 'relative',
    opacity:0.3
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
  vector: {
    width: 16.67,
    height: 16.67,
    marginTop: -16,
    marginLeft: 223
  },
  imagetext: {
    color: 'black',
    position: 'absolute',
    fontSize: 12,
    fontWeight: 600,
    marginTop: 19,
    marginLeft: 15
  },
  clockText: {
    marginLeft: 178,
    marginTop: 19,
    color: 'black'
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
    marginTop: 18,
    marginLeft: 273,
    color: 'black'
  },
  progress: {
    height: 10,
    width: 311,
    borderRadius: 10,
    marginLeft: 15,
    backgroundColor: '#374aaf',
    marginTop: 8
  },
  userimg: {
    width: 12,
    height: 12,
    marginLeft: 15,
    marginTop: 24
  },

})

export default Screen2;
