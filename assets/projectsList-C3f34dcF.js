import{n as e}from"./rolldown-runtime-hePW80VL.js";var t=e({default:()=>n,projects:()=>n}),n=[{id:`9e617cca-105a-4af4-b8c5-79cb459d3989`,title:`Expression Evaluator`,description:`A calculator that takes in a string as an input and shows the calculation after evaluation. Helps solve complex mathematical equations.`,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Expression Evaluator

## Project Overview
**Type of Project:** Console Application / Library Utility

The Expression Evaluator is a high-performance command-line calculator designed to process mathematical expression strings as input, parse them securely, and evaluate complex equations efficiently.

---

## Features Provided
* **String-Based Input Processing:** Accepts standard mathematical expressions as raw strings and parses them into evaluatable syntax trees.
* **Complex Equation Solving:** Handles multi-variable or multi-operator arithmetic with correct operator precedence and grouping parentheses.
* **Robust Error Handling:** Detects syntax errors, division by zero, and unbalanced parentheses gracefully, providing informative error messages.
* **Extensible Architecture:** Leverages advanced C++ features and template libraries to support custom mathematical functions and constants.

---

## Challenges & Solutions
* **Challenge:** Designing a reliable parsing algorithm that correctly honors operator precedence and manages nested parentheses without breaking on malformed user input.
  * *Solution:* Utilized the Boost library (specifically Boost.Spirit or tokenizers) alongside custom stack-based Shunting-Yard algorithms to tokenize and evaluate strings accurately.
* **Challenge:** Optimizing execution performance and memory overhead for deeply nested or extremely long expressions.
  * *Solution:* Implemented efficient memory management by avoiding unnecessary string copying and leveraging C++ move semantics during the abstract syntax tree (AST) construction.

---

## Learning Points
* Mastered advanced C++ string manipulation, memory management, and algorithm design (such as parsing expression grammars).
* Gained deep familiarity with utilizing the Boost libraries for complex parsing tasks in systems programming.
* Improved understanding of compiler design principles, specifically tokenization, syntax analysis, and evaluation trees.
`,featured:!1,skillId:[`6e47c1f3-d51f-44de-885a-9b46971877ad`,`94f58d17-5fd2-4ccd-97c9-82fd9b8dad5c`]},{id:`b455fc16-9fed-48a7-8549-139f3f958301`,title:`B2B marketplace`,description:`A full-stack web app designed for vendors to list their products for businesses. App hosted on EC2.`,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# B2B Marketplace

## Project Overview
**Type of Project:** Full-Stack Web Application

The B2B marketplace is a comprehensive enterprise web platform built to connect vendors directly with businesses for wholesale product listing, inventory management, and streamlined commercial transactions, hosted securely on AWS EC2.

---

## Features Provided
* **Vendor Product Cataloging:** Interface for vendors to list, update, and manage products and bulk pricing tiers.
* **Order Processing & Invoicing:** Automated purchase order workflows with dynamic PDF invoice generation using iTextPDF.
* **Responsive Business Dashboard:** Angular-powered single-page application featuring reactive state management via RxJS for real-time inventory and order tracking.
* **Robust Backend API:** Secure RESTful services developed with Java and Spring Boot, supported by a reliable testing suite using JUnit.

---

## Challenges & Solutions
* **Challenge:** Managing asynchronous data streams and complex state synchronization between vendors and purchasing clients across the Angular frontend.
  * *Solution:* Implemented RxJS observables and operators to handle asynchronous events efficiently, preventing race conditions during rapid inventory updates.
* **Challenge:** Configuring reliable cloud deployment and environment isolation on AWS EC2 while maintaining a seamless build and test pipeline.
  * *Solution:* Standardized the build process using Maven and configured automated environment setups with Node.js and H2/production database layers on EC2 instances.

---

## Learning Points
* Gained extensive experience architecting full-stack enterprise applications using Java Spring Boot and Angular with TypeScript.
* Mastered reactive programming patterns with RxJS for handling complex client-side data flows.
* Enhanced cloud deployment skills by configuring and hosting production-grade web services on AWS EC2.
`,featured:!0,skillId:[`ba70488d-925f-43d0-a003-ac7cfa449c2d`,`0f2b17c2-fa5c-42ea-befd-2fb31245f4be`,`e359cb47-affe-4e50-a27a-cdcc75742adf`,`c1d2ff14-ce24-40b8-8f36-136f83109cdf`,`c29e1aa2-960d-4c9f-817e-b1081f8061ff`,`83f0e84e-6a9f-4c99-ad0d-cd5aaf675b89`,`e2f28b58-8435-46ed-994b-2733c43d26fe`,`99791e75-2579-458d-bac8-85041173e5bc`,`a902192a-ac61-4b64-bbdd-c0e352d3434d`,`f48b5d38-e9a3-4fe8-93f1-8ff2716520c9`,`0fd99ade-e146-4ce5-8b13-7ec3713683fd`,`a6f96db8-1a98-4e2f-80d7-6b4a81823613`]},{id:`8d8a3c9b-13a7-4e6c-8ff4-604c8660b391`,title:`Employee Timesheet Tracker`,description:`A full-stack website built to demonstrate CRUD operations through API calls. Helps the users to track the employees' time sheets and activities. `,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Employee Timesheet Tracker - Full-Stack Timesheet Application

## Project Overview
**Type of Project:** Full-Stack Web Application

Employee Timesheet Tracker is a comprehensive web platform built to track employee timesheets and work activities efficiently, demonstrating robust CRUD operations through seamless API calls.

---

## Features Provided
* **Employee Timesheet Tracking:** Interface for users to log, monitor, and update employee work hours and daily activities.
* **Full CRUD Operations:** Complete Create, Read, Update, and Delete functionality for managing employee records and timesheet data.
* **Dynamic Client-Side Interactivity:** Responsive user interface utilizing jQuery for asynchronous API calls and real-time DOM updates without full page reloads.
* **Backend API & Data Persistence:** Secure server-side architecture powered by ASP.NET, C#, and .NET 5.0, backed by a relational SQL Server database.

---

## Challenges & Solutions
* **Challenge:** Handling asynchronous data exchange and updating the user interface dynamically while maintaining data integrity across the backend.
  * *Solution:* Implemented structured AJAX requests using jQuery to communicate efficiently with ASP.NET controllers, ensuring smooth data flow and immediate feedback for user actions.
* **Challenge:** Designing a flexible relational database schema in SQL Server to accurately track varied timesheet entries and employee activity logs.
  * *Solution:* Normalized database tables with proper foreign key constraints and optimized queries within the .NET backend to handle complex search and retrieval operations quickly.

---

## Learning Points
* Gained hands-on experience building full-stack web applications using ASP.NET, C#, and .NET 5.0.
* Strengthened understanding of relational database design and management with SQL Server.
* Enhanced front-end interactivity skills by implementing asynchronous API communications with jQuery.
`,featured:!1,skillId:[`78b72b27-a65b-4a86-9ef5-13f081beefd1`,`48f6fd98-862d-4287-be5b-5b62a37ae47f`,`0982a0ad-ac8d-437b-97d0-e2ff708603f7`,`c169bcbb-db33-4507-873e-54aad752b4b3`,`0922cb9d-641a-4b0a-bc0a-3b6e298ef468`,`beb936e8-a966-48ae-9839-7b924c47bc83`]},{id:`8195daa1-cce7-4358-b98b-2ee1ed8038ac`,title:`E-commerce Platform`,description:`A full-stack application built with code first approach that utilizes SQL Server database on Azure. A template application that helps the users to start an online shop with minimal edit.`,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# E-commerce Platform

## Project Overview
**Type of Project:** Full-Stack Web Application

The E-commerce Platform is a full-stack template application built using a code-first approach to help users rapidly launch an online shop with minimal configuration, powered by cloud infrastructure on Azure.

---

## Features Provided
* **Rapid Storefront Template:** Provides a ready-to-use e-commerce template enabling users to spin up an online shop quickly.
* **Code-First Database Architecture:** Leverages a code-first database design approach integrated with SQL Server hosted on Azure Cloud.
* **Modern Reactive Frontend:** A responsive user interface built with Vue.js and the Quasar framework, offering a polished shopping experience.
* **Backend API & Services:** Robust server-side architecture driven by ASP.NET, C#, and .NET 6.0, supported by Node.js tooling.

---

## Challenges & Solutions
* **Challenge:** Designing a flexible, code-first database schema that can be easily adapted by different users for diverse e-commerce inventories without requiring deep structural rewrites.
  * *Solution:* Implemented Entity Framework Core migrations with modular entity design, allowing seamless database generation and updates on SQL Server.
* **Challenge:** Ensuring smooth cross-platform compatibility and high performance on the frontend while maintaining clean integration with the .NET backend API.
  * *Solution:* Utilized Vue.js and Quasar components to build pre-styled, responsive UI modules that consume RESTful endpoints efficiently.

---

## Learning Points
* Gained deep experience in code-first architectural patterns using .NET 6.0 and Entity Framework Core.
* Mastered cloud deployment and database management using Azure Cloud and SQL Server.
* Enhanced front-end development capabilities using Vue.js and the Quasar framework for scalable web templates.
`,featured:!0,skillId:[`78b72b27-a65b-4a86-9ef5-13f081beefd1`,`48f6fd98-862d-4287-be5b-5b62a37ae47f`,`0982a0ad-ac8d-437b-97d0-e2ff708603f7`,`c169bcbb-db33-4507-873e-54aad752b4b3`,`46b92a2f-3adb-41e2-96a9-1ea1621361f4`,`0922cb9d-641a-4b0a-bc0a-3b6e298ef468`,`5840eab3-214f-4f9f-9ebe-0ccec705e868`,`037469d9-1a7f-4237-8d98-feb5cd74afd1`,`83f0e84e-6a9f-4c99-ad0d-cd5aaf675b89`]},{id:`8ad71708-ff29-426f-9299-e6ea8f1c4208`,title:`Playd`,description:`A social network platform designed for music enthusiasts, allowing users to track, review, and share their music experiences. `,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Playd

## Project Overview
**Type of Project:** Full-Stack Web Application

Playd is a social network platform designed specifically for music enthusiasts, empowering users to track, review, and share their musical discoveries and listening experiences within an interactive community.

---

## Features Provided
* **Music Experience Tracking & Reviews:** Allows users to log their favorite tracks, write in-depth reviews, and rate music albums or songs.
* **Social Sharing Feed:** A dynamic community feed where users can share their music logs, interact with friends, and discover new tracks.
* **Flexible Data Storage:** A robust NoSQL database model via MongoDB to manage complex user profiles, review histories, and social connections efficiently.
* **Modern Interactive Frontend:** A responsive and polished user interface built with React, JavaScript, and Material-UI (MUI).
* **Efficient API Layer:** Powered by Node.js and Express.js, leveraging GraphQL for flexible, precise client-side data queries.

---

## Challenges & Solutions
* **Challenge:** Designing a scalable schema to handle diverse music review data, user interactions, and rapid social feed updates without performance degradation.
  * *Solution:* Utilized MongoDB's document-oriented structure to model flexible schemas for user profiles and nested review documents, optimizing query performance for social feeds.
* **Challenge:** Managing complex data fetching and minimizing over-fetching between the React frontend and backend services.
  * *Solution:* Implemented GraphQL queries and mutations with Express.js and Node.js, allowing the frontend to request precisely the data needed for dynamic profile views and review components.

---

## Learning Points
* Gained extensive experience building full-stack social platforms using the MERN stack integrated with GraphQL.
* Mastered designing flexible schemas and managing document relationships using MongoDB and NoSQL principles.
* Enhanced UI/UX design capabilities by creating clean, responsive components with React and MUI.
`,featured:!0,skillId:[`0922cb9d-641a-4b0a-bc0a-3b6e298ef468`,`1573aa58-5360-424b-9528-29cfc81a070d`,`b8046640-9316-4ad8-953c-ccb991a7c857`,`19c6bbe1-0bab-4c59-8e74-99ea589bb70e`,`83f0e84e-6a9f-4c99-ad0d-cd5aaf675b89`,`bfa83932-06d7-4b0f-a877-324bc7e3cd43`,`9aae535f-712f-4952-96ac-90b340172ae9`]},{id:`decf78bf-80d8-432c-9d3f-ff9c9211549f`,title:`Home Server - Proxmox`,description:`A home server created to make use of the LAN and the extra storage to facilitate NAS and other fun things.`,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Home Server - Proxmox

## Project Overview
**Type of Project:** Full-Stack / Infrastructure & Systems Architecture

The Home Server - Proxmox project is a robust, self-hosted virtualization and network-attached storage (NAS) environment designed to maximize local network utility, repurpose extra hardware storage, and centralize home automation, media streaming, and utility services.

---

## Features Provided
* **Centralized Network-Attached Storage (NAS):** High-capacity data pooling, file sharing, and automated snapshots via TrueNAS Scale.
* **Virtualization & Containerization:** Proxmox hypervisor managing lightweight LXC containers and robust virtual machines, orchestrated using Docker for individual application workloads.
* **Reverse Proxy & Secure Routing:** NGINX acting as a reverse proxy with SSL termination for secure internal and external service access.
* **Automated Reproducible Configurations:** NixOS integration ensuring declarative, version-controlled system configurations and seamless reproducibility.

---

## Challenges & Solutions
* **Challenge:** Managing complex networking configurations and maintaining secure reverse proxy routing across multiple isolated containerized services without exposing vulnerabilities.
  * *Solution:* Implemented NGINX with centralized SSL certificates and structured upstream routing blocks, combined with strict firewall rules on Proxmox to isolate management interfaces from public-facing services.
* **Challenge:** Ensuring storage integrity and seamless data sharing between the hypervisor, NAS OS, and Docker containers.
  * *Solution:* Configured ZFS pools within TrueNAS Scale for robust data integrity and fault tolerance, passing direct mount points securely to respective Docker containers.

---

## Learning Points
* Gained deep, hands-on experience in enterprise-grade virtualization, hypervisor management, and ZFS storage administration using Proxmox and TrueNAS Scale.
* Mastered declarative infrastructure management through NixOS, significantly improving system reliability and reproducibility.
* Enhanced understanding of secure local networking, reverse proxy architecture with NGINX, and container orchestration strategies.
`,featured:!0,skillId:[`d7e638c6-ca31-40c2-b515-105eb60c9f73`,`76e6f0ba-7448-42d0-ba36-11c7ffe95c5a`,`484d4691-6b2b-4f9b-8db9-3df0e169fa24`,`e7ec7094-0a6a-4ac0-828c-0ae9567556ce`,`59755785-af21-4de9-ad21-8c91501374b0`]},{id:`153fb770-3090-46e0-9080-5365d0d0f279`,title:`Travel Advisory App`,description:`A full-stack web application developed to check for travel conditions and advisories based on the target destinations.`,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Travel Advisory App

## Project Overview
**Type of Project:** Full-Stack Web Application

The Travel Advisory App is a full-stack web platform developed to provide users with real-time travel conditions, safety insights, and government advisories based on their target destinations.

---

## Features Provided
* **Destination Search & Advisories:** Allows users to query specific countries or cities to instantly retrieve comprehensive travel conditions and safety alerts.
* **Interactive Responsive Interface:** A modern, accessible user interface built with React.js, Vite, and Material-UI (MUI) for seamless cross-device browsing.
* **Efficient API & Query Layer:** High-performance backend services powered by Fastify and Node.js, utilizing GraphQL for optimized data retrieval.
* **Scalable Data Storage & Testing:** Secure document storage via MongoDB alongside robust end-to-end testing implemented with Cypress.
* **Cloud Hosting:** Deployed and scaled efficiently using AWS Elastic Beanstalk for high availability.

---

## Challenges & Solutions
* **Challenge:** Handling complex and nested travel advisory data structures while ensuring fast response times for client queries.
  * *Solution:* Implemented GraphQL with Fastify and Node.js, allowing the frontend to request exact datasets and prevent network over-fetching.
* **Challenge:** Ensuring reliable deployment pipelines and maintaining UI component stability across updates.
  * *Solution:* Configured AWS Elastic Beanstalk for automated cloud environment management and integrated comprehensive end-to-end test suites using Cypress.

---

## Learning Points
* Gained hands-on experience deploying and managing cloud applications using AWS Elastic Beanstalk.
* Strengthened proficiency in building modern full-stack architectures with React, Vite, Fastify, and GraphQL.
* Mastered end-to-end testing practices using Cypress to ensure application reliability.
`,featured:!1,skillId:[`0922cb9d-641a-4b0a-bc0a-3b6e298ef468`,`1573aa58-5360-424b-9528-29cfc81a070d`,`b8046640-9316-4ad8-953c-ccb991a7c857`,`a6f96db8-1a98-4e2f-80d7-6b4a81823613`,`643aef0a-c5b1-4828-9948-3d49ce23e334`,`83f0e84e-6a9f-4c99-ad0d-cd5aaf675b89`,`5a6481bb-ba20-4aa7-a1d1-ff078158d311`,`9aae535f-712f-4952-96ac-90b340172ae9`,`19c6bbe1-0bab-4c59-8e74-99ea589bb70e`,`99791e75-2579-458d-bac8-85041173e5bc`]},{id:`4ece98ca-5bcc-4e56-8330-8a0078599635`,title:`Better Tea`,description:`An Android app created using Kotlin in Android Studio to serve hot and breaking news from NY Times website right in your hands.`,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Better Tea

## Project Overview
**Type of Project:** Mobile Application (Android)

Better Tea is a native Android application developed to deliver hot and breaking news directly from the New York Times website right to users' fingertips in a clean, modern mobile interface.

---

## Features Provided
* **Breaking News Feed:** Fetches and displays real-time top stories and breaking news articles directly from the New York Times API.
* **Push Notifications & Analytics:** Integrates Firebase for sending timely news alerts and tracking user engagement metrics.
* **Native Android Interface:** Built natively using Kotlin and Android Studio for optimal performance, smooth scrolling, and intuitive touch navigation.
* **Article Saving & Sharing:** Allows users to bookmark favorite news pieces and share articles across social platforms.

---

## Challenges & Solutions
* **Challenge:** Handling asynchronous network requests from the NY Times API and managing UI state updates smoothly without freezing the main thread on mobile devices.
  * *Solution:* Utilized Kotlin Coroutines to handle background API calls safely, ensuring responsive UI rendering and efficient data parsing.
* **Challenge:** Implementing reliable push notification delivery for breaking news updates across different Android OS versions.
  * *Solution:* Integrated Firebase Cloud Messaging (FCM) with custom notification channels to handle background message reception and display alerts correctly.

---

## Learning Points
* Gained deep, hands-on experience in native Android mobile development using Kotlin and Android Studio.
* Mastered asynchronous programming in mobile apps using Kotlin Coroutines.
* Enhanced knowledge of third-party API integration and cloud messaging services via Firebase.
`,featured:!1,skillId:[`c6663250-9ae0-4dc7-822a-070530945f89`,`2b64e489-4885-41c8-b82b-43e1f60b398e`,`eaf73bf2-a497-4a26-9c9a-796739cb8dd0`]},{id:`ee2f669c-166e-4732-bf45-322963e71cf4`,title:`To-do App`,description:`A mobile app created for the mobile platform Android with Java. Used to create tasks and list them, along with various options, such as notifying the user about the completion of the tasks.`,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# To-do App

## Project Overview
**Type of Project:** Mobile Application (Android)

The To-do App is a native Android mobile application designed to help users efficiently manage their daily responsibilities by creating tasks, organizing lists, and providing reminders for task completion.

---

## Features Provided
* **Task Creation & Management:** Intuitive interface enabling users to add, edit, and organize daily tasks into structured lists.
* **Completion Notifications:** Timely alerts and reminders notifying users about task deadlines and completion statuses.
* **Native Android UI:** Developed specifically for the Android platform using Java and Android Studio for reliable mobile performance.
* **Persistent Local Storage:** Saves user tasks locally so data remains intact across app restarts.

---

## Challenges & Solutions
* **Challenge:** Managing background notification scheduling and ensuring reminders trigger accurately even when the application is closed or in the background.
  * *Solution:* Implemented Android AlarmManager and BroadcastReceivers to schedule and trigger task completion notifications reliably.
* **Challenge:** Maintaining a smooth, responsive user interface while handling local database operations for task lists.
  * *Solution:* Used asynchronous background threads and structured SQLite/Room database queries to prevent UI freezing during data read and write operations.

---

## Learning Points
* Gained strong foundational experience in native Android application development using Java and Android Studio.
* Mastered mobile lifecycle management, background services, and notification scheduling systems.
* Improved understanding of local data persistence and UI responsiveness in mobile environments.
`,featured:!1,skillId:[`ba70488d-925f-43d0-a003-ac7cfa449c2d`,`2b64e489-4885-41c8-b82b-43e1f60b398e`]},{id:`f0a0c61c-4def-4526-af73-baecbeec2231`,title:`Pandemic Simulator`,description:`A full-stack desktop GUI application that allows the user to input certain parameters, and then run a simulation to see how quickly a pandemic disease will spread through a population of a given size within a certain time.`,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Pandemic Simulator

## Project Overview
**Type of Project:** Full-Stack Desktop GUI Application

The Pandemic Simulator is a desktop application designed to model and visualize the spread of infectious diseases through a population. It allows users to configure specific epidemiological parameters and run real-time simulations to observe how quickly a disease propagates over a given timeframe.

---

## Features Provided
* **Custom Parameter Configuration:** Interface allowing users to input population size, transmission rates, recovery rates, and simulation duration.
* **Interactive Desktop GUI:** Built using Java Swing, providing responsive buttons, input fields, and control panels for managing simulations.
* **Real-Time Visualizations:** Graphical rendering and statistical readouts depicting infection curves, recovery rates, and susceptible population counts over time.
* **Simulation Controls:** Ability to start, pause, reset, and adjust simulation speeds dynamically.

---

## Challenges & Solutions
* **Challenge:** Ensuring the graphical user interface remained responsive and fluid while executing intensive simulation loops and frequent data updates on the backend.
  * *Solution:* Implemented Java Swing's \`SwingWorker\` concurrency framework to run simulation computations on a separate background thread, preventing UI freezing and stuttering.
* **Challenge:** Accurately modeling complex epidemiological behaviors and rendering real-time statistical curves without performance degradation.
  * *Solution:* Optimized data structures for population tracking and utilized custom JPanel painting routines (\`paintComponent\`) to render smooth real-time graphs efficiently.

---

## Learning Points
* Gained deep experience in building desktop graphical user interfaces using Java and Swing.
* Mastered multi-threading and concurrency in Java (\`SwingWorker\`) to ensure smooth UI responsiveness during heavy computations.
* Enhanced mathematical modeling and algorithmic design skills for simulating dynamic systems.
`,featured:!1,skillId:[`ba70488d-925f-43d0-a003-ac7cfa449c2d`]},{id:`57abd7eb-f800-4c8e-ad88-740c94b71d0e`,title:`Ticket System Database`,description:`A full-stack ticket creation, management, tracking system built on MS Access and VBA using separate backend (database) and frontend (UI) files with remote connection and authentication enabled.`,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Ticket System Database

## Project Overview
**Type of Project:** Full-Stack Desktop Application (Database & UI Split Architecture)

The Ticket System Database is a full-stack ticket creation, management, and tracking system built using MS Access and VBA, featuring a separated backend database and frontend user interface with remote connection and authentication enabled.

---

## Features Provided
* **Ticket Creation & Management:** Comprehensive interface for users to submit, update, and manage support tickets efficiently.
* **Separated Architecture:** Split database design utilizing distinct backend data files and frontend UI files to ensure data integrity and ease of maintenance.
* **Authentication & Remote Access:** Secure login system with user authentication and remote connection capabilities for multi-user environments.
* **Tracking & Reporting:** Built-in tracking mechanisms to monitor ticket status progression through various stages of resolution.

---

## Challenges & Solutions
* **Challenge:** Maintaining stable remote connections and ensuring data synchronization between distributed frontend UI files and the shared backend database over a network.
  * *Solution:* Optimized linked table architectures in MS Access and implemented structured error-handling routines in VBA to manage connection drops gracefully.
* **Challenge:** Securing access to sensitive ticket records and administrative controls in a desktop database environment.
  * *Solution:* Developed a custom login and authentication module using VBA to restrict form access based on user credentials and roles.

---

## Learning Points
* Gained advanced proficiency in MS Access database design and VBA programming for enterprise desktop applications.
* Mastered split-database architectures with separated frontend and backend files for multi-user environments.
* Enhanced understanding of implementing user authentication and remote database connections in legacy-supported frameworks.
`,featured:!0,skillId:[`fc862c2b-00e5-465e-8122-7cd866262b78`,`ea80ba67-09d7-40ac-91aa-e0ab1f826779`,`35bd7e99-14d6-4af0-b89a-4cafee4c1318`]},{id:`b2d32fab-6d6f-4c64-9de7-35bf4cc2b26f`,title:`Database Automation with PL/SQL`,description:`A script written in SQL with a number of functions and stored procedures using PL/SQL to simplify the complexity of data management.`,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Database Automation with PL/SQL

## Project Overview
**Type of Project:** Database Automation Script & Utility Module

Database Automation with PL/SQL is a robust database automation script utilizing a suite of stored procedures and custom functions written in PL/SQL to simplify and streamline complex data management and administrative workflows.

---

## Features Provided
* **Automated Data Management:** Stored procedures and custom functions that automate routine data processing and transformation tasks.
* **Complex Logic Encapsulation:** Centralizes business logic directly within the database layer using PL/SQL packages and routines.
* **Administrative Interface:** Leverages Oracle APEX to provide a web-based dashboard and interface for managing and monitoring automated jobs.
* **Error Handling & Logging:** Built-in exception handling to capture errors and maintain audit trails during bulk data operations.

---

## Challenges & Solutions
* **Challenge:** Handling large volumes of transactional data efficiently within procedural blocks without causing database performance bottlenecks.
  * *Solution:* Optimized SQL queries and utilized bulk processing features like \`FORALL\` and \`BULK COLLECT\` in PL/SQL to minimize context switching between the SQL and PL/SQL engines.
* **Challenge:** Managing complex dependencies and transactional consistency across multiple nested stored procedures.
  * *Solution:* Implemented structured exception handling with explicit savepoints and rollback logic to ensure data integrity upon failure.

---

## Learning Points
* Gained advanced proficiency in PL/SQL programming and database automation strategies within Oracle environments.
* Mastered performance tuning techniques for bulk data operations and cursor management.
* Enhanced capabilities in building administrative web interfaces and data management tools using Oracle APEX.
`,featured:!1,skillId:[`24d7e7f8-d159-4ffc-ac7b-74049cd65f69`,`35bd7e99-14d6-4af0-b89a-4cafee4c1318`]},{id:`e592d715-1e16-460e-82d7-25ed86cb54b1`,title:`SimpleBot - A Discord Bot`,description:`A bot made for the IM platform Discord with Python as its core language to assist the server members.`,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# SimpleBot - A Discord Bot

## Project Overview
**Type of Project:** Chatbot / Discord Bot Utility

SimpleBot is a conversational and administrative Discord bot developed in Python to assist server members, automate routine moderation tasks, and provide interactive utilities within Discord communities.

---

## Features Provided
* **Server Member Assistance:** Automated response system and utility commands designed to help members navigate and interact within the Discord server.
* **Webhook & API Integration:** Built-in web server capabilities using Flask to handle external webhooks, status checks, and API event callbacks.
* **Core Python Architecture:** Efficient event-driven architecture built on Python for fast command execution and reliable uptime.

---

## Challenges & Solutions
* **Challenge:** Managing asynchronous event loops for real-time Discord messaging while simultaneously handling synchronous HTTP requests via webhooks.
  * *Solution:* Integrated asynchronous event handling for Discord API interactions alongside a lightweight Flask web server running on a separate thread or process to manage incoming HTTP hooks cleanly.
* **Challenge:** Ensuring the bot remains responsive and handles unexpected disconnects or rate limits from the Discord API gracefully.
  * *Solution:* Implemented robust error-handling wrappers, automatic reconnection logic, and command rate-limiting mechanisms.

---

## Learning Points
* Gained practical experience in developing interactive bots using Python for real-time chat platforms.
* Mastered bridging asynchronous bot event loops with web frameworks like Flask.
* Enhanced knowledge of API integration, event-driven programming, and deployment strategies for chat applications.
`,featured:!1,skillId:[`5a476bdd-a90d-43c8-8b4b-674b0dfdcb0b`,`d1b545b3-48ad-45e0-99c9-ebc4f7d9b973`]},{id:`be64f769-4e53-4889-ac84-81c187eadba5`,title:`Ocean Swimmer`,description:`A 2D side scrolling game created in Unity using C# as the fundamental programming language. The game is available free-to-play on the web at mosarah99.itch.io. `,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Ocean Swimmer - The Game

## Project Overview
**Type of Project:** 2D Side-Scrolling Video Game

Ocean Swimmer is an engaging 2D side-scrolling browser game developed in Unity using C#, where players navigate an aquatic environment, dodge obstacles, and collect items. The game is publicly available free-to-play on the web via itch.io.

---

## Features Provided
* **2D Side-Scrolling Gameplay:** Fluid movement mechanics allowing players to navigate horizontally through underwater biomes.
* **Obstacle & Collectible Systems:** Dynamic spawning and collision detection for hazards, power-ups, and score-boosting items.
* **Web-Optimized Build:** Exported using Unity's WebGL target to provide seamless, zero-installation gameplay directly in web browsers.
* **Scoring & Progression:** Real-time score tracking, health systems, and game-over/restart loops.

---

## Challenges & Solutions
* **Challenge:** Optimizing physics calculations and asset memory usage to ensure smooth 60 FPS performance within web browser constraints (WebGL).
  * *Solution:* Minimized texture resolutions, compressed audio files, and streamlined 2D Rigidbody collision layers to reduce browser memory overhead and loading times.
* **Challenge:** Implementing responsive, fluid underwater movement physics using C# scripts that felt natural and resisted gravity constraints.
  * *Solution:* Custom-tuned Unity's 2D physics gravity scale and wrote modular custom movement controllers applying customized drag forces in C#.

---

## Learning Points
* Gained hands-on experience in 2D game development, scene management, and physics handling within the Unity engine using C#.
* Mastered the WebGL build pipeline for deploying interactive games directly to web platforms like itch.io.
* Enhanced game design skills, particularly around input handling, collision detection, and performance optimization for web browsers.
`,featured:!1,skillId:[`7f775a92-63e3-4bf5-a5bc-31a1891306de`,`78b72b27-a65b-4a86-9ef5-13f081beefd1`]},{id:`4e8d0155-4b2b-4f70-83fc-64c4c6bfbeb1`,title:`Khronos`,description:`A C++ project converting dates between different calendars to a Julian Date Number, highlighting test-driven development based on UML class diagrams.`,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Khronos - The Calendar Project

## Project Overview
**Type of Project:** C++ Library / Utility Application

Khronos is a C++ utility developed to convert dates between various calendar systems and a standardized Julian Date Number, emphasizing rigorous test-driven development (TDD) guided by UML class diagrams.

---

## Features Provided
* **Calendar Date Conversion:** Accurate conversion algorithms mapping dates from different historical and modern calendar systems into a unified Julian Date Number.
* **Test-Driven Architecture:** A comprehensive suite of automated unit tests validating calendar math across edge cases, leap years, and historical transitions.
* **UML-Guided Design:** Well-structured class hierarchy and modular architecture designed strictly around detailed UML class diagrams.
* **Modular C++ Library:** Clean, high-performance object-oriented codebase built for extensibility and integration.

---

## Challenges & Solutions
* **Challenge:** Handling complex calendar anomalies, historical date shifts, and leap year calculations accurately without introducing conversion discrepancies.
  * *Solution:* Implemented rigorous unit testing suites before writing core conversion logic, ensuring every edge case defined in the UML models was thoroughly validated.
* **Challenge:** Designing an extensible object-oriented class structure that could support multiple distinct calendar systems cleanly.
  * *Solution:* Utilized polymorphism and abstract base classes in C++ to establish a standardized interface for different calendar implementations.

---

## Learning Points
* Gained deep practical experience in test-driven development (TDD) methodologies using C++.
* Mastered object-oriented design patterns and translating UML class diagrams into robust code implementations.
* Enhanced understanding of complex date algorithms, historical calendar systems, and time representation logic.
`,featured:!1,skillId:[`6e47c1f3-d51f-44de-885a-9b46971877ad`]},{id:`393052bc-6c96-466f-a514-7ef0aff05f89`,title:`Hospital Patients' Management`,description:`A C++ program simulating a hospital queue managing patients based on calculated priority using a priority queue and class modeling. `,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Hospital Patients' Management

## Project Overview
**Type of Project:** Console Application / Data Structures Simulation

Hospital Patients' Management is a C++ simulation program designed to manage emergency room patient queues efficiently. It prioritizes patients dynamically based on calculated medical urgency rather than strict arrival order, utilizing advanced data structures and object-oriented class modeling.

---

## Features Provided
* **Priority-Based Queueing:** Automatically sorts and schedules patients based on calculated triage priority scores rather than a standard First-In, First-Out (FIFO) approach.
* **Patient Class Modeling:** Object-oriented structure representing individual patients with attributes such as name, age, symptom severity, and arrival timestamp.
* **Dynamic Queue Operations:** Supports insertion of new patients, treating/discharging the highest-priority patient, and displaying the current queue status.
* **Efficient Heap Operations:** Leverages C++ Standard Template Library (STL) priority queues for rapid sorting and retrieval of critical patients.

---

## Challenges & Solutions
* **Challenge:** Designing a custom priority comparison mechanism that accurately weights both symptom severity and waiting time to prevent patient starvation in the queue.
  * *Solution:* Implemented a custom comparator function within the C++ priority queue structure that factors in initial triage severity alongside an aging factor for time elapsed.
* **Challenge:** Maintaining efficient memory management and preventing memory leaks while dynamically allocating and removing patient objects.
  * *Solution:* Utilized smart pointers and standard container storage to manage object lifecycles cleanly without manual memory management overhead.

---

## Learning Points
* Gained advanced proficiency in implementing and customizing data structures like priority queues in C++.
* Strengthened object-oriented design and class modeling skills for real-world simulation scenarios.
* Enhanced understanding of algorithmic efficiency and triage management logic.
`,featured:!1,skillId:[`6e47c1f3-d51f-44de-885a-9b46971877ad`]},{id:`17a42d92-2872-4615-a543-7361d93080cf`,title:`Worldwide Importers Data Mart`,description:`A data warehouse built in MSSQL Server based on the Worldwide Importers database, simulating real-world handling of databases through various stages and techniques. `,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Worldwide Importers Data Mart

## Project Overview
**Type of Project:** Data Warehouse / Business Intelligence Database

The Worldwide Importers Data Mart is a comprehensive data warehouse built in Microsoft SQL Server based on the enterprise Worldwide Importers sample database, simulating real-world database management through various Extract, Transform, Load (ETL) stages and advanced optimization techniques.

---

## Features Provided
* **Dimensional Modeling:** Structured star and snowflake schemas optimized for analytical querying and reporting.
* **ETL Pipeline Simulation:** Stored procedures and automated scripts simulating data extraction, cleaning, transformation, and loading from operational sources into the data warehouse.
* **Performance Optimization:** Implemented clustered and non-clustered columnstore indexes, partitioning, and optimized statistics to accelerate heavy analytical queries.
* **Data Integrity & Auditing:** Comprehensive constraints, error-handling mechanisms, and audit tables to track data load success and anomaly detection.

---

## Challenges & Solutions
* **Challenge:** Handling large volumes of transactional data and transforming it efficiently without creating performance bottlenecks during the ETL cycle.
  * *Solution:* Designed incremental data loading strategies using change data capture (CDC) logic and bulk insert operations within MSSQL Server.
* **Challenge:** Optimizing slow-running analytical queries against massive fact tables.
  * *Solution:* Implemented partitioned tables and columnstore indexes to drastically reduce I/O and query execution time for historical reporting.

---

## Learning Points
* Gained deep, practical experience in data warehouse architecture, dimensional modeling, and ETL design using MSSQL Server.
* Mastered database performance tuning techniques including indexing, table partitioning, and query optimization.
* Enhanced understanding of enterprise database administration and business intelligence data flows.
`,featured:!1,skillId:[`c169bcbb-db33-4507-873e-54aad752b4b3`,`35bd7e99-14d6-4af0-b89a-4cafee4c1318`]},{id:`d56509ee-956d-44e5-954d-a8da07dcafc9`,title:`Responsive Portfolio Website Template`,description:`A templated website created with HTML5, CSS3, and JavaScript, provides a responsive website template to build a portfolio website. `,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Responsive Portfolio Website Template

## Project Overview
**Type of Project:** Website Template / Front-End Web Application

The Responsive Portfolio Website Template is a modern, pre-designed website template built with HTML5, CSS3, and JavaScript to help developers and professionals quickly launch a fully responsive personal portfolio website.

---

## Features Provided
* **Fully Responsive Design:** Fluid layouts and media queries ensuring seamless compatibility across desktop, tablet, and mobile screen sizes.
* **Interactive UI Elements:** Dynamic navigation bars, smooth scrolling, and filterable project galleries powered by JavaScript and jQuery.
* **Contact Form Integration:** Pre-styled contact section with client-side form validation.
* **Clean & Modular Codebase:** Well-structured HTML5 markup and modular CSS3 stylesheets that are easy to customize and deploy.

---

## Challenges & Solutions
* **Challenge:** Ensuring consistent layout behavior and typography scaling across a wide variety of mobile and desktop device viewports.
  * *Solution:* Adopted a mobile-first design approach using CSS Flexbox and Grid, paired with relative unit sizing and targeted media queries.
* **Challenge:** Implementing smooth animations and interactive DOM manipulations without impacting page load speed or responsiveness.
  * *Solution:* Leveraged lightweight jQuery scripts and optimized CSS transitions for smooth scrolling and toggle effects.

---

## Learning Points
* Gained solid proficiency in modern front-end web development using HTML5, CSS3, and JavaScript.
* Mastered responsive design patterns and layout frameworks like Flexbox and CSS Grid.
* Enhanced understanding of UI/UX principles and efficient client-side scripting with jQuery.
`,featured:!1,skillId:[`41061e52-b6d9-4039-b070-6f5887ab1334`,`39b90a9c-8da2-4262-8351-47a837721b35`,`0922cb9d-641a-4b0a-bc0a-3b6e298ef468`,`beb936e8-a966-48ae-9839-7b924c47bc83`]},{id:`bb77af2d-cd47-48f5-9fbb-3252cf5c7ae1`,title:`Contacts`,description:`A mobile app to store and manage contact information, call, send SMS, or email.`,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Contacts

## Project Overview
**Type of Project:** Mobile Application (Cross-Platform)

Contacts is a cross-platform mobile application designed to store, organize, and manage personal contact information, with built-in functionality to call, send SMS, or email contacts directly from the app interface.

---

## Features Provided
* **Contact Directory & Management:** Comprehensive interface to add, edit, delete, and search through personal contact lists.
* **Direct Communication Integration:** Quick-action buttons allowing users to make phone calls, send text messages (SMS), or compose emails directly using device intents.
* **Smooth Cross-Platform Navigation:** Seamless screen transitions and navigation flows implemented using React Navigation.
* **Mobile-Optimized Framework:** Built with React Native and Expo for rapid development and consistent performance across iOS and Android devices.

---

## Challenges & Solutions
* **Challenge:** Integrating native device communication features (phone dialer, SMS app, and email client) reliably across different mobile operating systems within a React Native environment.
  * *Solution:* Leveraged Expo linking and device APIs to handle deep linking and intents securely for phone calls, messaging, and email protocols.
* **Challenge:** Ensuring smooth navigation performance and state management when passing contact details across multiple screens.
  * *Solution:* Configured React Navigation with typed parameters and optimized component rendering lifecycles to prevent UI lag during list scrolling.

---

## Learning Points
* Gained hands-on experience in cross-platform mobile development using React Native and Expo.
* Mastered mobile navigation patterns and stack management with React Navigation.
* Enhanced understanding of integrating native device capabilities (calling, messaging, and emailing) into web-derived mobile architectures.
`,featured:!1,skillId:[`a9470417-9dc8-403b-8bb6-5a83817f54f9`,`fa192048-20ad-4975-ba34-afb13e15c06f`,`212c8ad5-903c-4b50-887c-037b0b6ea06a`]},{id:`ba8fc431-c7d6-46ab-9bba-e28fe17fd6b9`,title:`Alarm My Android`,description:`An android app to manage the alarms on the phone. `,image:`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`,detail_description:`
# Alarm My Android

## Project Overview
**Type of Project:** Mobile Application (Android)

Alarm My Android is a native Android application developed to manage, set, and customize phone alarms efficiently through a clean, intuitive mobile interface.

---

## Features Provided
* **Alarm Management:** Interface allowing users to create, modify, enable, disable, and delete custom phone alarms.
* **Sound & Vibration Controls:** Options to select custom ringtones, adjust volume levels, and configure vibration patterns for individual alarms.
* **Native Android Interface:** Developed natively using Java and Android Studio for reliable background performance and system integration.
* **Persistent Alarm Storage:** Stores alarm schedules locally so settings remain active after reboots or app restarts.

---

## Challenges & Solutions
* **Challenge:** Ensuring alarms trigger precisely at scheduled times, even when the device enters deep sleep or power-saving modes.
  * *Solution:* Implemented Android AlarmManager with \`setExactAndAllowWhileIdle()\` alongside BroadcastReceivers to wake the device securely when alarms are due.
* **Challenge:** Managing background audio playback and waking up the phone screen reliably when an alarm triggers.
  * *Solution:* Utilized Android Foreground Services and Wakelocks to handle audio playback and display the alarm UI above the lock screen smoothly.

---

## Learning Points
* Gained practical experience in native Android application development using Java and Android Studio.
* Mastered system-level Android APIs including AlarmManager, BroadcastReceivers, and WakeLocks.
* Enhanced understanding of background task management and device power state handling on mobile platforms.
`,featured:!1,skillId:[`ba70488d-925f-43d0-a003-ac7cfa449c2d`,`2b64e489-4885-41c8-b82b-43e1f60b398e`]}];export{t as n,n as t};