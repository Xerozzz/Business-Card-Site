# Digital Business Card Website

This is a digital business card website built with a React frontend and a Express backend, with a MySQL Database

## Requirements

- Node.JS
- React
- MySQL

## Setup

1. Go into both Frontend and Backend folders and run `npm install`
2. Set up the MySQL Database using `businesscard_users.sql` dump
3. Configure `.env_template` in the Backend Folder
4. Run `npm start` in both directories to start the Frontend and Backend

## Navigation

- "/" is the root path, which features a "Wrong Page!"
- "/profiles/:username" will bring you to the user page. Using mock data go to /profiles/john
- "/edit/:username" will bring you to the user edit page, use /edit/john for the mock data provided
