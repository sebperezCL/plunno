import styled from 'styled-components';
import * as commonStyle from '../../../GlobalComponents/MainStyle';

export const Container = styled.View`
	flex:1
	backgroundColor : white
`;
export const MainContainer =styled.View`
    flex:1
`;
export const LogoContainer= styled.View`
    flex:7
    alignItems:center
`;
export const LogoImage = styled.Image`
    flex:1
    width:100%
`;
export const HeadingView = styled.View`
    flex:1
    justifyContent :center
    alignItems:center
`;
export const HeadingText=styled.Text`
    flex:1
    fontWeight:bold
    fontSize:${commonStyle.getResponsiveScreenFontSize(3)}px
`;
export const InputContainer= styled.View`
    flex:5  
`;
export const InputFieldContainer= styled.View`
    justifyContent:center
    alignItems:center
`;
export const TextInput1 = styled.TextInput`
    borderWidth:${commonStyle.getResponsiveScreenHeight(.2)}px
    paddingHorizontal:${commonStyle.getResponsiveScreenWidth(5)}px
    width:${commonStyle.getResponsiveScreenWidth(75)}px
    marginTop:${commonStyle.getResponsiveScreenHeight(2)}px
    borderRadius:15
`;
export const TextInput2 = styled.TextInput`
    borderWidth:${commonStyle.getResponsiveScreenHeight(.2)}px
    paddingHorizontal:${commonStyle.getResponsiveScreenWidth(5)}px
    width:${commonStyle.getResponsiveScreenWidth(75)}px
    marginTop:${commonStyle.getResponsiveScreenHeight(2)}px
    borderRadius:15
`;
export const ButtonView= styled.TouchableOpacity`
    marginTop:${commonStyle.getResponsiveScreenHeight(2)}px
    height:${commonStyle.getResponsiveScreenHeight(6)}px
    width:${commonStyle.getResponsiveScreenWidth(75)}px
    justifyContent:center
    alignItems:center
    backgroundColor:#586382
    borderRadius:15
`;
export const ButtonText = styled.Text`
    color:white
`;

export const TextOutComeView=styled.View`
    width:${commonStyle.getResponsiveScreenWidth(75)}px
    flexDirection:row
    justifyContent:space-between
    paddingLeft:${commonStyle.getResponsiveScreenWidth(1)}px
    paddingRight:${commonStyle.getResponsiveScreenWidth(2)}px
    marginTop:${commonStyle.getResponsiveScreenHeight(1)}px
    marginRight:${commonStyle.getResponsiveScreenWidth(3)}px
    marginLeft:${commonStyle.getResponsiveScreenWidth(3)}px
`;
export const TextOutCome= styled.TouchableOpacity`

`;
export const TextOut=styled.Text`
    fontSize:${commonStyle.getResponsiveScreenFontSize(1.3)}px
`;