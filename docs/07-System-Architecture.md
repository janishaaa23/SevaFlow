# System Architecture

**Project Name:** SevaFlow

**Version:** 1.0

**Author:** Janisha Narang

**Date:** July 2026

---

# 1. Introduction

This document describes the overall architecture of SevaFlow. It explains how different components of the system interact with each other, how data flows through the application, and how the technology stack is organized.

The architecture follows a modular client-server design, ensuring scalability, maintainability, and ease of future expansion.

---

# 2. Architecture Overview

SevaFlow follows a modern three-tier architecture consisting of:

1. Presentation Layer
2. Application Layer
3. Data Layer

## High-Level Architecture Diagram

```mermaid
flowchart TD

Citizen([Citizen])

Frontend["React + Vite<br/>Tailwind CSS<br/>ShadCN UI"]

Backend["Node.js + Express.js"]

Auth["Authentication Module"]
Appointment["Appointment Module"]
Queue["Queue Module"]
Documents["Document Module"]
AI["AI Module"]
Notification["Notification Module"]

Mongo[("MongoDB Atlas")]
Cloud["Cloudinary"]
Socket["Socket.IO"]

Citizen --> Frontend
Frontend --> Backend

Backend --> Auth
Backend --> Appointment
Backend --> Queue
Backend --> Documents
Backend --> AI
Backend --> Notification

Auth --> Mongo
Appointment --> Mongo
Queue --> Mongo
Documents --> Mongo

Documents --> Cloud
Queue --> Socket

Socket --> Frontend
```

---

# 3. Technology Stack

| Layer | Technology |
|--------|------------|
| Frontend | React (Vite) |
| UI | Tailwind CSS |
| Components | ShadCN UI |
| Backend | Node.js |
| Framework | Express.js |
| Database | MongoDB Atlas |
| Authentication | JWT + Refresh Tokens |
| Password Security | bcrypt |
| File Storage | Cloudinary |
| Real-Time | Socket.IO |
| Charts | Recharts |

## Technology Architecture Diagram

```mermaid
graph LR

A["React + Vite"] --> D["Express.js"]

B["Tailwind CSS"] --> A
C["ShadCN UI"] --> A

D --> E["Node.js Runtime"]
D --> F[("MongoDB Atlas")]
D --> G["Cloudinary"]
D --> H["Socket.IO"]
D --> I["JWT Authentication"]
D --> J["AI Services"]
```

---

# 4. High-Level System Flow

The following diagram illustrates how a request travels through the SevaFlow platform.

## Request Flow Diagram

```mermaid
sequenceDiagram

participant Citizen
participant Frontend
participant Backend
participant Database

Citizen->>Frontend: Login / Action
Frontend->>Backend: REST API Request
Backend->>Database: Read / Write Data
Database-->>Backend: Response
Backend-->>Frontend: JSON Response
Frontend-->>Citizen: Updated UI
```

---

# 5. Module Architecture

The system consists of independent and reusable modules.

- Authentication Module
- User Management Module
- Government Services Module
- Office Management Module
- Appointment Module
- Queue Management Module
- Document Management Module
- Notification Module
- AI Module
- Analytics Module
- Administration Module

Each module communicates through secured REST APIs and follows a modular architecture.

## Module Dependency Diagram

```mermaid
graph TD

Authentication["Authentication"]
Users["User Management"]
Appointments["Appointments"]
Queue["Queue"]
Documents["Documents"]
Notifications["Notifications"]
AI["AI"]
Analytics["Analytics"]

Authentication --> Users
Users --> Appointments
Appointments --> Queue
Queue --> Notifications
Documents --> AI
Queue --> Analytics
```

---

# 6. Authentication Flow

Authentication is implemented using JWT Access Tokens and Refresh Tokens.

```mermaid
flowchart TD

A[User Login]
B[Validate Credentials]
C[Generate Access Token]
D[Generate Refresh Token]
E[Store Refresh Token]
F[Return Tokens]
G[Access Protected Routes]
H[Refresh Access Token]

A --> B
B --> C
C --> D
D --> E
E --> F
F --> G
G --> H
```

---

# 7. Queue Management Flow

The Queue Management Engine handles appointments, token generation, and real-time updates.

```mermaid
flowchart TD

A[Book Appointment]
B[Generate Queue Token]
C[Join Queue]
D[Real-Time Updates]
E[Officer Calls Citizen]
F[Service Completed]
G[Queue Updated]

A --> B
B --> C
C --> D
D --> E
E --> F
F --> G
```

## Queue Lifecycle

