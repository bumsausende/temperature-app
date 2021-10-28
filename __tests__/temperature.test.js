import {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
} from "../utils/temperature";

describe("convertCelsiusToFahrenheit", () => {
  it("converts 100°C correctly", () => {
    expect(convertCelsiusToFahrenheit(100)).toEqual(212);
  });

  it("converts 0°C correctly to 32", () => {
    expect(convertCelsiusToFahrenheit(0)).toEqual(32);
  });

  // TODO: create a second test that checks if
  // convertCelsiusToFahrenheit
});

describe("convertFahrenheitToCelsius", () => {
  it("converts 212°F correctly", () => {
    expect(convertFahrenheitToCelsius(212)).toEqual(100);
  });
  it("converts 32°F to 0°F", () => {
    expect(convertFahrenheitToCelsius(32)).toEqual(0);
  });
});
// TODO: create a second describe block with two tests
// for convertFahrenheitToCelsius
