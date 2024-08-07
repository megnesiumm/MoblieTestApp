import React from 'react';
import Menu from './Menu'; // Import Menu component
import { StyleSheet, SafeAreaView, StatusBar, Dimensions, Platform } from 'react-native';

// รับขนาดหน้าจอ
const { width } = Dimensions.get('window');

// กำหนดตัวแปรสำหรับเว็บและมือถือ
const isWeb = Platform.OS === 'web';
const isMobile = !isWeb;

const App = () => (
  <SafeAreaView style={styles.container}>
    <Menu />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    marginHorizontal: isWeb ? 20 : 1,
  },
});

export default App;
