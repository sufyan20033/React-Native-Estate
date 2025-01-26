import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/search";
import { Cards, FeaturedCards } from "@/components/cards";
import Filter from "@/components/filter";

export default function Explore() {
  
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
              <View className="flex flex-row items-center mt-5 justify-between">
                <View className="flex flex-row items-center ">
                  <TouchableOpacity className="size-11" onPress={() => router.back()}>
                    <Image  source={icons.backArrow}
                    className="font-rubik-Medium justify-center items-center size-8 rounded-full bg-gray-700" tintColor={"white"}/>
                  </TouchableOpacity>

                  
          
                </View>
                <Text className="font-rubik-Medium">Find your Ideal Home</Text>
                <View>
                  <Image className='size-6' source={icons.bell} />
                </View>

              </View>

            </View>
            <Search />
            

            
            
            

            
            <View className="flex flex-row">
              <Filter />
            </View>
            <View className="mt-5">
              <View className=" mx-5 flex flex-row items-center justify-between">
                
              <Text className="font-rubik-bold text-xl">Found 6 Apartments</Text>

              </View>
            </View>

            <View className="flex flex-row gap-5 mx-1 ">
            </View>
          </View>
        } />

    </SafeAreaView>
  );
}
