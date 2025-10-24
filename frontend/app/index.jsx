import { Image, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

import { images } from "../constants";

const App = () => {
  return (
    <LinearGradient
      // 1. Define the colors (from top to bottom)
      colors={['#000000', '#152131', '#000000']} 
      
      // 2. Define the direction (Top Center to Bottom Center)
      start={{ x: 0.5, y: 0 }} 
      end={{ x: 0.5, y: 1 }} 
      
      // 3. Apply the necessary size/layout style
      style={styles.container}
    >
      <Image source={images.biggiData1}  style={styles.biggiDataImage}/>
      <Text style={styles.BiggiDataTitle}>Biggi Data</Text>
      <View style={styles.biggiRewardContainer}>
        <Text style={styles.biggiRewardText}>Biggi Reward</Text>
      </View>
    
    
    </LinearGradient>
  
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: 'linear-gradient(180deg, #000000 0%, #152131 48.08%, #000000 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        // Positioning and Dimensions
    position: 'relative',
    width: 430,
    height: 932,

    // Border
  

    // NOTE: The 'background' property is handled by a separate component (see below)
        
    },
    biggiDataImage: {  
        position: 'absolute',
        width: 395,
        height: 395,
        left: 18,
        top: 177,
     },
    BiggiDataTitle: {
    position: 'absolute',
    width: 292,
    height: 74,
    left: '50%',          // Start at 50% from left
    marginLeft: -146,     // Subtract half the width (292 / 2 = 146) to center
    top: '50%',           // Start at 50% from top
    marginTop: 34,        // Add the vertical offset (71 - 37 = 34)

    // Text Styling
    fontFamily: 'RedRose-Bold', // Note: You must properly load and link the 'Red Rose' font and use the correct name for the 700 weight.
    // fontStyle: 'normal', // 'fontStyle' is not always necessary if font is correctly loaded
    fontWeight: '700',
    fontSize: 50,
    lineHeight: 57,
    // display: 'flex', alignItems: 'center', text-align: 'center' are handled by React Native Text properties:
    textAlign: 'center',        // CSS 'text-align: center'
    textAlignVertical: 'center', // Helps with vertical alignment on Android
    textTransform: 'capitalize',
    
    color: '#FF8000',
        
    },

biggiRewardContainer: {
    // Positioning
    position: 'absolute',
    width: 263,
    height: 129,
    
    // Horizontal Centering: calc(50% - 263px/2 + 0.5px)
    // 263 / 2 = 131.5. Offset = 0.5. Total horizontal shift = 131.5 - 0.5 = 131
    // The calculation simplifies to: 50% - 131.5 + 0.5 = 50% - 131
    left: '50%',
    marginLeft: -131, // Shift left by 131 (half of 263, minus the 0.5px offset)
    
    // Vertical Positioning: calc(50% - 129px/2 + 172.5px)
    // 129 / 2 = 64.5. Vertical offset = 172.5. Total shift = 172.5 - 64.5 = 108
    // The calculation simplifies to: 50% + 108px
    top: '50%',
    marginTop: 108, // Shift down by 108 (172.5 - 64.5)

    // Note: The `display: flex` and `alignItems: center` CSS properties 
    // for vertical centering are typically handled by `textAlignVertical` 
    // or through nesting, but for a standalone absolutely positioned Text 
    // component, the Text properties below are usually sufficient.
  },
  biggiRewardText: {
    // Text Styling
    // 💡 IMPORTANT: You must properly load and link the 'Red Rose' font to your app.
    // The exact font name might be 'RedRose-Bold' depending on how it's linked.
    fontFamily: 'Red Rose', 
    fontWeight: '700',
    fontSize: 67,
    
    // line-height in React Native is a number, not a percentage or 'px' value
    lineHeight: 57, 
    
    textAlign: 'center',
    textAlignVertical: 'center', // Useful for vertical centering on Android
    textTransform: 'capitalize',
    
    color: '#FFFFFF',
  }
   
})

