import React from 'react'
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/search";
import { Cards, FeaturedCards } from "@/components/cards";
import Filter from "@/components/filter";

const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView className="bg-grey ">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex flex-col  justify-center'>
          <View className='w-full'>
            <Image source={images.newYork} className='w-full h-60' />
          </View>
          <View className='flex flex-col mt-5 ml-5'>

            <Text className='font-rubik-bold text-3xl self-start'>Modern Apartment</Text>
            <View className='flex flex-row items-center mt-5'>
              <Text className='text-primary-300 p-3 mr-4 font-rubik-SemiBold bg-gray-200 rounded-3xl'>APARTMENT</Text>
              <Image source={icons.star} className='items-center justify-center ml-3 mr-1' />
              <Text>4.8 (1,275 Reviews)</Text>
            </View>

            <View className=' w-full  mt-4'>
              <View className='flex flex-col'>


                <View className={`w-full flex flex-row gap-2 items-center rounded-3xl mt-6  justify-center'bg-gray-700`} >
                  <Image className='size-7' source={icons.bed} />
                  <Text className='text-black font-rubik-Medium items-center  bg-gray-200 rounded-3xl px-4 py-1'>2 Beds</Text>
                  <Image className='size-7 ml-2' source={icons.bath} />
                  <Text className='text-black font-rubik-Medium items-center  bg-gray-200 rounded-3xl px-4 py-1'>3 Bath</Text>
                  <Image className='size-7 ml-2' source={icons.area} />
                  <Text className='text-black font-rubik-Medium items-center  bg-gray-200 rounded-3xl px-4 py-1'>200 Sq. Ft</Text>
                </View>

                <View className='mt-6'>
                  <Text className='font-rubik-bold text-2xl mt-3'>Agent</Text>
                </View>

                <View className="flex flex-row items-center justify-between mt-4 mr-3">
                  <Image className='size-12 rounded-full' source={images.avatar} />
                  <View>
                    <Text className="font-rubik-bold">Muhammad Sufyan</Text>
                    <Text className="font-rubik-Medium">Owner</Text>
                  </View>
                  <View className='flex flex-row justify-end items-end gap-5 ml-20'>
                    <TouchableOpacity>
                      <Image className="size-10 justify-end" source={icons.chat} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image className="size-10 justify-end" source={icons.phone} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View className='mt-6'>
                  <Text className='font-rubik-bold text-2xl mt-3'>Overview</Text>
                  <Text className='font-rubik-Light text-base text-gray-600 pr-6 pl-1 pt-2'>This stunning apartment offers 2 spacious bedrooms, 3 modern bathrooms, and spans 200 square feet, providing a perfect blend of comfort and style. The highlight is its breathtaking sea-facing gallery, offering serene views and refreshing breezes. The interior features contemporary finishes, ample natural light, and a cozy ambiance. Ideal for those seeking luxury living with a picturesque coastal vibe.</Text>
                </View>

                <View className='mt-6 flex flex-col'>
                  <Text className='font-rubik-bold text-2xl mt-3'>Facilities</Text>
                  <View className='flex flex-row justify-between mr-5'>
                    <View className='flex-col justify-center items-center mt-4 '>
                      <View className='bg-gray-300 rounded-3xl size-11 items-center justify-center'>
                        <Image className="size-6" source={icons.carPark} />
                      </View>
                      <Text className='font-rubik-SemiBold mt-2 '>Car Parking</Text>
                    </View>

                    <View className='flex-col justify-center items-center mt-4'>
                      <View className='bg-gray-300 rounded-3xl size-11 items-center justify-center'>
                        <Image className="size-6" source={icons.dumbell} />
                      </View>
                      <Text className='font-rubik-SemiBold mt-2'>Fitness Gym</Text>
                    </View>

                    <View className='flex-col justify-center items-center mt-4 mr-4'>
                      <View className='bg-gray-300 rounded-3xl size-11 items-center justify-center'>
                        <Image className="size-6" source={icons.swim} />
                      </View>
                      <Text className='font-rubik-SemiBold mt-2'>Swimming</Text>
                    </View>

                    <View className='flex-col justify-center items-center mt-4 '>
                      <View className='bg-gray-300 rounded-3xl size-11 items-center justify-center'>
                        <Image className="size-6" source={icons.wifi} />
                      </View>
                      <Text className='font-rubik-SemiBold mt-2'>Wifi</Text>
                    </View>
                  </View>

                  <View className='flex flex-row justify-between mr-2 mb-9'>
                    <View className='flex-col justify-center items-center mt-4 '>
                      <View className='bg-gray-300 rounded-3xl size-11 items-center justify-center'>
                        <Image className="size-6" source={icons.cutlery} />
                      </View>
                      <Text className='font-rubik-SemiBold mt-2 '>Restaurant</Text>
                    </View>

                    <View className='flex-col justify-center items-center mt-4'>
                      <View className='bg-gray-300 rounded-3xl size-11 items-center justify-center'>
                        <Image className="size-6" source={icons.dog} />
                      </View>
                      <Text className='font-rubik-SemiBold mt-2'>Pet Center</Text>
                    </View>

                    <View className='flex-col justify-center items-center mt-4 '>
                      <View className='bg-gray-300 rounded-3xl size-11 items-center justify-center'>
                        <Image className="size-6" source={icons.run} />
                      </View>
                      <Text className='font-rubik-SemiBold mt-2'>Sports Hub</Text>
                    </View>

                    <View className='flex-col justify-center items-center mt-4 '>
                      <View className='bg-gray-300 rounded-3xl size-11 items-center justify-center'>
                        <Image className="size-6" source={icons.laundry} />
                      </View>
                      <Text className='font-rubik-SemiBold mt-2'>Laundry</Text>
                    </View>
                  </View>

                </View>

                <View className='flex flex-col mt-6'>
                  <Text className='font-rubik-bold text-2xl mt-3'>Gallery</Text>
                  <View className='size-120  flex flex-row w-full gap-1 justify-center items-center mt-6 mb-5'>
                    <Image className="size-40  rounded-3xl mx-1" source={images.japan} />
                    <Image className="size-40 rounded-3xl" source={images.newYork} />
                    <Image className="size-40 rounded-3xl mx-1" source={images.japan} />
                  </View>
                </View>


                <View className='flex flex-col mt-6'>
                  <Text className='font-rubik-bold text-2xl mt-3'>Location</Text>
                  <View className='flex flex-row mt-4 items-center justify-start'>
                    <Image source={icons.location} className='size-9'/>
                    <Text className='pl-3 text-lg font-rubik-Medium text-gray-600 items-center'>14th Street, Karachi, Pakistan</Text>
                  </View>
                  <View className='h-40 justify-self-end mb-7 w-full'>
                  <Image source={images.map} className='size-40 h-40 w-full justify-around' />
                  </View>
                </View>

                <View>
                  <Text className='font-rubik-bold text-2xl mt-3 ml-2'>Price</Text>
                  <View className='flex flex-row items-center justify-between mt-3 mb-6 mr-8 ml-2'>
                    <Text className='font-rubik-bold text-primary-300 text-2xl shadow-black-200'>$12000</Text>
                    <TouchableOpacity className='bg-primary-300 rounded-3xl px-10 py-4 items-center'>
                      <Text className='font-rubik-Medium text-white'>Booking Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>




              </View>

            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default Property;


