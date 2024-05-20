package com.sp.weather.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.io.Serializable;

@Entity
@Table(name = "user")
public class Users implements Serializable {
  @Id
  private String card;

  @Size(max = 200)
  private String name;

  @Size(max = 1000)
  private String favourites;


  public Users() {}

  public Users(String card, String name, String favourites) {
    this.name = card;
    this.name = name;
    this.favourites = favourites;
  }

  public String getCard() {
    return card;
  }

  public void setCard(String card) {
    this.card = card;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getFavourites() {
    return favourites;
  }

  public void setFavourites(String favourites) {
    this.favourites = favourites;
  }
}