import React from "react";
import {
  Container,
  Flex,
  Row,
  Column,
  Avatar,
  PeopleIcon,
  CompanyIcon,
  EmailIcon,
  LocationIcon,
  BlogIcon,
} from "./styles";

interface Props {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}

const ProfileData: React.FC<Props> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />
        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>
      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </Row>
      <Column>
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
      </Column>
      <Column>
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
      </Column>
      <Column>
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
      </Column>
      <Column>
        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
