# Project Installation Guide

This guide will help you understand how to install the project on your local machine.

## Prerequisites

Before you begin, make sure you have the following software installed:

- [Python](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/en/download)
- [Git](https://git-scm.com/downloads)

## Installation Steps

1. Clone the repository using the following command:

   - git clone https://github.com/divitrao/3analytics.git

2. Open your terminal and navigate to the `django_backend` directory using the following command:

   - cd django_backend

3. Setting up the virtual environment and installing packages for Django:

- Run the following command to create a virtual environment named `env`:

  ```
  python -m venv env
  ```

- Activate the environment. If you're using Git Bash, use:

  ```
  source env/Scripts/activate
  ```

  If you're using Windows Command Prompt, use:

  ```
  env\Scripts\activate
  ```

- Install the required packages using the following command:
  ```
  pip install -r requirements.txt
  ```

4. Create an `.env` file in the `django_backend` directory and add the necessary environment variables as mentioned in the `env.sample` file. For now i'm pasting my env in env.sample copy paste the same in .env and replace postgres related variable as per your requirements

5. Run the following commands to set up the database:

   ```
   python manage.py makemigrations
   python manage.py migrate
   ```

6. You're all set! The project is now ready to be run.

## Frontend Project Setup

To set up the frontend project, please follow these steps:

1. Open your terminal.
2. Navigate to the `react_frontend` directory using the command:
   - ` cd react_frontend `
3. Install the required dependencies by running the following command:
   - ` npm i `
4. Start the development server using the following command:
   - ` npm start`

## Usage

At this point, you have successfully installed the project.

## Troubleshooting

If you encounter any issues during the installation process, feel free to reach out for assistance.

Happy coding!
