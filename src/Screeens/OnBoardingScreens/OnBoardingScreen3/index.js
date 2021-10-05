import React from "react";
import { Dimensions } from "react-native";
import { SkipButton } from "../Components/SkipButton";
import {
    Container,
    ImageContainer,
    SliderContainer,
    SliderImageView,
    SliderImage,
    SliderButtonView,
    HeadContainer,
    SkipView,
    SkipViewBlank,
    OnBoardImage,
    ButtonText,
    ContentHeading,
    ImgContent,
    BackTickImage,
    ContenetTextView,
    ContentText,
    SubTextView,
    SubText,
    ContenetBlankTextView,
    SubContentHeading,
    BlanckSubContentHeading,
    SliderButton,
} from './style';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const OnBoarding1 = ({ navigation }) => {
    return (
        <Container>
            <HeadContainer>
                <SkipViewBlank>
                <BackTickImage source={require("../Assets/BackTickArrow.png")}/>
                </SkipViewBlank>
                <SkipView>
                    <SkipButton {...navigation} />
                </SkipView>
            </HeadContainer>
            <ImageContainer>
                <ImgContent>
                    <OnBoardImage source={require("../Assets/Onboard3.png")} />
                </ImgContent>
                {/* <ContentHeading>
                    <SubContentHeading>
                        <ContenetTextView>
                            <ContentText>
                                Start to invest for {"\n"}your future!
                            </ContentText>
                        </ContenetTextView>
                        <SubTextView>
                            <SubText>
                                Ex totam praesentium incidunt aut.
                            </SubText>
                        </SubTextView>
                    </SubContentHeading>
               </ContentHeading> */}
            </ImageContainer>
            <SliderContainer>
                <SliderImageView>
                    <SliderImage source={require("../Assets/OnBoardCursor3.png")} />
                </SliderImageView>
                <SliderButtonView>
                    <SliderButton onPress={() => navigation.navigate("Onboarding2")}>
                    <ButtonText>Next</ButtonText>

                    </SliderButton>
                </SliderButtonView>
            </SliderContainer>
        </Container>
    );
}

export default OnBoarding1;