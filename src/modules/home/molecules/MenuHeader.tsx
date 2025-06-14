import { menuData } from "@utils/db";
import { FC, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";
import MenuItem from "../atomes/MenuItem";
import Icon from "@components/atoms/Icon";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "@utils/Constants";

const MenuHeader: FC<{ scrollY: any }> = ({ scrollY }) => {

    const [focusedIndex, setFocusedIndex] = useState(0)

    const opacityFadingStyles = useAnimatedStyle(() => {
        const opacity = interpolate(scrollY.value, [0, 80], [1, 0]);
        return { opacity };
    })

    return (
        <Animated.View style={[styles.container, opacityFadingStyles]}>
            <SafeAreaView />
            <View style={styles.flexRow}>
                {menuData.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        isFocused={focusedIndex === index}
                        onSelect={() => setFocusedIndex(index)}
                    />
                ))}
            </View>

            <View style={styles.addressContainer}>
                <Icon size={16} name="home" iconFamily="Ionicons" />
                <Text style={styles.homeText}>HOME</Text>
                <Text numberOfLines={1} style={styles.addressText}>43, high stack, grater noida, delahi</Text>
                <Icon size={16} name="chevron-forward-sharp" iconFamily="Ionicons" />
            </View>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    homeText: {
        marginHorizontal: 5,
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: RFValue(10),
    },
    addressText: {
        flex: 1,
        fontSize: RFValue(9),
        color: Colors.text
    }
})


export default MenuHeader;