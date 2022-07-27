import React from "react";
import styled from "styled-components";

interface CardProps {
  name: string;
  called: string;
  desc: string;
  profilePicture: string;
}

const Card = (props: CardProps) => {
  const { name, called, desc, profilePicture } = props;
  return (
    <ProfileCard>
      <img src={profilePicture} alt="Image" />
      <div className="details">
        <h2>{name}</h2>
        <p>{called}</p>
      </div>
      <p className="info">{desc}</p>
    </ProfileCard>
  );
};

export default Card;

const ProfileCard = styled.div`
  color: #fff;
  max-width: 25rem;
  max-height: 34rem;
  width: 25rem;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  & > img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin: 5px;
  }
  .details {
    margin: 0.2rem;
  }

  .details h2 {
    font-family: "Gfont_bold";
  }

  .details p {
    text-transform: uppercase;
    font-family: "Gfont_regular";
  }
  .info {
    height: 5em;
    overflow-x: scroll;
    margin-bottom: 0.5em;
    font-family: "Gfont_light";
  }
`;
