import { View, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { screenHeight } from '@utils/Constants';
import MenuHeader from './molecules/MenuHeader';
import SearchBar from './molecules/SearchBar';
import MainList from './templates/MainList';

const Home = () => {
  const insets = useSafeAreaInsets();

  const scrollYGlobal = useSharedValue(0)

  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 100],
      [0, -100],
      Extrapolate.CLAMP
    )
    return { transform: [{ translateY: translateY }] };
  });

  return (
    <View style={styles.container}>
      <View style={{ height: Platform.OS === 'android' ? insets.top : 0 }} />

      <Animated.View style={[moveUpStyle]}>
        <View>
          <MenuHeader scrollY={scrollYGlobal} />
          <SearchBar />
        </View>
      </Animated.View>

      <Animated.View style={[moveUpStyle, { height: screenHeight }]}>
        <MainList scrollYGlobal={scrollYGlobal} />
      </Animated.View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home;
