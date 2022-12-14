import React from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import Screen from "./../components/shared/Screen";
import Icon from "../components/shared/Icon";
import ItemSeparator from "./../components/shared/ItemSeparator";
import ToplearnText from "./../components/shared/ToplearnText";

const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require("../assets/uns.jpg")}
                />
                <View style={styles.details}>
                    <ToplearnText fontFamily="ih" size="2">
                        یونس قربانی
                    </ToplearnText>
                    <ToplearnText
                        fontFamily="yekan"
                        size="1.5"
                        styles={styles.subTitle}
                    >
                        Younes.gh@chmail.ir
                    </ToplearnText>
                </View>
                <TouchableOpacity onPress={() => {}} style={styles.settings}>
                    <Icon name="settings" backgroundColor="tomato" />
                </TouchableOpacity>
            </View>
            <ItemSeparator height={10} />
            <TouchableHighlight underlayColor="#f8f4f4" onPress={() => {}}>
                <View style={styles.container}>
                    <Icon name="logout" backgroundColor="tomato" />
                    <View style={styles.details}>
                        <ToplearnText fontFamily="ih" size="2">
                            خروج از حساب کاربری
                        </ToplearnText>
                    </View>
                </View>
            </TouchableHighlight>
        </Screen>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 15,
    },
    screen: {
        backgroundColor: "#f8f4f4",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 35,
    },
    details: {
        marginLeft: 10,
        justifyContent: "center",
    },
    subTitle: {
        color: "#6e6969",
    },
    settings: {
        alignSelf: "center",
        marginLeft: 20,
    },
});
