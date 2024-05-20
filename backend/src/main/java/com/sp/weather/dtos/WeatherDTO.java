package com.sp.weather.dtos;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.experimental.Accessors;
import lombok.experimental.FieldNameConstants;

import java.io.Serializable;

@Accessors(chain = true)
@FieldNameConstants
@Schema(
        name = "WeatherDTO",
        description = "It holds complete information of a User in the system"
)
public class WeatherDTO implements Serializable {
    private String locationName;
    private String countryName;
    private String temperature;
    private String windSpeed;
    private String feelsLike;
    private String conditionText;
    private String imageCode;
    private String isDay;

    public WeatherDTO(String locationName, String countryName, String temperature, String conditionText, String imageCode, String isDay) {
        this.locationName = locationName;
        this.countryName = countryName;
        this.temperature = temperature;
        this.conditionText = conditionText;
        this.imageCode = imageCode;
        this.isDay = isDay;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getTemperature() {
        return temperature;
    }

    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    public String getConditionText() {
        return conditionText;
    }

    public void setConditionText(String conditionText) {
        this.conditionText = conditionText;
    }

    public String getImageCode() {
        return imageCode;
    }

    public void setImageCode(String imageCode) {
        this.imageCode = imageCode;
    }

    public String getIsDay() {
        return isDay;
    }

    public void setIsDay(String isDay) {
        this.isDay = isDay;
    }
}
