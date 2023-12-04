# @n5/app-orchestrator

## About Project
question #1

-What is accessibility and how is it achieved?

Accessibility refers to the practice of creating sites and applications that are accessible to all people, regardless of their abilities or disabilities. The goal is to ensure that all people, including those with visual, hearing, motor or cognitive disabilities, can access and use the web effectively.
Some common practices for achieving accessibility in frontend development include: 
Semantic HTML
Usability Testing with Users with Disabilities
Closed Captioning in Videos
Accessible Forms
Responsive Design...

-What is the difference between session storage, local storage, and 
cookies?

In local storage it stored, for example, the sound file of notifications, while in session storage it stores the id of the tab you have opened. On the other hand, the cookies store the sensitive data, obviously encrypted so that they can only be seen from the server.

-Explain the javascript event loop (also may explain how promises or 
async await work in js these are basically all the same 
question/answer)

Loops in JavaScript are a fundamental concept governing asynchronous code execution. JavaScript is single-threaded, meaning that it executes one operation at a time. However, it can handle asynchronous tasks by event looping.

Promises are designed to work with the event loop. Promise resolution or rejection callbacks are placed in the event queue.
Async/Await:
Async/Await is a more syntactically pleasing way to work with promises. Async functions return promises and use await to wait for promise resolution without blocking the thread.

-If you are getting too many API calls being made from your hooks, what can you do to prevent this?

If you are experiencing a high volume of API calls, there are several strategies we can implement:
Frequency Limiting -> Implement frequency limits on your server to limit the number of requests allowed in a specific time period.
Exponential Backoff -> Implement a random delay mechanism (exponential backoff) on hooks. If you receive a quota error or any other type of error, wait a while before trying again

Caching-> Use caches to temporarily store the results of API calls that do not change frequently. This reduces the need for additional calls if the information has not changed since the last request.

-How do you manage the global state? And why in that way?

Managing global state in an application is crucial for maintaining consistency and synchronization of data in different parts of the user interface and application logic. There are several ways to manage global state in an application, and the choice of the best option depends on factors such as the size of the application, the complexity of the data and the preferences of the development team.
Managing global state in an application is crucial for maintaining consistency and synchronization of data in different parts of the user interface and application logic. There are several ways to manage global state in an application, and the choice of the best option depends on factors such as the size of the application, the complexity of the data and the preferences of the development team.

-What is progressive rendering?
Progressive rendering is a web design technique that loads and displays a page gradually, allowing users to perceive and interact with content as it becomes available.

In general, for smaller and medium-sized applications, Context may be sufficient, while Redux or MobX may be more suitable for larger and more complex applications.

A microfrontend orchestrator is a development architecture that consists of dividing the user interface of an application into smaller, independent components, known as microfrontends, to facilitate development, deployment and maintenance. In this case, the orchestrator is designed to consume two different APIs: one related to the "Rick and Morty" series and the other related to the "Harry Potter" world.
the orchestrated project of the host :5001 is an application that loads the content of the Rick and morty
and the host :5003 loads the content of Harry Potter
The orchestrator acts as a conducting conductor, assembling these microfrontends into a cohesive and seamless user experience.

## URIs

[orchestrator](http://localhost:5000)
[Rick and morty](http://localhost:5001)
[Harry Potter](http://localhost:5003)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run start
```
