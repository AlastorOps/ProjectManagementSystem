# Backend

Spring Boot REST API for the Task & Project Management System.

## Stack

- Java 21
- Spring Boot 4.0.8 (Web MVC, Data JPA, Security, Validation)
- PostgreSQL (driver included; connection not yet configured)
- Maven 3.9.16

## Getting Started

```bash
./mvnw spring-boot:run
```

Runs on `http://localhost:8081` by default (port set during dev testing).

Run tests:

```bash
./mvnw test
```

## Project Structure

```
src/main/java/backend/
  BackendApplication.java   # entry point
  controller/                # REST controllers
src/main/resources/
  application.properties     # config
src/test/java/backend/       # tests
```

## API Endpoints

| Method | Path | Description | Status |
|---|---|---|---|
| GET | `/api/health` | Health check | Implemented, currently blocked by default Spring Security (returns `401`) |

## Current Status

```text
Backend project setup     done
Spring Boot                done
Java 21                    done
REST controller            done
Health endpoint            done
Security configuration     pending — SecurityConfig.java needed to permit /api/health
PostgreSQL connection      pending — waiting on database/ schema
```

Spring Security is on the classpath but has no custom configuration yet, so all endpoints (including `/api/health`) are locked behind the default generated-password login. The next step is a `SecurityConfig` that permits `/api/health` without authentication and lays the groundwork for real auth.

Database connection isn't wired up yet — see [database/README.md](../database/README.md) once the schema lands.

## Contributing

See the root [README](../README.md) and [Contributing.md](../Contributing.md) for branch naming (`backend/<task>`) and PR workflow.
