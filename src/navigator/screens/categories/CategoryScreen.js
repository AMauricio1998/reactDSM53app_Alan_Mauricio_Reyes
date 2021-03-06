import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image,StyleSheet } from 'react-native';

export default class CategoriesScreen extends Component{
  constructor(props) {
  super(props);
    this.state = {
    data: [],
    isLoading: true
    };
  }

componentDidMount() {
  fetch('http://127.0.0.1:8000/api/categories')
  .then(console.log(this.data))
  .then((response) => response.json())
  .then((json) => {
  this.setState({ data: json.categories});
})
  .catch((error) => console.error(error))
  .finally(() => {
  this.setState({ isLoading: false });
  });
}

render() {
 
  const { data, isLoading } = this.state;

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center" }}>
    {isLoading ? <ActivityIndicator/> : (
      <FlatList 
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Image style={styles.imageCategory}  source={{uri:item.image }} />
          
        )}
      />
    )}
  </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  },
  imageCategory: {
      width: 68,
      height: 68,
    },

});