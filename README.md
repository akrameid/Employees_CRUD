# Employees_CRUD
Sample project using Spring boot and angular framework to handle employee CRUD operations


The application consists of 3 major parts 

1) Frontend [/Angular]
- It contains the source code of the frontend components using Angular
- To start the frontend layer, please follow the following steps :
    1. Open the directory of the frontend [/Angular]
    2. Open the cmd here
    3. make sure that you have installed in your machine npm and ng packages to be able to run the following commands
    4. run the command "npm install"
    5. run the command "ng serve"
    6. now the frontend is started locally at your machine in url : http://localhost:4200
    7. To view the startup page, open url : http://localhost:4200/view-employee




2) Backend [\Backend\Task]
- It contain the source code of the backend endpoints that the frontend interact with


3) Bk_Jar 
- It contains backend executable jar to start running the backend server in the local machine easily
- Open the cmd in this folder
- Just run the command : java -jar Task-0.0.1-SNAPSHOT.jar
- Now you have the backend is running then you can go back the web page and test the application 


How to use the tool :
1) Click on "View Employees" to view all employees existed in the database
2) Click on button "Update" beside each employee to update fields in a pop-up window
3) Click on button "Delete" beside each employee to delete the employee
4) Click on button "Add Employee" to add new employee to the database


Enhancements To Be Done In The future
1) Hire Date is now string text, it can be a date picker
2) Manager Id and deparatment Id fields are now numbers, they can be shown as names and add new pages for visualize managers and departments 
3) When user click on update employee button, and then enter data then click on update . The update button is still active and it shall be disabled or hidden
