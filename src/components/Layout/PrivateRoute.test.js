import React from "react";
import { unmountComponentAtNode } from "react-dom";
import * as auth from "../../services/auth";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from 'history'

import App from "../../App";

import "@testing-library/jest-dom/extend-expect";

jest.mock("../../services/auth");

let container = null;
beforeEach(() => {
  // Configura um elemento do DOM como alvo do teste
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container);
  container.remove();
  container = null;

  jest.clearAllMocks();
});

describe("Testing PrivateRoute", () => {
  it("should render dashboar when user is loged in", () => {
    const history = createMemoryHistory();

    auth.isAuthenticated.mockImplementation(() => true);

    history.push('/dashboard');

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      container
    );

    expect(container.innerHTML).toContain('Dashboard');
    expect(history.location.pathname).toBe("/dashboard");
  });

  it("should redirect to login when user is not logged in", () => {
    const history = createMemoryHistory();

    auth.isAuthenticated.mockImplementation(() => false);

    history.push('/dashboard');

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      container
    );

    expect(history.location.pathname).toBe("/login");
  });
});
