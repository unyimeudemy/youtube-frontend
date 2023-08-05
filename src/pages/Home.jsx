import { useState } from "react";
import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  try {
    useEffect(() => {
      const fetchVideos = async () => {
        const res = await axios.get(
          `https://youtube-backend-a8v8.onrender.com/video/${type}`
        );
        setVideos(res.data);
      };
      fetchVideos();
    }, [type]);
  } catch (err) {
    console.log(err);
  }

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
