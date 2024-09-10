import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifGridItem";

describe("Test component <GifItem>", () => {
  const title = "Paula";
  const url = "https://one-punch.com/paula.jpg";

  test("should do match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the url image and the correct alt", () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("should show the title in the component", () => {
    render(<GifItem title={title} url={url} />);
    expext(screen.getByText(title)).toBeTruthy();
  });
});
