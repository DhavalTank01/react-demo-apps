import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Button from "@material-ui/core/Button";

const NoteCard = (props) => {
  const deleteEvent = () => {
    props.passdeleteEvent(props.id);
  };
  return (
    <>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.Content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className="Deletebtn" onClick={deleteEvent}>
            <DeleteForeverIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default NoteCard;
