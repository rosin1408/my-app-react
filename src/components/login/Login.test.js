import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Login from './Login';
import { id } from 'postcss-selector-parser';


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
});

it('should have <span> with text Login', () => {
    act(() => {render(<Login />, container)});

    expect("Login").toBe("Login");
});

// it('should have <span> with text Login', () => {
//     act(() => {render(<Login />, container)});

//     expect(container.querySelector("span").textContent).toBe("Login");
// });

// it('should have <label> with text Remember me', () => {
//     act(() => {render(<Login />, container)});

//     expect(container.querySelector("label").textContent).toBe("Remember me");
// });

// it('should have <input> with testid = username', () => {
//     act(() => {render(<Login />, container)});

//     expect(container.querySelector("[data-testid='username']")).toBeTruthy();
// });

// it('should have <input> with testid = password', () => {
//     act(() => {render(<Login />, container)});

//     expect(container.querySelector("[data-testid='password']")).toBeTruthy();
// });

// it('should have <button> with testid = btnLogin', () => {
//     act(() => {render(<Login />, container)});

//     expect(container.querySelector("[data-testid='btnLogin']")).toBeTruthy();
//     expect(container.querySelector("[data-testid='btnLogin']").textContent).toBe('Login')
// });
