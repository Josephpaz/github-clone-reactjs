import React from "react";
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  );
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line"></span>
      </Tab>
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
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>
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

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
