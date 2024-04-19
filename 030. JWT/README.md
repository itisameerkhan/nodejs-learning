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
<span style="color:cyan ">SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</span>

![image](/assets/demo25.png)

In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:

* Header

* Payload

* Signature

### ⚡Header


In JSON Web Tokens (JWTs), the header is the first part of the token and typically consists of two main components: the algorithm (`alg`) and the token type (`typ`).

* **Algorithm (alg)**: This component specifies the cryptographic algorithm used to generate the signature for the token. Common algorithms include HS256 (HMAC with SHA-256), RS256 (RSA with SHA-256), and ES256 (Elliptic Curve with SHA-256). The algorithm determines how the token is signed and verified by the parties involved.

* **Token Type (typ)**: This component specifies the type of token being used. The default value for JWTs is "JWT". However, other types of tokens, such as JSON Web Encryption (JWE) tokens, can also be represented using JWTs.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### ⚡ Payload

In JSON Web Tokens (JWTs), the payload is the second part of the token and typically consists of the claims, which are statements about an entity (typically, the user) and additional data. The payload is also known as the "claims set."

The payload of a JWT contains three types of claims:

1. **Reserved Claims**: These claims are predefined and have specific meanings. Some common reserved claims include `iss` (issuer), `sub` (subject), aud (audience), `exp` (expiration time), and `iat` (issued at time).

* **Public Claims**: These claims are defined by the users or applications that generate the JWTs. They are typically used to convey information such as user ID, username, roles, permissions, or any other relevant data.

* **Private Claims**: These claims are application-specific and are used for custom data that is relevant only to the parties involved in the token exchange. They are not standardized and can be defined by the application as needed.

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "iat": 1516239022
}
```

In this example:

* `sub` represents the subject of the token, which is typically the user ID.

* `name` represents the name of the user.

* `admin` indicates whether the user has administrative privileges.

* `iat` represents the time at which the token was issued.

#### ✨ Registered Claims

* `iss`: from the word issuer. A case-sensitive string or URI that uniquely identifies the party
that issued the JWT. Its interpretation is application specific (there is no central authority
managing issuers).

* `sub`: from the word subject. A case-sensitive string or URI that uniquely identifies the party
that this JWT carries information about. In other words, the claims contained in this JWT
are statements about this party. The JWT spec specifies that this claim must be unique in
the context of the issuer or, in cases where that is not possible, globally unique. Handling of
this claim is application specific.

* `aud`: from the word audience. Either a single case-sensitive string or URI or an array of such
values that uniquely identify the intended recipients of this JWT. In other words, when this
claim is present, the party reading the data in this JWT must find itself in the aud claim or
disregard the data contained in the JWT. As in the case of the iss and sub claims, this claim
is application specific.
* `exp`: from the word expiration (time). A number representing a specific date and time in the
format “seconds since epoch” as defined by POSIX6
.This claims sets the exact moment fromwhich this JWT is considered invalid. Some implementations may allow for a certain skew
between clocks (by considering this JWT to be valid for a few minutes after the expiration
date).
* `nbf`: from not before (time). The opposite of the exp claim. A number representing a specific
date and time in the format “seconds since epoch” as defined by POSIX7
. This claim sets
the exact moment from which this JWT is considered valid. The current time and date must
be equal to or later than this date and time. Some implementations may allow for a certain
skew.
* `iat`: from issued at (time). A number representing a specific date and time (in the same
format as exp and nbf) at which this JWT was issued.
* `jti`: from JWT ID. A string representing a unique identifier for this JWT. This claim may be
used to differentiate JWTs with other similar content (preventing replays, for instance). It is
up to the implementation to guarantee uniqueness

#### ✨ Public and Private Claims

All claims that are not part of the registered claims section are either private or public claims.

* **Private claims**: are those that are defined by users (consumers and producers) of the JWTs.
In other words, these are ad hoc claims used for a particular case. As such, care must be
taken to prevent collisions.

* **Public claims**: are claims that are either registered with the IANA JSON Web Token Claims
registry8
(a registry where users can register their claims and thus prevent collisions), or name

### ⚡ Signature 


In JSON Web Tokens (JWTs), the signature is the third and final part of the token and is used to verify the integrity and authenticity of the token. The signature is created by encoding the header and payload of the JWT, concatenating them with a period (.) separator, and then hashing the resulting string using a cryptographic algorithm along with a secret key known only to the issuer.

* **Integrity**: The signature ensures that the contents of the JWT (i.e., the header and payload) have not been tampered with during transmission. Any modification to the header or payload would result in a different signature when verified, indicating that the token has been altered.

* **Authenticity**: The signature provides proof that the JWT was issued by a trusted entity (the issuer) and has not been forged by an unauthorized party. Only the issuer, possessing the secret key used to create the signature, can generate a valid signature for the JWT.

```json
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

For example if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```