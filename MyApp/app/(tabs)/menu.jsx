import { Colors } from "@/constants/theme";
import { Appearance, StyleSheet, Platform,FlatList, ScrollView, View,Text,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {MENU_ITEMS} from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";


export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme,colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    const seperatorcomp = <View style = {styles.seperator} />
    // const headerComp = <Text>Top of the List</Text>
    const footerComp = <Text>END of the List</Text>
    return (
        <Container>
            <FlatList 
                    data={MENU_ITEMS}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator = {false}
                    contentContainerStyle = {styles.contentContainer}
                    ItemSeparatorComponent={seperatorcomp} 
                    // ListHeaderComponent={headerComp}
                    ListFooterComponent={footerComp}
                    ListFooterComponentStyle ={styles.footerComp}
                    ListEmptyComponent={<Text style={{color:'orange',margin:'auto'}}>No Items</Text>}
                    renderItem={({item}) => (
                        <View style={{border:'1px solid orange'}}>
                            <View >
                                <Text style={styles.title}>{item.id}. {item.title}</Text>
                                <Text style={{color:'orange',fontWeight:'bold'}}>{item.description}</Text>
                            </View>
                            <Image source={MENU_IMAGES[item.id -1]} style={styles.image}/>
                        </View>
                    )}
                    />
        </Container>
    )
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        contentContainer : {
            padding:10,
            paddingBottom:20,
            paddingHorizontal:12,
            backgroundColor:theme.background,
        },
        image: {
            width:'300px',
            height:'300px',
            flex:1,
            resizeMode:'cover',
            justifyContent:'center',
            margin:'auto',
            marginTop:10
        },
        seperator : {
            height:1,
            backgroundColor:colorScheme === "dark" ? 'papayawhip' : "orange",
            width:'50%',
            maxWidth:300,
            marginHorizontal:'auto',
            marginBottom:10,
            marginTop:10,
            
        },
        footerComp: {
            marginHorizontal:'auto'
        },
        title: {
            fontWeight:'bold',
            fontSize:'20px',
            marginBottom:10,
            justifyContent:'center',
            display:'flex',
            color:'orange'
        }
           })
}
