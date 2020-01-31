import React  from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { idText, isExportDeclaration } from "typescript";
import appReducer from "../reducers";
import Login from "./Login";

let container = null,
    state = null,
    dispatch = (x) =>{state=true};

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
        render(<Login dispatch={dispatch}/>, container)
    })
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    state = null;
  });

it("There are a form with 3 inputs and 2 labels", () => {
    const form = container.getElementsByTagName("form").length,
            inputs = container.getElementsByTagName("input").length,
            labels = container.getElementsByTagName("label").length;
    expect(form).toBe(1);
    expect(inputs).toBe(3);
    expect(labels).toBe(2);
})

it ("Dispatch function is exec when the form is submited", () => {
    //submit form
    container.getElementsByTagName("form")[0].dispatchEvent(new Event('submit'))

    expect(state).toBe(true);
})