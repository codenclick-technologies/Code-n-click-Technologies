# Code-n-Click ERP System Architecture

This document visualizes the high-level architecture of the Code-n-Click ERP system, illustrating the flow of data between the Client, Server, and Database.

```mermaid
graph TD
    %% Styling
    classDef client fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
    classDef server fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
    classDef db fill:#fff3e0,stroke:#ef6c00,stroke-width:2px;
    classDef external fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px;

    subgraph Client_Side [Frontend (Client)]
        direction TB
        Browser[Web Browser]:::client
        ReactApp[React.js Application]:::client
        AuthContext[Auth Context Provider]:::client
        API_Service[Axios API Service]:::client
        
        Browser --> ReactApp
        ReactApp --> AuthContext
        ReactApp --> API_Service
    end

    subgraph Server_Side [Backend (Server)]
        direction TB
        NestServer[NestJS Server]:::server
        
        subgraph Modules
            AuthMod[Auth Module]:::server
            UserMod[Users Module]:::server
            EmpMod[Employees Module]:::server
            PayMod[Payroll Module]:::server
            RecMod[Recruitment Module]:::server
            TaskMod[Tasks Module]:::server
            ResMod[Resources Module]:::server
        end
        
        Guards[JWT Auth Guards]:::server
        Interceptors[Response Interceptors]:::server
        
        NestServer --> Guards
        Guards --> Modules
        Modules --> Interceptors
    end

    subgraph Database_Layer [Data Persistence]
        direction TB
        Prisma[Prisma ORM]:::db
        Postgres[(PostgreSQL Database)]:::db
        
        Prisma <--> Postgres
    end

    %% Connections
    API_Service -- HTTP/REST Requests (JSON) --> NestServer
    Modules -- Database Queries --> Prisma

    %% Data Flow
    User((User)) --> Browser
    
    %% Detailed Relationships
    AuthMod -.-> UserMod
    EmpMod -.-> UserMod
    PayMod -.-> EmpMod
    TaskMod -.-> EmpMod
```

## Component Description

### 1. Frontend (Client)
*   **React.js**: The core UI library.
*   **Vite**: Build tool for fast development.
*   **Tailwind CSS**: Utility-first styling framework.
*   **Context API**: Manages global state like User Authentication.
*   **Axios**: Handles HTTP requests to the backend.

### 2. Backend (Server)
*   **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
*   **Modules**: The application is modularized by feature (Auth, Users, Employees, etc.).
*   **Guards**: Protect routes using JWT strategies to ensure only authorized users access specific endpoints.

### 3. Database
*   **PostgreSQL**: The primary relational database.
*   **Prisma ORM**: Provides a type-safe interface to interact with the database, handling schema migrations and queries.
