CREATE DATABASE IF NOT EXISTS chip_inventory;
USE chip_inventory;

-- Users table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('ADMIN', 'OPERATOR', 'AUDITOR') NOT NULL
);

-- Components master
CREATE TABLE components (
    component_id INT AUTO_INCREMENT PRIMARY KEY,
    component_type VARCHAR(100) NOT NULL,
    supplier VARCHAR(100),
    description TEXT
);

-- Lots table
CREATE TABLE lots (
    lot_id VARCHAR(50) PRIMARY KEY,
    component_id INT NOT NULL,
    quantity INT NOT NULL,
    receipt_date DATE NOT NULL,
    current_status VARCHAR(50),
    FOREIGN KEY (component_id) REFERENCES components(component_id)
);

-- Locations table
CREATE TABLE locations (
    location_id INT AUTO_INCREMENT PRIMARY KEY,
    location_name VARCHAR(100) NOT NULL,
    location_type ENUM('FAB', 'ASSEMBLY', 'STORAGE') NOT NULL
);

-- Inventory table
CREATE TABLE inventory (
    inventory_id INT AUTO_INCREMENT PRIMARY KEY,
    lot_id VARCHAR(50) NOT NULL,
    location_id INT NOT NULL,
    quantity_available INT NOT NULL,
    FOREIGN KEY (lot_id) REFERENCES lots(lot_id),
    FOREIGN KEY (location_id) REFERENCES locations(location_id)
);

-- Transfers table
CREATE TABLE transfers (
    transfer_id INT AUTO_INCREMENT PRIMARY KEY,
    lot_id VARCHAR(50) NOT NULL,
    from_location_id INT NOT NULL,
    to_location_id INT NOT NULL,
    requested_by INT NOT NULL,
    approved_by INT,
    transfer_date DATETIME,
    status ENUM('PENDING', 'APPROVED', 'REJECTED') DEFAULT 'PENDING',
    FOREIGN KEY (lot_id) REFERENCES lots(lot_id),
    FOREIGN KEY (from_location_id) REFERENCES locations(location_id),
    FOREIGN KEY (to_location_id) REFERENCES locations(location_id),
    FOREIGN KEY (requested_by) REFERENCES users(user_id),
    FOREIGN KEY (approved_by) REFERENCES users(user_id)
);

-- Audit logs
CREATE TABLE audit_logs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    lot_id VARCHAR(50),
    action VARCHAR(100),
    performed_by INT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    remarks TEXT,
    FOREIGN KEY (performed_by) REFERENCES users(user_id)
);
