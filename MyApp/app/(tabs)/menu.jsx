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
                        <View style={styles.row}>
                            <View style={styles.menuTextrow}>
                                <Text style={[styles.menuItemText,styles.menuItemtitle]}>{item.id}. {item.title}</Text>
                                <Text style={styles.menuItemText}>{item.description}</Text>
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
            width:100,
            height:100,
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
        menuItemtitle: {
            fontSize:18,
            textDecorationLine:'underline',

        },
        row: {
            flexDirection:'row',
            width:'100%',
            maxWidth:600,
            height:100,
            marginBottom:10,
            borderStyle:'solid',
            color: colorScheme === 'dark' ? Colors.dark : 'orange',
            borderWidth:1,
            borderRadius:20,
            overflow:'hidden',
            marginHorizontal:'auto'
        },
        menuTextrow : {
            width:'65%',
            paddingTop:10,
            paddingLeft:10,
            paddingRight:5,
            flexGrow:1,
        },
        menuItemText : {
            color:'orange',
            fontWeight:'bold'
        }

           })
}
