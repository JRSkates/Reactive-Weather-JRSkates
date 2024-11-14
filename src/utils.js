import sunny from "./assets/Sunny.svg";
import rainy from "./assets/Rainy.svg";
import cloudy from "./assets/Cloudy.svg";
import partlyCloudy from "./assets/PartlyCloudy.svg";

export function getWeatherIcon(forecast) {
  if (forecast === "Sunny" || forecast === "Clear") {
    return sunny;
  } else if (forecast === "Showers" || forecast === "Flurries") {
    return rainy;
  } else if (forecast === "Cloudy") {
    return cloudy;
  } else if (forecast === "Partly cloudy" || ("Intermittent clouds")) {
    return partlyCloudy;
  } else {
    return sunny; // default icon if forecast doesn't match any case
  }
}
