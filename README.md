# Personal Finance Dashboard – Backend
## Project Overview
This backend provides a **RESTful API** for a Personal Finance Dashboard.  
It allows users to:  
- Register and login securely  
- Track income, expenses, and budgets  
- Perform CRUD operations on transactions  
- Connect seamlessly with a frontend dashboard  

---

## 🛠 Tech Stack
| Technology | Purpose |
|------------|---------|
| Node.js | Backend runtime |
| Express.js | API framework |
| Supabase | Database & authentication |
| JWT | Secure user sessions |
| dotenv | Environment variable management |
| bcrypt | Password hashing |
| Cors | Cross-origin requests |

---

## 📚 API Documentation

### 🔑 Authentication
| Method | Endpoint | Description |
|--------|----------|------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login existing user |

### 💵 Transactions
| Method | Endpoint | Description |
|--------|----------|------------|
| GET | `/api/transactions` | Get all transactions for logged-in user |
| POST | `/api/transactions` | Add a new transaction |
| PUT | `/api/transactions/:id` | Update a transaction |
| DELETE | `/api/transactions/:id` | Delete a transaction |

**Note:** All transaction routes require a valid JWT token in the header.

---

## 🗄 Database Schema Explanation

### Users Table
| Field | Type | Description |
|-------|------|------------|
| id | string | Unique user ID |
| name | string | User full name |
| email | string | Unique email |
| password | string | Hashed password |

### Transactions Table
| Field | Type | Description |
|-------|------|------------|
| id | string | Unique transaction ID |
| user_id | string | Reference to the user |
| type | string | "income" or "expense" |
| category | string | Transaction category |
| amount | number | Transaction amount |
| date | date | Transaction date |

---

## 🚀 Deployment Link
**Live Backend:** [https://personal-finance-backend-3dbt.onrender.com](https://personal-finance-backend-3dbt.onrender.com)
