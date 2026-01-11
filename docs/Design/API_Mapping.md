# API Mapping
## Chip Inventory and Tracking System

---

## 1. Overview
This document defines the backend API endpoints required to support system modules and SRS requirements.

---

## 2. Authentication APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /api/auth/login | Authenticate user and return session/token |
| POST | /api/auth/logout | Logout user |

---

## 3. User Management APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /api/users | Create new user |
| GET | /api/users | List users |
| PUT | /api/users/{id} | Update user details |

---

## 4. Component APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /api/components | Add new component |
| GET | /api/components | List/search components |

---

## 5. Inventory APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /api/inventory | View inventory status |
| PUT | /api/inventory/update | Update stock quantity |

---

## 6. Lot Tracking APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /api/lots/{lotId} | View lot details |
| GET | /api/lots/{lotId}/history | View lot movement history |

---

## 7. Transfer APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /api/transfers | Request component transfer |
| PUT | /api/transfers/{id}/approve | Approve transfer |

---

## 8. Reporting APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /api/reports/inventory | Generate inventory report |
| GET | /api/reports/usage | Generate usage report |

---

## End of Document
