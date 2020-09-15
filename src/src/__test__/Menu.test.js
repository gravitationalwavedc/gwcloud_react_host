import React from "react";
import Menu from "../components/Menu";
import renderer from "react-test-renderer";


jest.mock('found', () => ({
    Link: component => <a {...component}>{component.children}</a>
}))

test("menu displays correctly when logged out", () => {
  const menu = renderer
    .create(<Menu />)
    .toJSON();
  expect(menu).toMatchSnapshot();
});

test("menu displays correctly when logged in", () => {
  const menu = renderer
    .create(<Menu name={"Buffy Summers"} />)
    .toJSON();
  expect(menu).toMatchSnapshot();
});
