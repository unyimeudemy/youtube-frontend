import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: calc(100vh - 0px); */
  color: black;
  margin-top: 30px;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: #b3b3b3; */
  padding: 20px 50px;
  border: 1px solid #8c8c8c;
  gap: 10px;
  width: 350px;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 24px;
  /* color: #808080; */
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid #8c8c8c;
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #3366ff;
  color: white;
`;

const More = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 10px;
`;

const Links = styled.div`
  display: flex;
  gap: 25px;
  font-size: 12px;
  color: #666666;
`;

const Link = styled.span``;

const Arrow = styled.div``;

const Logo = styled.img`
  height: 30px;
  margin-top: 2px;
  background-color: transparent;
`;

const Lang = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: #666666;
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" />
        <Title>Sign in</Title>
        <Subtitle>to continue to Youtube</Subtitle>
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign in</Button>
        <Title>or</Title>
        <Input type="text" placeholder="username" />
        <Input type="email" placeholder="email address" />
        <Input type="password" placeholder="password" />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        <Lang>
          English(United States)
          <Arrow>
            <ArrowDropDownIcon />
          </Arrow>
        </Lang>
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
