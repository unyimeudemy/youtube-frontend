import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { store } from "../redux/store";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import Upload from "./Upload";
import Profile from "./Profile";

const Container = styled.div`
  position: sticky;
  top: 0px;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 50px;
  position: relative;
  justify-content: flex-end;
`;

const Search = styled.div`
  position: absolute;
  width: 50%;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 768px) {
    padding: 2px;
    align-items: left;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  font-weight: 500;
  border-radius: 100px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    gap: 3px;
  }
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

const SearchSection = styled.div`
  display: flex;
  justify-content: start;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    if (open) {
      // Disable scrolling on mount
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling on unmount
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/tags?tags=${q}`);
    }
  };

  return (
    <>
      <Container>
        <Wrapper xs="12" sm="6" md="8">
          {/* <SearchSection> */}
          <Search>
            <Input
              type="search"
              placeholder="Search by song title"
              onKeyDown={handleKeyPress}
              onChange={(e) => setQ(e.target.value)}
            />
            <SearchIcon onClick={() => navigate(`/tags?tags=${q}`)} />
          </Search>
          {/* <MicOutlinedIcon /> */}
          {/* </SearchSection> */}
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
              <NotificationsNoneOutlinedIcon />
              <Avatar
                src={currentUser.photoURL}
                onClick={() => setProfile(!profile)}
              />
              {currentUser.displayName}
            </User>
          ) : (
            <Link
              to="signin"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
      {profile && <Profile setProfile={setProfile} profile={profile} />}
    </>
  );
};

export default Navbar;

/////////////////////////////////////////
