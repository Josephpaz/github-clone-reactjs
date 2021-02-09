import React from "react";
import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

import {Link} from 'react-router-dom';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/josephpaz"}>
          josephpaz
        </Link>
        <span>/</span>
        <Link className={"repoName"} to={"/josephpaz/crud-laravel"}>
          crud-laravel
        </Link>
      </Breadcrumb>
      <p>Contains all of my Youtuebe lessons code.</p>
      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>starts</span>
        </li>
        <li>
          <ForkIcon />
          <b>8</b>
          <span>forks</span>
        </li>
      </Stats>
      <LinkButton href={"https://github.com/Josephpaz/crud-laravel"}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
