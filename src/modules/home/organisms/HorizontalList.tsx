import { View, Text, StyleSheet, FlatList, Pressable, Image } from 'react-native'
import React, { FC } from 'react'
import { screenWidth } from '@utils/Constants'
import { RFValue } from 'react-native-responsive-fontsize'
import { navigate } from '@navigation/NavigationUtils'

const HorizontalList: FC<{ data: any }> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{data?.title}</Text>

      <FlatList
        data={data?.data}
        keyExtractor={(item) => item.id}
        horizontal
        style={{ paddingHorizontal: 15 }}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigate('categories')}>
            <Image source={{ uri: item?.image_uri }} style={styles.image} />
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
  },
  image: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.6,
    resizeMode: 'contain',
    overflow: 'hidden',
    borderRadius: 15,
    marginRight: 12,
  },
  textStyle: {
    fontSize: RFValue(14),
    fontWeight: '800',
    margin: 19
  }
})


export default HorizontalList