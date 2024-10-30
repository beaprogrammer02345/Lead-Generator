# Lead Generator
An AI-powered platform built with Next.js, React.js, Clerk, Tailwind CSS, Drizzle ORM, TypeScript, and Gemini API. It helps generate market-standard responses and dummy leads with contact info, stored in Neon PostgreSQL. These leads and insights can be used for sales, marketing, and other purposes.

## Tech Stack
**Frontend** : Next.js, React.js, Tailwind CSS
**Backend**: TypeScript, Gemini API
**Auth**: Clerk
**Database**: Neon PostgreSQL, Drizzle ORM

## Features
- **AI Tools**: Generate marketing responses using the Gemini API.
- **Lead Generation**: Create dummy leads with contact info from various sources.
- **Authentication**: Secure user access via Clerk.
- **Data Storage**: Manage leads and outputs in Neon PostgreSQL.
## Setup Instructions
1)**Clone & Install**
``` bash
git clone https://github.com/your-username/your-repo-name.git  
cd your-repo-name  
npm install
```


2)**Environment Variables**
Create `.env.local` and add:

```bash
CLERK_API_KEY=your_clerk_api_key  
GEMINI_API_KEY=your_gemini_api_key  
DATABASE_URL=your_neon_postgres_url
```

3)**Run the App**

``` bash
npm run dev
```
Visit http://localhost:3000.

4)**Sync Database**

``` bash
npm run drizzle:sync
```


## Usage 
Login via Clerk.
Use AI tools to generate marketing responses.
Create and store leads in the Neon database.

## Contributing
Fork the repo.
Create a branch: git checkout -b feature-name.
Push and open a pull request.


## Contact
📧 annusingh09163@gmail.com

