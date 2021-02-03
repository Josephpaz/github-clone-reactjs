import React from "react";
import { Container, Main, LeftSide, RightSide, Repos } from "./styles";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"josephpaz"}
            name={"Joseph Paz"}
            avatarUrl={"https://avatars.githubusercontent.com/u/47433768?v=4"}
            followers={12}
            following={13}
            company={undefined}
            location={undefined}
            email={"josephpazjj@gmail.com"}
            blog={"www.linkedin.com/in/josephpazz"}
          ></ProfileData>
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random Repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"josephpaz"}
                  reponame={"crud-laravel"}
                  description={"A simple CRUD laravel application"}
                  language={n % 3 == 0 ? "JavaScript" : "TypeScript"}
                  stars={10}
                  forks={2}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
