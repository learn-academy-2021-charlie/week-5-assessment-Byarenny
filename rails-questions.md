# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
Structured Query Language, it is a domain specific language and communicates with relational databases.

2. What is the PostgreSQL query that would return all the content in a particular table?
SELECT *
FROM table;

3. What is the command to create a new Rails application with a PostgreSQL database?
$ rails new app_name -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
$ rails g model Meal breakfast:string lunch:string dinner:string

5. What is a migration? Why would you use one?
Migration is used to migrate data from one or more source databases to another. When creating new columns for a database we need to migrate all of the new information to the main database and thats when we would use migration. We also migrate data when changing the table name, column name, data types removing columns, etc. All of those changes need to be updated by migration.

6. What is the command to generate a migration file?
$ rails g migration action_name

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
When generating a Rails model, it needs to be PascalCase and singular. The table that is generated with this command is plural and snake_case.

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
The schema file is data that rails has put together for us after we have given it certain commands. It shows us what we have created like our datatable's name and columns. It is not recommended to modify the schema directly because you can break the database.

9. What is the Rails console?
The Rails console uses Ruby. When you access the Rails console by entering $ rails c, you get the IRB which allows you to interact directly with the Active Record.

10. What is the Rails console command to see all the content in a particular table?
$ ModelName.all