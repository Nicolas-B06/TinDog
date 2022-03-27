import React from "react";
import DogCard from "./card/Card";
import Box from "@mui/material/Box";

export default function List({ dogs }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {dogs &&
          dogs.map((dog) => {
            return (
              <DogCard
                key={dog.id}
                name={dog.breeds[0] ? dog.breeds[0] : null}
                url={dog.url}
              ></DogCard>
            );
          })}
      </Box>

      {/* {dogs && <img src={dogs.url} alt="dog img" style={{width:"500px"}}/>} */}
    </>
  );
}
