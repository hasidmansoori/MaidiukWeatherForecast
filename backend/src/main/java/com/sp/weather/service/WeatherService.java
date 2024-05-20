package com.sp.weather.service;

import com.sp.weather.dtos.WeatherDTO;
import com.sp.weather.entity.Users;
import com.sp.weather.repository.UserRepository;
import jakarta.persistence.criteria.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
public class WeatherService
{
    @Autowired
    UserRepository repository;


    public Users getCardInfo(String card) {
        Optional<Users> user = this.repository.findById(card);
        return user.get();
    }

    public Users saveCard(Users user) {
        user = repository.save(user);
        return user;
    }

    public List<WeatherDTO> getWeatherInfo(String city) {
        List<WeatherDTO> listWeather = new ArrayList<>();
        listWeather.add(new WeatherDTO(city,"Berlin","35","Clear.","",""));
        return listWeather;
    }
}