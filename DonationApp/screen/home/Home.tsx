import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

//-- files
import globalStyle from '../../assets/global/globalStyle';
import Header from '../../components/header/Header';
import styles from './styleHome';
import Search from '../../components/search/Search';
import Tab from '../../components/tab/Tab';
import SingleDonationItem from '../../components/singleDonation/SingleDonationItem';
//-- redux
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';
import { updateSelectedDonationId } from '../../redux/reducers/Donations';

const Home = ({ navigation }) => {
  const user = useSelector((state: any) => state.user);
  const donations = useSelector((state: any) => state.donations);
  const categories = useSelector((state: any) => state.categories);
  const dispatch = useDispatch();

  const [donationItems, setDonationItems] = React.useState([]);
  const [categoryPage, setCategoryPage] = React.useState(1);
  const [categoryList, setCategoryList] = React.useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = React.useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    const items = donations.items;
    const filteredItems = items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(filteredItems);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    if (categories?.categories?.length) {
      const firstPage = pagination(
        categories.categories,
        categoryPage,
        categoryPageSize,
      );
      setCategoryList(firstPage);
      setCategoryPage(prev => prev + 1);
    }
  }, []);

  const pagination = (
    items: string | any[],
    pageNumber: number,
    pageSize: number,
  ) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Start */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerIntroText}>Hello</Text>
            <View style={styles.headerIntoUsername}>
              <Header
                title={user.firstName + ' ' + user.lastName[0] + '👋.'}
                type={0}
              />
            </View>
          </View>
          <Image
            style={styles.styleHeaderIntoImage}
            source={{ uri: user.profileImage }}
          />
        </View>
        {/* Search Start */}
        <View style={styles.searchBox}>
          <Search onSearch={() => {}} placeholder={'Search it'} />
        </View>
        {/* Highlight Start */}
        <Pressable style={styles.hightlightedImageContainer}>
          <Image
            style={styles.hightlightedImage}
            resizeMode={'cover'}
            source={require('../../assets/images/default_profile.png')}
          />
        </Pressable>
        {/* Category Start */}
        <View style={styles.categoriesContainer}>
          <Header title={'Select Category'} type={3} />
          <FlatList
            onEndReachedThreshold={0.75}
            onEndReached={() => {
              console.log(
                'User has reached the end and we are getting more data for page number',
                categoryPage,
              );

              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );

              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({ item }) => (
              <View
                style={styles.categoriesItemContainer}
                key={item.categoryId}
              >
                <Tab
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                  onPress={() => {
                    dispatch(updateSelectedCategoryId(item.categoryId));
                  }}
                />
              </View>
            )}
          />
        </View>
        {/* Donation Start */}
        {donationItems.length > 0 && (
          <View style={styles.donationItemContainer}>
            {donationItems.map(value => {
              const categoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );

              return (
                <View
                  key={value.donationItemId}
                  style={styles.singleDonationItem}
                >
                  <SingleDonationItem
                    key={value.donationItemId}
                    uri={value.image}
                    badgeTitle={categoryInformation.name}
                    donationTitle={value.name}
                    price={parseFloat(value.price)}
                    onPress={() => {
                      let id = value.donationItemId;
                      dispatch(updateSelectedDonationId(id));
                      navigation.navigate('singleDonationItemScreen', {
                        categoryInformation,
                      });
                    }}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
