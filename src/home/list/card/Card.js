import React from "react";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";

export default function DogCard({ name, url }) {
  return (
    <Card
      sx={{
        width: 220,
        my: "10px",
        mx: "7px",
        color: "black",
      }}
    >
      <Typography
        component="div"
        className="card"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img className="card-img" src={url} alt="dog img" width="100%" />
        <Typography component="body2">
          {name ? name.name : "Je souhaite rester anonyme"}
        </Typography>
      </Typography>
    </Card>
  );
}
