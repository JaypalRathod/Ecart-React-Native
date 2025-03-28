import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { navigate } from '@navigation/NavigationUtils'
import Icon from '@components/atoms/Icon'
import { RFValue } from 'react-native-responsive-fontsize'
import UniversalAdd from './UniversalAdd'

interface ProductItemProps {
    item: any;
    isOdd: any;
}

const ProductItem: FC<ProductItemProps> = ({ item, isOdd }) => {
    return (
        <View style={[styles.productCard, { marginRight: isOdd ? 0 : 10 }]}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item?.image_uri }} style={styles.productImage} />
                {!item?.ar_uri && (
                    <TouchableOpacity style={styles.button3d} onPress={() => navigate('ARViewer', { uri: item?.ar_uri })}>
                        <Icon name='cube-scan' iconFamily='MaterialCommunityIcons' color='#000' size={20} />
                    </TouchableOpacity>
                )}
            </View>

            <View style={{ marginHorizontal: 10 }}>
                <Text style={styles.productname}>{item?.name}</Text>
                <Text numberOfLines={2} style={styles.productDesc}>{item?.description}</Text>
                <Text style={styles.productPrice}>
                    <Text style={{ textDecorationLine: 'line-through', opacity: 0.6 }}>
                        ₹{item?.price + 599}
                    </Text>
                    {" "}₹{item?.price}
                </Text>

                <View style={styles.flexRow}>
                    <View style={styles.hotDealContainer}>
                        <Text style={styles.hotDealText}>Hot Deal</Text>
                    </View>

                    <UniversalAdd item={item} />

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productCard: {
        backgroundColor: '#FFFFFF',
        width: '48%',
        overflow: 'hidden',
        marginBottom: 10
    },
    imageContainer: {
        backgroundColor: '#F7F7F7',
        width: '100%',
        height: 240
    },
    productImage: {
        height: '100%',
        resizeMode: 'cover',
        width: '100%'
    },
    button3d: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 50,
        elevation: 5,
        zIndex: 1
    },
    productname: {
        fontSize: RFValue(10),
        marginTop: 10
    },
    productDesc: {
        fontSize: RFValue(9),
        color: '#999',
        marginTop: 5,
        textAlign: 'left'
    },
    productPrice: {
        fontSize: RFValue(10),
        color: '#000',
        marginTop: 10,
        fontWeight: '500'
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    hotDealContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 10,
        borderRadius: 4,
        alignSelf: 'flex-start',
        backgroundColor: '#E7F9EC'
    },
    hotDealText: {
        color: '#35AB4F',
        fontSize: RFValue(10),
        fontWeight: '600'
    }
})


export default ProductItem