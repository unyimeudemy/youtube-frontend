import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
import axios from "axios";

const Container = styled.div`
  /* SMALL PHONES */
  width: 150px;
  margin-bottom: ${(props) => (props.type === "sm" ? "2px" : "20px")};
  cursor: pointer;
  margin-left: 1px;
  margin-top: 1px;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: ${(props) => props.type === "sm" && "2px"};

  /* MOBILE */
  @media only screen and (min-width: 320px) {
    width: 180px;
    margin-bottom: ${(props) => (props.type === "sm" ? "3px" : "25px")};
    margin-left: 1.5px;
    margin-top: 1.5px;
    gap: ${(props) => props.type === "sm" && "3px"};
  }

  /* TABLET */
  @media only screen and (min-width: 425px) {
    width: 210px;
    margin-bottom: ${(props) => (props.type === "sm" ? "6px" : "35px")};
    margin-left: 3px;
    margin-top: 3px;
    gap: ${(props) => props.type === "sm" && "5px"};
  }

  /* LAPTOP */
  @media only screen and (min-width: 1024px) {
    width: 320px;
    margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
    cursor: pointer;
    margin-left: 5px;
    margin-top: 5px;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: ${(props) => props.type === "sm" && "10px"};
  }

  /* LAPTOP LARGE*/
  @media only screen and (min-width: 1044px) {
    width: 360px;
    margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
    cursor: pointer;
    margin-left: 5px;
    margin-top: 5px;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: ${(props) => props.type === "sm" && "10px"};
  }
`;

const Image = styled.img`
  width: ${(props) => (props.type === "sm" ? "200px" : "100%")};
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  /* width: ${(props) => (props.type === "sm" ? "120px" : "202px")}; */
  background-color: #999;
  flex: 1;
  border-radius: 8px;

  @media only screen and (max-width: 425px) {
    height: 120px;
  }
  @media only screen and (min-width: 425px) {
    height: 120px;
  }
  @media only screen and (min-width: 768px) {
    height: 150px;
  }
  @media only screen and (min-width: 1024px) {
    height: 170px;
  }
  @media only screen and (min-width: 1044px) {
    height: 200px;
  }
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
  height: 70px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Text = styled.div``;

const Title = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  margin: 5px 0px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
`;

const Info = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});
  try {
    useEffect(() => {
      const fetchChannel = async () => {
        const res = await axios.get(`/user/find/${video.userID}`);
        setChannel(res.data);
      };
      fetchChannel();
    }, [video.userID]);
  } catch (err) {
    console.log(err);
  }

  //////////////////////////////////
  return (
    <Link
      to={`/video/${video._id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Container type={type}>
        <Image type={type} src={video.ImageUrl} />
        <Details type={type}>
          <ChannelImage type={type} src={video.ImageUrl} />
          <Text>
            <Title>{video.title}</Title>
            <ChannelName>{channel?.name}</ChannelName>
            <ChannelName>unyime</ChannelName>
            <Info>
              {video.views} views • {format(video.createdAt)}
            </Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;

///////////////////////////////////////////////////
