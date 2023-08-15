import {Text, View, SafeAreaView, FlatList, Item} from 'react-native';
import {useState, useEffect} from 'react';

const DashBoardScreen = ({navigation}) => {
  const [fetchData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos', {})
      .then(x => x.json())
      .then(data => setFetchedData(data));
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={fetchData}
        initialNumToRender={20}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text
                style={{padding: 5, marginVertical: 8, marginHorizontal: 16}}>
                {item.id} {item.title}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default DashBoardScreen;
