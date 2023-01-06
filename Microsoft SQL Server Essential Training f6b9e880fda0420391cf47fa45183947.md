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

# 6. Writing Efficient Queries

- 

![Untitled](Microsoft%20SQL%20Server%20Essential%20Training%20f6b9e880fda0420391cf47fa45183947/Untitled%203.png)

- CREATE INDEX or add primary key to table
- primary key column typically creates a clustered index
- clustered index defines physical order of record
- secondary indexes can be added to any other columns
- non-clustered indexes point to a clustered index location

**maintaining indexes**

- indexes cost computational resources to maintain
- they need to be updated every time there is a change in the table
- retrieving data is faster, but indexing/storing data is slower

![Untitled](Microsoft%20SQL%20Server%20Essential%20Training%20f6b9e880fda0420391cf47fa45183947/Untitled%204.png)

![Untitled](Microsoft%20SQL%20Server%20Essential%20Training%20f6b9e880fda0420391cf47fa45183947/Untitled%205.png)

## Stored Procedures:

![Untitled](Microsoft%20SQL%20Server%20Essential%20Training%20f6b9e880fda0420391cf47fa45183947/Untitled%206.png)

### Chapter Quiz (8 Questions):

1. What search method does SQL Server perform when locating table records without the assistance of an index?
    - **Scan**
    - Seek
    - Sort
    - Heap
2. In the Design pane of the View Designer, what indicates the foreign key side of a one-to-many relationship?
    - **infinity symbol**
    - key icon
    - the letter "N"
    - the initials "FK"
3. What character precedes a parameter name when creating a stored procedure?
    - `***@***`
    - `#`
    - `$`
    - `%`
4. Which command will run a stored procedure called `usp_SelectPeople`?
    - `TRIGGER usp_SelectPeople;`
    - `***EXEC usp_SelectPeople;***`
    - `USE usp_SelectPeople;`
    - `RUN usp_SelectPeople;`
5. You want to create a user-defined function. In what order do the clauses need to appear?
    - **CREATE FUNCTION, RETURNS, AS, BEGIN, RETURN, END**
    - CREATE FUNCTION, AS, BEGIN, END, RETURN
    - BEGIN, CREATE FUNCTION, AS, RETURN, END
    - CREATE FUNCTION, AS, START, END, RETURNS
6. Which query would return the first four characters from the Products table's Serial Number field in a column called SN?
    - `SELECT LEFT(4) OF SerialNumber AS SN
    FROM Products;`
    - `***SELECT LEFT(SerialNumber, 4) AS SN
    FROM Products;***`
    - `SELECT SN = LEFT(SerialNumber, 4)
    FROM Products;`
    - `SELECT FIRST(SerialNumber, 4) AS SN
    FROM Products;`
7. Which query would return the highest age found in a table of people?
    - `SELECT Maximum(Age)
    FROM People;`
    - `SELECT Max(Person)
    BY Age;`
    - `***SELECT Max(Age)
    FROM People;***`
    - `SELECT Max(*)
    FROM People;`
8. Indexes on columns that do not define the sorting of stored data on disk are called `_____`?.
    - clustered
    - subordinate
    - insubordinate
    - **nonclustered**
    

---

# 7. Backup and Restore

## Create a full backup of the database

- no undo option, so you better have a backup
- select db, tasks, backup
    - chose your database

## Create a differential backup of the database

- only stores changes after the last full backup
- a .bak file is a media that stores multiple sets of data
- reduces file size at the cost of making the .bak file more complex
    - instead of making many full backups, it will make one full and many differential backups

## Restore a backup

- select db, tasks, restore
- timeline feature is a visual representation of the backups made to a db
    - can backup between backups
        - SQL Server will restore backup and then make the same changes to the selected point
            - i.e. between backups

## Business continuity solutions

- reduce risk of catastrophic feature and the need for a backup
- availability groups
    - multiple server machines work together in a cluster
        - primary db copies transactions to a secondary database
        - secondary db can be used if primary fails
            - fail over
        - little to no downtime
        - replicas can be used for read-only tasks
        - increased cost due to increased(double) hardware/server requirements
- Log Shipping
    - primary server + warm standby
    - primary db sends backup to warm standby when made
        - warm standby is on a slight delay
            - allows you to prevent failures
            - saves time as backup is already restored
            - but the 2 dbs are never identical
                - some data loss might occur
- backup to the cloud
    - link feature
        - duplicate copy hosted on the cloud
        - currently in closed beta

### Chapter Quiz (5 Questions):

1. The new Link feature for SQL Server 2022 will replicate your on-premises database to which location?
    - **Azure SQL Managed Instance**
    - Azure Cloud Storage
    - Docker
    - Azure Virtual Machine
