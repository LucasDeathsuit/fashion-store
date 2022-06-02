import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Input from '../Input'
import { AiOutlineGoogle } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import CloseIcon from '@mui/icons-material/Close';

const SignUpModal = styled.div`
    position: absolute;
    top: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #63b1e699;
    height: 100vh;
    width: 100vw;
    color: #545454;
`

const ContentWrapper = styled.div`
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0.2px black;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;

    @media (max-width: 350px) {
        width: 100vw;
    }
`

const CloseIconWrapper = styled.div`
    align-self: flex-end;
    cursor: pointer;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 1rem;
`

const Title = styled.h2`
    align-self: flex-start;
    margin: 2px;
    margin-bottom: 15px;
    font-weight: 600;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;

    @media (max-width: 350px) {
        width: 100%
    }

`

const InputWrapper = styled.div`
    margin: 1rem;
    width: 100%;
`

const Separator = styled.span`

    margin: 1rem;
    margin-bottom: 0;

    &::before {
        content: ' ';
        display: inline-block;
        position: relative;
        width: 100px;
        border-bottom: 1.5px solid #c1c1c1;
        top: -0.3rem;

        @media (max-width: 350px) {
        display: none;
        }
    }

    &::after {
        content: ' ';
        display: inline-block;
        position: relative;
        width: 100px;
        border-bottom: 1.5px solid #c1c1c1;
        top: -0.3rem;

        @media (max-width: 350px) {
        display: none;
        }
    }

`

const SeparatorWord = styled.p`
    display: inline-block;
    border: 2px solid #c1c1c1;
    border-radius: 5px;
    padding: 5px;
`

const handleIconColor = socialMedia => {
    switch (socialMedia) {
        case "facebook":
            return "#4267B2"
        case "google":
            return "#DB4437"
        case "linkedin":
            return "#0A66C2"
    }
}

const SocialMediaOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1rem;
`

const StyledIcon = styled.div`
    display: flex;
    cursor: pointer;
    border: 3px solid ${({ socialMedia }) => handleIconColor(socialMedia)};;
    border-radius: 50%;
    padding: 4px;
    color: ${({ socialMedia }) => handleIconColor(socialMedia)};
`

const RememberMe = styled.div`
    align-self: flex-start;
`

const SubmitWrapper = styled.div`
    width: 100%;
    margin: 1rem;
`

const Span = styled.span`
    text-decoration: underline;
    cursor: pointer;
`

const Subtitle = styled.span`
    
`

export default function Cadastro({ onClick }) {

    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <SignUpModal onClick={onClick}>
            <ContentWrapper onClick={e => e.stopPropagation()}>
                <CloseIconWrapper onClick={onClick}>
                    <CloseIcon />
                </CloseIconWrapper>
                <Content>
                    <Form>
                        <Title>
                            {isLogin ? "LOGIN" : "SIGN UP"}
                        </Title>
                        <InputWrapper>
                            <Input className="fields" label="Email" required placeholder="Insira seu email" type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper>
                            <Input className="fields" label="Password" required placeholder="Insira sua senha" type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
                        </InputWrapper>
                        {
                            isLogin &&
                            <RememberMe>
                                <label for="rememberme">
                                    <input type="checkbox" name="rememberme" id='rememberme' />
                                    Remember me?
                                </label>
                            </RememberMe>
                        }
                        <SubmitWrapper>
                            <Button shadow size="btn--large" type="btn--primary" >{isLogin ? "Login" : "Sign Up"}</Button>
                        </SubmitWrapper>
                        {
                            isLogin && <div>Forgot Password?</div>
                        }
                        <Separator><SeparatorWord>OR</SeparatorWord></Separator>
                        <SocialMediaOptions>
                            <StyledIcon socialMedia="google">
                                <AiOutlineGoogle />
                            </StyledIcon>
                            <StyledIcon socialMedia="facebook">
                                <FaFacebookF />
                            </StyledIcon>
                            <StyledIcon socialMedia="linkedin">
                                <FaLinkedinIn />
                            </StyledIcon>

                        </SocialMediaOptions>


                    </Form>
                    <Subtitle>
                        {
                            isLogin ?

                                <div>Need an account? <Span onClick={() => setIsLogin(!isLogin)}>SIGN UP</Span></div>

                                :

                                <div>Already a user? <Span onClick={() => setIsLogin(!isLogin)}>LOGIN</Span></div>
                        }
                    </Subtitle>
                </Content>
            </ContentWrapper>
        </SignUpModal >
    )
}