```mermaid
stateDiagram-v2

[*] --> AppointmentBooked
AppointmentBooked --> QueueJoined
QueueJoined --> Waiting
Waiting --> Called
Called --> InService
InService --> Completed
Completed --> [*]
```

---

# 8. Document Flow

The Document Management module allows citizens to upload required documents before visiting the government office. Uploaded documents are securely stored in Cloudinary and can be verified by officers after AI-based pre-validation.

```mermaid
flowchart TD

A[Citizen Uploads Document]
B[Upload to Cloudinary]
C[Store Metadata in MongoDB]
D[AI Document Readiness Check]
E{Document Valid?}
F[Officer Verification]
G[Citizen Re-upload]

A --> B
B --> C
C --> D
D --> E
E -- Yes --> F
E -- No --> G
G --> A
```

---

# 9. Notification Flow

The Notification Module ensures that citizens remain informed throughout their service journey using Socket.IO for real-time updates.

```mermaid
sequenceDiagram

participant Citizen
participant Frontend
participant Backend
participant Socket
participant Officer

Officer->>Backend: Update Queue
Backend->>Socket: Emit Queue Event
Socket-->>Frontend: Live Queue Update
Frontend-->>Citizen: Show Notification
```

---

# 10. AI Service Flow

SevaFlow integrates AI services to improve document verification, answer citizen queries, and provide intelligent recommendations.

```mermaid
flowchart TD

A[Citizen Request]
B[AI Processing]
C{Request Type}

D[Document Analysis]
E[AI Chat Assistant]
F[Queue Prediction]
G[Best Visiting Time]
H[Response Returned]

A --> B
B --> C

C --> D
C --> E
C --> F
C --> G

D --> H
E --> H
F --> H
G --> H
```

## AI Processing Flow

```mermaid
flowchart LR

A[Citizen Uploads Document]
B[Cloudinary Storage]
C[AI Validation]
D{Ready?}
E[Officer Verification]
F[Citizen Upload Again]

A --> B
B --> C
C --> D
D -- Yes --> E
D -- No --> F
```

---

# 11. Database Communication

Every request follows a layered architecture to keep the codebase modular and maintainable.

```mermaid
flowchart LR

A[React Frontend]
B[Express Route]
C[Controller]
D[Service Layer]
E[(MongoDB Atlas)]

A --> B
B --> C
C --> D
D --> E
E --> D
D --> C
C --> B
B --> A
```

---

# 12. Security Architecture

Security is implemented at multiple levels of the application.

- JWT Authentication
- Refresh Tokens
- bcrypt Password Hashing
- Protected APIs
- Role-Based Access Control
- Secure File Upload
- Input Validation
- Rate Limiting
- Helmet Middleware
- CORS Protection

## Security Flow

```mermaid
flowchart TD

A[Login Request]
B[Validate Credentials]
C[Generate JWT]
D[Access Protected Route]
E{Token Valid?}
F[Allow Access]
G[Return Unauthorized]

A --> B
B --> C
C --> D
D --> E
E -- Yes --> F
E -- No --> G
```

---

# 13. Scalability Considerations

The architecture is designed to support future expansion without major structural changes.

- Multiple Government Departments
- Multiple Offices
- Thousands of Concurrent Users
- Cloud Deployment
- Horizontal Backend Scaling
- AI Service Expansion
- Mobile Application Support
- Future Microservices Migration

---

# 14. Future Expansion

The modular architecture allows seamless integration of future technologies.

- React Native Mobile Application
- DigiLocker Integration
- Government APIs
- OCR-Based Document Verification
- AI Recommendation Engine
- Digital Payments
- WhatsApp Notifications
- SMS Notifications
- Voice Assistant
- Multilingual Support

## Deployment Architecture

```mermaid
flowchart TD

User[Citizen]

Browser[Web Browser]

Frontend[React Application]

Backend[Express API Server]

Mongo[(MongoDB Atlas)]

Cloudinary[Cloudinary]

AI[AI Services]

Socket[Socket.IO Server]

User --> Browser
Browser --> Frontend
Frontend --> Backend

Backend --> Mongo
Backend --> Cloudinary
Backend --> AI
Backend --> Socket

Socket --> Frontend
```

---

# 15. Conclusion

The architecture of **SevaFlow** follows a modular, scalable, and secure client-server model that separates presentation, business logic, and data storage into independent layers.

By integrating **React**, **Node.js**, **Express.js**, **MongoDB Atlas**, **Socket.IO**, **Cloudinary**, and **AI-powered services**, the platform provides a robust foundation for digital government service delivery.

The modular design simplifies development, testing, deployment, and future enhancements while ensuring maintainability and scalability as the platform grows to support additional government departments, mobile applications, and intelligent automation.