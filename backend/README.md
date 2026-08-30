# Backend Setup

## Project Stack

* **Backend:** Java 21 + Spring Boot 4.0.8
* **API:** REST API
* **Database:** PostgreSQL 18.3
* **Frontend:** React + Vite
* **Monitoring:** Prometheus + Grafana
* **Platform:** GitHub + Docker
* **Build Tool:** Maven 3.9.16

## Backend Setup Completed

* Created `backend/` project directory.
* Created `api/` directory.
* Generated the Spring Boot 4.0.8 Maven project.
* Added:

  * Spring Web MVC
  * Spring Data JPA
  * Spring Security
  * Validation
  * PostgreSQL Driver
* Java 21 installed and working.
* Created the first REST endpoint:

  * `GET /api/health`
* Confirmed Spring Boot starts successfully on port `8081` for development testing.

## PostgreSQL

PostgreSQL is installed and running.

* Version: **18.3**
* Local port: **5433**

The database has **not been configured for the backend yet** because the Database team has not completed their setup.

## Current Status

```text
Backend project setup     ✅
Spring Boot               ✅
Java 21                   ✅
REST API controller       ✅
Health endpoint           ✅
PostgreSQL connection     ⏸️ Waiting for Database team
Security configuration    ⏸️ Next step
```

## Current API Test

Endpoint:

```text
GET http://localhost:8081/api/health
```

Current response:

```text
401 Unauthorized
```

This happens because Spring Security currently protects the endpoint.

## Next Step

Create `SecurityConfig.java` to allow:

```text
/api/health
```

without authentication.

**Important:** This step has NOT been done yet.
