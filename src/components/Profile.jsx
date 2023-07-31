import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { logout } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.bgLighter};
  width: 300px;
  height: 350px;
  right: 90px;
  top: 30px;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Account = styled.div`
  display: flex;
  gap: 10px;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: #999;

  @media only screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const UserInfo = styled.div``;
const Text = styled.div``;

const Textsm = styled.div`
  color: #3385ff;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Item = styled.div`
  display: flex;
  border-radius: 10px;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Profile = ({ setProfile, profile }) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = async () => {
    dispatch(logout());
    setProfile(!profile);
    navigate(`/trend`);
  };

  return (
    <Container>
      <Wrapper>
        <Account>
          <Avatar src={currentUser.photoURL} />{" "}
          <UserInfo>
            <Text>{currentUser.data.name}</Text>
            <Text>{currentUser.data.email}</Text>
            <Textsm>Manage your Google Account</Textsm>
          </UserInfo>
        </Account>
        <Hr />
        <Option>
          <Item>
            <AccountBoxOutlinedIcon />
            Your Channel
          </Item>
          <Item>
            <SwitchAccountOutlinedIcon />
            Switch account
          </Item>
          <Item onClick={logOut}>
            <LogoutOutlinedIcon />
            Logout
          </Item>
          <Item>
            <SettingsOutlinedIcon />
            Setting
          </Item>
        </Option>
      </Wrapper>
    </Container>
  );
};

export default Profile;
