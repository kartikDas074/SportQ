# 🏟️ SportQ - Sports Facility Booking Management System

## 📌 Project Overview

**SportQ** is a full-stack MERN-based sports facility booking platform that allows users to explore, book, and manage various sports facilities such as football turfs, badminton courts, tennis courts, and swimming lanes.

The platform is designed to simulate a real-world sports reservation system where facility owners can list their venues and users can easily book available time slots.

---

## 🚀 Live Demo

👉 Live URL: https://sport-q-green.vercel.app

---

## 🎯 Purpose

The purpose of this project is to build a scalable and production-like sports booking system using modern web technologies including:

* MERN Stack (MongoDB, Express.js, React, Node.js)
* Authentication using JWT with HTTP-only cookies
* Real-world booking and management system

---

## ⚙️ Tech Stack

### Frontend:

* React.js
* Next.js 
* Tailwind CSS / CSS Modules
* React Toastify

### Backend:

* Node.js
* Express.js
* MongoDB 
* JWT Authentication
* CORS

---

## 🔐 Authentication Features

* User Registration (Name, Email, Photo, Password)
* Google Login (OAuth)
* HTTP-only Cookie-based authentication
* Protected Routes (Middleware)
* Persistent login on page reload

---

## 🏟️ Core Features

### 🏠 Home Page

* Hero Section with CTA
* Featured Facilities (Dynamic, min 6 cards)
* Book Now Button (Protected)

---

### 🏟️ Facilities System

* Browse All Facilities (Public)
* Facility Details Page
* Add Facility (Private)
* Update Facility (Owner Only)
* Delete Facility (Owner Only)

---

### 📅 Booking System

* Book Facility by Date & Time Slot
* Calculate Total Price
* Store booking in database
* Cancel booking option
* Booking status tracking (pending/cancelled)

---

### 👤 User Dashboard

* My Bookings (Private)
* Add Facility
* Manage My Facilities

---

## 🔎 Search & Filter

* Search facilities by name 
* Filter by sport type 
* MongoDB query-based filtering

---

## 📦 Database Structure

### Facilities Collection

* name
* facility_type
* location
* price_per_hour
* capacity
* available_slots
* description
* owner_email
* booking_count

---

### Bookings Collection

* facility_id
* user_email
* booking_date
* time_slot
* hours
* total_price
* status (pending/cancelled)

---

## 📱 UI/UX Requirements

* Responsive (Mobile, Tablet, Desktop)
* Consistent design system
* Equal card sizes and spacing
* Clean recruiter-friendly UI
* Reusable button styles
* Proper alignment and spacing

---

## ⏳ Loading & Error Handling

* Custom Loading Spinner/Page implemented
* Custom 404 Not Found Page
* Error handling with toast messages (no default alerts)

---

## 🔒 Security Features

* JWT stored in HTTP-only cookies
* Protected API routes
* Middleware-based route verification
* Secure environment variables (.env)

---

## 🚫 Not Implemented

* Email verification (intentionally skipped)
* Forgot password (not implemented)

---

## 🧠 Key Learnings

* Full-stack MERN architecture
* Authentication flow with JWT cookies
* Real-world booking system design
* API design and middleware protection

---


## 📤 Deployment

* Frontend: Vercel 
* Backend: Vercel
* Database: MongoDB Atlas

---

## 👨‍💻 Developer

**Kartik Das**
Full Stack Developer (MERN)

---

## 📜 License

This project is built for educational and assignment purposes.
