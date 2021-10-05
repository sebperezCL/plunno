import React from 'react';
import {
    Container,
    MainContainer,
    LogoContainer,
    InputContainer,
    LogoImage,
    ButtonContainer,
    ResendButton,
    ResendText,
    ButtomText
} from './style';

const ResetPasswordScreen=()=>{
    return(
        <Container>
            <MainContainer>
                <LogoContainer>
                    <LogoImage source={require("../Assets/ChangedPass.png")}/>
                </LogoContainer>
                <InputContainer>
                    <ButtonContainer>
                        <ResendButton>
                            <ResendText>Login</ResendText>
                        </ResendButton>
                    </ButtonContainer>
                </InputContainer>
            </MainContainer>
        </Container>
    );
}

export default ResetPasswordScreen;