import { Box, Image } from "@mantine/core";
import classes from "./index.module.css";

const starsConfig = [
  { id: "falling_star_0", w: "9vw", left: "3vw", delay: "0s", duration: "1.5s" },
  { id: "falling_star_1", w: "10vw", left: "10vw", delay: "-1s", duration: "1.8s" },
  { id: "falling_star_2", w: "15vw", left: "17vw", delay: "-1.5s", duration: "2.1s" },
  { id: "falling_star_3", w: "7vw", left: "25vw", delay: "-2s", duration: "1.4s" },
  { id: "falling_star_4", w: "11vw", left: "33vw", delay: "-2.5s", duration: "1.6s" },
  { id: "falling_star_5", w: "9vw", left: "67vw", delay: "-3s", duration: "2.3s" },
  { id: "falling_star_6", w: "14vw", left: "78vw", delay: "-3.5s", duration: "1.7s" },
  { id: "falling_star_7", w: "8vw", left: "82vw", delay: "-4s", duration: "2.0s" },
  { id: "falling_star_8", w: "6vw", left: "90vw", delay: "-4.5s", duration: "1.3s" },
  { id: "falling_star_9", w: "8vw", left: "96vw", delay: "-5s", duration: "1.9s" },
];

const FallingStars = () => {
  return (
    <Box className={classes.fallingStarsWrapper}>
      {starsConfig.map((star) => (
        <Image
          key={star.id}
          id={star.id}
          src="/images/four-point-star.svg"
          w={star.w}
          style={{
            // translate: star.translate,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
          className={classes.fallingStar}
        />
      ))}
    </Box>
  );
};

export default FallingStars;
