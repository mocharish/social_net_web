# FeedBook Web Repository

This repository contains the frontend for FeedBook, a social networking platform where users can create and manage posts, connect with friends, and engage with their community.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Running Instructions](#running-instructions)
- [Environment Setup](#environment-setup)
- [Workflow](#workflow)
- [Repository Links](#repository-links)

## Project Description

FeedBook is a social networking platform where users can:

- Register and log in securely.
- Create, edit, and delete posts.
- Like and comment on posts.
- Manage friend connections.
- Toggle between light and dark mode.

The frontend is built using React and connects to the backend via RESTful API endpoints.

## Features

- **User Authentication**: Secure login and registration.
- **Post Management**: Create, update, delete, and view posts.
- **Interactivity**: Like and comment on posts.
- **Friend Management**: Send, accept, and manage friend requests.
- **Dark Mode**: Toggle between light and dark themes.

## Running Instructions

### Clone the Repository

```sh
git clone https://github.com/mocharish/social_net_web.git
cd social_net_web
```

### Install Dependencies

Ensure you're in the project directory and run:

```sh
npm install
```

### Start the Application

```sh
npm start
```

This will open the application at `http://localhost:3000`.

### Sign Up and Sign In

To access the feed page, you must first register an account and then log in.

### Feed Page

Once logged in, you can:

- Create new posts.
- Edit or delete your own posts.
- Like and comment on posts.
- Toggle dark mode from the dropdown menu in the top-right corner.
- Log out.

## Environment Setup

Ensure you have the following installed:

- Node.js (v16+ recommended)
- npm or yarn
- A running instance of the FeedBook server (see [FeedBook Server Repository](https://github.com/mocharish/social_net_server))

## Workflow

### Development Process

1. **Planning**: We outlined project requirements and created a Jira board to manage tasks.
2. **Task Division**: One team member worked on authentication while another focused on the feed.
3. **Version Control**:
   - We used Git branches for different features.
   - Merged changes via pull requests after code review.
4. **Testing**: We implemented tests to ensure component functionality.

## Repository Links

- **FeedBook Web (this repository)**: [GitHub](https://github.com/mocharish/social_net_web)
- **FeedBook Server**: [GitHub](https://github.com/mocharish/social_net_server)






