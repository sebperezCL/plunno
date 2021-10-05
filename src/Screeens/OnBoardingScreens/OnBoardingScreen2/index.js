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
    ContentHeading,
    ButtonText,
    ImgContent,
    ContenetTextView,
    ContentText,
    SubTextView,
    SubText,
    BackTickImage,
    SubContentHeading,
    SliderButton,
} from './style';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const OnBoarding2 = ({ navigation }) => {
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
                <ContentHeading>
                    <SubContentHeading>
                        <ContenetTextView>
                            <ContentText>
                                Follow our tipsto {"\n"}achieve success!
                            </ContentText>
                        </ContenetTextView>
                        <SubTextView>
                            <SubText>
                                Ex totam praesentium incidunt aut.
                            </SubText>
                        </SubTextView>
                    </SubContentHeading>
                </ContentHeading>

                <ImgContent>
                    <OnBoardImage source={require("../Assets/Onboard2.png")} />
                </ImgContent>
            </ImageContainer>
            <SliderContainer>
                <SliderImageView>
                    <SliderImage source={require("../Assets/OnBoardCursor2.png")} />
                </SliderImageView>
                <SliderButtonView>
                    <SliderButton onPress={() => navigation.navigate("Onboarding3")}>
                    <ButtonText>Next</ButtonText>
                    </SliderButton>
                </SliderButtonView>
            </SliderContainer>
        </Container>
    );
}

export default OnBoarding2;