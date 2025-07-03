# 🔐 Playwright Login Automation - SauceDemo V1

This project automates login functionality testing for [SauceDemo V1](https://www.saucedemo.com/v1/) using [Microsoft Playwright](https://playwright.dev/). It uses a data-driven approach to cover various login scenarios, including valid and invalid inputs.

---

## 📂 Project Structure

```
playwright-login-demo/
├── tests/
|   ├──fixtures/
|   |  └──  login-data.js        # Login test data (all 7 cases)
│   └── login.spec.js        # Main test file
├── pages/
│   ├── login-page.js        # Page Object Model for login
│   └── dashboard-page.js    # Page Object Model for dashboard
├── playwright.config.js     # Playwright config
└── README.md                # This documentation
```

---

## ✅ Test Scenarios

| ID   | Scenario Description                                           | Expected Result                                                  |
|------|----------------------------------------------------------------|------------------------------------------------------------------|
| L-01 | Login with valid username and password                         | Redirect to dashboard page with `Products` visible               |
| L-02 | Invalid username + valid password                              | `Epic sadface: Username and password do not match...`            |
| L-03 | Valid username + invalid password                              | `Epic sadface: Username and password do not match...`            |
| L-04 | Invalid username + invalid password                            | `Epic sadface: Username and password do not match...`            |
| L-05 | Empty username                                                 | `Epic sadface: Username is required`                             |
| L-06 | Empty password                                                 | `Epic sadface: Password is required`                             |
| L-07 | Empty username and password                                    | `Epic sadface: Username is required`                             |

> ⚠️ Error messages are exactly as displayed on SauceDemo V1.

---

## 🚀 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/playwright-login-demo.git
cd playwright-login-demo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

```bash
npx playwright test
```

---

## 🧪 Technologies Used

- [Playwright](https://playwright.dev/)
- JavaScript (ES6)
- Page Object Model (POM)
- VS Code or any preferred code editor

---

## 📘 Notes

- Target URL: [https://www.saucedemo.com/v1/](https://www.saucedemo.com/v1/)
- Tested on latest Chrome via Chromium (by default via Playwright)
- The dashboard check validates visibility of:
  - `Products` title
  - `Open Menu` button
  - `Logout` link

---

## 🛠️ Improvements Ideas

- Integrate with GitHub Actions for CI
- Add reporting with HTML (e.g. using `playwright-html-reporter`)
- Extend coverage to locked users or performance glitches

---

## 👤 Author

Created by **Maya Atmayanti**  
Feel free to contribute or raise issues!

---
