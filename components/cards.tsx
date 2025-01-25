import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
    onPress?: () => void;
}

export const FeaturedCards = ({ onPress }: Props) => {
    return (
        <SafeAreaView className='flex flex-row'>
            

            
            <TouchableOpacity onPress={onPress} className='mx-3 flex flex-col items-start w-60 h-80 relative'>
                <Image source={images.japan} className='size-full rounded-2xl' />
                <Image source={images.cardGradient} className='absolute size-full rounded-2xl' />
                <View className='flex flex-row items-center bg-white/90  h-7 px-3 py-1.5 rounded-2xl absolute bottom-0 top-2 right-3'>
                    <Image source={icons.star} className='size-3' />
                    <Text className='text-primary-300 text-xs'>4.4</Text>
                </View>
                <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
                    <Text className='text-xl font-rubik-bold text-white' numberOfLines={1}>
                        Modern Apartment
                    </Text>
                    <Text className='text-xl font-rubik text-white' numberOfLines={1}>
                        Karachi, Pakistan
                    </Text>

                    <View className='flex flex-row items-center  justify-between w-full'>
                        <Text className='text-xl font-rubik-bold text-white'>
                            2500$
                        </Text>
                        <Image source={icons.heart} className='size-5' />
                    </View>
                </View>
            </TouchableOpacity>
           
        </SafeAreaView>

    )
}
export const Cards = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} className='flex-1 bg-white rounded-lg w-60 mt-4 py-4 px-4 pr-4 shadow-lg flex flex-col items-start  h-70 relative mr-3 ml-3 
        shadow-black-100/70'>
            <View className='flex flex-row items-center bg-white/90  h-7 px-3 py-1.5 rounded-2xl absolute bottom-0 top-2 right-3 z-50'>
                <Image source={icons.star} className='size-3' />
                <Text className='text-primary-300 text-xs'>4.4</Text>
            </View>
            <Image source={images.newYork} className='w-full h-40 rounded-lg' />

            <View className='flex flex-col mt-2'>
                <Text className='text-base font-rubik-bold text-black-300'>Royal Park</Text>
                <Text className='text-base font-rubik-Medium text-gray-400'>Balakot</Text>
                <View className='flex flex-row items-center justify-between w-full'>
                <Text className='text-xs font-rubik text-primary-300'>$2300</Text>
                <Image source={icons.heart} className='size-6' tintColor="grey"/>
                </View>
            </View>
        </TouchableOpacity>
    )
}



