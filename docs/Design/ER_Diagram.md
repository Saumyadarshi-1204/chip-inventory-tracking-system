# Entity Relationship (ER) Diagram
## Chip Inventory and Tracking System

---

## 1. Overview

This ER diagram defines the logical database structure required to support inventory tracking, lot traceability, user roles, and audit logging.

---

## 2. Entities and Attributes

### 2.1 User
- user_id (PK)
- name
- email
- password_hash
- role (Admin / Operator / Auditor)

---

### 2.2 Component
- component_id (PK)
- component_type
- supplier
- description

---

### 2.3 Lot
- lot_id (PK)
- component_id (FK)
- quantity
- receipt_date
- current_status

---

### 2.4 Location
- location_id (PK)
- location_name
- location_type (Fab / Assembly / Storage)

---

### 2.5 Inventory
- inventory_id (PK)
- lot_id (FK)
- location_id (FK)
- quantity_available

---

### 2.6 Transfer
- transfer_id (PK)
- lot_id (FK)
- from_location_id (FK)
- to_location_id (FK)
- requested_by (FK → User)
- approved_by (FK → User)
- transfer_date
- status

---

### 2.7 AuditLog
- log_id (PK)
- lot_id (FK)
- action
- performed_by (FK → User)
- timestamp
- remarks

---

## 3. Relationships

- User **performs** Transfers
- User **approves** Transfers
- Component **has** multiple Lots
- Lot **exists in** Inventory
- Inventory **mapped to** Location
- Lot **generates** Audit Logs

---

## 4. Design Notes

- Lot-level tracking ensures traceability
- Inventory table supports quantity tracking per location
- AuditLog enables compliance and inspection
- Design supports all SRS functional requirements

---

## End of Document
