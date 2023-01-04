import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from './components/Button'

const Home = () => {
    const navigation = useNavigation()

    return (
        <ImageBackground source={require('../assets/koki.jpg')} resizeMode='cover' style={styles.container}>
            
            <View style={styles.topCard}>
                <View style={styles.info_place}>
                    <View style={styles.textFlex}>
                        <Icon 
                            name='map-marker' 
                            color="#F58500" 
                            style={{ fontSize: 30 }}
                        ></Icon>
                        <Text style={{ fontWeight: 'bold', color: "#5B005C", marginTop: 12, marginLeft: 5 }}>Cameroon</Text>
                    </View>
                    <View>
                        <Icon
                            name='info'
                            color='#fff'
                            style={{ fontSize: 20, backgroundColor: '#5B005C', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 50 }}
                            onPress={() => alert('about developer popup !')}
                        ></Icon>
                    </View>
                </View>
                <View>
                    <Text style={styles.helloText}>Hello food lovers,</Text>
                    <Text style={{ fontSize: 16 }}>welcome to this food recognition app</Text>
                </View>
            </View>

            <View style={{ margin: 10, marginTop: 200 }}>
                <Button 
                    icon='camera' 
                    title='Open camera' 
                    color='violet'
                    subText='Real time food components detection' 
                    onPress={ () => navigation.dispatch(
                        CommonActions.navigate({
                            name: 'camera',
                        }))
                    }
                />
                <Button 
                    icon='image' 
                    title='Pick from gallery' 
                    color='white'
                    subText='Detect multiple food components' 
                    onPress={ () => navigation.dispatch(
                        CommonActions.navigate({
                            name: 'home',
                        }))
                    }
                />
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    topCard: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        paddingVertical: 20,
        margin: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, .7)'
    },
    info_place: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    helloText: {
        fontSize: 30,
        color: '#5B005C',
        textAlign: 'left',
        marginTop: 45,
        marginBottom: 7,
        fontWeight: 'bold'
    },
    textFlex: {
        display: 'flex',
        flexDirection: 'row'
    },
    textBold: {
        color: '#5B005C',
        fontWeight: 'bold',
        fontSize: 17
    }
})

export default Home