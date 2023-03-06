import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import StoreRedux from './Redux/store';
import {Counter} from './Counter';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Provider store={StoreRedux}>
          <View>
            <Text>app</Text>
            <Text>app</Text>
            <Text>app</Text>
            <Counter />
          </View>
        </Provider>
      </SafeAreaView>
    </>
  );
};
export default App;
