### Learning Drizzle

# project setup

npm init -y
npm i -D typescript tsx @types/node
npx tsc --init

"dev":"tsx watch src/main.ts"

git init
git remote add origin git@github.com:subashf23s/drizzle-learn.git

# Drizzle postgres

npm i drizzle-orm postgres dotenv
npm i -D drizzle-kit

# Create local db

sudo -iu postgres
psql

create user drizzleuser with password 'drizzlepassword';

create database drizzle_learn;

grant all privileges on database drizzle_learn to drizzleuser;
\c drizzle_learn
ALTER SCHEMA public OWNER TO drizzleuser
