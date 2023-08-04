import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  flex: 2;
  background-color: ${({ theme }) => theme.bg};
`;

const Recommendation = ({ tags }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(
        `https://youtube-backend.onrender.com/video/tags?tags=${tags}`
      );
      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);

  return (
    <Container>
      {videos?.map((video) => (
        <Card key={video._id} type="sm" video={video} />
      ))}
    </Container>
  );
};

export default Recommendation;
