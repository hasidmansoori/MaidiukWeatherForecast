package com.sp.weather.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sp.weather.dtos.WeatherDTO;
import com.sp.weather.entity.Users;
import com.sp.weather.service.WeatherService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class WeatherControllerTest {

   /* @Mock
    private WeatherService weatherService;

    @InjectMocks
    private WeatherController weatherController;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(weatherController).build();
    }

    @Test
    void getCardInfo() throws Exception {
        // Arrange
        Users user = new Users("1", "John Doe", "Favorites");
        when(weatherService.getCardInfo(eq("1"))).thenReturn(user);

        // Act & Assert
        mockMvc.perform(get("/api/weather/get-card")
                        .param("card", "1"))
                .andExpect(status().isOk())
                .andExpect(content().json("{\"card\":\"1\",\"name\":\"John Doe\",\"favourites\":\"Favorites\"}"));
    }

    @Test
    void saveCard() throws Exception {
        // Arrange
        Users user = new Users("1", "John Doe", "Favorites");
        when(weatherService.saveCard(any(Users.class))).thenReturn(user);

        // Convert user object to JSON string
        ObjectMapper objectMapper = new ObjectMapper();
        String userJson = objectMapper.writeValueAsString(user);

        // Act & Assert
        mockMvc.perform(post("/api/weather/add-card")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(userJson))
                .andExpect(status().isOk())
                .andExpect(content().json(userJson));
    }

    @Test
    void getWeatherInfo() throws Exception {
        // Arrange
        WeatherDTO weather1 = new WeatherDTO("City1", "Country1", "20", "Sunny", "icon1", "1");
        WeatherDTO weather2 = new WeatherDTO("City1", "Country1", "25", "Cloudy", "icon2", "1");
        List<WeatherDTO> weatherList = Arrays.asList(weather1, weather2);
        when(weatherService.getWeatherInfo(eq("City1"))).thenReturn(weatherList);

        // Convert weatherList object to JSON string
        ObjectMapper objectMapper = new ObjectMapper();
        String weatherListJson = objectMapper.writeValueAsString(weatherList);

        // Act & Assert
        mockMvc.perform(get("/api/weather/get-weather")
                        .param("city", "City1"))
                .andExpect(status().isOk())
                .andExpect(content().json(weatherListJson));
    }*/
}
