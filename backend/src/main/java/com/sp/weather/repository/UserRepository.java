package com.sp.weather.repository;
import com.sp.weather.entity.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository  extends CrudRepository<Users, String> {
}