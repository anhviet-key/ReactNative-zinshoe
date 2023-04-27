import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLOURS, Items, Review } from '../Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper';
import HomeCategoryNew from './HomeCategoryNew';
import RenderDiscount from './HomeDiscount';
import HomeReview from './HomeReview';
import LottieView from 'lottie-react-native';
import TypeWriter from '@sucho/react-native-typewriter';
// import Shimmer from 'react-native-shimmer';

const HomeScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const [productsDiscount, setProductsDiscount] = useState([]);
  const [products, setProducts] = useState([]);
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    // const unsubcribe = navigation.addListener('focus', () => {
    getDataFromDB();
    // });

    // return unsubcribe;
  }, [navigation]);

  //create
  const getDataFromDB = () => {
    setProductsDiscount(Items.productsDiscount);
    setProducts(Items.products);
    setReview(Review);
  };

  return (
    // <SafeAreaView>
    <View style={[styles.home, { backgroundColor: COLOURS.white }]}>
      <ScrollView>
        <View style={styles.homeTop}>
          <View style={styles.head}>
            <View>
              {/* <Shimmer> */}
              <Text
                style={{
                  color: COLOURS.white,
                  fontSize: 32,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}
              >
                ZinStore
              </Text>
              {/* </Shimmer> */}
            </View>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            >
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Ionicons
                    name="search"
                    size={28}
                    color={COLOURS.black}
                    style={{
                      backgroundColor: COLOURS.gray,
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      // opacity: 0.6,
                      padding: 5,
                    }}
                  />
                </TouchableOpacity>
                <TextInput
                  style={{
                    fontSize: 18,
                    color: COLOURS.black,
                    paddingHorizontal: 10,
                    paddingVertical: 0,
                    width: width / 3,
                    backgroundColor: COLOURS.gray,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    letterSpacing: 1,
                    padding: 5,
                  }}
                  placeholder="Search"
                  placeholderTextColor={COLOURS.black}
                  borderWidth={1}
                  borderColor={COLOURS.white}
                />
              </View>
              <View
                style={{
                  backgroundColor: COLOURS.gray,
                  borderRadius: 5,
                  padding: 5,
                }}
              >
                <TouchableOpacity>
                  <Entypo name="notification" size={28} color={COLOURS.black} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 25 }}>
            <View
              style={{
                width: '100%',
                height: 165,
                backgroundColor: COLOURS.white,
                borderRadius: 25,
                position: 'relative',
                top: -100,
                shadowColor: '#52006A',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                padding: 15,
                paddingBottom: 20,
                flexDirection: 'row',
                gap: 15,
                flexDirection: 'row',
                width: '100%',
              }}
            >
              <Swiper
                showsPagination={true}
                showsButtons={false}
                autoplay={true}
                loop={true}
                keyExtractor={(item, index) => index.toString()}
                paginationStyle={{
                  bottom: -15,
                }}
              >
                {productsDiscount.map((item, index) => {
                  return (
                    <RenderDiscount
                      data={item}
                      navigation={navigation}
                      key={index}
                    />
                  );
                })}
              </Swiper>
            </View>
          </View>
        </View>
        <View style={styles.homeTab}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                rowGap: 10,
              }}
            >
              <View
                style={{
                  padding: 20,
                  borderRadius: 20,
                  backgroundColor: '#F1EAFC',
                }}
              >
                <Ionicons
                  name="trending-up"
                  size={28}
                  color={COLOURS.bacgroundGreen}
                />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '100',
                  color: COLOURS.black,
                }}
              >
                Top 10
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                rowGap: 10,
              }}
            >
              <View
                style={{
                  padding: 20,
                  borderRadius: 20,
                  backgroundColor: '#F3ECFC',
                }}
              >
                <Ionicons name="ios-heart" size={28} color={COLOURS.red} />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '100',
                  color: COLOURS.black,
                }}
              >
                Yêu thích
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                rowGap: 10,
              }}
            >
              <View
                style={{
                  padding: 20,
                  borderRadius: 20,
                  backgroundColor: '#FCEEEA',
                }}
              >
                <SimpleLineIcons
                  name="event"
                  size={28}
                  color={COLOURS.yellow}
                />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '100',
                  color: COLOURS.black,
                }}
              >
                Sự kiện
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                rowGap: 10,
              }}
            >
              <View
                style={{
                  padding: 20,
                  borderRadius: 20,
                  backgroundColor: '#F5E6F8',
                }}
              >
                <MaterialCommunityIcons
                  name="sale"
                  size={28}
                  color={COLOURS.red + '99'}
                />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '100',
                  color: COLOURS.black,
                }}
              >
                Mã ưu đãi
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 25,
            paddingHorizontal: 25,
            backgroundColor: COLOURS.grey,
            // borderTopLeftRadius: 28,
            // borderTopRightRadius: 28,
            borderRadius: 28,
            paddingVertical: 20,
          }}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View>
                {/* <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: COLOURS.black,
                  }}
                > */}
                {/* Sản phẩm mới */}
                <TypeWriter
                  textArray={['Sản phẩm mới']}
                  loop={false}
                  speed={200}
                  delay={400}
                  textStyle={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: COLOURS.black,
                  }}
                  cursorStyle={{
                    color: 'transparent',
                  }}
                />
                {/* </Text> */}
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    backgroundColor: COLOURS.bacgroundGreen,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: COLOURS.white,
                      fontSize: 14,
                    }}
                  >
                    Xem
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 10,
              }}
            >
              {/* {Items.products.map((data, index) => {
              return <HomeCategoryNew data={data} key={index} />;
            })} */}
              <Carousel
                data={products}
                renderItem={HomeCategoryNew}
                sliderWidth={width}
                itemWidth={width / 2.5}
                layout={'default'}
                loop
                firstItem={0}
                autoplay
                // disableVirtualization={true}
                keyExtractor={(item, index) => index.toString()}
                autoplayInterval={3000}
                autoplayDelay={0}
                // inactiveSlideOpacity={1}
                // inactiveSlideScale={1}
                activeSlideAlignment={'start'}
                ListEmptyComponent={<Text>loading...</Text>}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 25,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View>
                {/* <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: COLOURS.black,
                  }}
                >
                  Sản phẩm yêu thích
                </Text> */}
                <TypeWriter
                  textArray={['Sản phẩm yêu thích']}
                  loop={false}
                  speed={150}
                  delay={400}
                  textStyle={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: COLOURS.black,
                  }}
                  cursorStyle={{
                    color: 'transparent',
                  }}
                />
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    backgroundColor: COLOURS.bacgroundGreen,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: COLOURS.white,
                      fontSize: 14,
                    }}
                  >
                    Xem
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 10,
              }}
            >
              {/* {Items.products.map((data, index) => {
              return <HomeCategoryNew data={data} key={index} />;
            })} */}
              <Carousel
                data={products}
                renderItem={HomeCategoryNew}
                sliderWidth={width}
                itemWidth={width / 2.5}
                layout={'default'}
                loop
                autoplayDelay={0}
                firstItem={0}
                autoplay
                // disableVirtualization={true}
                keyExtractor={(item, index) => index.toString()}
                autoplayInterval={3500}
                // inactiveSlideOpacity={1}
                // inactiveSlideScale={1}
                // autoplayDelay={1000}
                activeSlideAlignment={'start'}
                ListEmptyComponent={<Text>loading...</Text>}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            // backgroundColor: COLOURS.red,
            // height: 400,
          }}
        >
          <Text
            style={{
              color: COLOURS.black,
              fontSize: 20,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            đánh giá
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <LottieView
              source={require('../../assets/animated/5-stars.json')}
              autoPlay
              loop
              resizeMode="cover"
              speed={0.5}
              style={{
                height: 40,
              }}
            />
          </View>

          <Swiper
            showsPagination={false}
            showsButtons={true}
            autoplay={true}
            loop={true}
            keyExtractor={(item, index) => index.toString()}
          >
            {reviews.map((data, index) => {
              return <HomeReview data={data} key={index} />;
            })}
          </Swiper>
        </View>
      </ScrollView>
    </View>
    // </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    position: 'relative',
  },
  homeTop: {
    flex: 1,
    height: 300,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  homeTab: {
    flex: 2,
    // backgroundColor: 'red',
    flexDirection: 'row',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: COLOURS.bacgroundGreen,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 30,
    height: 210,
  },
});
