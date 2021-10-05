import {Dimensions,Platform} from 'react-native';
const {width, height, fontScale} = Dimensions.get('screen');

/////Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const getModerateScale=(size, factor = 0.5)=>{
	const moderateScale =  size + ( scale(size) - size ) * factor;
	return moderateScale;
}

export const getPlatform=()=>{
	return Platform.OS;
}

export const getDevice=()=>{
	return Platform;
}

export const getResponsiveScreenHeight=(size)=>{
	return responsiveScreenHeight(size)
}

export const getResponsiveScreenFontSize=(size)=>{
	return   responsiveScreenFontSize(size)
}

export const getResponsiveScreenWidth=(size)=>{
	return responsiveScreenWidth(size)
}

export const getResponsiveScreenWidthDivide=(size)=>{
	return (width/size)
}

export const getResponsiveScreenHeightDivide=(size)=>{
	return (height/size)
}

export const aspectRatio=()=>{
	return height/width
}
        

