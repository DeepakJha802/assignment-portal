
# Assignment Submission Portal

Overview :

This project is a backend system for an Assignment Submission Portal where:

- Users can upload assignments for evaluation.
- Admins can review, accept, or reject assignments.


Features :

User Functionalities:
  - Register and log in.
  - Upload assignments.
  - Fetch a list of available admins.

Admin Functionalities:
  - Register and log in.
  - View assignments tagged to them.
  - Accept or reject assignments.


Deliverables

1. Fully Functional Backend System :
A complete backend solution that fulfills all functional requirements:
- User and admin registration/login.
- CRUD operations for assignments.
- Role-based functionality (User/Admin).

2. Documentation :
Detailed instructions for setting up and running the system:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd assignment-portal
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/assignment-portal
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server (development mode):
   ```bash
   npm run dev
   ```
5. Test endpoints using Postman or any API testing tool.

Usage :
 API Endpoints
1. User Endpoints -
   - `POST /register`: Register a new user.
   - `POST /login`: Log in as a user.
   - `POST /upload`: Upload an assignment.
   - `GET /admins`: Fetch all registered admins.
2. Admin Endpoints -
   - `POST /register`: Register a new admin.
   - `POST /login`: Log in as an admin.
   - `GET /assignments`: View assignments tagged to the admin.
   - `POST /assignments/:id/accept`: Accept an assignment.
   - `POST /assignments/:id/reject`: Reject an assignment.

 Technologies Used
- Node.js: Runtime environment.
- Express.js: Web framework.
- MongoDB: Database.
- JWT: Authentication.
