import { it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ChatPage from "../components/Chat/ChatPage";


describe("ChatPage.js", () => {
    it("Check if the App render very well", () => {
      //render our App properly
      render(<ChatPage />);
      screen.debug();
    });
  });