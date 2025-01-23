import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, usePathname } from 'expo-router';
import icons from '@/constants/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Router } from 'expo-router';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query || '');

  // Fixed the syntax of useDebouncedCallback
  const debouncedSearch = useDebouncedCallback((text: string) => {
    Router.replace({ pathname: path, params: { query: text } });
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <SafeAreaView className="flex-1">
      {/* Search Bar */}
      <View className="my-4 flex flex-row items-center justify-between w-full px-5 border border-primary-100 rounded-lg">
        <View className="flex-1 flex flex-row items-center justify-start bg-white rounded-xl">
          <Image className="w-6 h-6 mx-3" source={icons.search} />
          <TextInput
            className="flex-1"
            value={search}
            onChangeText={handleSearch}
            placeholder="Search"
          />
        </View>
        <TouchableOpacity>
          <Image source={icons.filter} className="w-7 h-7 ml-3" />
        </TouchableOpacity>
      </View>

      {/* Placeholder for additional content */}
      <View></View>
    </SafeAreaView>
  );
};

export default Search;
