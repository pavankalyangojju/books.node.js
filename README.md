
# Book Store 
Along with their respective ID from Google Book API

User Authentication REST API built using Node & Express. The REST API include User Login, User Register, Reset Password, storing Email Subscribers, Automatic emails & etc. You just simply clone the Repo, add your Database link, add your API keys, customise the API according to your requirements and start using the Rest API.
## Functionalities & Features 
* Login
* Register
* Reset Password
* Email Subscriptions
* Automatic email on Register or Login
### Make changes to inventory:

*Add a new book.

*Update inventory for an existing book.

*Remove from the inventory.
##  Get Started
Below you can find the process of installation, prerequisites and more so you can get these User Authentication functionality developed in the matter of minutes.

### Prerequisites

Install the latest version of npm
  ```sh
  npm install npm@latest -g
  ```
Create a MongoDB Database (optional - or use Robo3T)
* Link - https://www.mongodb.com/

Create a SendGrid API Key
* Link - https://sendgrid.com/
## Installation

1. Clone the repo
   ```sh
   git clone   https://github.com/pavankalyangojju/books.node.js
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Update your Databse url in `.env`

   ```JS
   DATABASE='ENTER YOUR DB URL'
   ```
3. Update your SendGrid API key in `.env`

   ```JS
   SENDGRID_API_KEY='ENTER YOUR SENDGRID API KEY'
   ```
4. Add your SendGrid email in `emailsubscriber.js`

    ```JS
      exports.sendGridEmailResetPassword = (email, subject, message, code) => {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
          to: email,
          from: "example@example.com", // Please use your Sendgrid email
          subject: subject,
          text: `${message}\n\n This is your verification code: ${code}`,
        };
        sgMail
          .send(msg)
          .then(() => {
            console.log("Email sent");
          })
          .catch((error) => {
            console.error(error);
          });
    };
       ```
3. Start the server
   ```sh
   npm start
   ```
    ## Environment variables
These environment variables will be used for configuring different services by default:
| Key                 | Default Value            | Description                                                                                         |
|---------------------|--------------------------|-----------------------------------------------------------------------------------------------------|
| `DATABASE` | `url`              | MongoDB Cluster URL                                                                                   |
| `SECRET` | `value`                  | Used for Creating unique tokens                                                                                  |
| `API_KEY` | `key`               | API Key for your Endpoint (can be anything)                                                                              
| `SENDGRID_API_KEY` | `key`               | Sendgrid API Key (for sending emails) 

## API Reference
| URL                             | Method | Description                                              | Content (Body)          |
|---------------------------------|:-----------:|----------------------------------------------------------|-------------------------|
| localhost:8000/api/signup              |     POST    | Registers a user and sends email verification            | `firstname` `lastname` `email` `password`        |
| localhost:8000/api/signin                 |     POST    | Login with existing user   | `email` `password`          |
| localhost:8000/api/sendverificationcode                |     PUT     | Send Verification code to change password  | `email` |
| localhost:8000/api/resetpassword        |     PUT    | Changes User's Password                    | `id` `verificationCode` `newPassword`  |
| localhost:8000/api/signout |     GET     | Signs out a User                    | None |
| localhost:8000/api/user/:userId              |     GET    | Retrieve the Single User | None |
| localhost:8000/api/user/:userId                    |     PUT     | Updates the Single User and returns user                   | `name` `email` `password`            |
| localhost:8000/api/user/:userId           |     DELETE    | Deletes the Single User       | None    |
| localhost:8000/api/users/:userId           |     GET    | Get all Users(only admin)       | None    |
| localhost:8000/api/emailsubscriber           |     POST    | Add the Email in the DB       | `email`    |
| localhost:8000/api/emailsubscribers/:userId          |     GET    | Get all Email Subscribers (only admin)       | None    |

## API Reference Book store
| URL                             | Method | Description                                              | 
|---------------------------------|:-----------:|----------------------------------------------------------|
| localhost/5000/api/v1/books              |     GET    | get the book                   |
| localhost/5000/api/v1/books              |     POST    | post the book            
| localhost/5000/api/v1/books/(id=1234567890)   |     PUT    | update the book            |
| localhost/5000/api/v1/books/(id=1234567890)   |     GET    | update the book get a that book |
| localhost/5000/api/v1/books/(id=1234567890)   |     DELETE    | Deletes the book            |

## POSTMAN IMAGES
###Get the book
![get the book](https://user-images.githubusercontent.com/95854682/178009305-338d3c4b-6d08-4b82-94b8-0c2796829d7d.jpeg)

###Post the book
![post the book](https://user-images.githubusercontent.com/95854682/178016280-42f2ab52-74ab-40c0-bb69-04e12cba43f2.jpeg)

###Update the book
![update the book](https://user-images.githubusercontent.com/95854682/178016514-51ddea24-8b53-4de1-b798-4abfe6f7529c.jpeg)

###Update the book get a that book
![update the book get a that book](https://user-images.githubusercontent.com/95854682/178016721-924ff96b-4ebe-4773-a2ee-8e687f05f0c9.jpeg)

##Delete the book
![delete the book](https://user-images.githubusercontent.com/95854682/178016870-a12fec05-a76e-4587-bc41-1e4b942535ca.jpeg)

###Signup or Register
![signup or register](https://user-images.githubusercontent.com/95854682/178017099-ab6e19d1-42cd-41d5-b94f-b37c51444d7a.jpeg)

###signin or Login
![signin or login](https://user-images.githubusercontent.com/95854682/178017209-4eedb1ef-7d0c-4fc6-8e1e-58e952914cd5.jpeg)

## Contact

G PAVAN KALYAN - pavankalyan2115@gmail.com

Project Link: [https://github.com/pavankalyangojju/books.node.js]

GitHub - profile link :  https://github.com/pavankalyangojju
