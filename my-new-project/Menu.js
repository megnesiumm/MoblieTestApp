import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity, // ใช้สำหรับสร้างปุ่มที่สามารถกดได้
  Alert, // ใช้สำหรับแสดงข้อมูลที่คลิก
} from 'react-native';

// รับขนาดหน้าจอ
const { width } = Dimensions.get('window');

// กำหนดตัวแปรสำหรับเว็บและมือถือ
const isWeb = Platform.OS === 'web';

// กำหนดขนาดของรายการตามแพลตฟอร์ม
const itemWidth = isWeb ? width * 0.3 : width * 0.45; // ปรับขนาดสำหรับเว็บและมือถือ

const Mixer = [
  {
    title: 'Mixer',
    data: [
      { name: 'Ice', image: require('./assets/Ice.jpg') },
      { name: 'Soda', image: require('./assets/Soda.jpg') },
      { name: 'Coke', image: require('./assets/Coke.jpg') },
      { name: 'Sprite', image: require('./assets/Sprite.jpg') },
      { name: 'Water', image: require('./assets/Water.jpg') },
      { name: 'fanta red', image: require('./assets/fanta red.jpg') },
      { name: 'fanta orange', image: require('./assets/fanta orange.jpg') },
    ],
  },
];

const Food = [
  {
    title: 'Food',
    data: [
      { name: 'Ice', image: require('./assets/Ice.jpg') },
      { name: 'Soda', image: require('./assets/Soda.jpg') },
      { name: 'Coke', image: require('./assets/Coke.jpg') },
      { name: 'Coke', image: require('./assets/Coke.jpg') },
      { name: 'Coke', image: require('./assets/Coke.jpg') },
      { name: 'Coke', image: require('./assets/Coke.jpg') },
      { name: 'Coke', image: require('./assets/Coke.jpg') },
    ],
  },
];

const combinedData = [...Mixer, ...Food];

// จัดกลุ่มรายการเป็นแถว
const groupDataIntoRows = (data, itemsPerRow = 5) => {
  const rows = [];
  for (let i = 0; i < data.length; i += itemsPerRow) {
    rows.push(data.slice(i, i + itemsPerRow));
  }
  return rows;
};

// ฟังก์ชันที่เรียกใช้เมื่อปุ่มถูกกด
const handlePress = (itemName) => {
  Alert.alert('Item Selected', `You selected: ${itemName}`);
};

const Menu = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>
      ร้านชำ
    </Text>
    <SectionList
      sections={combinedData.map(section => ({
        ...section,
        data: groupDataIntoRows(section.data),
      }))}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.row}>
          {item.map((subItem, subIndex) => (
            <TouchableOpacity
              style={styles.item}
              key={subIndex}
              onPress={() => handlePress(subItem.name)} // เรียกใช้ฟังก์ชันเมื่อกดปุ่ม
            >
              <Image source={subItem.image} style={styles.image} />
              <Text style={styles.title}>{subItem.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    marginHorizontal: isWeb ? 20 : 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: '#4b83f9',
    padding: isWeb ? 14 : 10, // ลดขนาด padding
    flexDirection: 'column', // เปลี่ยนเป็น column เพื่อจัดการรูปและข้อความในแนวตั้ง
    alignItems: 'center', // จัดให้อยู่ตรงกลางในแนวนอน
    justifyContent: 'center', // จัดให้อยู่ตรงกลางในแนวตั้ง
    borderRadius: 12,
    width: isWeb ? '10%' : '40%',
    margin: isWeb ? 2 : 8, // ปรับระยะห่างให้เหมาะสม
  },
  header: {
    fontSize: isWeb ? 24 : 32, // ปรับขนาดฟอนต์ให้เหมาะสม
    fontFamily: 'bold',
    backgroundColor: '#fff',
    padding: isWeb ? 10 : 16,
  },
  title: {
    fontSize: isWeb ? 14 : 18, // ปรับขนาดฟอนต์ให้เหมาะสม
    marginTop: 6, // เพิ่มระยะห่างระหว่างรูปภาพกับข้อความ
    color: '#fff',
    flexShrink: 1,
  },
  image: {
    width: isWeb ? 60 : 50, // ปรับขนาดรูปภาพให้เหมาะสม
    height: isWeb ? 60 : 50,
    borderRadius: 12,

  },
  text: {
    fontSize: isWeb ? 40 : 32,
    fontFamily: 'bold',
    textAlign: 'center',

  }
});

export default Menu;
