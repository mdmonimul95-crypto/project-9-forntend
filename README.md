# Car Rental System

A full-stack Car Rental platform built with Next.js, Express.js, MongoDB, JWT Authentication, and responsive modern UI design.

---

# Live Links

## Client Side

Add your live client URL here.

## Server Side

Add your live server URL here.

---

# Project Features

## Authentication System

* Email & Password Login/Register
* Google Authentication
* JWT Authentication
* HTTPOnly Cookie Support
* Protected Private Routes
* Persistent Login State
* Password Validation

## Public Layout

* Responsive Navbar
* Dynamic Navigation
* Footer Section
* Social Media Icons
* Useful Links
* Contact Information

## Private Layout

Private routes include:

* Add Car
* My Bookings
* My Added Cars

## Home Page

### Banner Section

* Hero banner with heading
* Short description
* Explore Cars button

### Available Cars Section

* Dynamic car data from MongoDB
* Minimum 6 car cards
* Car details preview
* View Details button

### Extra Sections

* Why Choose Us
* Customer Testimonials

## CRUD Operations

### Add Car

Users can:

* Add car listings
* Upload image URL
* Add price, type, location, description
* Set availability status

### Update Car

Owners can update:

* Price
* Description
* Availability
* Image
* Type
* Location

### Delete Car

* Delete confirmation modal
* Secure owner-only delete system

## Booking System

### Book Car

Users can:

* Book cars
* Add special notes
* Select driver needed option

### My Bookings

* View all personal bookings
* Booking date
* Total price
* Car information

## Search & Filter

* Search by car name
* Filter by car type
* MongoDB regex implementation

## Booking Count

* Booking count increment using MongoDB $inc operator

## Extra Features

* Responsive Design
* Loading Spinner
* Custom 404 Page
* Framer Motion Animation
* Theme Toggle

---

# Technologies Used

## Frontend

* Next.js
* React.js
* Tailwind CSS
* HeroUI
* Framer Motion
* React Icons
* React Hot Toast

## Backend

* Express.js
* MongoDB
* JWT
* Cookie Parser
* CORS
* dotenv

---

# Folder Structure

```bash
client/
 ├── src/
 │   ├── app/
 │   ├── components/
 │   ├── lib/
 │   ├── providers/
 │   └── hooks/
 │
server/
 ├── index.js
 ├── routes/
 ├── middleware/
 ├── utils/
 └── package.json
```

---

# Environment Variables

## Client (.env.local)

```env
NEXT_PUBLIC_SERVER_URL=your_server_url
```

## Server (.env)

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLIENT_URL=your_client_url
```

---

# Installation & Setup

## Clone Repository

```bash
git clone your_client_repo_link
git clone your_server_repo_link
```

## Client Setup

```bash
cd client
npm install
npm run dev
```

## Server Setup

```bash
cd server
npm install
nodemon index.js
```

---

# Deployment

## Frontend Deployment

Deployed on Vercel.

## Backend Deployment

Deployed on Vercel Serverless Functions.

## Important Deployment Notes

* Added proper CORS configuration
* Fixed route reload issue
* Protected private routes
* Persistent authentication using cookies/JWT
* Added custom 404 page
* Responsive for mobile, tablet, and desktop

---

# API Endpoints

## Authentication

| Method | Endpoint  | Description   |
| ------ | --------- | ------------- |
| POST   | /login    | User login    |
| POST   | /register | User register |

## Cars

| Method | Endpoint  | Description    |
| ------ | --------- | -------------- |
| GET    | /cars     | Get all cars   |
| GET    | /cars/:id | Get single car |
| POST   | /cars     | Add car        |
| PATCH  | /cars/:id | Update car     |
| DELETE | /cars/:id | Delete car     |

## Bookings

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | /booking     | Book a car        |
| GET    | /booking     | Get user bookings |
| DELETE | /booking/:id | Cancel booking    |

---

# UI/UX Features

* Modern clean design
* Consistent typography
* Equal card sizing
* Smooth spacing and alignment
* Responsive grid layout
* Updated X (Twitter) icon
* User-friendly navigation
* Accessible interface

---

# Security Features

* JWT Token Verification
* HTTPOnly Cookies
* Protected API Routes
* Private Route Protection
* Secure MongoDB Queries
* Owner-only Update/Delete permissions

---

# Author

## Monimul

Full Stack Web Developer

---

# Future Improvements

* Payment Gateway Integration
* Wishlist Feature
* Admin Dashboard
* Real-time Booking Availability
* Email Notifications

---

# License

This project is created for educational and assignment purposes.
