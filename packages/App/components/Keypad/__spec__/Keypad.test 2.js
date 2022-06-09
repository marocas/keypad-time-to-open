import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Keypad from "..";

const customGrid = [ 9, 2, 3, 8, 5, 7, 6, 1, 4 ]
const passCode = [ 4, 2, 3, 6, 9, 2 ]


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Keypad', () => {
  it("renders with or without a name", () => {
    act(() => {
      render(<Keypad />, container)
    });
    expect(container).toMatchSnapshot()
  });

  it('is an array and not empty', () => {
    expect(Array.isArray(customGrid)).toBeTruthy()
    expect(customGrid.length > 0).toBeTruthy()
  })

})

describe('Code', () => {
  it('is an array and not empty', () => {
    expect(Array.isArray(passCode)).toBeTruthy()
    expect(customGrid.length > 0).toBeTruthy()
  })
})
