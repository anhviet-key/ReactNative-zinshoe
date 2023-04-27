import {
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import { COLOURS } from '../Database';
import Foundation from 'react-native-vector-icons/Foundation';

const HomeDiscount = ({ data, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail', {
          productID: data.id,
          productType: data.category,
        })
      }
      // onPress={() => console.log(navigation)}
    >
      <View
        style={{
          flexDirection: 'row',
          gap: 15,
          height: '95%',
        }}
      >
        <View
          style={{
            width: '55%',
            height: '100%',
            backgroundColor: COLOURS.grey,
            borderRadius: 20,
            flex: 1.3,
          }}
        >
          <Image
            source={data.productImage}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '200',
                color: COLOURS.red,
                fontStyle: 'italic',
              }}
            >
              <Foundation name="burst-sale" size={16} color={COLOURS.red} />
              Giảm giá {data.offPercentage}%
            </Text>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: 0.5,
                textTransform: 'capitalize',
                color: COLOURS.black,
              }}
            >
              {data.productName}
            </Text>
          </View>
          <View style={{ width: '50%', borderRadius: 8, overflow: 'hidden' }}>
            <Button
              title="Mua"
              color={COLOURS.black}
              onPress={() => {
                alert('Mua thành công');
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeDiscount;

const styles = StyleSheet.create({});
