# Project Overview

This project is a practice assignment to demonstrate understanding of Next.js fundamentals, including:

-Project setup and folder structure

-App Router

-Layouts and nested layouts

-Rendering techniques: CSR, SSR, SSG, ISR

-Styling with Tailwind CSS

The application includes a homepage, About page, Blog section with dynamic routes, and a footer and navbar components.

## Project Structure

```
app/
│
├─ layout.tsx          # Main layout (Header, Footer, <main> wrapper)
├─ page.tsx            # Home page (CSR example: live clock)
│
├─ about/
│   └─ page.tsx        # About page (SSR example: fetch author info)
│
├─ blog/
│   ├─ layout.tsx      # Blog layout with sidebar (nested layout)
│   ├─ page.tsx        # Blog list (SSG example: list of posts)
│   └─ [id]/
│       └─ page.tsx    # Blog detail page (ISR example: single post)
│
└─ components/
    ├─ Navbar.tsx      # Navigation bar
    └─ Footer.tsx      # Footer
```

## Setup Instructions
1. clone repo:

git clone https://github.com/Isingizwe12/nextjs-assignment
cd nextjs-assignment

2. Install dependencies:

npm install

3. Run the development server:

npm run dev

4. Open your browser at http://localhost:3000

