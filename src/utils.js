import sunny from "./assets/Sunny.svg";
import rainy from "./assets/Rainy.svg";
import cloudy from "./assets/Cloudy.svg";
import partlyCloudy from "./assets/PartlyCloudy.svg";

export function getWeatherIcon(forecast) {
  switch (forecast) {
    case "Sunny":
      return sunny;
    case "Rainy":
      return rainy;
    case "Cloudy":
      return cloudy;
    case "Partly Cloudy":
      return partlyCloudy;
    default:
      return sunny; // default icon if forecast doesn't match any case
  }
}
