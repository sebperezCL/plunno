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
    TextOut
} from './style';

const LoginScreen = ({ navigation }) => {
    return (
        <Container>
            <MainContainer>
                <LogoContainer>
                    <LogoImage source={require("../Assets/LoginIcon.png")} />
                </LogoContainer>
                <HeadingView>
                    <HeadingText>Welcome!</HeadingText>
                </HeadingView>
                <InputContainer>
                    <InputFieldContainer>
                        <TextInput1 placeholder="Email" />
                        <TextInput2 placeholder="Password" />
                        <ButtonView onPress={() => navigation.navigate("SignupScreen")}>
                            <ButtonText>Login</ButtonText>
                        </ButtonView>
                        <TextOutComeView>
                            <TextOutCome>
                                <TextOut>Forgot password?</TextOut>
                            </TextOutCome>
                            <TextOutCome>
                                <TextOut>Sign Up</TextOut>
                            </TextOutCome>
                        </TextOutComeView>
                    </InputFieldContainer>
                </InputContainer>
            </MainContainer>
        </Container>
    );
}

export default LoginScreen;