import {ReactNode} from "react";
import {Platform, TextInput, TextInputProps, View} from "react-native";
import clsx, {ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import {color} from "ansi-fragments";
import {colors} from "@/styles/colors";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


type Variants = "primary" | "secondary" | "tertiary";

type InputProps = {
    children: ReactNode;
    className?: string;
    variant?: Variants;
}

function Input({children, className, variant = "primary"}: InputProps) {
    return <View className={cn(className, clsx(
        "w-full h-16 flex-row items-center gap-2",
        {"h-14 px-4 rounded-lg border border-zinc-800": variant !== "primary"},
        {"bg-zinc-950": variant === "secondary"},
        {"bg-zinc-900": variant === "tertiary"}
    ))}>{children}</View>
}

function Field({...rest}: TextInputProps) {
    return (
        <TextInput className={"flex-1 text-zinc-100 text-lg font-regular"}
                   placeholderTextColor={colors.zinc["400"]} cursorColor={colors.zinc["100"]}
                   selectionColor={Platform.OS === "ios" ? colors.zinc["100"] : undefined}
                   {...rest}
        />)
}

Input.Field = Field

export {Input};