import React,{useContext,useState} from 'react'
import { Image,StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native'
import { categories,sources } from '../Api/api'
import { NewsContext } from '../Api/Context'
import Carousel from 'react-native-snap-carousel'
import Search from '../component/Search'



const DiscoverScreen = () => {
const {setCategory,setSource,darkTheme} = useContext(NewsContext)
    const windowWidth = Dimensions.get("window").width
    const SLIDE_WIDTH = Math.round(windowWidth/3.5)
    return (
        <View style={styles.discover}>
           {/* search*/ }
          <Search/>
            {/* category*/ }
            <Text style={{...styles.subtitle,color:darkTheme? "white":"black"}}>Categories</Text>
             <Carousel
             layout={'default'}
             data={categories}
             renderItem={({item,index})=>(
                 <TouchableOpacity style={styles.category}
                 onPress={()=> setCategory(item.name)}
                 >
                <Image source={{uri :item.pic}} style={styles.categoryImage}/>
                <Text style={{...styles.name,color: darkTheme?'white':'black'}}>{item.name}</Text>
                 </TouchableOpacity>
             )}
             sliderWidth={windowWidth}
             itemWidth={SLIDE_WIDTH}
             activeSlideAlignment={'start'}
             inactiveSlideScale={1}
             inactiveSlideOpacity={1}
             />


             <Text style={{...styles.subtitle,color:darkTheme?"white":'black'}}>Sources</Text>
            <View style={styles.Sources}>
                {sources.map((item)=>(
                    <TouchableOpacity
                    onPress={()=>setSource(item.id)}
                    key={item.id}
                    style={styles.sourceContainer}
                    
                    >
                        <Image source={{uri:item.pic}} style={styles.sourceImage}/>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default DiscoverScreen

const styles = StyleSheet.create({
   discover:{
        padding: 10,
    alignItems:'center'
        
    },
    subtitle:{
        fontSize:20,
        fontWeight:'bold',
        paddingBottom: 8,
        marginHorizontal:5,
        borderBottomColor:'#007FFF',
        borderBottomWidth:5,
        alignSelf:'flex-start',
        borderRadius:10

    },
    categoryImage:{
        height:'60%',
        width:"100%",
        resizeMode:"contain"
    },
    name:{
        fontSize:12,
        fontWeight:'bold',
        textTransform:'capitalize',
        
    },
    category:{
        height:130,
        margin: 10,
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    sourceImage:{
        height:'100%',
        borderRadius:10,
        resizeMode:'cover'
    },
    Sources:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        paddingVertical:15
    },
    sourceContainer:{
        height:150,
        width:'40%',
        borderRadius:10,
        margin: 15,
        backgroundColor:'#cc313d'
    }
})
