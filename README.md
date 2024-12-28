📚 Chat CRUD Application

Welcome to the Chat CRUD Application! This project is a simple Node.js and Express.js-based web application for managing chat messages, built with a MongoDB backend. The application allows users to perform basic CRUD (Create, Read, Update, Delete) operations on chat messages.

🌟 Features

✨ Create Chats: Add new chat messages.

📋 Read Chats: View a list of all chat messages.

✍️ Update Chats: Edit the content of existing chat messages.

❌ Delete Chats: Remove unwanted chat messages.

🛠️ Technologies Used

Backend: Node.js, Express.js

Database: MongoDB

Templating Engine: EJS (Embedded JavaScript)

Middleware:

method-override for supporting PUT and DELETE methods in forms.

express.urlencoded for parsing form data.

📋 Routes

1. Home (Index) - View all chats

URL: /chats

Method: GET

2. New Chat Form

URL: /chats/new

Method: GET

3. Create Chat

URL: /chats

Method: POST

4. Edit Chat Form

URL: /chats/:id/edit

Method: GET

5. Update Chat

URL: /chats/:id

Method: PUT

6. Delete Chat

URL: /chats/:id

Method: DELETE

🧪 Testing

Add a new chat message using the New Chat form.

View all chats on the Index page.

Edit a chat message using the Edit Chat form.

Delete a chat message and verify it no longer appears.