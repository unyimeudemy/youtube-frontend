import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  margin-left: 5px;
  margin-top: 5px;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: ${(props) => props.type === "sm" && "10px"};
`;

const Image = styled.img`
  width: ${(props) => (props.type === "sm" ? "200px" : "100%")};
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  /* width: ${(props) => (props.type === "sm" ? "120px" : "202px")}; */
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
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
`;

const ChannelName = styled.h2`
  font-size: 14px;
  margin: 5px 0px;
  font-weight: 400;
`;

const Info = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://i.ytimg.com/vi/KYn3k8dpRJI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2KmwWKxyOe3sceJI8ojpMPkx5Qw"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://yt3.ggpht.com/Yql1zU-Z3XOi_qZ_z4ABKDe9lCiwczMdTCGAnnXM9vOA5XomLk1mOwd1pVCn1QEL5HStowCO7Fk=s88-c-k-c0x00ffffff-no-rj"
          />
          <Text>
            <Title>Sability</Title>
            <ChannelName>Ayarr Star Official</ChannelName>
            <Info>9 days ago</Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
