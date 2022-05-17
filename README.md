# Social Network API v2.0 :pizza::bow_and_arrow:

#### This is a backend API (only) for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses the Express.js framework for API/routing, MongoDB/NoSQL for db storage and Mongoose as the Object Document Model (ODM) to interface between Express and MongoDB.

***:rotating_light: BONUS ALERT - NOW YOU CAN DELETE ALL YOUR THOUGHTS WHEN A USER IS DELETED :rotating_light:***

### To use this Application

- [Walkthrough Video](https://drive.google.com/file/d/1xJx7uJ8zQvZj9BR7tMjd1mxPWkYhp5bW/view)

### User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

#### Screenshots