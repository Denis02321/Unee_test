import { Animated, Easing } from "react-native"

// create timing-controlled transitions
export const transitionConfig = {
  animation: 'timing',
  config: {
    duration: 300,
    // easing: Easing.bezier(0.28, 0, 0.63, 1),
    easing: Easing.bezier(0.39,0.57,0.56,1),
    useNativeDriver: true,
  },
}

export const shrinkAndSlideFromRight = ({current,next,layouts})=>{
  return {
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0,1],
            outputRange: [layouts.screen.width,0]
          })
        },
        {
          scale: next?next.progress.interpolate({
          inputRange: [0,1],
          outputRange: [1,0.95]
          }):1
        }
      ]
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.25],
      }),
    }
  }
}

export const slideFromBottom = ({current,next,layouts,inverted})=>{

  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0
  )

  return {
    cardStyle:{
      transform:[
        {
          translateY: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                layouts.screen.height * 0.2, // Focused, but offlayouts. in the beginning
                0, // Fully focused
                layouts.screen.height * -0.05, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted
          ),
        },
      ],
      opacity: current.progress.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0.9, 1], // Quick fade-in (not linear)
      })
    }
  }
}
