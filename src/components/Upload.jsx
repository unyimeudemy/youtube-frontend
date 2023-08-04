import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #d9d9d985;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  z-index: 99;
`;

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: #f9f9f9;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  border-radius: 5px;
  border: #595959 solid 1px;
`;

const Close = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
`;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid #8c8c8c;
  color: black;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Describtion = styled.textarea`
  border: 1px solid #8c8c8c;
  color: black;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Button = styled.button`
  color: white;
  background-color: #ff1a1a;
  font-weight: 500;
  height: max-content;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 14px;
`;

const Upload = ({ setOpen }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [image, setImage] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [videoPercentage, setVideoPercentage] = useState(0);
  const [imagePercentage, setImagePercentage] = useState(0);
  const [input, setInput] = useState({});
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleTags = (e) => {
    setTags(e.target.value.split(","));
  };

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "ImageUrl"
          ? setImagePercentage(Math.round(progress))
          : setVideoPercentage(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInput((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    video && uploadFile(video, "videoUrl");
  }, [video]);

  useEffect(() => {
    image && uploadFile(image, "ImageUrl");
  }, [image]);

  const handleUpload = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://youtube-backend-a8v8.onrender.com/video",
      {
        ...input,
        tags,
      },
      {
        headers: {
          Authorization: currentUser.token,
          userID: currentUser.data._id,
        },
      }
    );

    setOpen(false);
    res.status === 200 && navigate(`/video/${res.data._id}`);
  };

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>Upload a new a video</Title>
        {videoPercentage > 0 ? (
          "Uploading " + videoPercentage + "%"
        ) : (
          <Input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        )}
        <Label>Video:</Label>
        <Input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <Describtion
          placeholder="Describtion"
          rows={8}
          name="describtion"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Separate tags with commas"
          onChange={handleTags}
        />
        <Label>Image:</Label>
        {imagePercentage > 0 ? (
          "Uploading " + imagePercentage + "%"
        ) : (
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        )}
        <Button onClick={handleUpload}>Upload Video</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;

//////////////////////////////////////////////////////////
