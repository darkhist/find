import sqlite3

sqlite_file = 'dbsample.sqlite'    # name of the sqlite database file

# Connecting to the database file
conn = sqlite3.connect(sqlite_file)
c = conn.cursor()

# we can simply execute SQL using string literals as follows...
c.execute("CREATE TABLE IF NOT EXISTS employee (ID 'INTEGER' PRIMARY KEY AUTOINCREMENT, FirstName 'TEXT', LastName 'TEXT', Salary 'REAL')")
c.execute("CREATE TABLE IF NOT EXISTS department (ID 'INTEGER' PRIMARY KEY AUTOINCREMENT, DepartmentName 'TEXT', ManagerName 'TEXT')")
c.execute("CREATE TABLE IF NOT EXISTS assignments (ID 'INTEGER' PRIMARY KEY AUTOINCREMENT,EmployeeID INTEGER, DepartmentID INTEGER, FOREIGN KEY(EmployeeID) REFERENCES employee(ID), FOREIGN KEY(DepartmentID) REFERENCES department(ID))")

department_table_name = "department"
c.execute('INSERT INTO {tn}  VALUES (NULL, {departmentname}, {managername})'.format(
    tn=department_table_name, departmentname='"Development"', managername='"Dr. Helmer"'))
development_id = c.lastrowid

# inserting employees
table_name = "employee"
c.execute('INSERT INTO {tn}  VALUES (NULL, {v2}, {v3}, {v4})'.format(
    tn=table_name, v2='"Quinn"', v3='"Salas"', v4='"$1"'))
c.execute('INSERT INTO {tn}  VALUES (NULL, {v2}, {v3}, {v4})'.format(
    tn=table_name, v2='"Trace"', v3='"Ohrt"', v4='"$1"'))
c.execute('INSERT INTO {tn}  VALUES (NULL, {v2}, {v3}, {v4})'.format(
    tn=table_name, v2='"Joe"', v3='"Ward"', v4='"$1"'))
c.execute('INSERT INTO {tn}  VALUES (NULL, {v2}, {v3}, {v4})'.format(
    tn=table_name, v2='"Tyler"', v3='"Moul"', v4='"$1"'))
c.execute('INSERT INTO {tn}  VALUES (NULL, {v2}, {v3}, {v4})'.format(
    tn=table_name, v2='"Cole"', v3='"Goode"', v4='"$1"'))

# inseting assignments data
table_name = "assignments"
for i in range(0, 4):
    c.execute('INSERT INTO {tn} VALUES (NULL, {v2}, {v3})'.format(
        tn=table_name, v2=i, v3=development_id))

# grab info for printing
c.execute("SELECT * FROM department, employee, assignments WHERE department.ID = assignments.DepartmentID AND assignments.EmployeeID = employee.ID")

all_rows = c.fetchall()
print(all_rows)

conn.commit()
conn.close()
