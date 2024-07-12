import {Slot} from "expo-router";

// Import your global CSS file
import "../global.css"
import {View} from "react-native";
function Layout(){
  return <View className={"flex-1"}><Slot/></View>
}
export default Layout;
