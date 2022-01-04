import React,{useState,useContext} from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view';
import DiscoverScreen from '../screens/DiscoverScreen';
import NewsScreen from '../screens/NewsScreen';
import TopNavigation from './TopNavigation';
import { NewsContext } from '../Api/Context';
const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });
  
  
const InshortsTabs = () => {
    const layout = useWindowDimensions();
    const {index,setIndex} = useContext(NewsContext)
    const [routes] = useState([
        { key: 'first', title: 'Discovery' },
        { key: 'second', title: 'News' },
      ]);
  
    return (
        <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={()=> <TopNavigation
      index={index}
      setIndex={setIndex}
      
      />}
    />
    )
}

export default InshortsTabs

const styles = StyleSheet.create({
    
})
