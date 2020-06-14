import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { screen, fireEvent, render } from "@testing-library/react";
import { logout, getToken } from '../../services/auth';

import 'mutationobserver-shim';

import Login from "./index";
import axios from "axios";

import '@testing-library/jest-dom/extend-expect'

jest.mock('axios');
//global.MutationObserver = window.MutationObserver;

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

describe("Testing Login Component", () => {
  it("should have a Sign In button", () => {
    act(() => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
        container
      );
    });

    expect(screen.getByTestId("loginButton")).toHaveTextContent("Sign In");
  });

  it('should have an input to Username', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
        container
      );
    });

    expect(screen.getByTestId("usernamrOrEmail")).toBeInTheDocument();
  });

  it('should have an input to Password', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
        container
      );
    });

    expect(screen.getByTestId("password")).toBeInTheDocument();
  });

  it('should call api when submit and all form input is filled', async () => {
    
    const { getByTestId } = render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
        container
      );
    
    const username = getByTestId("usernamrOrEmail");
    const password = getByTestId("password");
    const loginButton = getByTestId("loginButton");

    fireEvent.input(username, {target: {value: "rosin1408@gmail.com"}});
    fireEvent.input(password, {target: {value: "12345678"}});
    
    const axiosSpy = jest.spyOn(axios, 'post');

    const resp = {data: {token: 'f6ds4f6df3d2f1145231222dds'}};
    // axios.get.mockResolvedValue(resp);
    axios.post.mockImplementation(() => Promise.resolve(resp))

    await act(async () => {
      await fireEvent.click(loginButton);
    });

    expect(username.value).toBe("rosin1408@gmail.com");
    expect(password.value).toBe("12345678");

    expect(axiosSpy).toHaveBeenCalled();
  });

  it('should not call api when submit and all form input is not filled', async () => {
    
    const { getByTestId } = render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
        container
      );

    const loginButton = getByTestId("loginButton");
    
    const axiosSpy = jest.spyOn(axios, 'post');

    await act(async () => {
      await fireEvent.click(loginButton);
    });

    expect(axiosSpy).not.toHaveBeenCalled();
  });

  it('should show modal when api returns bad credentials', async () => {
    
    const { getByTestId } = render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
        container
      );
    
    const username = getByTestId("usernamrOrEmail");
    const password = getByTestId("password");
    const loginButton = getByTestId("loginButton");

    fireEvent.input(username, {target: {value: "rosin1408@gmail.com"}});
    fireEvent.input(password, {target: {value: "12345678"}});
    
    const axiosSpy = jest.spyOn(axios, 'post');

    const resp = {data: {token: 'f6ds4f6df3d2f1145231222dds'}};
    // axios.get.mockResolvedValue(resp);
    axios.post.mockImplementation(() => Promise.resolve(resp))

    await act(async () => {
      await fireEvent.click(loginButton);
    });

    expect(username.value).toBe("rosin1408@gmail.com");
    expect(password.value).toBe("12345678");

    expect(axiosSpy).toHaveBeenCalled()
  });
});
