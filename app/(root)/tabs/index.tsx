import { Image, Text, View} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/search";

export default function Index() {
  return (
    <SafeAreaView className="bg-grey h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-start ml-2">
            <Image className='size-12 rounded-full' source={images.avatar}/>
            <View className="ml-2">
            <Text className="font-rubik-Medium">Hello </Text>
            <Text className="font-rubik-bold">Sufyan</Text>
            </View>
          </View>
          <View>
            <Image className='size-6'source={icons.bell}/>
          </View>
            
        </View>
      
      </View>
      <Search/>
    </SafeAreaView>
  );
}
