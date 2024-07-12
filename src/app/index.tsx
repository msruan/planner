import {View, Text, Image} from "react-native";
import {Input} from "@/components/ui/input";
import {MapPin, Calendar as IconCalendar} from "lucide-react-native";
import {colors} from "@/styles/colors";

function Home() {
    return (
        <>
            <View className={"flex-1 items-center justify-center gap-4 px-5"}>
                <Image source={require("@/assets/logo.png")} className={"h-10"} resizeMode={"contain"}/>
                <Text className={"text-zinc-400 font-regular text-lg text-center"}>Convide os seus amigos e
                    planeje{"\n"}sua próxima viagem</Text>

                <View className={"w-full px-4 bg-zinc-900 py-6 rounded-xl my-8 border border-zinc-800"}>
                    <Input>
                        <MapPin color={colors.zinc["400"]}/>
                        <Input.Field placeholder={"Para onde?"}></Input.Field>
                    </Input>
                    <Input>
                        <IconCalendar color={colors.zinc["400"]}/>
                        <Input.Field placeholder={"Quando?"}></Input.Field>
                    </Input>

                    <View className={""}>

                    </View>
                </View>
            </View>


        </>

    )
}

export default Home