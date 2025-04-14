import { StatusBar } from "react-native";
import useStore from "../../store/Store";

export default function StatusBarCustom(){

    // change statusBar styles basing on the dark/light theme
    const currentTheme = useStore((state) => state.theme)

    // any special configurations like for any-models-open, are handled via the zustand store

    return (
        <StatusBar
            // backgroundColor={currentTheme==='dark'?'#000':'#fff'}
            backgroundColor={'rgba(0,0,0,0)'}
            barStyle={currentTheme==='dark'?'light-content':'dark-content'}
            translucent
        />
    )
}