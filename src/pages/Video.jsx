import React, { useState } from "react";
import styled from "styled-components";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Comments from "../components/Comments";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { dislike, fetchSuccess, like } from "../redux/videoSlice";
import { subscribtion } from "../redux/userSlice";
import { format } from "timeago.js";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import Recommendation from "../components/Recommendation";

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 5;
  background-color: #f2f2f2;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.bg};
`;

// const Recommendation = styled.div`
//   flex: 2;
//   background-color: #f2f2f2;
// `;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: black;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft2};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* background-color: #999; */
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Describtion = styled.p`
  font-size: 14px;
`;

const SubscribeButton = styled.button`
  color: white;
  background-color: #ff1a1a;
  font-weight: 500;
  height: max-content;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  //getting the values of currentUser and currentVideo from redux slices

  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const videoRes = await axios.get(`/video/find/${path}`);
      const channelRes = await axios.get(`/user/find/${videoRes.data.userID}`);

      setChannel(channelRes.data);
      dispatch(fetchSuccess(videoRes.data));
    };
    fetchData();
  }, [path, dispatch]);

  const handleLikes = async () => {
    try {
      const headers = {
        Authorization: currentUser.token,
        userID: currentUser.data._id,
      };
      await axios.put(
        `http://localhost:8000/api/user/like/${currentVideo._id}`,
        { headers }
      );
      dispatch(like(currentUser.data._id));
    } catch (err) {}
  };

  const handleDislikes = async () => {
    try {
      // SENDING TOKEN STORED IN VIDEOSLICE AS A VALUE IN HEADER
      const headers = {
        Authorization: currentUser.token,
        userID: currentUser.data._id,
      };
      await axios.put(
        `http://localhost:8000/api/user/unlike/${currentVideo._id}`,
        { headers }
      );
      //UPDATING THE DISLIKE ACTION IN DISLIKESLICE
      dispatch(dislike(currentUser.data._id));
    } catch (err) {}
  };

  const handleSubcribe = async () => {
    try {
      const headers = {
        Authorization: currentUser.token,
        userID: currentUser.data._id,
      };

      currentUser.data.subscribedChannels.includes(channel._id)
        ? await axios.put(
            `http://localhost:8000/api/user/unsub/${channel._id}`,
            { headers }
          )
        : await axios.put(`http://localhost:8000/api/user/sub/${channel._id}`, {
            headers,
          });
      dispatch(subscribtion(currentVideo.userID));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo?.videoUrl} controls />
        </VideoWrapper>
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>
            {currentVideo?.views} views • {format(currentVideo?.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handleLikes}>
              {currentVideo?.likes?.includes(currentUser?.data._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOffAltIcon />
              )}
              {currentVideo?.likes?.length}
            </Button>
            <Button onClick={handleDislikes}>
              {currentVideo?.dislikes?.includes(currentUser?.data._id) ? (
                <ThumbDownAltIcon />
              ) : (
                <ThumbDownOffAltIcon />
              )}
              Dislike
            </Button>
            <Button>
              <ReplyIcon />
              Reply
            </Button>
            <Button>
              <AddTaskIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel.image} />
            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>{channel.subcribers} subscribers</ChannelCounter>
              <Describtion>{currentVideo?.describtion}</Describtion>
            </ChannelDetail>
          </ChannelInfo>
          <SubscribeButton onClick={handleSubcribe}>
            {/**
             *  if the subscribedChannels array which is found in the current
             * user object contains the ID of
             * the video creator, display SUBSCRIBED else display SUBSCRIBE
             */}

            {currentUser?.data.subscribedChannels.includes(channel._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </SubscribeButton>
        </Channel>
        <Hr />
        <Comments videoID={currentVideo?._id} />
      </Content>
      <Recommendation tags={currentVideo?.tags} />
    </Container>
  );
};

export default Video;
