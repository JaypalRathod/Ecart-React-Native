import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '@store/reduxHook'
import { addItem, removeItem, selectItemCountById } from '@modules/cart/api/slice'
import { Colors } from '@utils/Constants'
import { RFValue } from 'react-native-responsive-fontsize'
import Icon from '@components/atoms/Icon'

const UniversalAdd: FC<{ item: any }> = ({ item }) => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectItemCountById(item.id));

    return (
        <View style={[styles.container, { backgroundColor: count === 0 ? '#fff' : Colors.active }]}>
            {count === 0 ? (
                <TouchableOpacity style={styles.add} onPress={() => dispatch(addItem(item))}>
                    <Text style={styles.addText}>ADD</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={() => dispatch(removeItem(item))}>
                        <Icon color='#fff' name='minus' iconFamily='MaterialCommunityIcons' size={RFValue(14)} />
                    </TouchableOpacity>
                    <Text style={styles.text}>{count}</Text>
                    <TouchableOpacity onPress={() => dispatch(addItem(item))}>
                        <Icon color='#fff' name='plus' iconFamily='MaterialCommunityIcons' size={RFValue(14)} />
                    </TouchableOpacity>
                </View>
            )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: Colors.active,
        width: 65
    },
    add: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 4,
        paddingVertical: 4
    },
    addText: {
        color: Colors.active
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 4,
        paddingVertical: 4,
        width: '100%',
    },
    text: {
        color: '#fff',
        fontWeight: '500',
        fontSize: RFValue(12)
    }
})


export default UniversalAdd