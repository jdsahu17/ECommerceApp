# E-Commerce Application Installation Guide

This document provides a step-by-step guide to set up the E-Commerce Application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

1. [.NET SDK](https://dotnet.microsoft.com/download/dotnet) (version 6.0 or later)
2. [Node.js](https://nodejs.org/) (version 14 or later)
3. [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (for database management)
4. [Visual Studio](https://visualstudio.microsoft.com/) or any code editor of your choice

## Clone the Repository

First, clone the repository to your local machine:

```bash :
git clone https://github.com/yourusername/ECommerceApp.git
cd ECommerceApp
dotnet restore

3. Configure Database Connection
Open the appsettings.json file and configure the SQL Server connection string:

json

{
  "ConnectionStrings": {
    "DefaultConnection": "Server=DESKTOP-3OGIVTL;Database=ECommerceDB;User Id=sa;Password=admin@123;"
  }
}


Here’s a sample README file for installation that includes all the necessary commands and steps required to set up your E-Commerce Application project. You can modify it as needed based on your project specifics.

markdown

# E-Commerce Application Installation Guide

This document provides a step-by-step guide to set up the E-Commerce Application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

1. [.NET SDK](https://dotnet.microsoft.com/download/dotnet) (version 6.0 or later)
2. [Node.js](https://nodejs.org/) (version 14 or later)
3. [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (for database management)
4. [Visual Studio](https://visualstudio.microsoft.com/) or any code editor of your choice

## Clone the Repository

First, clone the repository to your local machine:

```bash :
git clone https://github.com/yourusername/ECommerceApp.git
cd ECommerceApp
Backend Setup
1. Navigate to the API Project
bash :

cd ECommerceApi
2. Restore Dependencies
Restore the required NuGet packages:

bash :

dotnet restore
3. Configure Database Connection
Open the appsettings.json file and configure the SQL Server connection string:

json

{
  "ConnectionStrings": {
    "DefaultConnection": "Server=DESKTOP-3OGIVTL;Database=ECommerceDB;User Id=sa;Password=admin@123;"
  }
}
4. Create the Database
Run the following command to apply migrations and create the database:

bash :

dotnet ef database update

5. Run the API
Start the API project:

bash :

dotnet run

The API should now be running on http://localhost:5000.

Frontend Setup
1. Navigate to the Frontend Project
Open a new terminal and navigate to the frontend project directory:

bash :

cd frontend/e-commerce-app
2. Install Node.js Dependencies
Install the necessary Node.js packages:

bash :

npm install
3. Run the Frontend Application
Start the React application:

bash :

npm start
The application should now be running on http://localhost:3000.

Usage
Access the frontend application at http://localhost:3000.
Use the API endpoints available at http://localhost:5000/api/products for CRUD operations.
Troubleshooting
If you encounter issues:

Ensure that SQL Server is running.
Check the connection string in appsettings.json.
Ensure all dependencies are correctly installed.