2. What Linux feature allows server machines to assume control of a SQL Server instance should the primary server fail?
    - Linux Disaster Recovery Monitor
    - **Linux Pacemaker Clusters**
    - Linux Failover Clusters
    - Linux Operation Continuity
3. What database component is required to be backed up in order to enable point-in-time restores?
    - **the transaction log**
    - data files
    - differential backups
    - media sets
4. A differential backup contains all of the changes made to the database since `_____`.
    - the database was last restored
    - the last differential backup was made
    - **the last full backup was made**
    - the last full or differential backup was made
5. Database backups saved to a URL will go where?
    - a folder in OneDrive
    - a blob storage account on Microsoft.com
    - **an Azure Storage Container**
    - a location on your company's intranet

---

# 8. Security

## Creating a new user

- a way to segment access to the database

![Untitled](Microsoft%20SQL%20Server%20Essential%20Training%20f6b9e880fda0420391cf47fa45183947/Untitled%207.png)

## User roles and permissions

![Untitled](Microsoft%20SQL%20Server%20Essential%20Training%20f6b9e880fda0420391cf47fa45183947/Untitled%208.png)

![Untitled](Microsoft%20SQL%20Server%20Essential%20Training%20f6b9e880fda0420391cf47fa45183947/Untitled%209.png)

## Schemas

- dbo schema is the default
- can give users permissions that apply only to specific schemas

## Dynamic Data Masking

- values are masked on SQL server before they are sent to the user
- some users can see the data unmasked if they are given more permissions

## Always on data encryption

- data encrypted before it is sent to the database
- Deterministic
    - same result for same value
- Randomized
    - prevents indexing/joining
- Enable Always Encrypted on login to view encrypted column values

### Chapter Quiz (5 Questions):

1. What is **not** a valid function name for masking data with Dynamic Data Masking?
    - `random()`
    - `***sequential()***`
    - `default()`
    - `partial()`
2. Which statement will move a table called Books into the Reference schema?
    - `***ALTER SCHEMA Reference TRANSFER dbo.Books;***`
    - `ALTER SCHEMA FOR dbo.Books USE Reference;`
    - `ALTER TABLE dbo.Books TRANSFER Reference;`
    - `ALTER SCHEMA Reference MOVE TABLE dbo.Books;`
3. Which server-level role can work with the structure of tables and relationships?
    - `db_datawriter`
    - `***db_ddladmin***`
    - `db_securityadmin`
    - `db_tableadmin`
4. Management Studio displays server-level user accounts in what folder?
    - Management > Logins > Local Users
    - Security > Local Accounts
    - **Security > Logins**
    - Server > Users
5. The Always Encrypted wizard will always store the master key `_____`.
    - **outside of the server instance**
    - inside of the server instance
    - in a Windows Certificate Store
    - in an Azure Key Vault
    

---

# 9. Monitoring and Management

## Explore the role of system databases

- don’t modify or alter system databases
- feel free to querry them
- master
    - contains tables and views with user/login data
- model
    - template data for new databases on the server
- msdb
    - scheduling jobs running in the background using SQLagent
    - location and history of db backups
- tempdb
    - temp storage while moving data around (middle man db)

## Prevent excessive TempDB autogrowth

- view current size
    - right click → properties
        - initial size and autogrowth/max size
        - recover model → simple

## Review the SQL Server error log

- management folder
    - SQL Server Logs
        - view → SQL Server Log

## Dynamic management views (DMVs)

- server scoped
    - require VIEW SERVER STATE permission
- Database scoped
    - requires VIEW DATABASE STATE permission
- using DMVs
    
    ```jsx
    SELECT *
    FROM sys.dm_exec_cached_plans
    ```
    

## Database Console Commands (DBCC)

1. Maintenance
2. Misc
3. Informational
4. Validation

- DBCC CHECKDB
    - runs a checksum validation on the database

- Microsoft recommends you restore from backup instead of using one of the repair commands
    - REPAIR_FAST
    - REPAIR_REBUILD
    - REPAIR_ALLOW_DATA_LOSS

### Chapter Quiz (5 Questions):

1. What is the most comprehensive database console command in SQL Server?
    - `***CHECKDB***`
    - `REPAIRDB`
    - `MONITORDB`
    - `VERIFYDB`
2. What two scopes do Dynamic Management views come in?
    - information and transaction
    - **server and database**
    - definition and manipulation
    - user and owner
3. SQL Server's logs can be found under what main folder in the Object Explorer?
    - **Management**
    - Databases
    - Server Objects
    - Security
4. What is the recommended recovery model for TempDB?
    - full
    - partial
    - bulk-logged
    - **simple**
5. Which system database acts as a template for all other databases created on the server instance?
    - **model**
    - msdb
    - tempdb
    - master
    

---

# Conclusion

## Next steps

- Querying Microsoft SQL Server 2019
    - standalone course on TSQL queries
- Relational Databases Essential Training
- Database Foundations: Intro to Databases