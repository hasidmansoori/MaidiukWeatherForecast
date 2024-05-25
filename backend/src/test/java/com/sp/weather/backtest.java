package com.sp.weather;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.sp.weather.configuration.*;
import com.sp.weather.controller.*;
import com.sp.weather.dtos.WeatherDTO;
import com.sp.weather.entity.*;
import com.sp.weather.repository.*;
import com.sp.weather.service.*;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

class WeatherApplicationTests {

    @Mock
    private UserRepository repository;

    @InjectMocks
    private WeatherService service;

    @Mock
    private WeatherService weatherService;

    @InjectMocks
    private WeatherController controller;

    @Mock
    private AppProperties appProperties;

    @InjectMocks
    private WebSecurityConfig config;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    // WeatherService Tests
    @Test
    void testGetCardInfo() {
        Users user = new Users();
        when(repository.findById("1")).thenReturn(Optional.of(user));

        Users result = service.getCardInfo("1");

        assertNotNull(result);
        assertEquals(user, result);
    }

    @Test
    void testSaveCard() {
        Users user = new Users();
        when(repository.save(user)).thenReturn(user);

        Users result = service.saveCard(user);

        assertNotNull(result);
        assertEquals(user, result);
    }


    // WeatherController Tests
    @Test
    void testControllerGetCardInfo() {
        Users user = new Users();
        when(weatherService.getCardInfo("1")).thenReturn(user);

        Users result = controller.getCardInfo("1");

        assertNotNull(result);
        assertEquals(user, result);
    }

    @Test
    void testControllerSaveCard() {
        Users user = new Users();
        when(weatherService.saveCard(user)).thenReturn(user);

        Users result = controller.saveCard(user);

        assertNotNull(result);
        assertEquals(user, result);
    }









    @Test
    void testControllerGetCardInfoNotFound() {
        when(weatherService.getCardInfo("1")).thenReturn(null);

        Users result = controller.getCardInfo("1");

        assertNull(result);
    }

    @Test
    void testSaveCardThrowsException() {
        Users user = new Users();
        when(repository.save(user)).thenThrow(new RuntimeException("Save failed"));

        Exception exception = assertThrows(RuntimeException.class, () -> {
            service.saveCard(user);
        });

        assertEquals("Save failed", exception.getMessage());
    }

    @Test
    void testControllerSaveCardThrowsException() {
        Users user = new Users();
        when(weatherService.saveCard(user)).thenThrow(new RuntimeException("Save failed"));

        Exception exception = assertThrows(RuntimeException.class, () -> {
            controller.saveCard(user);
        });

        assertEquals("Save failed", exception.getMessage());
    }
    
}
