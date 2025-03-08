import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import UserContext from "../../utils/UserContext";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

it("should render Header component with a login button", () => {
  const mockSetUserName = jest.fn(); // Mock function for setUserName
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Test User", setUserName: mockSetUserName }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );

//   if there is multiple buttons we can find specific button by passing name  
  const loginButton = screen.getByRole("button", {name:"Login"});

  expect(loginButton).toBeInTheDocument();

});
it("should render Header component with a cart is item 0", () => {
    const mockSetUserName = jest.fn(); // Mock function for setUserName
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContext.Provider value={{ loggedInUser: "Test User", setUserName: mockSetUserName }}>
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );
  
   
    const cartItems = screen.getByText("CART (0 item)");

    expect(cartItems).toBeInTheDocument();


});
it("should render Header component with a cart", () => {
    const mockSetUserName = jest.fn(); // Mock function for setUserName
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContext.Provider value={{ loggedInUser: "Test User", setUserName: mockSetUserName }}>
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );
  
   //here we use regex as the searching text 
    const cart = screen.getByText(/CART/);

    expect(cart).toBeInTheDocument();


});
it("should render login and logout button onclick", () => {
    const mockSetUserName = jest.fn(); // Mock function for setUserName
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContext.Provider value={{ loggedInUser: "Test User", setUserName: mockSetUserName }}>
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );
  
  
    const loginButton = screen.getByRole("button", {name:"Login"});
    
    fireEvent.click(loginButton);
    
    const logoutButton = screen.getByRole("button", {name:"Logout"});
    
    expect(logoutButton).toBeInTheDocument();


});
