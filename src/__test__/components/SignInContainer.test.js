import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { SignInContainer } from "../../components/SignIn";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const { debug, getByTestId } = render(
        <SignInContainer onSubmit={onSubmit} />
      );
      fireEvent.changeText(getByTestId("usernameField"), "Nemo");
      fireEvent.changeText(getByTestId("passwordField"), "12345");
      fireEvent.press(getByTestId("submitButton"));
      //   debug();

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "Nemo",
          password: "12345",
        });
      });
    });
  });
});
