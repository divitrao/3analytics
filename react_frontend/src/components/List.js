import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "@mui/material";

export default function PinnedSubheaderList({ linkList }) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {linkList.map((item) => (
        <ListItem key={`item--${item.id}`}>
          <Link href={item.links}>{item.links}</Link>
        </ListItem>
      ))}
    </List>
  );
}
