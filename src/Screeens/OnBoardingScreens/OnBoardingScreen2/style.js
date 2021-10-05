import styled from 'styled-components';
import { Dimensions } from 'react-native';
import * as commonStyle from '../../../GlobalComponents/MainStyle';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export const Container = styled.View`
	flex:1
	backgroundColor : white
`;
export const HeadContainer = styled.View`
	flex:0.5
	flex-direction:row
`;
export const SkipView =	styled.View`
	flex:1
`;
export const SkipViewBlank = styled.View`
	flex:2
`;
export const BackTickImage =styled.Image`
	flex:1
	marginLeft:${commonStyle.getResponsiveScreenWidth(6)}px
	height:${commonStyle.getResponsiveScreenHeight(3)}px
	width:${commonStyle.getResponsiveScreenHeight(2.5)}px
`;
export const ImageContainer = styled.View`
	flex:6
	backgroundColor : white
	alignItems:center
`;
export const ImgContent = styled.View`
	flex:5
	backgroundColor:white
`;
export const OnBoardImage= styled.Image`
	flex:5
	height:${commonStyle.getResponsiveScreenHeightDivide(1)}px
	width:${commonStyle.getResponsiveScreenWidthDivide(1)}px
`;
export const ContentHeading =styled.View`
	flex:1
	flex-direction:row
`;
export const SubContentHeading =styled.View`
	flex:8
	marginLeft:${commonStyle.getResponsiveScreenWidth(10)}px
`;

export const BlanckSubContentHeading =styled.View`
	flex:1
`;

export const ContenetTextView= styled.View`
	flex:6
`;
export const ContenetBlankTextView= styled.View`
	flex:1
`;
export const SubTextView = styled.View`
	flex:1
	marginBottom:${commonStyle.getResponsiveScreenHeight(.5)}px
`;
export const ContentText =styled.Text`
	fontSize:${commonStyle.getResponsiveScreenFontSize(3)}px
	fontWeight:bold
`;
export const SubText =styled.Text`
	fontSize:${commonStyle.getResponsiveScreenFontSize(1.4)}px
`;
export const SliderContainer =styled.View`
	flex:1
	backgroundColor : white
	flex-direction:row
	justifyContent:space-between
`;
export const SliderImageView =styled.View`
	flex:.65
	justifyContent:center
	alignItems:center
`;
export const SliderImage =styled.Image`

`;
export const SliderButtonView =styled.View`
	flex:1
	justifyContent:center
	alignItems:center
`;
export const SliderButton =styled.TouchableOpacity`
	justifyContent:center
	alignItems:center
	height:${commonStyle.getResponsiveScreenHeight(7)}px
	width:${commonStyle.getResponsiveScreenWidth(32)}px
	backgroundColor:#586382
	borderRadius:40
`;

export const ButtonText =styled.Text`
	fontWeight:bold
`;


