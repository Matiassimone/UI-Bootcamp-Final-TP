import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchContainer from '../containers/searchContainer/SearchContainer';
import PropTypes from 'prop-types';

const ScreenSearch = ({ navigation }) => (
  <View style={styles.container}>
    <SearchContainer
    navigationProp={ navigation } />
  </View>
);

ScreenSearch.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ScreenSearch.navigationOptions = {
  title: 'Search',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
});

export default ScreenSearch;