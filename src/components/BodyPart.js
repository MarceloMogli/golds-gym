import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/body-bodypart.png";
import BackIcon from "../assets/icons/Back-bodypart.png";
import ChestIcon from "../assets/icons/chest-bodypart.png";
import ArmIcon from "../assets/icons/arm-bodypart.png";
import LegIcon from "../assets/icons/leg-bodypart.png";
import HeartIcon from "../assets/icons/cardio-bodypart.png";
import ShoulderIcon from "../assets/icons/shoulder-bodypart.png";
import NeckIcon from "../assets/icons/neck-bodypart.png";
import WaistIcon from "../assets/icons/waist-bodypart.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid yellow" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      {item === "back" ? 
        (<img
          src={BackIcon}
          alt="Dumbbell"
          className="body-part-icon"
          style={{ width: "80px", height: "80px" }}
        />)
     : item === 'chest' ? (<img
        src={ChestIcon}
        alt="Dumbbell"
        className="body-part-icon"
        style={{ width: "80px", height: "80px" }}
      />) : item=== "cardio" ? (<img
        src={HeartIcon}
        alt="Dumbbell"
        className="body-part-icon"
        style={{ width: "80px", height: "80px" }}
      />) : item==="lower arms" || item ==="upper arms" ? (<img
        src={ArmIcon}
        alt="Dumbbell"
        className="body-part-icon"
        style={{ width: "80px", height: "80px" }}
      />) : item === "lower legs" || item === "upper legs" ? (<img
        src={LegIcon}
        alt="Dumbbell"
        className="body-part-icon"
        style={{ width: "80px", height: "80px" }}
      />): item === "neck" ? (<img
        src={NeckIcon}
        alt="Dumbbell"
        className="body-part-icon"
        style={{ width: "80px", height: "80px" }}
      />) : item=== "shoulders" ? (<img
        src={ShoulderIcon}
        alt="Dumbbell"
        className="body-part-icon"
        style={{ width: "80px", height: "80px" }}
      />) : item=== "waist" ? (<img
        src={WaistIcon}
        alt="Dumbbell"
        className="body-part-icon"
        style={{ width: "80px", height: "80px" }}
      />):(<img
        src={Icon}
        alt="Dumbbell"
        className="body-part-icon"
        style={{ width: "80px", height: "80px" }}
      />)}
      
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="black"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
