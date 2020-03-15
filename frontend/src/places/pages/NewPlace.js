import React from "react";
import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";

const NewPlace = () => {
  const { isLoading, sendRequest, error, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false
      },
      description: {
        value: "",
        isValid: false
      },
      address: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const placeSubmitHandler = event => {
    event.preventDefault();
    sendRequest("http://localhost:5000/api/places", "POST", JSON.stringify({
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
      address: formState.inputs.address.value,
      creator: 
    }));
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText={"please enter valid title"}
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText={"please enter description of at least 5 characters"}
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="textarea"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText={"please enter valid address"}
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
