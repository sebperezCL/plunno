import React from 'react';
import {
    Container,
    MainContainer,
    LogoContainer,
    InputContainer,
    LogoImage,
    HeadingText,
    HeadingView,
    InputFieldContainer,
    TextInput1,
    TextInput2,
    ButtonView,
    ButtonText,
    TextOutComeView,
    TextOutCome,
    TextOut,
} from './style';

const SignUpScreen = ({ navigation }) => {
    return (
        <Container>
            <MainContainer>
                <LogoContainer>
                    <LogoImage source={require("../Assets/LoginIcon.png")} />
                </LogoContainer>
                <HeadingView>
                    <HeadingText>Create a free account</HeadingText>
                </HeadingView>
                <InputContainer>
                    <InputFieldContainer>
                        <TextInput1 placeholder="Email">
                        </TextInput1>
                        <TextInput2 placeholder="Password">
                        </TextInput2>
                        <ButtonView>
                            <ButtonText>Sign Up</ButtonText>
                        </ButtonView>
                        <TextOutComeView>
                            <TextOutCome>
                                <TextOut>Forgot password?</TextOut>
                            </TextOutCome>
                            <TextOutCome>
                                <TextOut>Login</TextOut>
                            </TextOutCome>
                        </TextOutComeView>
                    </InputFieldContainer>
                </InputContainer>
            </MainContainer>
        </Container>
    );
}

export default SignUpScreen;