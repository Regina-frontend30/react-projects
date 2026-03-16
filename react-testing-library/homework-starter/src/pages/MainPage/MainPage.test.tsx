import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./MainPage";

describe("MainPage", () => {
  test("matches snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});