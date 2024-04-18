# JWT Authentication

<div align="center">
<img src="https://media.licdn.com/dms/image/D4E12AQF4F-iUG11R4g/article-cover_image-shrink_600_2000/0/1679512575354?e=2147483647&v=beta&t=_-zt6xDPSBc845buuB6kAtP5Ax2PTyksm81gRzjGYC0" />
</div>

JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. In Node.js projects, JWTs are commonly used for authentication and authorization purposes. When a user logs in or performs an action that requires authentication, the server issues a JWT containing information about the user (claims) and signs it using a secret key. This token is then sent to the client, typically stored in local storage or a cookie. On subsequent requests, the client sends this token back to the server in the authorization header. The server verifies the token's signature and decodes the claims to authenticate and authorize the user.

## ⭐ When you use JSON Web Tokens?

1. **Authentication**: JWTs are widely used for user authentication in web applications. After a user successfully logs in, the server issues a JWT containing information about the user (such as user ID, role, and permissions). This token is then sent to the client and included in subsequent requests to authenticate the user.

2. **Authorization**: JWTs can carry additional information about a user's permissions and roles. This information can be used by the server to determine whether the user is authorized to access certain resources or perform specific actions.

3. **Single Sign-On (SSO)**: JWTs are often used in Single Sign-On systems to allow users to authenticate once and access multiple applications or services without needing to log in again.

4. **Token-Based API Authentication**: JWTs can be used to authenticate API requests. Clients include the JWT in the authorization header of HTTP requests to access protected API endpoints.

5. **Stateless Sessions**: Unlike traditional session-based authentication, which requires server-side session management, JWTs are stateless. This means they do not require server-side storage of session data, making them suitable for scalable and distributed systems.

6. **Information Exchange**: JWTs can be used to securely exchange information between different parties in a trusted manner. For example, they can be used in secure communication between microservices in a distributed architecture.

## ⭐ What is JSON Web Token?

A JSON Web Token looks like this (newlines inserted for readability):

<span style="color:red">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>.
<span style="color:purple">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ</span>.
<span style="color:skyblue">SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</span>

![image](/assets/demo25.png)