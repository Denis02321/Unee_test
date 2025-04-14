import { StyleSheet } from "react-native"

export const GlobalStyles = (colors)=>(
  StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: colors.backgroundColor,
      // alignItems: 'center',
      // justifyContent: 'center'
    },
    text: {
      color: colors.text,
    }
  })
)

