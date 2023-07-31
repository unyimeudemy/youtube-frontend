import React, { useState } from "react";
import styled from "styled-components";
import youtube from ".././images/youtubeLogo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Container1 = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 150vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: -250px;

  /* @media only screen and (max-width: 768px) {
    display: none;
  } */
`;
const Container2 = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 150vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: absolute;
  /* top: -250px; */

  /* @media only screen and (max-width: 768px) {
    display: none;
  } */
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 20px;
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

const Item2 = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 0px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }

  @media only screen and (max-width: 425px) {
    /* gap: 20px; */
    /* padding: 7.5px 0px; */
    font-size: 10px;
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  font-weight: 500;
  border-radius: 100px;
  margin-top: 10px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 18px 26px;
  padding-right: 0px;
`;

const FullMenu = styled.div``;

const ShortMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 18px 26px;
`;

const ShortMenuItem = styled.div``;

const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [menu, setMenu] = useState(true);
  const navigation = useNavigate();

  return (
    <Container1>
      <MenuWrapper>
        {/* <ShortMenuItem> */}
        <MenuIcon onClick={() => setMenu(!menu)} />
        {/* <ShortMenuItem/> */}
      </MenuWrapper>
      {menu ? (
        <ShortMenu>
          <Item2 onClick={() => navigation("/")}>
            <HomeIcon />
            Home
          </Item2>
          <Item2>
            <SubscriptionsOutlinedIcon />
            Subscribtion
          </Item2>
          <Item2>
            <VideoLibraryOutlinedIcon />
            Library
          </Item2>
          <Item2>
            <LibraryMusicOutlinedIcon />
            Music
          </Item2>
        </ShortMenu>
      ) : (
        <Container2>
          <Wrapper>
            <FullMenu>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Logo>
                  <Img src={youtube} alt="youtube/icon" />
                  YouTube
                </Logo>
              </Link>
              <Item onClick={() => navigation("/")}>
                <HomeIcon />
                home
              </Item>
              <Link
                to="trend"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Item>
                  <ExploreOutlinedIcon />
                  Explore
                </Item>
              </Link>
              <Link
                to="subscriptions"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Item>
                  <SubscriptionsOutlinedIcon />
                  Subscriptions
                </Item>
              </Link>
              <Hr />
              <Item>
                <VideoLibraryOutlinedIcon />
                Library
              </Item>
              <Item>
                <HistoryOutlinedIcon />
                History
              </Item>
              <Hr />
              {currentUser ? (
                ""
              ) : (
                <>
                  <Login>
                    Sign in to like videos, comment, and subscribe.
                    <Link to="signin" style={{ textDecoration: "none" }}>
                      <Button>
                        <AccountCircleOutlinedIcon />
                        SIGN IN
                      </Button>
                    </Link>
                  </Login>
                  <Hr />
                </>
              )}
              <Title>BEST OF YOUTUBE</Title>
              <Item>
                <LibraryMusicOutlinedIcon />
                Music
              </Item>
              <Item>
                <SportsBasketballOutlinedIcon />
                Sports
              </Item>
              <Item>
                <SportsEsportsOutlinedIcon />
                Gaming
              </Item>
              <Item>
                <MovieOutlinedIcon />
                Movies
              </Item>
              <Item>
                <ArticleOutlinedIcon />
                News
              </Item>
              <Item>
                <LiveTvOutlinedIcon />
                Live
              </Item>
              <Hr />
              <Item>
                <SettingsOutlinedIcon />
                Settings
              </Item>
              <Item>
                <FlagOutlinedIcon />
                Report
              </Item>
              <Item>
                <HelpOutlineOutlinedIcon />
                Help
              </Item>
              <Item
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                <SettingsBrightnessOutlinedIcon />
                Light mode
              </Item>
            </FullMenu>
          </Wrapper>
        </Container2>
      )}
    </Container1>
  );
};

export default Menu;

///////////////////////////////////////////
