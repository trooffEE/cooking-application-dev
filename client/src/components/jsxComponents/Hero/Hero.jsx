import React from "react";
import { HeroStyles } from "../../styledComponents/Hero/HeroStyles";

const Hero = ({ isLoggedIn }) => {
  return (
    <HeroStyles>
      <h1>Cooking Single Page Application</h1>
      {!isLoggedIn ? (
        <h2>
          You aren't logged in: you can't use this application unless you logged
          in!
        </h2>
      ) : (
        <>
          <p>
            This Application was made by a student who wants to master front-end
            + a little bit of back-end!
          </p>
          <p>Vadim Spitsyn PIb-191</p>
        </>
      )}
    </HeroStyles>
  );
};

export default Hero;
