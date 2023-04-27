import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import { COLOURS } from '../Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

const HomeCategoryNew = ({ item }) => {
  const { width } = Dimensions.get('window');
  const itemWidth = width / 2.5;
  //   console.log(item.item);
  return (
    <>
      <TouchableOpacity>
        <View
          style={{
            width: itemWidth,
            height: 280,
            backgroundColor: COLOURS.white,
            borderRadius: 15,
            padding: 5,
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              width: '100%',
              height: '62%',
            }}
          >
            <Image
              source={item.productImage}
              resizeMode="contain"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                backgroundColor: COLOURS.grey,
              }}
            />
            {/* <View
              style={{
                position: 'absolute',
                right: 10,
                top: 10,
                padding: 5,
                backgroundColor: COLOURS.white,
                borderRadius: 100,
              }}
            > */}
            <Ionicons
              name="ios-heart-outline"
              size={30}
              color={COLOURS.black}
              style={{
                position: 'absolute',
                right: 10,
                top: 10,
              }}
            />
            {/* </View> */}
          </View>
          <View
            style={{
              paddingHorizontal: 5,
              marginTop: 5,
            }}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}
            >
              {item.productName}
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  backgroundColor: COLOURS.gray,
                  borderRadius: 8,
                  color: COLOURS.black,
                  fontWeight: '100',
                  marginTop: 5,
                }}
              >
                7 Màu
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 5,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLOURS.Textblack,
              }}
            >
              {item.productPrice.toLocaleString()} ₫
            </Text>
            <View
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 8,
                borderColor: COLOURS.grey,
                borderWidth: 2,
              }}
            >
              <Feather name="plus" size={26} color={COLOURS.red + '99'} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default HomeCategoryNew;

const styles = StyleSheet.create({});
