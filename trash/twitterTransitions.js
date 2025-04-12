import { Animated, Easing } from 'react-native';

// 1. First, let's create timing-controlled transitions
const config = {
  duration: 350,
  easing: Easing.bezier(0.28, 0, 0.63, 1), // Twitter-like easing
  useNativeDriver: true,
};

// 2. Enhanced slide-from-right with shadow control
const twitterSlideFromRight = ({ current, next, layouts }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    next ? next.progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
      ],
      // Shadow settings (MUST be here for Android)
      shadowOpacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.3],
      }),
      shadowRadius: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10],
      }),
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.15], // Twitter uses subtle overlay
      }),
    },
    transitionSpec: {
      open: config,
      close: config,
    },
  };
};

// 3. Enhanced modal animation (compose tweet)
const twitterModalSlideUp = ({ current, layouts }) => {
  return {
    cardStyle: {
      transform: [
        {
          translateY: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.height, 0],
          }),
        },
      ],
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      overflow: 'hidden',
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.4], // Darker overlay for modals
      }),
    },
    transitionSpec: {
      open: {
        ...config,
        duration: 400, // Slightly longer for modals
      },
      close: {
        ...config,
        duration: 300,
      },
    },
  };
};

// 4. Apply to navigator with proper settings
<Tab.Navigator
  screenOptions={{
    headerShown: false,
    cardShadowEnabled: true, // Enable shadow system
    cardOverlayEnabled: true, // Enable overlay system
    cardStyle: {
      backgroundColor: 'white', // Required for shadows to appear
    },
  }}
>
  {/* Screens */}
</Tab.Navigator>