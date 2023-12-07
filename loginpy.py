import getpass

def login():
    # Hardcoded username and password (replace with your actual credentials)
    correct_username = "add"
    correct_password = "mw"

    # Get user input
    username = input("Enter your username:")
    password = getpass.getpass("Enter your password: ")


    # Check if the provided username and password are correct
    if username == correct_username and password == correct_password:
        print("Login successful!")
    else:
        print("Incorrect username or password. Please try again.")

# Call the login function
login()
