import { View, Text, StyleSheet, Pressable, FlatList, Image } from 'react-native'
import React, { FC } from 'react'
import { FONTS, screenWidth } from '@utils/Constants'
import { RFValue } from 'react-native-responsive-fontsize'
import { navigate } from '@navigation/NavigationUtils'

const AnimatedHorizontalList: FC<{ data: any }> = ({ data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{data?.title}</Text>

            <FlatList
                data={data?.data}
                keyExtractor={(item) => item.id}
                horizontal
                style={{ paddingHorizontal: 15 }}
                renderItem={({ item, index }) => (
                    <Pressable key={index} style={styles.imageContainer} onPress={() => navigate('categories')}>
                        <Image source={{ uri: item?.image_uri }} style={styles.image} />
                    </Pressable>
                )}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15,
    },
    imageContainer: {
        width: screenWidth * 0.45,
        height: screenWidth * 0.6,
        marginRight: 15,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    textStyle: {
        fontSize: RFValue(14),
        marginHorizontal: 15,
        marginBottom: 15,
        fontFamily: FONTS.heading
    }
})

export default AnimatedHorizontalList