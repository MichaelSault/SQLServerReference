# Microsoft SQL Server Essential Training

Created: December 26, 2022 12:24 PM
Tags: In Progress, SQL, SQL Server, Study

# Introduction

- Microsoft database engine
- how to get started
- create a secure wrapper
- create queries

---

# 1. Getting Started

### Core Concepts

- what is an SQL server
    - relational db management system (rdbms)
    - creates new db components such as tables
    - stores and retrieves data from a db
    - controls access by users with varying permissions
    - creating automated backups on a regular schedule
    - monitors/applies performance optimization
- Server installations
    - runs in the background and listens for request from end users
    - typically installed on dedicated hardware
        - also on pc, cloud or container
    - single install is called an instance
        - one instance can have many databases
        - several instances can be installed on one computer
        - each instance will have a unique name on the server machine
    - send commands via SQL
        - structures query language
        - used to interact with a db
        - SQL server uses T-SQL
            - filter, sort, combine, add, update, and retrieve information records from the database
            - change permissions granted to a new user or create new db objects
    - Interfacing with SQL server
        - OoB it’s a command line-system
        - SQL Server Management Studio (SSMS) is a gui for SQL Server
            - windows only
            - Azure Data Studio is cross-platform alternative
    - SQL Server + SSMS for this course

### Choosing a SQL Server 2022 edition

- Paid Editions
    - Enterprise
        - unlimited CPU cores and memory utilization
    - Standard
        - 24 Cores
        - 128 GB memory
- Free Editions
    - Express
        - 16 Cores
        - 64 GB memory
        - some advanced features not available
    - Developer Edition
        - Unlimited free edition for development and testing
        - Similar to Enterprise but for commercial use

### Installing an SQL Server

- SQL Server 2022
- Developer Edition (Production Only)

