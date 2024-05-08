package cz.tul.weatherService;



import cz.tul.weather.Weather;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class WeatherService{

    @Value("${api.weather.key}")
    private String apiKey;

    private static final String WEATHER_URL = "http://api.weatherapi.com/v1/current.json";

    @GetMapping("/weather")
    public Weather getWeather(@RequestParam String city) {
        String url = String.format("%s?key=%s&q=%s", WEATHER_URL, apiKey, city);
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, Weather.class);
    }
}

