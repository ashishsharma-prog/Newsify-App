import React,{useContext} from 'react'
import { StyleSheet, Text, View ,Dimensions,Image,ImageBackground, TouchableOpacity, Linking} from 'react-native'

import { NewsContext } from '../Api/Context';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const SingleNews = ({item,index}) => {
    const {darkTheme} = useContext(NewsContext)
    return (
        <View 
        
        style={{
            height: windowHeight,
            width: windowWidth,
            transform: [{scaleY:-1}]
          }}
        >
            <Image 

            source={{uri: item.urlToImage ? item.urlToImage : null}}
            style={styles.img}
            
            />
            <View 
            style={{...styles.description,
            backgroundColor: darkTheme?'#282c35':'white'
            }}
            >
            <Text style={{...styles.title,color:darkTheme?'white':'black'}}>{item.title}</Text>
            <Text style={{...styles.content,color:darkTheme?'white':'black'}}>{item.description}</Text>
            <Text style={{color:darkTheme?'white':'black'}}>
                Short by
                <Text style={{fontWeight:'bold',marginLeft:10}}> {item.author??"unknown"}</Text>

            </Text>
            <ImageBackground
            blurRadius={30}
            style={styles.footer}
            source={{uri: item.urlToImage ? item.urlToImage : null}}
            
            >
                <TouchableOpacity 
                onPress={()=> Linking.openURL(item.url)}
                
                >
                 <Text style={{fontSize:15,color:darkTheme?'white':'black'}}>
                     '{item?.content?.slice(0,45)}...'

                 </Text>
                 <Text style={{fontSize:17,fontWeight:'bold',color:darkTheme?'white':'black'}}> Read More</Text>
                </TouchableOpacity>
            </ImageBackground>
            

            </View>
           
        </View>
    )
}

export default SingleNews

const styles = StyleSheet.create({
    title:{
        fontSize:25,
        fontWeight:'bold',
        paddingBottom:10,
        
    },
    img:{
height: '45%',
resizeMode:'cover',
width: windowWidth
    },
    content:{
        fontSize:15,
        paddingBottom:10
    },
    content:{
fontSize:18,
paddingBottom:10
    },
    footer:{
        height:80,
        width:windowWidth,
        position: "absolute",
        bottom:0,
        backgroundColor:'#d7be69',
        justifyContent:'center',
        paddingHorizontal:20
    },
    description:{
        padding: 15,
        flex:1
    }

    
})
