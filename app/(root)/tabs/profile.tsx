import { View, Text, ScrollView,Image, Touchable, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { settings } from '@/constants/data';

interface SettingsItemsProps{
  icon: ImageSourcePropType;
  title: String;
  onPress:() => void;
  textStyle ? :String;
  ShowArrrow ?:boolean;
}


const SettingItems = ({ icon, title, onPress, textStyle, ShowArrrow = true }: SettingsItemsProps) => {
  return (
    <TouchableOpacity className='flex flex-row items-center justify-between py-3' onPress={onPress}>
      <View className='flex flex-row mt-10'>
        <Image className='size-6' source={icon} />
        <Text className={`font-rubik-SemiBold font-lg ml-5 ${textStyle || ''}`}>
          {title}
        </Text>
      </View>
      {ShowArrrow && <Image className='size-6 mt-9' source={icons.rightArrow}/>}
    </TouchableOpacity>
  )
}
const handlebooking = ()=>{

}
const profile = () => {
  return (
    <SafeAreaView className='h-full bg-white'> 
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerClassName='pb-32 px-7'
      >
        <View className='flex flex-row items-center justify-between mt-5'>
          <Text className='text-2xl font-rubik-bold'>
            Profile
          </Text>
            <Image source={icons.bell} className='size-5'/>
        </View>

        <View className=' flex flex-row justify-center mt-5'>
          <View className='flex flex-col items-center relative mt-5'> 
              <Image source={images.avatar} className='size-44 relative rounded-full'/>
              <TouchableOpacity className='absolute bottom-11 right-1'>
                <Image source={icons.edit} className='size-9'/>
              </TouchableOpacity>
              <Text className='font-rubik-bold text-2xl mt-2'>
                sufyan
              </Text>
          </View>
        </View>
        <View className='flex flex-col'>
            <SettingItems icon={icons.calendar} title='Bookings' onPress={handlebooking}/>
            <SettingItems icon={icons.wallet} title='Payments' onPress={handlebooking}/>
        </View>


        {/* <View className='flex flex-col mt-10'>
            {settings.slice(2).map((item, index)=>{
              <SettingItems key={index} {...item}/>
            })}
        </View> */}


      </ScrollView>
    </SafeAreaView>
  )
}

export default profile;