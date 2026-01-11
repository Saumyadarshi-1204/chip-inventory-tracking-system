# Module Design
## Chip Inventory and Tracking System

---

## 1. Overview
This document describes the logical decomposition of the system into modules. Each module maps directly to requirements defined in the SRS.

---

## 2. Module List and Responsibilities

### 2.1 Authentication Module
Responsibilities:
- User login
- Role identification (Admin, Operator, Auditor)
- Access control enforcement

Mapped SRS:
- NFR-2 (Security)

---

### 2.2 User Management Module
Responsibilities:
- Create and manage user accounts
- Assign roles to users

Mapped SRS:
- User roles and authorization

---

### 2.3 Component Management Module
Responsibilities:
- Register new components
- Maintain component master data

Mapped SRS:
- FR-1 Add Component

---

### 2.4 Inventory Management Module
Responsibilities:
- Maintain stock quantities
- Update inventory after usage, receipt, or disposal
- Generate low-stock alerts

Mapped SRS:
- FR-2 Update Stock

---

### 2.5 Lot Tracking Module
Responsibilities:
- Track lot movement history
- Maintain audit trail of lot actions

Mapped SRS:
- FR-4 Track Lot Movement

---

### 2.6 Transfer Management Module
Responsibilities:
- Handle component transfer requests
- Enforce approval workflow

Mapped SRS:
- FR-5 Transfer Components

---

### 2.7 Reporting Module
Responsibilities:
- Generate inventory and usage reports
- Export reports in PDF or CSV format

Mapped SRS:
- FR-6 Generate Reports

---

## End of Document
