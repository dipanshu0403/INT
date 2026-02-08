# Scalable Real-Time Data Processor

A full-stack real-time data monitoring system built using React, Node.js, and MongoDB.  
The system is designed to handle high-frequency data streams and display 5,000+ records efficiently.

---

## Tech Stack

Frontend:
- React (Vite)
- react-window (Virtualized list)
- Axios

Backend:
- Node.js
- Express.js
- Custom Rate Limiter
- Custom Request Validator

Database:
- MongoDB
- Mongoose

---

## Features

- Real-time data simulation (200ms interval)
- Virtualized list for 5,000+ records
- Custom rate limiting middleware
- Custom request validation
- Indexed MongoDB schema
- Optimized data fetching

---

## Architecture Decisions

### 1. Virtualized Rendering
Used `react-window` to render only visible items.  
This prevents UI lag when displaying thousands of records.

### 2. Custom Rate Limiter
Implemented a sliding window algorithm using an in-memory Map:
- Tracks request timestamps per IP
- Blocks excessive requests

### 3. Request Validation
Custom middleware ensures:
- Valid `name` (string)
- Valid `value` (number)
- Prevents malformed payloads

### 4. Optimized Database Schema
Indexes added on:
- `timestamp`
- `name`

This improves:
- Sorting speed
- Query performance

---

## API Endpoints

### Create Record
POST /api/records

Body:
```json
{
  "name": "Sensor-1",
  "value": 200
}
