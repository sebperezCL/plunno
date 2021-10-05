import styled from 'styled-components';
import * as commonStyle from '../../../../GlobalComponents/MainStyle';

export const SkipView = styled.View`
    flex:1
    alignItems:center
    justifyContent:center
    height:${commonStyle.getResponsiveScreenHeight(4)}px
`;
export const SkipViewButton =styled.TouchableOpacity`
    flex:1
    alignItems:center
    justifyContent:center
`;
export const Text =styled.Text`
    fontWeight:bold
    fontSize:${commonStyle.getResponsiveScreenFontSize(1.7)}px
`;
