import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLOURS } from '../Database';

const HomeReview = ({ data }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          marginTop: 20,
          backgroundColor: COLOURS.white,
          borderRadius: 10,
          marginHorizontal: 20,
          borderColor: COLOURS.bacgroundGreen + '80',
          borderWidth: 1,
          padding: 10,
          width: '80%',
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              source={data.avatar}
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                borderColor: COLOURS.black + '80',
                borderWidth: 1,
              }}
            />
            <Text
              style={{
                color: COLOURS.black,
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                letterSpacing: 1,
                textTransform: 'capitalize',
              }}
            >
              {data.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
            }}
          >
            <Ionicons name="link" size={20} color={COLOURS.black + '80'} />
            <Text
              style={{
                color: COLOURS.bacgroundGreen,
                fontSize: 12,
                fontWeight: 'bold',
                letterSpacing: 1,
                textTransform: 'capitalize',
              }}
            >
              sản phẩm {data.item}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: COLOURS.grey,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: COLOURS.black + '80',
                fontSize: 14,
                textAlign: 'center',
                textTransform: 'capitalize',
                letterSpacing: 0.8,
              }}
            >
              {data.content}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeReview;
