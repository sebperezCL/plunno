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

`;
export const LogoImage= styled.Image`
    width:100%
`;
export const InputContainer= styled.View`
    flex:1
`;
export const ButtonContainer=styled.View`
    justifyContent:center
    alignItems:center
`;
export const ResendButton =styled.TouchableOpacity`
    marginTop:${commonStyle.getResponsiveScreenHeight(3)}px
    justifyContent:center
    alignItems:center
    height:${commonStyle.getResponsiveScreenHeight(7)}px
    width:${commonStyle.getResponsiveScreenWidth(70)}px
    borderRadius:15
    backgroundColor:#586382
`;
export const ResendText =styled.Text`
    color:white
    fontSize:${commonStyle.getResponsiveScreenFontSize(2)}px
    fontWeight:bold
`;
export const ButtomText=styled.Text`
    marginTop:${commonStyle.getResponsiveScreenHeight(1)}px
    fontSize:${commonStyle.getResponsiveScreenFontSize(1.5)}px
    fontWeight:bold
`;