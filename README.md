**By:** Rupesh Kumar

**Email:** [cgcrupesh@gmail.com](mailto:cgcrupesh@gmail.com)

**GitHub Repo:** [https://github.com/rupesh-dev30/Slooze-Frontend-Assessmen](https://github.com/rupesh-dev30/Slooze-Frontend-Assessment)t

**Portfolio:** https://rupesh-portfolio-red.vercel.app/

**Tech Stack:** Next.js 16 (App Router), TypeScript, TailwindCSS, MongoDB, Mongoose, JWT Authentication, next-themes

---


### ⚙️ **Local Installation Instructions**

1. **Clone the repository**

```
git clone https://github.com/rupesh-dev30/Slooze-Frontend-Assessment.git

```

1. **Navigate to the directory**

```
cd Slooze-Frontend-Assessment

```

1. **Install dependencies**

```
npm install

```

1. **Create environment file**
- Copy `.env.example` → `.env`
- Fill in the required variables (MongoDB URI, JWT secret, etc.)

```
cp .env.example .env

```

1. **Start the development server**

```
npm run dev

```

1. Open in browser:
    
    [http://localhost:3000](http://localhost:3000/)

---

# **0. Test Credentials (For Evaluation)**

Two roles are pre-seeded in the database for quick evaluation.

### 👑 **Manager Account**

```
Email: admin@gmail.com
Password: admin@123

```

### 🧰 **Store Keeper Account**

```
Email: storekeeper@gmail.com
Password: storekeeper@123

```

Both accounts are stored in the database with their respective role assignments.

---

# **1. Overview**

This project implements the complete **Commodities Management System** based on the Slooze Take-Home Challenge requirements.

The system includes:

- Secure authentication with JWT
- Fully implemented **role-based access control** (Manager, Store Keeper)
- A detailed, interactive **dashboard**
- Complete product CRUD module
- Clean UI following the Figma design
- Light/Dark mode
- Scalable folder structure
- Backend + client-side authorization checks

The app is responsive, visually polished, and built with production-ready architectural patterns.

---

# **2. Features Implemented**

## **1️⃣ Authentication & Access**

- Email/password login + signup
- JWT stored securely in HTTP-only cookies
- Proxy/middleware validation on every protected route
- Prevents logged-in users from accessing `/sign-in` and `/sign-up`
- Redirects handled consistently

**Status:** ✔ Completed 100%

---

## **2️⃣ Dashboard**

The dashboard replicates a real product management UI and includes:

- Revenue overview
- Traffic analytics
- Earnings
- Recent sales
- Payout insights
- Recharts-based graphs

**Role Logic:**

- ✔ Manager → Full access
- ❌ Store Keeper → Access denied

📌 **Note:**

All dashboard charts, statistics, and graph data are currently **dummy/static** created solely for UI demonstration as required in the take-home assessment.

No backend analytics logic is implemented — this is intentional and within the challenge scope.

**Status:** ✔ Fully implemented

---

## **3️⃣ View All Products**

- Dedicated product list page
- Table view with sorting-ready structure
- Published vs Draft tabs
- Status indicators
- Manager sees all products
- Store Keeper sees only their own
- Clean product stats section

**Status:** ✔ Fully Implemented

---

## **4️⃣ Add / Edit Product (Optional Requirement)**

Even though optional, implemented fully:

### Includes:

- Add product
- Edit product
- Delete product
- Publish/unpublish
- All essential fields (image, price, SKU, stock, category, etc.)
- Form-level validation
- MongoDB CRUD actions

### Role Enforcement:

- Manager → Full CRUD
- Store Keeper → Can edit/delete *only the products they created*

**Status:** ✔ Fully implemented + extra authorization

---

## **5️⃣ Role-Based Access Control**

Implemented at **three levels** for maximum security:

### ✔ A. Route-Level Protection (Proxy/Middleware)

- Blocks Store Keeper from restricted pages
- Prevents logged-in users from accessing auth pages
- Validates role & token before page render

### ✔ B. UI-Level Protection

- Sidebar dynamically adapts based on role
- Manager sees dashboard, analytics, traffic, payouts
- Store Keeper sees only product-related sections

### ✔ C. Backend Authorization

- Product CRUD verifies user role and ownership
- Store Keeper cannot modify another user's data
- Manager has unrestricted privileges

**Status:** ✔ Completed 100% (consistent and secure)

---

## **6️⃣ Theme: Light / Dark Mode**

- Implemented using `next-themes`
- Smooth UI transitions
- Works across dashboard, forms, tables, charts
- Persistent theme state

**Status:** ✔ Fully implemented

---

# **3. Technical Architecture**

## 📂 **Folder Structure**

```
Directory structure:
└── rupesh-dev30-slooze-frontend-assessment/
    ├── app/
    │   ├── (auth)/sign-in, sign-up
    │   ├── (authorized)/dashboard, product, profile, etc.
    │   ├── no-access/
    ├── components/
    │   ├── dashboard/
    │   └── product/
    ├── database/
    │   ├── user.model.ts
    │   └── product.model.ts
    ├── lib/
    │   ├── mongoose.ts
    │   ├── shared.types.d.ts
    │   └── actions/

```

## 🔐 **Authentication Flow**

- Login / Signup → JWT created
- Token stored in HTTP-only cookie
- Proxy (middleware) decodes and validates token
- Request continues only if role + token are valid

## 🗄 **Database Models**

- **User Model** (email, password, role)
- **Product Model** (name, price, stock, author, status, timestamps)

---

# **4. UI / UX & Design System**

- Matches provided Figma structure closely
- Built with TailwindCSS + shadcn/ui
- Structured dashboard with stats and graphs
- Responsive layout
- Smooth theme handling
- Clean visual hierarchy and spacing

---

# **5. Security & Best Practices**

- BCrypt password hashing
- JWT in secure HttpOnly cookie (protects from XSS)
- No secrets exposed
- Server-side validation
- Ownership checks for Store Keeper
- Proper error responses

---

# **6. Extra Enhancements (Beyond Requirements)**

✔ Dynamic role-based sidebar

✔ Ownership checks on product edit/delete

✔ Highly modular component structure

✔ Reusable form system

✔ Edit product flow expanded

✔ Redirect logic fully hardened

✔ Pagination-ready product table

✔ Loading & empty states with refined UX

✔ Optimized server actions for DB operations

---

# **7. Conclusion**

This submission meets **100% of the mandatory requirements**, **100% of optional requirements**, and **100% of the bonus role-based access tasks**.

The system is:

- Fully functional
- Secure and scalable
- Visually polished
- Strictly aligned with the challenge specifications
- Production-ready
- Cleanly written and well-architected

---

# ⭐ AI Assistance Note

I used **ChatGPT for generating some static UI pages** (Payment, Earning, Payout, Traffic) and for **code refactoring help.**