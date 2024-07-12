import {Slot} from "expo-router";

// Import your global CSS file
import "../global.css"
import {View} from "react-native";
import {useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold} from "@expo-google-fonts/inter";
import Loading from "@/src/components/ui/loading";
function Layout(){
  const [fontIsLoaded] = useFonts({Inter_400Regular, Inter_500Medium, Inter_600SemiBold})
  if(!fontIsLoaded){return <Loading/>}
  return <View className={"flex-1 bg-zinc-950"}><Slot/></View>
}
export default Layout;
