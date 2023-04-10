import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import BannerMiddle from "../../components/bannerMiddle/BannerMiddle";
import BannerDark from "../../components/bannerDark/BannerDark";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide
        slidesToShow={5}
        arrowsScroll={5}
        desc={"Popular professional services"}
      >
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <BannerMiddle />
      <BannerDark />

      <Slide
        slidesToShow={4}
        arrowsScroll={4}
        desc={"Get inspired with projects made by our freelancers"}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
