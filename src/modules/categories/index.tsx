import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/reduxHook';
import { getCategories } from './api/actions';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '@utils/Constants';
import { navigate } from '@navigation/NavigationUtils';

const Categories: FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(state => state.categories)

  useEffect(() => {
    dispatch(getCategories());
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SafeAreaView />
        <Text style={styles.title}>Categories</Text>
        <Text style={styles.subtitle}>Explore our wide range of categories</Text>
      </View>

      {loading ? (
        <ActivityIndicator size={'small'} color={'black'} />
      ) :
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemContainer} onPress={() => navigate('Products', { id: item._id, name: item?.name })}>
              <Image source={{ uri: item.image_url }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          )
          }
          showsVerticalScrollIndicator={false}
          style={styles.contentConatinor}
          ListFooterComponent={
            <>
              {error &&
                <Text style={styles.subtitle}>Thre was an error</Text>
              }
            </>
          }
        />
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F9EC',
  },
  contentConatinor: {
    padding: 10
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: RFValue(18),
    fontFamily: FONTS.heading,
    fontWeight: 'bold',
    color: '#333'
  },
  subtitle: {
    fontSize: RFValue(13),
    color: '#333',
    marginTop: 5
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10
  },
  name: {
    marginTop: 10,
    fontSize: RFValue(12),
    fontWeight: '500',
    color: '#333'
  }
})


export default Categories;
