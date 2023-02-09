import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = (targetMuscleExercises, equipmentExercises) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" margin='30px' color='black'>
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> Exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.targetMuscleExercises.length  ? 
          <HorizontalScrollBar data={targetMuscleExercises.targetMuscleExercises} />
         : 
          <Loader />
        }
      </Stack>
      <Typography variant="h3" margin='30px' color='black'>
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>equipment</span> Exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.equipmentExercises.length ? 
          <HorizontalScrollBar data={targetMuscleExercises.equipmentExercises} />
         : 
          <Loader />
        }
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
