// import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const AddCommentWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const CommentButton = styled.button`
  color: white;
  background-color: #ff1a1a;
  font-weight: 500;
  height: max-content;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 5px;
  position: relative;
  left: 665px;
`;

const Comments = ({ videoID }) => {
  //   const { currentVideo } = useSelector((state) => state.video);
  const [comment, setComment] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(
          `https://youtube-backend-a8v8.onrender.com/comment/${videoID}`
        );

        setComments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
  }, [videoID]);

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        Authorization: currentUser.token,
        userID: currentUser.data._id,
      };

      await axios.post(
        // "http://localhost:8000/api/comment",
        "https://youtube-backend-a8v8.onrender.com/comment",
        {
          videoID,
          desc: comment,
        },
        { headers }
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <AddCommentWrapper>
        <NewComment>
          <Avatar src={currentUser?.data.image} />
          <Input
            placeholder="Add a comment..."
            onChange={(e) => setComment(e.target.value)}
          />
        </NewComment>
        <CommentButton onClick={handleComment}>Comment</CommentButton>
      </AddCommentWrapper>
      {comments?.map((comment, i) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;
