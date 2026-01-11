# Chip Inventory and Tracking System

## Overview
The Chip Inventory and Tracking System is a web-based application designed to manage and track semiconductor components such as wafers and dies within a fabrication facility.  
The system automates inventory handling, lot-level traceability, transfer workflows, and audit logging to reduce manual errors and improve operational transparency.

This project is developed as part of the **Software Engineering Lab** and follows a **phase-wise Software Development Life Cycle (SDLC)**.

---

## Objectives
- Automate inventory tracking of semiconductor components
- Maintain lot-level traceability across fabrication stages
- Support controlled transfer workflows with approval
- Provide audit logs for compliance and inspection
- Demonstrate proper SDLC execution with documentation

---

## Features
- Component registration
- Lot and inventory management
- Inventory status dashboard
- Transfer request and approval workflow
- Complete audit trail for lot movements
- Role-aware backend logic (Admin, Operator, Auditor – conceptual)
- Modern React-based frontend dashboard

---

## Technology Stack

### Backend
- Node.js
- Express.js
- MySQL
- RESTful APIs

### Frontend
- React (Vite)
- Axios
- HTML, CSS, JavaScript

### Tools
- Git & GitHub
- VS Code
- Postman
- MySQL Server

---

## System Architecture
The system follows a **three-tier architecture**:
1. **Presentation Layer** – React-based frontend
2. **Application Layer** – Node.js & Express backend
3. **Data Layer** – MySQL relational database

This separation ensures modularity, maintainability, and scalability.

---

## SDLC Phases Followed
- **Phase 0**: Project Initiation & Repository Setup
- **Phase 1**: Software Requirements Specification (IEEE-aligned)
- **Phase 2**: System Architecture & ER Design
- **Phase 3**: Module Design & API Mapping
- **Phase 4**: Database Design & Backend Setup
- **Phase 5**: Core Backend Implementation
- **Phase 6**: Transfer Workflow & Audit Logging
- **Phase 7**: Frontend Development (React)
- **Phase 8**: Testing & Validation

Each phase is documented and version-controlled using GitHub.

---

## Key Highlights
- Strict adherence to SDLC principles
- Referential integrity enforced using foreign keys
- Lot-level traceability with audit logs
- Clean separation between frontend, backend, and database
- Realistic, industry-aligned project scope
- No mock data dependency — data is generated through system workflows

---

## How to Run (High Level)
1. Set up MySQL and execute `database/schema.sql`
2. Configure backend `.env` file
3. Run backend using Node.js
4. Run frontend React application
5. Access system via browser

(Detailed steps are intentionally omitted here to keep the README concise.)

---

## Academic Context
- **Course**: Software Engineering Lab  
- **Degree**: B.Tech in Computer Science and Engineering  
- **Year**: 3rd Year  

This project emphasizes **process, documentation, and correctness** over superficial complexity.

---

## Author
**Saumyadarshi Sarangi**

---

## License
This project is intended for academic and learning purposes only.
