package cz.tul.weatherController;

import cz.tul.weather.Weather;
import cz.tul.weatherService.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @GetMapping("/weather/{city}")
    public Weather getWeatherForCity(@PathVariable String city) {
        return weatherService.getWeather(city);
    }
}
