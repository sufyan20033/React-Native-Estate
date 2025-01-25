import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { categories } from '@/constants/data';

const Filter = () => {
    const params  = useLocalSearchParams<{filter?: string}>();
    const [selectedCategory, setselectedCategory] = 
    useState(params.filter || 'All');

    const handleCategory = (category: string) =>{
        if(selectedCategory === category){
            setselectedCategory('All');
            router.setParams({filter: 'All'});
            return;
        }
        setselectedCategory(category)
        router.setParams({filter : category})

    }



  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View className=' w-full  mt-4'>
        <View className='flex flex-row '>
            {categories.map((item, index)=>(

        <TouchableOpacity  onPress={() => handleCategory(item.category)} className={` items-center rounded-3xl p-3 ml-2 justify-center ${selectedCategory == item.category ? 'bg-primary-300' : 'bg-gray-700' }`} >
            <Text className='text-white font-rubik-Medium pl-1 pr-1'>{item.title}</Text>
        </TouchableOpacity>
            ))}


        
        </View>
    </View>
    </ScrollView>
  )
}

export default Filter