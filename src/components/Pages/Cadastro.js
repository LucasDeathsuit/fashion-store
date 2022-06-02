import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Input from '../Input'
import { AiOutlineGoogle } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const SignUpModal = styled.div``

const Content = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h2``

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SocialMediaOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & > * {
        cursor: pointer;
        border: 1px solid black;
        border-radius: 50%;
        padding: 4px;
    }
`

const Span = styled.span`
    text-decoration: underline;
    cursor: pointer;
`

const Subtitle = styled.span``

export default function Cadastro() {

    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <SignUpModal>
            <Content>
                <Title>
                    {isLogin ? "LOGIN" : "SIGN UP"}
                </Title>
                <Form>
                    <Input label="Email" required placeholder="Insira seu email" type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
                    <Input label="Password" required placeholder="Insira sua senha" type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />

                    {
                        isLogin ?
                            <div>
                                <input type="checkbox" name="rememberme" />
                                <label for="rememberme">Remember me?</label>
                            </div>
                            : null
                    }

                    <Button size="btn--medium" type="btn--secondary" >{isLogin ? "LOGIN" : "SIGN UP"}</Button>
                    {
                        isLogin ? <div>Forgot Password?</div> : null
                    }
                    OR
                    <SocialMediaOptions>
                        <AiOutlineGoogle />
                        <FaFacebookF />
                        <FaLinkedinIn />
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
        </SignUpModal>
    )
}