import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/search";
import { Cards, FeaturedCards } from "@/components/cards";
import Filter from "@/components/filter";

export default function Index() {
  
  return (
    <SafeAreaView className="bg-grey h-full">
      <FlatList data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => <Cards />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName='pb-40'
        columnWrapperClassName="flex gap-0 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View className="px-5">
              <View className="flex flex-row items-center justify-between mt-5">
                <View className="flex flex-row items-start ml-2">
                  <Image className='size-12 rounded-full' source={images.avatar} />
                  <View className="ml-2">
                    <Text className="font-rubik-Medium">Hello </Text>
                    <Text className="font-rubik-bold">Sufyan</Text>
                  </View>
                </View>
                <View>
                  <Image className='size-6' source={icons.bell} />
                </View>

              </View>

            </View>
            <Search />
            <View className="my-3">
              <View className=" mx-5 flex flex-row items-center justify-between">
                <Text className="font-rubik-bold text-xl">Featured</Text>
                <TouchableOpacity>
                  <Text className="font-rubik-Medium text-primary-300">See All</Text>
                </TouchableOpacity>

              </View>
            </View>

            <FlatList 
            data={[1,2,3,4]}
            horizontal={true}
            keyExtractor={(item) => item.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=> <FeaturedCards />}/>
            

            <View className="mt-5">
              <View className=" mx-5 flex flex-row items-center justify-between">
                <Text className="font-rubik-bold text-xl">Our Recommendation</Text>
                <TouchableOpacity>
                  <Text className="font-rubik-Medium text-primary-300">See All</Text>
                </TouchableOpacity>

              </View>
            </View>
            <View className="flex flex-row">
              <Filter />
            </View>

            <View className="flex flex-row gap-5 mx-1 ">

            </View>
          </View>
        } />

    </SafeAreaView>
  );
}
