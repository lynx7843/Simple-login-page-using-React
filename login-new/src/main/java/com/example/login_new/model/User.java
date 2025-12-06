package com.example.login_new.model;

import jakarta.persistence.*;
import lombok.Data; // For getter and setter automation

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
}
