package com.dimasblack.remkuzovchasti.repo;

import com.dimasblack.remkuzovchasti.model.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FileRepo extends JpaRepository<FileEntity, String> {
}
