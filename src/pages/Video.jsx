import React from "react";
import styled from "styled-components";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 5;
  background-color: #f2f2f2;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
`;

const Recommendation = styled.div`
  flex: 2;
  background-color: #f2f2f2;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: black;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: #666666;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #a6a6a6;
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
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: #666666;
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

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            src="https://i.ytimg.com/vi/KYn3k8dpRJI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2KmwWKxyOe3sceJI8ojpMPkx5Qw"
            width="100%"
            height="420px"
            title="sabilty"
            // frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>
          <Info>9000 views . Feb 27, 2023</Info>
          <Buttons>
            <Button>
              <ThumbUpOffAltIcon />
              123
            </Button>
            <Button>
              <ThumbDownOffAltIcon />
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
            <Image src="https://yt3.ggpht.com/Yql1zU-Z3XOi_qZ_z4ABKDe9lCiwczMdTCGAnnXM9vOA5XomLk1mOwd1pVCn1QEL5HStowCO7Fk=s88-c-k-c0x00ffffff-no-rj" />
            <ChannelDetail>
              <ChannelName>Ayarr Star Official</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Describtion>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum fugiat rerum deleniti, nulla quae possimus. Adipisci
                iste sit facere tempora at voluptas in expedita quidem ab,
                natus, officiis doloremque iure?
              </Describtion>
            </ChannelDetail>
          </ChannelInfo>
          <SubscribeButton>SUBSCRIBE</SubscribeButton>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;
