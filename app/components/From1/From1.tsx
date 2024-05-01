import React from "react";
import { SubmitButton } from "./SubmitButton";
import { submit } from "./actions";

type Props = {};

export default function From1({}: Props) {
  return (
    <form action={submit}>
      <input type="text" name="field-name" />
      <SubmitButton />
    </form>
  );
}
