import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '@components/atoms/CustomeSafeAreaView';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAppSelector } from '@store/reduxHook';
import { selectCartItem } from './api/slice';
import { navigate } from '@navigation/NavigationUtils';
import { Colors } from '@utils/Constants';
import OrderItem from './atoms/OrderItem';
import PlaceOrderButton from './atoms/PlaceOrderButton';

const Cart = () => {

  const carts = useAppSelector(selectCartItem);
  const user = useAppSelector(state => state.account.user) as any;

  const renderItem = ({ item }: any) => (
    <OrderItem item={item} />
  );

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>My Cart</Text>
        <Text style={styles.number}>Deliver To : {user?.phone ? user?.phone : "🗺️"}</Text>
        <Text style={styles.address}>{user?.address ? user?.address : "Login first to place your orders"}</Text>
      </View>

      {carts.length > 0 ? (
        <FlatList
          data={carts}
          renderItem={renderItem}
          keyExtractor={(item) => item._id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Cart is empty</Text>
          <TouchableOpacity style={styles.showNowButton} onPress={() => navigate('categories')}>
            <Text style={styles.shopNowText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      )}

      {carts?.length > 0 &&
        <PlaceOrderButton />
      }

    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 5,
    borderColor: '#F0F2F5',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: RFValue(14),
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  number: {
    fontWeight: '500'
  },
  address: {
    color: '#666',
    marginTop: 3
  },
  listContainer: {
    paddingTop: 8,
    paddingBottom: 100
  },
  emptyContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
    fontSize: RFValue(14),
    color: '#666',
    marginBottom: 16
  },
  showNowButton: {
    backgroundColor: Colors.active,
    padding: 10
  },
  shopNowText: {
    fontSize: RFValue(12),
    color: '#ffff',
    fontWeight: '500'
  }
})


export default Cart;
