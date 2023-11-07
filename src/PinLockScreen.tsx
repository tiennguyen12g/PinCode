import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface PinLockProps {
    navigation: any
}
function PinLockScreen ({ navigation } : PinLockProps) {
  const [pin, setPin] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)
  const storedPin = '1234'; // Replace with your actual PIN

  const handlePinSubmit = () => {
    if (pin === storedPin) {
      navigation.navigate('MainScreen'); // Navigate to the main screen if the PIN is correct
    } else {
    //   alert('Invalid PIN. Please try again.');
    //   setPin('');
    setIsPasswordCorrect(true)
    }
  };

  return (
    <View>
      <Text>Enter your PIN:</Text>
      <TextInput
        secureTextEntry
        keyboardType="numeric"
        value={pin}
        onChangeText={(text) => setPin(text)}
      />
      {isPasswordCorrect === true ?             <View>
        <Text>Incorrect Password</Text>
      </View> : ("")}

      <Button title="Submit" onPress={handlePinSubmit} />

    </View>
  );
};

export default PinLockScreen;
function alert(arg0: string) {
    throw new Error(arg0);
}

