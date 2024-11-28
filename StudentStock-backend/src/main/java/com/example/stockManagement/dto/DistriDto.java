package com.example.stockManagement.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class DistriDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // This will be the primary key
    private String studentName;
    private String gender;  // "boy" or "girl"
    private Integer shirtSize;
    private Integer pantSize;
}
