import React,{useContext} from 'react'
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { NewsContext } from '../Api/Context';
const TopNavigation = ({ index, setIndex }) => {
    const {fetchNews,darkTheme,setDarkTheme} = useContext(NewsContext)
    return (
        <View style={{ ...styles.container,backgroundColor: darkTheme?'#282C35' : "white" }} >
            {index === 0 ?
                (<TouchableOpacity
                     style={styles.left}
                
                    onPress={()=>setDarkTheme(!darkTheme)}
                >
                    <Text style={{ ...styles.text, color:darkTheme? 'lightgrey':'white' }}>
                        <MaterialCommunityIcons
                         name="theme-light-dark" 
                         size={30} color="#298fca" 
                        
                         />
                    </Text>

                </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.left}
                        onPress={() => {
                            setIndex(index === 0 ? 1 : 0)
                        }}
                    >
                        <SimpleLineIcons name="arrow-left" size={26} color="#298fca" />
                        <Text style={{ ...styles.text, color: darkTheme?'lightgrey':'black' }}>Discover</Text>
                    </TouchableOpacity>
                )
            }
            <Text style={{...styles.center,color: darkTheme?'white':"black"}}>
                {index ? 'All News':'Discover' }
            </Text>
            {index?(
                <TouchableOpacity 
                style={styles.right}
                onPress={()=>fetchNews("general")}
                >
                    <MaterialCommunityIcons name="reload" size={24} color="#298fca" />
                </TouchableOpacity>
            ):(
                <TouchableOpacity
                style={styles.left}
                onPress={()=>{
                    setIndex(index===0?1:0)
                }}
                >
                    
                    <Text style={{ ...styles.text, color: darkTheme? 'lightgrey':'black' }}>All News</Text>
                    <SimpleLineIcons name="arrow-right" size={26} color="#298fca" />
                </TouchableOpacity>
            )}
        </View >
    )
}

export default TopNavigation

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 80,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16
    },
    center:{
        paddingBottom:6,
        borderBottomColor:'#007FFF',
        borderBottomWidth:5,
        borderRadius:10,
        fontSize: 16,
        fontWeight:'700'

       
    },
    right:{
        width:80,
        alignItems:'flex-end'
    }

})
