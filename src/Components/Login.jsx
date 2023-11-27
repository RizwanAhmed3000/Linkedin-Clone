import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt="" />
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign In</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcone to your professional community</h1>
                    <img src="/images/login-hero.svg" alt="" />
                </Hero>
                <Form>
                    <Google>
                        <img src="/images/google.svg" alt="" />
                        Sign in with google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

const Container = styled.div`
    padding: 0;
`

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-wrap: nowrap;
    & > a{
        width: 135px;
        height: 34px;
        @media(max-width: 768px){
            padding: 0 5px;
        }
    }
`

const Join = styled.button`
    font-size: 16px;
    border-Radius: 4px;
    padding: 10px 12px;
    border: none;
    color: #5c5b5b;
    margin-right: 12px;
    font-weight: 700;
    cursor: pointer;
    &:hover{
        background-color: #c0c0c073;
        color: #363636
    }
`

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    font-size: 16px;
    border-Radius: 24px;
    padding: 10px 20px;
    color: #0a66c2;
    margin-right: 12px;
    font-weight: 700;
    transition-duration: 167ms;
    line-height: 40px;
    cursor: pointer;
    &:hover{
        background-color: rgba(112, 181, 249, 0.15);
    }
`

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 130px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    margin: auto;
    align-items: center;
    @media(max-width: 768px) {
        margin: 0;
        min-height: 0px;
    }
`

const Hero = styled.div`
    width: 100%;
    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 50px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        @media(max-width: 768px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }
    
    img{
        /* z-index: -1; */
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media(max-width: 768px){
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`

const Form = styled.div`
    margin-top: 80px;
    width: 400px;
    @media(max-width: 768px){
        margin-top: 20px;
    }
`

const Google = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 100%;
    height: 56px;
    border-radius: 28px;
    border: 2px solid #0a66c2;
    cursor: pointer;
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
    &:hover{
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }
`

export default Login