MiniLinkedIn – A Simple Community Platform
A mini LinkedIn-like full-stack application where users can register, log in, create posts, and view their own and others’ posts.
 ****Stack Used***
  Frontend:
  React.js
  Axios
  React Router DOM
  Netlify (for deployment)
Backend:
  Node.js
  Express.js
  MongoDB (MongoDB Atlas)
  Mongoose
  JWT (for authentication)
  Render (for backend deployment)
***Setup Instructions***
1.Clone the repository
bash
Copy
git clone https://github.com/Heena2002/MiniLinkedin.git
cd MiniLinkedin
2.Install dependencies
bash
Copy
npm install required dependencies
3.Run the frontend
bash
Copy
npm start
****Backend (Express + MongoDB)***
Navigate to backend folder (if separate)
1.Create a .env file with:
PORT=5000
MONGO_URI=mongodb+srv://Heena:Heena%402002@cluster0.z1e7knu.mongodb.net/linkedin-clone?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=mySecretKey
2.Install backend dependencies
npm install
3.Start backend server
bash
Copy
node server.js

