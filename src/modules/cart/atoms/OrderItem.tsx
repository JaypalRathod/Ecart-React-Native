import { View, Text, StyleSheet, Image } from 'react-native'
import React, { FC } from 'react'
import UniversalAdd from '@modules/products/atoms/UniversalAdd'
import { RFValue } from 'react-native-responsive-fontsize'

const OrderItem: FC<{ item: any }> = ({ item }) => {
    return (
        <View style={styles.flexRow}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item?.image_uri }} style={styles.img} />
                <UniversalAdd item={item} />
            </View>

            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item?.name}</Text>
                <Text style={styles.itemDetail}>₹ {item?.price} x {item?.quantity}</Text>
                <Text style={styles.itemTotal}>Rs. {item?.totalPrice}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginBottom: 15,
        borderBottomWidth: 5,
        paddingVertical: 10,
        borderColor: '#F0F2F5',
        padding: 10
    },
    imageContainer: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        resizeMode: 'contain',
        borderWidth: 1,
        height: 90,
        borderColor: '#ccc',
        width: '100%',
        marginBottom: 10
    },
    itemContainer: {
        width: '70%',
    },
    itemTitle: {
        fontSize: RFValue(12),
        fontWeight: '500',
        color: '#000',
    },
    itemDetail: {
        fontSize: RFValue(10),
        fontWeight: '600',
        marginTop: 4
    },
    itemTotal: {
        fontSize: RFValue(12),
        fontWeight: '600',
        color: '#000',
        marginTop: 8
    }
})


export default OrderItem