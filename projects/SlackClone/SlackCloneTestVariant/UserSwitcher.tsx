import React from 'react';
import { View, Button } from 'react-native';

export const UserSwitcher = ({ currentIndex, setUserIndex }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
      <Button title="Switch to User A" onPress={() => setUserIndex(0)} />
      <Button title="Switch to User B" onPress={() => setUserIndex(1)} />
    </View>
  );
};