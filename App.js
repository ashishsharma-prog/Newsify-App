
import { StatusBar,StyleSheet, Text, View} from 'react-native';
import Context from './Api/Context';
import InshortsTabs from './component/InshortsTabs';
import React,{useContext} from 'react';
import { NewsContext } from './Api/Context';
 function App() {
const {darkTheme} = useContext(NewsContext)
  return (
    <View style={{...styles.container,backgroundColor: darkTheme?'#282C35' : "white"}}>
   <InshortsTabs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:StatusBar.currentHeight,
    
}
});
export default()=>{

  return (
  <Context>
    <App/>
  </Context>)
}
