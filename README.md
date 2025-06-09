How to run this Todo App API

1. open xampp and activate "Apache" and "MySQL"
2. open your git bash and run this command "git clone https://github.com/pillorajem10/todo.git"
3. once cloned run "cd todo" and once done, run "npm install"
4. in root directory of the project create a file ".env" and paste this values
# Port configuration
PORT=5000

# Database configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=todo

4. in your phpAdmin create a database named "todo"
5. in your gitbash run this command "nodemon" to activate the system
6. If there are no error message you can use your postman to run the API routes
