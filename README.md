# Foodwastemanagement


click here to visit the website by clicking on this link https://foodwastemanagement.vercel.app/

NOTE: Please install backend in your local machine , due to some issues in deployment kindly follow steps mentioned below .

# !!! ONLY WORKS ON PC THAT TOO REQUIRE WINDOWS TO RUN NAVBAR ...


FoodWasteManage Web App

Overview

Welcome to FoodWasteManage, a web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application aims to address the issue of food waste by providing a platform for effective management and redistribution of surplus food.

Features
* User Authentication: Secure user authentication and authorization system to ensure data privacy.
* Dashboard: A user-friendly dashboard that provides an overview of food donations, requests, and other relevant statistics.
* Donation Management: Users can easily create, edit, and delete food donations. Each donation includes details such as food type, quantity, and expiry date.
* Request System: Allows users to make requests for surplus food, facilitating efficient redistribution to those in need.
* Notification System: Real-time notifications to keep users informed about the status of their donations or requests.
* Admin Panel: Administrators have access to a dedicated panel for managing users, monitoring activity, and resolving issues.

Installation

1.Clone the repository:

git clone https://github.com/your-username/foodwastemanage-web-app.git
cd foodwastemanage-web-app

2.Install dependencies for the server:

cd server
npm install

3.Install dependencies for the client:

cd client
npm install

4.Configure the MongoDB connection:

Create a .env file in the server directory.

5.Add your MongoDB connection URI:

MONGODB_URI=your_mongodb_uri

6.Start the backend:

cd backend
nodemon app.js


7.Start the frontend:

cd client
npm start
Access the application in your browser at http://localhost:3000.

Technologies Used

MongoDB: NoSQL database for storing application data.
Express.js: Web application framework for Node.js.
React.js: JavaScript library for building user interfaces.
Node.js: JavaScript runtime for server-side development.

Contributors:
1.@internet_trash-backend dev
2.@cazrot335-frontend dev
3.@meheraga-UI - designer 

License

This project is licensed under the MIT License.
