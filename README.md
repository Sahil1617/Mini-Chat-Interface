
  <h1>📚 Chat CRUD Application</h1>
  <div class="container">
    <p>Welcome to the <strong>Chat CRUD Application</strong>! This project is a simple <strong>Node.js</strong> and <strong>Express.js</strong>-based web application for managing chat messages, built with a <strong>MongoDB</strong> backend. The application allows users to perform basic <strong>CRUD</strong> (Create, Read, Update, Delete) operations on chat messages.</p>    
    <h2>🌟 Features</h2>
    <ul class="features">
      <li>✨ <strong>Create Chats:</strong> Add new chat messages.</li>
      <li>📋 <strong>Read Chats:</strong> View a list of all chat messages.</li>
      <li>✍️ <strong>Update Chats:</strong> Edit the content of existing chat messages.</li>
      <li>❌ <strong>Delete Chats:</strong> Remove unwanted chat messages.</li>
    </ul>
    <h2>🛠️ Technologies Used</h2>
    <ul class="technologies">
      <li><strong>Backend:</strong> Node.js, Express.js</li>
      <li><strong>Database:</strong> MongoDB</li>
      <li><strong>Templating Engine:</strong> EJS (Embedded JavaScript)</li>
      <li><strong>Middleware:</strong></li>
      <ul>
        <li><code>method-override</code> for supporting PUT and DELETE methods in forms.</li>
        <li><code>express.urlencoded</code> for parsing form data.</li>
      </ul>
    </ul>
    <h2>📋 Routes</h2>
    <div class="routes">
      <ul>
        <li><strong>1. Home (Index):</strong> View all chats<br><code>URL:</code> /chats<br><code>Method:</code> GET</li>
        <li><strong>2. New Chat Form:</strong><br><code>URL:</code> /chats/new<br><code>Method:</code> GET</li>
        <li><strong>3. Create Chat:</strong><br><code>URL:</code> /chats<br><code>Method:</code> POST</li>
        <li><strong>4. Edit Chat Form:</strong><br><code>URL:</code> /chats/:id/edit<br><code>Method:</code> GET</li>
        <li><strong>5. Update Chat:</strong><br><code>URL:</code> /chats/:id<br><code>Method:</code> PUT</li>
        <li><strong>6. Delete Chat:</strong><br><code>URL:</code> /chats/:id<br><code>Method:</code> DELETE</li>
      </ul>
    </div>
    <h2>🧪 Testing</h2>
    <ul class="testing">
      <li>Add a new chat message using the <strong>New Chat</strong> form.</li>
      <li>View all chats on the <strong>Index</strong> page.</li>
      <li>Edit a chat message using the <strong>Edit Chat</strong> form.</li>
      <li>Delete a chat message and verify it no longer appears.</li>
    </ul>
  </div>

    
</body>
</html>
