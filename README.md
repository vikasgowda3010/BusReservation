# 🚌 Bus Reservation System

A full-stack Bus Reservation System that allows users to book bus tickets between various cities. The project is built using **Spring Boot** for the backend and **React** for the frontend. It supports features like city selection, seat availability, passenger info entry, payment integration, and booking confirmation.

---

## 📌 Features

- User-friendly interface for booking bus tickets.
- Select source and destination cities.
- Choose travel date and view available buses.
- Real-time seat selection and reservation.
- Enter passenger details.
- Payment summary and online payment simulation.
- Booking confirmation with receipt display.
- Admin panel for managing buses (optional).

---

## 🛠️ Tech Stack

### Frontend
- **React** (with Hooks and React Router)
- **Tailwind CSS** for styling
- **Axios** for API calls
- **Vite** for fast build and dev experience

### Backend
- **Spring Boot**
- **REST APIs**
- **Hibernate** for ORM
- **MySQL** for database
- **Spring Data JPA**

---


## 📂 Project Structure
bus-reservation-system/
├── backend/ # Spring Boot project
│ ├── src/main/java/
│ │ └── com/example/busbooking/
│ │ ├── controller/
│ │ ├── service/
│ │ ├── repository/
│ │ └── model/
│ └── application.properties
├── frontend/ # React project
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── tailwind.config.js


---

## 🔌 Setup Instructions

### Prerequisites

- Node.js & npm
- Java 17+
- MySQL
- Maven

---

### 🔧 Backend Setup (Spring Boot)

1. Clone the repo and navigate to `backend`:
   ```bash
   cd backend
   
2. Configure application.properties:
  spring.datasource.url=jdbc:mysql://localhost:3306/busbooking
  spring.datasource.username=your_username
  spring.datasource.password=your_password
  spring.jpa.hibernate.ddl-auto=update

3. Run the backend:
  mvn spring-boot:run

🚀 Booking Flow
Landing Page → Select cities & travel date

View Buses → Shows available buses

Select Seats → Choose available seats

Passenger Details → Input traveler info

Payment Summary → Shows total cost

Payment Page → Simulated or real payment

Booking Success → Confirmation screen



📦 API Endpoints (Sample)
| Method | Endpoint                | Description          |
| ------ | ----------------------- | -------------------- |
| GET    | `/api/cities`           | Get all cities       |
| POST   | `/api/bookings`         | Create a new booking |
| GET    | `/api/buses?source=...` | Get buses for route  |
| POST   | `/api/payment/process`  | Process payment      |


🙋‍♂️ Author
Vikas
🚀 Developed as part of a full-stack web development project.


