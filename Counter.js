import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {increment, decrement, setText} from './Redux/IncDecAction';
import {useSelector, useDispatch} from 'react-redux';
export const Counter = () => {
  const mystate = useSelector(state => state.incrementCounter);
  const dispatch = useDispatch();
  console.log('hello');
  return (
    <>
      <View>
        <Text>hello world</Text>
        <Text>{mystate}</Text>
        <TextInput onTextChange={text => dispatch(setText(text))} />
        <Button title="increment " onPress={() => dispatch(increment(10))} />
        <Button title="decrement " onPress={() => dispatch(decrement(10))} />
      </View>
    </>
  );
};
