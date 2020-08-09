# library-management
This is used for management of user and books of library.

# Install MySQL on Ubutu 18.04 refer below link
https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04

After installing MySQL Please follow steps:
1. Create user in mysql and set strong password. This username and password set into app/config.json file.
2. Create developent database into MySQL.
    For Ubuntu follow steps as:
    1. Enter command `sudo mysql -u root -p`
    2. After login into MySQL then put this command to create database.`create database librarydb_dev;`
    For Windows Machine need to create database `librarydb_dev` manually if not generated automated.
    

# For running the project
1. Open terminal and go to project directory.Enter command as `npm run start` in terminal for starting backend rest API services.
2. Backend service runs on `localhost:8080` url and port.
2. For running front end follow below steps:
    1. Open terminal and go to project directory.
    2. Go to `ui_library/LibraryUi` directory and enter command `ng serve`.
    3. Open browser and enter url as `localhost:4200`.