import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #808080;
  margin-left: 5px;
`;

const Text = styled.div`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/Yql1zU-Z3XOi_qZ_z4ABKDe9lCiwczMdTCGAnnXM9vOA5XomLk1mOwd1pVCn1QEL5HStowCO7Fk=s88-c-k-c0x00ffffff-no-rj" />
      <Details>
        <Name>
          unyime <Date> 2 days ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quidem eum
          consequatur autem veritatis repudiandae neque assumenda inventore
          voluptas recusandae unde, sapiente repellat molestias, quos ullam aut
          dignissimos est! Vel!
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
