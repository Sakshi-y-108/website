<!-- Backend Setup Instructions -->

<!-- Unzip the File: -->
Extract the downloaded file to your system.

<!-- Install Dependencies: -->
<!-- Run the following command to install the required Python packages: -->

        pip install -r requirements.txt

<!-- Navigate to the Project Directory: -->

        cd project1
<!-- Configure MySQL Settings: -->

<!-- Open the settings file (settings.py). -->

    Update the MySQL configuration as per your database credentials.

<!-- Run all commands: -->
    python manage.py makemigrations
    python manage.py migrate

<!-- Start the Development Server: -->
    python manage.py runserver





<!-- Frontend Setup Instructions -->
<!-- Navigate to the Project Directory: -->

    cd flower_deco
<!-- Install Node.js Dependencies: -->
<!-- Run the following command to install the required Node.js packages: -->

    npm install

<!-- Start the Development Server:
Run the following command to start the server: -->

    npm run dev
