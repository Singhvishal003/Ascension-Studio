# Creators' Nexus: Innovate and Inspire

## Overview

*Creators' Nexus: Innovate and Inspire* is a collaborative platform for creators to submit, showcase, and rate creative projects. This project aims to foster innovation in storytelling and filmmaking by leveraging the power of community collaboration and AI tools.

## Features

- *User Registration and Login*: Users can create accounts and log in to access the platform.
- *Project Submission*: Users can submit their creative projects with titles, descriptions, and file uploads.
- *Project Rating*: Users can rate submitted projects and view ratings and votes.
- *Enhanced UI*: An attractive and modern user interface with a dark theme for eye comfort.

## Installation 

### Prerequisites

- Python 3.x
- Flask
- Flask-SQLAlchemy
- Flask-Login
- Flask-Bcrypt

### Setup

1. Clone the repository:
    sh
    git clone https://github.com/your-username/creators-nexus.git
    

2. Navigate to the project directory:
    sh
    cd creators-nexus
    

3. Install the required packages:
    sh
    pip install flask flask_sqlalchemy flask_login flask_bcrypt
    

4. Initialize the database:
    - Open a Python shell or create an init_db.py file with the following content:
      python
      from app import db, app
      from models import User, Project

      with app.app_context():
          db.create_all()
      
    - Run the script:
      sh
      python init_db.py
      

5. Start the Flask application:
    sh
    python app.py
    

6. Open your web browser and go to http://127.0.0.1:5000/.

## Usage

### User Registration and Login

1. Navigate to the *Register* page to create a new account.
2. After registering, log in using your credentials.

### Project Submission

1. After logging in, go to the *Dashboard*.
2. Click on *Submit New Project*.
3. Fill in the project title, description, and upload the project file.
4. Click *Submit* to add the project.

### Project Rating

1. Browse the *Submitted Projects* on the homepage.
2. View project details by clicking *View Project*.
3. Rate the project by filling in the rating and clicking *Submit Rating*.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgements

- [Flask](https://flask.palletsprojects.com/) - The web framework used
- [Bootstrap](https://getbootstrap.com/) - Frontend component library
- [Google Fonts](https://fonts.google.com/) - Font used in the project
