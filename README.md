# Blog Project for Saya Skycraft

Welcome to the Blog Project! This application is built with Next.js 14 and allows users to perform CRUD (Create, Read,
Update, Delete) operations on blog posts. You can easily run the development server, install dependencies, and execute
tests.

## Project Overview

- **Features**:
    - **Create**: Add new blog posts.
    - **Read**: View a list of blog posts and individual post details.
    - **Update**: Edit existing blog posts.
    - **Delete**: Remove blog posts from the system.

## Getting Started

To get started with the project, follow the instructions below.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (Node.js package manager)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>```

2. **Install Dependencies**:

    ```bash
       npm install
   ```

3. **Running the Development Server**:
    ```bash
        npm run dev
   ```

This command will start the Next.js development server, and you can access the application at http://localhost:3000.

4. **Running Tests**:
    ```bash
        npm test
   ```

This command will execute all unit tests defined in the __tests__ directory using Jest.

### Folder Structure

- **`/app`**: Contains the Next.js page components and API routes.
- **`/components`**: Contains reusable React components.
- **`/lib`**: Contains database configuration.
- **`/public`**: Contains static assets like images and stylesheets.
- **`/utils`**: Contains utility functions.
- **`/__tests__`**: Includes all test files.

### How To Use:

1. **Watching blog posts**:
    - You can see them in home page.
    - You can navigate to dashboard and see all blogs in blogs-list (use dashboard button on top right).
    - In each page you can navigate to the homepage by clicking on logo in header. 
    - You can filter blogs based on category.

2. **Watching a blog post details**:
    - You can see it by clicking on each blog post on homepage.
    - You can navigate to dashboard and see all blogs in blogs-list and by clicking on title of each blog post, you can
      see all details.

3. **Add a Blog Post**:
    - Navigate to the admin page (using dashboard button) and then navigate to Add blog part, there is a form for
      adding any blog.
    - Make sure you fill all inputs unless you can't submit the form.

4. **Updating an Existing Blog Post**:
    - Navigate to the admin page (using dashboard button) and then navigate to blogs-list, there is a button for
      updating any blog.
    - Make the necessary changes and save the updated blog post.

5. **Deleting a Blog Post**:
    - Navigate to the admin page (using dashboard button) and then navigate to blogs-list, there is a button for
      deleting any blog.
    - Confirm the deletion action to remove the blog post from the system.

### Final Points:

- Author image and Author name are set by default, so you don't need to set anything.
- This project is responsive.
- You can write HTML in description. Use h1,h2,h3,p tag to have a better appearance.
- In this project I tried to do as good as possible in this limited time, but there are definitely a lot of spaces to
  improve, so feel free to give any comment to make it better.

Thank you.
