# 🛠️ Setup Without Docker (Local PostgreSQL)

If you cannot or do not want to use Docker Desktop, follow these steps to run the backend using a local PostgreSQL installation.

## Step 1: Install PostgreSQL (If not already installed)

1.  **Download**: Go to [postgresql.org/download/windows/](https://www.postgresql.org/download/windows/) and download the interactive installer.
2.  **Install**: Run the installer.
    *   **Important**: Remember the **password** you set for the `postgres` superuser.
    *   Keep the default port `5432`.
3.  **Verify**: Open a terminal (PowerShell or Command Prompt) and type:
    ```powershell
    psql --version
    ```
    *If you get an error, you may need to add PostgreSQL to your system PATH or restart your computer.*

## Step 2: Configure the Application

1.  Open the file `server/.env` in your code editor.
2.  Find the `DATABASE_URL` line.
3.  Update it to match your local PostgreSQL credentials:

    ```env
    # Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
    DATABASE_URL="postgresql://postgres:YOUR_PASSWORD_HERE@localhost:5432/code_n_click?schema=public"
    ```
    *Replace `YOUR_PASSWORD_HERE` with the password you set during installation.*

## Step 3: Create the Database

1.  Open **pgAdmin** (installed with PostgreSQL) OR use the terminal.
2.  **Using Terminal**:
    ```powershell
    psql -U postgres
    # Enter your password when prompted
    CREATE DATABASE code_n_click;
    \q
    ```
    *Note: If `psql` command isn't found, use pgAdmin or SQL Shell (psql) from your Start menu.*

## Step 4: Start the Backend

Now you can run the standard setup commands in your `server` directory:

1.  **Open Terminal** in `c:\Users\Lokender Chauhan\Desktop\code-n-click Technologies\server`
2.  **Run Migrations**:
    ```powershell
    npx prisma generate
    npx prisma migrate dev --name init
    ```
3.  **Seed Data** (Create Admin/Test accounts):
    ```powershell
    npm run prisma:seed
    ```
4.  **Start Server**:
    ```powershell
    npm run start:dev
    ```

## Step 5: Verify

*   Backend should be running at `http://localhost:3000`
*   Frontend login should now work!
