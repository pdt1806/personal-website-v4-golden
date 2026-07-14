import { Box, Image } from "@mantine/core";
import classes from "./index.module.css";

const starsConfig = [
  { id: "star_0", w: "10vw", translate: "18vw 3vh", delay: "0s", duration: "1.5s" },
  { id: "star_1", w: "8vw", translate: "10vw 40vh", delay: "-0.4s", duration: "1.8s" },
  { id: "star_2", w: "15vw", translate: "-5vw 70vh", delay: "-1.2s", duration: "2.1s" },
  { id: "star_3", w: "5vw", translate: "7vw 14vh", delay: "-0.8s", duration: "1.4s" },
  { id: "star_4", w: "3vw", translate: "25vw 42vh", delay: "-0.2s", duration: "1.6s" },
  { id: "star_5", w: "3vw", translate: "38vw 8vh", delay: "-1.5s", duration: "2.3s" },
  { id: "star_6", w: "13vw", translate: "63vw -1vh", delay: "-0.7s", duration: "1.7s" },
  { id: "star_7", w: "13vw", translate: "82vw 30vh", delay: "-1.0s", duration: "2.0s" },
  { id: "star_8", w: "7vw", translate: "65vw 70vh", delay: "-0.3s", duration: "1.9s" },
];

const FloatingStars = () => {
  return (
    <Box className={classes.floatingStarsWrapper}>
      {starsConfig.map((star) => (
        <Image
          key={star.id}
          id={star.id}
          src="/images/four-point-star.svg"
          w={star.w}
          style={{
            translate: star.translate,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
          className={classes.floatingStar}
        />
      ))}
    </Box>
  );
};

export default FloatingStars;
