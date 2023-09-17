import React from 'react';
import { StyleSheet, View } from 'react-native';
import OtpInput from 'react-native-animated-otp-input';

export default function App() {
  return (
    <View style={styles.container}>
      <OtpInput
        otpCount={5}
        autoFocus={false}
        onCodeChanged={(codes: number) => {
          console.log({ codes });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
