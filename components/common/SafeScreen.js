import { ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

// models are to be put outside the SafeScreen component

export default function SafeScreen({children,style,scrollable=false}){

    const insets = useSafeAreaInsets()

    const Wrapper = scrollable ? ScrollView : View

    return (
        <Wrapper
            style={[
                style,
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    // paddingHorizontal: 16,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                    flex: 1,
                }
            ]}
        >
            {children}
        </Wrapper>
    )
}