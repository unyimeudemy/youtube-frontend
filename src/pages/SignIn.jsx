import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: calc(100vh - 0px); */
  color: ${({ theme }) => theme.text};
  margin-top: 30px;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: #b3b3b3; */
  padding: 20px 50px;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
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
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #3366ff;
  color: ${({ theme }) => theme.textSoft};
  color: white;
`;

const More = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 10px;
  color: ${({ theme }) => theme.textSoft};
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
  //   const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:8000/api/auth/signin", {
        email,
        password,
      });

      //   import Cookies from "universal-cookie";
      //   const cookies = new Cookies();
      //   cookies.set("cookieValue", token, { path: "/" });

      dispatch(loginSuccess(res.data));
      //redirect
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  const signInWithGoogle = async () => {
    dispatch(loginStart());

    signInWithPopup(auth, provider)
      .then((result) => {
        const func = async () => {
          const res = await axios.post(
            "http://localhost:8000/api/auth/google",
            {
              name: result.user.displayName,
              email: result.user.email,
              image: result.user.photoURL,
            }
          );
          dispatch(loginSuccess(res.data));
          //   dispatch(loginSuccess(result.user));
        };
        func();
      })
      .catch((err) => {
        dispatch(loginFailure());
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:8000/api/auth/signup", {
        name,
        email,
        password,
      });

      dispatch(loginSuccess(res.data));
      //redirect
      navigate("/");
    } catch (err) {
      //   dispatch(loginFailure());
    }
  };

  return (
    <Container>
      <Wrapper>
        <Logo src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" />
        <Title>Sign in</Title>
        <Subtitle>to continue to Youtube</Subtitle>
        <Input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        <Button onClick={signInWithGoogle}>Signin with Google</Button>
        <Title>or</Title>
        <Input
          type="text"
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignup}>Sign up</Button>
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
