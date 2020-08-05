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
    

