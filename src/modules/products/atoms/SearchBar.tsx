import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { FC } from 'react'
import Icon from '@components/atoms/Icon'
import { goBack, navigate } from '@navigation/NavigationUtils'

interface SearchBarProps {
    cartLength: number
}

const SearchBar: FC<SearchBarProps> = ({ cartLength }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => goBack()}>
                <Icon size={24} color='black' name='arrow-left' iconFamily='MaterialCommunityIcons' />
            </Pressable>
            <View style={styles.searchContainer}>
                <Icon size={20} color='black' name='search' iconFamily='MaterialIcons' />
                <TextInput
                    style={styles.searchInput}
                    placeholder='Search Products'
                    placeholderTextColor={'#666'}
                />
            </View>

            <Icon size={24} color='black' name='heart-outline' iconFamily='Ionicons' />

            <Pressable onPress={() => navigate('cart')}>
                <Icon size={24} color='black' name='cart-sharp' iconFamily='Ionicons' />
                {cartLength > 0 &&
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            {cartLength}
                        </Text>
                    </View>
                }
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 5,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 10,
        width: '70%',
        marginHorizontal: 10
    },
    searchIcon: {
        marginRight: 15
    },
    searchInput: {
        flex: 1,
        height: 40
    },
    cartContainer: {
        position: 'relative'
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -6,
        backgroundColor: '#f00',
        borderRadius: 10,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold'
    }
})


export default SearchBar