[https://www.notion.so](https://www.notion.so)

- select @@version
    - gives current SQL version
- sp_databases
    - lists databases
- type ****go**** to run command

### Installations

- SQL Server
- SQL Management Studio
- Docker Desktop Application
- Linux kernel update package

### Chapter Quiz (7 Questions):

1. SQL Server can be run in an isolated environment using Docker `_____`.
    - capsules
    - **containers**
    - blocks
    - baskets
2. What is Microsoft's cloud platform called?
    - Aqua
    - **Azure**
    - Cirrus
    - Stratus
3. What program is used to set your automatic startup preferences for SQL Server instances?
    - SQL Server Instance Maintenance
    - SQL Server Agent
    - **SQL Server Configuration Manager**
    - SQL Server Connection Wizard
4. For maximum compatibility with SQL Server 2022, what is the minimum version of Management Studio you should use?
    - version 15.3
    - 2022 RC1
    - **version 19.0**
    - CTP 2
5. What command-line utility does SQL Server install for sending commands directly to the server?
    - Query Engine
    - PowerShell
    - Prompt
    - **SQLCMD**
6. Which edition of SQL Server provides the most comprehensive feature set?
    - **Enterprise**
    - Master
    - Corporate
    - Executive
7. SQL Server is an example of a(n) `_____` .
    - database
    - data table
    - **RDBMS**
    - SSMS

---

# 2. Logging in to the Server

### User permissions and authentication

- Authentication methods
    - Windows Authentication
        - uses system login
    - SQL Server Authenication
        - usernames and passwords stored on database server
- System administrator
    - full access to configure server environment
    - maintains server hardware
- Database administrator
    - creates and maintains tables of data
    - performs database backups
    - manages database-level user accounts
- user accounts
    - creates and analyzes data
    - limited by permissions given by admins
    - can only view/edit certain data
    

### Login with Management Studio

- GUI for SQL Server
- launch SQL management studio
- connect to SQL server

### Enable the System Admin account

- Windows Authentication
- SQL Server Authentication
- Mixed mode
    - either account type can be used

### Chapter Quiz (4 Questions):

1. What word can you use instead of the IP address in the connection string when the SQL Server instance is running on the same computer that you're connecting from?
    - **localhost**
    - this
    - currenthost
    - me
2. To make production servers more secure, Microsoft recommends using `_____`
 authentication only.
    - SQL Server
    - Mixed Mode
    - LocalHost
    - **Windows**
3. What port number does SQL Server use by default?
    - 1077
    - 1592
    - 9127
    - **1433**
4. Management Studio displays server-level user accounts in what folder?
    - Management > Logins > Local Users
    - Server > Users
    - Security > Local Accounts
    - **Security > Logins**

---

# 3. Creating Databases

### Chapter Quiz (26 Questions):

```jsx
import express from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.get('/courses', (req, res) => {
    let courses = [
        {
            "id": 1,
            "title": "Building an App with ReactJS and MeteorJS",
            "link": "https://www.lynda.com/React-js-tutorials/Building-App-React-js-MeteorJS/533228-2.html",
            "description": "Meteor and React are a powerhouse combination. Meteor gives you a fast, easy-to-use solution for data management across clients and servers, and React gives you a way to structure your app's UI from reusable components. The combination allows you to create your dream apps: dynamic, data driven, and cross-platform."
          },
          {
            "id": 2,
            "title": "Framer for UX design",
            "link": "https://www.lynda.com/FramerJS-tutorials/UX-Design-Tools-Framer/562923-2.html",
            "description": "You can use Framer to create JavaScript-based app prototypes quickly and easily. UX designers, engineers, interaction designers, and more can get refreshed on UX fundamentals in this course, and then dive into navigating Framer."
          },
          {
            "id": 3,
            "title": "Migrating to TypeScript 2",
            "link": "https://www.lynda.com/JavaScript-tutorials/Migrating-TypeScript-2/585078-2.html",
            "description": "TypeScript is a newer Microsoft language built on JavaScript that is finding wide adoption in the Microsoft, Google, and Angular communities. Like many things JavaScript these days, TypeScript is changing rapidly as it grows."
          },
            {
            "id": 4,
            "title": "From React to React Native",
            "link": "https://www.lynda.com/React-Native-tutorials/From-React-React-Native/577371-2.html",
            "description": "With React Native, you can leverage your existing React knowledge to build native iOS and Android apps. In this course, explore the different components that make up a basic React Native application, and learn how to use this platform to build your own native projects."
          },
            {
            "id": 5,
            "title": "React Native Ecosystem and Workflow",
            "link": "https://www.lynda.com/React-Native-tutorials/React-Native-Ecosystem-Workflow/560206-2.html",
            "description": "React Native makes it easy to develop applications and then deploy them natively to multiple mobile platforms. That said, building a complete app means looking beyond React Native to the different options that can help you customize your workflow."
          },
            {
            "id": 6,
            "title": "Create a CRM mobile application with React Native",
            "link": "https://www.lynda.com/Web-tutorials/Create-CRM-Mobile-Application-React-Native/585274-2.html",
            "description": "You can develop a mobile CRM application using React Native. Learn how set up a project, code the login, work with Redux, add views, use CRUD operations, and more."
          },
            {
            "id": 7,
            "title": "Prototype a CRM mobile application with Framer",
            "link": "https://www.lynda.com/FramerJS-tutorials/Prototype-Mobile-CRM-Application-Framer/587677-2.html",
            "description": "You can create a prototype for a mobile CRM application using Framer. Learn how to create assets, build a mockup, simulate interactions with animations, prototype concepts, and more."
          },
            {
            "id": 8,
            "title": "React Ecosystems",
            "link": "https://www.lynda.com/React-js-tutorials/React-Ecosystems/601831-2.html",
            "description": "React is rarely used by itself. As a result, working effectively with React—especially when developing in a group—means mastering a set of tools. Some of these tools supplement React, while others establish and maintain workflows for efficient development or help React mesh with another set of web-centric tools."
          },
            {
            "id": 9,
            "title": "React: Testing and debugging",
            "link": "https://www.lynda.com/React-js-tutorials/React-Testing-Debugging/592511-2.html",
            "description": "Tracking down bugs in React and among the many different pieces it communicates with can be a challenge. While basic JavaScript testing and debugging tools certainly work, solutions designed specifically to work with React will save you time and effort."
          },
            {
            "id": 10,
            "title": "InVision Craft for UX design",
            "link": "https://www.lynda.com/Craft-tutorials/InVision-Craft-UX-Design/599634-2.html",
            "description": "InVision Craft is suite of plugins that equip designers with tools that simplify some of the more tedious tasks in their UX design workflow and, in turn, speed up the entire process."
          },
            {
            "id": 11,
            "title": "InVision for UX Design",
            "link": "https://www.lynda.com/InVision-tutorials/InVision-UX-Design/599633-2.html",
            "description": "InVision is a platform that provides UX designers with a set of powerful tools for creating interactive prototypes, collaborating with teammates, and managing their UX design workflow."
          },
            {
            "id": 12,
            "title": "GraphQL: Data fetching with Relay",
            "link": "https://www.lynda.com/GraphQL-tutorials/GraphQL-Data-Fetching-Relay/595829-2.html",
            "description": "Want to build more efficient, data-driven React.js applications? Streamline data retrieval with GraphQL and Relay. You can get exactly the data you need—nothing more, nothing less—and predictable results every time."
          }
    ]
    res.json(courses);
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
```

1. What needs to happen in order for the SSMS graphical editor to make changes to a table's structure?
    - the table must be in the default schema
    - the table must contain no data
    - **the table must be dropped and recreated**
    - the table must have a primary key
2. Which three pieces of information do you need to provide to create a table column?
    - Name, Data Type, and Properties
    - Data Type, Alias, and Precision
    - Primary Key, Identity, and Length
    - **Name, Data Type, and Allow Nulls**
3. Horizontal rows in a data table are called `_____`.
    - data
    - attributes
    - **records**
    - fields
4. What file extension does the primary SQL Server data file use?
    - **mdf**
    - .data
    - .pdb
    - .ssdb
5. On the command line, which command can you run to view the syntax summary for SQLCMD?
    - `sqlcmd -h`
    - `***sqlcmd -?***`
    - `sqlcmd --help`
    - `sqlcmd -docs`
6. Sample databases are added to a SQL Server instance by right-clicking the Databases folder and choosing `_____`.
    - `***Restore Database…***`
    - `Add Database…`
    - `Attach…`
    - `Load…`
7. How does the Import Flat File task wizard differ from the Import Data task?
    - The Import Flat File can only create tables in the dbo schema.
    - The Import Flat File task does not allow you to customize data types for imported data.
    - **The Import Flat File task does not allow you to append data to an existing table.**
    - The Import Flat File task cannot work with CSV files.
8. When importing data into a SQL Server database using the Import Data task, what destination option should you choose?
    - Transfer Wizard
    - Management Studio Importer
    - Local Database
    - **SQL Server Native Client**
9. When entering data into a new record in the SSMS graphical interface, at what point does that data get saved into the database?
    - immediately after each field is validated
    - **when all fields have valid data and the row is deselected**
    - when the save button is clicked in the toolbar
    - when all records for that session are entered and the tab is closed

---

# 4. Table Design for Healthy Databases

![Untitled](Microsoft%20SQL%20Server%20Essential%20Training%20f6b9e880fda0420391cf47fa45183947/Untitled.png)

- time
- date
- datetime2
- datetimeoffset

![Untitled](Microsoft%20SQL%20Server%20Essential%20Training%20f6b9e880fda0420391cf47fa45183947/Untitled%201.png)

![Untitled](Microsoft%20SQL%20Server%20Essential%20Training%20f6b9e880fda0420391cf47fa45183947/Untitled%202.png)

### Chapter Quiz (9 Questions):

1. You want to ensure that data meets your requirements before allowing it into the database. To do this, what can you add to the table?
    - a primary key
    - an index
    - a validation rule
    - **a check constraint**
2. Which SQL Server function will return the current system date and time?
    - `now()`
    - `***getdate()***`
    - `fetchdatetime()`
    - `datetime2()`
3. For a table with only one primary key column, the values stored must be `_____`.
    - **unique**
    - identities
    - integers
    - alphanumeric
4. When using the `IS IDENTITY` property, the `_____` sets the starting value and the `_____` establishes how much each successive value will increase by.
    - initial value; additional value
    - **seed; increment**
    - first; next
    - core; pattern
5. What data type will store the largest integer values that SQL Server is capable of working with?
    - `int(max)`
    - `***bigint***`
    - `hugeint`
    - `largeint`
6. Which property of a foreign key will ensure that data relates back to a record in the primary key table?
    - Enforce Relationship Parameter
    - **Enforce Foreign Key Constraint**
    - Enable Primary Key Check
    - Verify Relationship
7. In order to relate records together, primary key columns and foreign key columns must `_____`.
    - be integers
    - not allow null values
    - have the same name
    - **store the same values**
8. In a relational database, data stored in a primary key column in one table relates to data stored in a `_____` column in another table.
    - **foreign key**
    - encryption key
    - subordinate key
    - secondary key
9. Unique constraints are added to a table via a table `_____`.
    - differentiator
    - check
    - **index**
    - verification rule

---

# 5. Structured Query Language

### T-SQL

- [https://lnkd.in/ghfZsYwr](https://lnkd.in/ghfZsYwr)
- Chapter 5 Examples
    
    [T-SQL Query Examples.zip](Microsoft%20SQL%20Server%20Essential%20Training%20f6b9e880fda0420391cf47fa45183947/T-SQL_Query_Examples.zip)
    

### Chapter Quiz (11 Questions):

1. Which T-SQL keyword is used to add new records to a table?
    - `APPEND`
    - `***INSERT***`
    - `SAVE`
    - `RECORD`
2. What is the shortcut key used to execute a T-SQL Query?
    - Shift+Enter
    - Ctrl+E
    - F1
    - **F5**
3. The `_____` command will delete all data from a table, while the `_____` command is used to delete a table from the database.
    - `REMOVE`;`DROP`
    - `TRUNCATE`;`REMOVE`
    - `RESET`;`DELETE`
    - `***TRUNCATE`; `DROP`***
4. After saving a .sql script file, colored bars will display in the editor to indicate the status of the file. What color indicates lines that have been modified?
    - **yellow**
    - green
    - red
    - black
5. Which type of join returns rows that have matching values from both tables?
    - Right Join
    - Left Join
    - Cross Join
    - **Inner Join**
6. Which of these statements about Microsoft's Transact-SQL language is correct?
    - **It is not fully compliant with the ANSI SQL standard.**
    - It is fully compatible with ANSI SQL.
    - It was developed before the ANSI standard for SQL.
    - It can be used alongside ANSI SQL in SQL Server.
7. To modify data stored in a table, use an `UPDATE` statement paired with a `_____` clause.
    - `VALUES`
    - `SAVE`
    - `***SET***`
    - `STORE`
8. You want to delete records from a table. Which clause do you need to include in the `DELETE FROM` statement?
    - `FROM`
    - `FILTER`
    - `***WHERE***`
    - `ON`
9. Sorting records returned by a `SELECT` statement is done with a `_____` clause.
    - `ASCENDING`
    - `***ORDER BY***`
    - `GROUP BY`
    - `SORT ON`
10. Which of these will limit results to just the employees named Melody with a salary over $50,000?
    - `WHERE EmployeeFirstName = 'Melody' WITH Salary > 50000`
    - `***WHERE EmployeeFirstName = 'Melody' AND Salary > 50000***`
    - `WHERE EmployeeFirstName = Melody, Salary > $50,000`
    - `WHERE EmployeeFirstName = 'Melody' AND WHERE Salary > 50000`
11. T-SQL `SELECT` statements always include what clause when retrieving saved data?
    - `WITH`
    - `VALUES`
    - `INTO`
    - `***FROM***`
    

---

# Conclusion

-