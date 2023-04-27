import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLOURS, Items } from './Database';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import Share from 'react-native-share';
// import { BlurView } from '@react-native-community/blur';
const ProductDetail = ({ route }) => {
  const [item, setItem] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [checkedItem, setCheckedItem] = useState(null);
  const [reviews, setReview] = useState([]);
  const [wishlist, setWishlist] = useState(false);

  const { productID, productType } = route.params;

  useEffect(() => {
    // const unsubcribe = navigation.addListener('focus', () => {
    getDataFromDB();
    // });
    // return unsubcribe;
  }, [route]);

  const onShare = () => {
    const options = {
      message:
        'Check out this product, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse dolorum error consectetur accusantium iste nesciunt autem exercitationem cum aperiam dolore, tempore neque, iusto ratione quae in. Nihil laboriosam iure accusamus!',
      email: 'anhviet.key@gmail.com',
      url: 'https://www.google.com',
      subject: 'Lorem ipsum dolor sit amet',
    };
    Share.open(options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //get data from db
  const getDataFromDB = () => {
    if (productType === 'discount') {
      Items.productsDiscount.forEach((element) => {
        productID === element.id ? setItem(element) : null;
      });
    } else if (productType === 'product') {
      Items.products.forEach((element) => {
        productID === element.id ? setItem(element) : null;
      });
    }
  };

  const RenderImageListColor = ({ data, index }) => {
    return (
      <TouchableOpacity onPress={() => setSelectedItem(index)}>
        <View
          style={{
            width: 110,
            height: 80,
            paddingHorizontal: 5,
            paddingVertical: 10,
            backgroundColor: COLOURS.grey,
            borderRadius: 10,
          }}
        >
          <ImageBackground
            source={data}
            resizeMode="contain"
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              backgroundColor:
                selectedItem === index ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
              borderRadius: 10,
            }}
          >
            {selectedItem === index && (
              <Text
                style={{
                  color: COLOURS.white,
                  fontSize: 16,
                  fontWeight: 'bold',
                  textShadowColor: '#52006A',
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 5,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                {item.ProductDetails?.color[index]}
              </Text>
            )}
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };
  //SIZE
  const RenderSize = ({ data, index }) => {
    return (
      <TouchableOpacity
        onPress={() => setCheckedItem(index)}
        style={{
          // flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: 60,
          height: 50,
          padding: 10,
          backgroundColor: COLOURS.grey,
          borderRadius: 5,
          borderColor: COLOURS.black + '40',
          borderWidth: 1,
          position: 'relative',
        }}
      >
        {checkedItem == index && (
          <LottieView
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              right: 0,
            }}
            autoPlay
            loop={false}
            resizeMode="cover"
            speed={0.5}
            source={require('../assets/animated/checkmark.json')}
          />
        )}
        <Text
          style={{
            color: COLOURS.black,
            fontSize: 16,
          }}
        >
          {data}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        backgroundColor: COLOURS.white,
        flex: 1,
      }}
    >
      <ScrollView>
        <View style={styles.homeTop}>
          <View style={styles.head}></View>
          <View style={{ paddingHorizontal: 25 }}>
            <View
              style={{
                width: '100%',
                height: 250,
                backgroundColor: COLOURS.white,
                borderRadius: 25,
                position: 'relative',
                top: -180,
                shadowColor: '#52006A',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                padding: 15,
                // paddingBottom: 20,
                flexDirection: 'row',
                gap: 15,
                flexDirection: 'row',
                width: '100%',
              }}
            >
              {/* <Swiper
                showsPagination={true}
                showsButtons={false}
                autoplay={true}
                loop={true}
                keyExtractor={(item, index) => index.toString()}
                paginationStyle={{
                  bottom: -15,
                }}
              >
                {item.map((item, index) => {
                  return <Image source={item.productImage} />;
                })}
              </Swiper> */}
              <Image
                source={item.productImage}
                resizeMode="contain"
                style={{
                  width: '100%',
                  height: '100%',
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
          }}
        >
          <View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: COLOURS.Textblack,
                    letterSpacing: 0.8,
                  }}
                >
                  {item.productPrice?.toLocaleString()} ₫
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    // alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setWishlist(!wishlist);
                      wishlist
                        ? ToastAndroid.show(
                            'Đã xoá khỏi vào danh yêu thích',
                            ToastAndroid.SHORT
                          )
                        : ToastAndroid.show(
                            'Đã thêm vào danh sách yêu thích',
                            ToastAndroid.SHORT
                          );
                    }}
                  >
                    {!wishlist ? (
                      <Ionicons
                        name="ios-heart-outline"
                        size={24}
                        color={COLOURS.black}
                        style={{
                          padding: 8,
                          backgroundColor: COLOURS.grey,
                          borderRadius: 10,
                        }}
                      />
                    ) : (
                      <Ionicons
                        name="ios-heart"
                        size={24}
                        color={COLOURS.red}
                        style={{
                          padding: 8,
                          backgroundColor: COLOURS.grey,
                          borderRadius: 10,
                        }}
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onShare}>
                    <Ionicons
                      name="share-social-outline"
                      size={24}
                      color={COLOURS.black}
                      style={{
                        padding: 8,
                        backgroundColor: COLOURS.grey,
                        borderRadius: 10,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: COLOURS.black,
                  textTransform: 'capitalize',
                  letterSpacing: 0.8,
                }}
              >
                {item.productName}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 25,
                // gap: 20,
              }}
            >
              {item?.productImageList?.map((data, index) => {
                return (
                  <RenderImageListColor key={index} data={data} index={index} />
                );
              })}
            </View>
            <View
              style={{
                marginTop: 25,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: COLOURS.black,
                  letterSpacing: 0.8,
                }}
              >
                Chọn Size
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 15,
                  marginTop: 15,
                }}
              >
                {item?.ProductDetails?.size?.map((data, index) => {
                  return <RenderSize key={index} data={data} index={index} />;
                })}
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mô tả</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLOURS.black + '80',
                    textAlign: 'justify',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
              <View style={{ marginTop: 20, marginBottom: '40%' }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: COLOURS.black,
                      letterSpacing: 0.8,
                    }}
                  >
                    Đánh giá
                  </Text>
                  <View>
                    <Text>
                      Trung bình đánh giá{' '}
                      <Ionicons name="ios-star" color={COLOURS.yellow} /> 4.9
                    </Text>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                      }}
                    >
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 100,
                          borderColor: COLOURS.black + '40',
                          borderWidth: 1,
                        }}
                      >
                        <Image
                          source={require('../assets/images/products/Mi1.png')}
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                          resizeMode="cover"
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: COLOURS.black,
                            letterSpacing: 0.8,
                          }}
                        >
                          Truong anh tu
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '200',
                            color: COLOURS.black + '60',
                            letterSpacing: 0.8,
                          }}
                        >
                          03-04-2023
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text>
                        <Ionicons name="ios-star" color={COLOURS.yellow} />
                        <Ionicons name="ios-star" color={COLOURS.yellow} />
                        <Ionicons name="ios-star" color={COLOURS.yellow} />
                        <Ionicons name="ios-star" color={COLOURS.yellow} />
                        <Ionicons name="ios-star" color={COLOURS.yellow} /> 5.0
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginLeft: 60,
                      textAlign: 'justify',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLOURS.black,
                        letterSpacing: 0.8,
                      }}
                    >
                      Lorem ipsum dolor sit amet .
                    </Text>
                  </View>
                  <View
                    style={{
                      borderBottomColor: COLOURS.grey,
                      borderBottomWidth: 1,
                      marginTop: 15,
                      marginBottom: 15,
                    }}
                  />
                </View>

                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                      }}
                    >
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 100,
                          borderColor: COLOURS.black + '40',
                          borderWidth: 1,
                        }}
                      >
                        <Image
                          source={require('../assets/images/products/Mi1.png')}
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                          resizeMode="cover"
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: COLOURS.black,
                            letterSpacing: 0.8,
                          }}
                        >
                          Truong anh tu
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '200',
                            color: COLOURS.black + '60',
                            letterSpacing: 0.8,
                          }}
                        >
                          03-04-2023
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text>
                        <Ionicons name="ios-star" color={COLOURS.yellow} />
                        <Ionicons name="ios-star" color={COLOURS.yellow} />
                        <Ionicons name="ios-star" color={COLOURS.yellow} />
                        <Ionicons name="ios-star" color={COLOURS.yellow} />
                        <Ionicons name="ios-star" color={COLOURS.yellow} /> 5.0
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginLeft: 60,
                      textAlign: 'justify',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLOURS.black,
                        letterSpacing: 0.8,
                      }}
                    >
                      Lorem ipsum dolor sit amet .
                    </Text>
                  </View>
                  <View
                    style={{
                      borderBottomColor: COLOURS.grey,
                      borderBottomWidth: 1,
                      marginTop: 15,
                      marginBottom: 15,
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TouchableOpacity>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLOURS.grey,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderRadius: 15,
                        gap: 10,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: -8,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 25,
                            height: 25,
                          }}
                        >
                          <Image
                            source={require('../assets/images/avatar/avatar4.jpeg')}
                            resizeMode="cover"
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 100,
                              borderColor: COLOURS.white,
                              borderWidth: 1,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 25,
                            height: 25,
                          }}
                        >
                          <Image
                            source={require('../assets/images/avatar/avatar1.jpeg')}
                            resizeMode="cover"
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 100,
                              borderColor: COLOURS.white,
                              borderWidth: 1,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 25,
                            height: 25,
                          }}
                        >
                          <Image
                            source={require('../assets/images/avatar/avatar2.jpeg')}
                            resizeMode="cover"
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 100,
                              borderColor: COLOURS.white,
                              borderWidth: 1,
                            }}
                          />
                        </View>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            letterSpacing: 0.8,
                          }}
                        >
                          Thêm 20 đánh giá
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: COLOURS.white,
          width: '100%',
          height: 100,
        }}
      >
        {/* <BlurView
          // style={styles.blur}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        /> */}
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            gap: 20,
            marginHorizontal: 20,
            marginBottom: 20,
            // width: '100%',
            // height: 100,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: COLOURS.grey,
            }}
          >
            <View
              style={{
                paddingVertical: 20,
              }}
            >
              <Text
                style={{
                  color: COLOURS.black,
                  fontWeight: 'bold',
                  fontSize: 16,
                  letterSpacing: 0.8,
                }}
              >
                Thông vào giỏ
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: COLOURS.bacgroundGreen,
            }}
          >
            <View
              style={{
                paddingVertical: 20,
              }}
            >
              <Text
                style={{
                  color: COLOURS.white,
                  fontWeight: 'bold',
                  fontSize: 16,
                  letterSpacing: 0.8,
                }}
              >
                Thanh toán
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  homeTop: {
    flex: 1,
    height: 300,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
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
