package com.dimasblack.remkuzovchasti.repo;

import com.dimasblack.remkuzovchasti.model.Email;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailRepo extends JpaRepository<Email, Long> {
}
