import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "semantic-ui-react";

import { addItem } from "./Actions/Action";
const AddMovie = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleContact = (e) => {
    e.preventDefault();
    const movie = {
      id: Math.random(),
      title,
      posterUrl,
      rate
    };
    dispatch(AddMovie(movie));
  };

  return (
    <Form>
      <Form.Field>
        <label> id</label>
        <input
          value={id}
          placeholder=" id"
          name="id"
          type="number"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label> Tiltle</label>
        <input
          value={title}
          placeholder=" Title"
          name="title"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>posterUrl</label>
        <input
          value={posterUrl}
          placeholder="posterUrl"
          name="posterUrl"
          type="character"
          onChange={(e) => {
            setPosterUrl(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Rate</label>
        <input
          value={rate}
          placeholder="rate"
          name="rate"
          type="number"
          onChange={(e) => {
            setRate(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>video</label>
        <input
          value={video}
          placeholder="video"
          name="video"
          type="cURL"
          onChange={(e) => {
            setVideo(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>description</label>
        <input
          value={description}
          placeholder="description"
          name="description"
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Form.Field>

      <Button type="submit" onClick={handleContact}>
        addItem
      </Button>
    </Form>
  );
};

export default AddMovie;
