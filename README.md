# TrustLink – Business Trust Dashboard (Phase 1)

## Description
TrustLink is a digital system designed to calculate and display a **Trust Score** for small businesses based on customer feedback, delivery confirmation, and complaints. This prototype allows businesses to see a measurable trust metric on a simple dashboard. 

Phase 1 focuses on validating the core logic and providing a working **frontend dashboard** that can run on both desktop and mobile browsers.

---

## Features (Phase 1)
- Input fields for:
  - Business Name
  - Customer Rating (1–5)
  - Delivery Confirmation (Yes/No)
  - Complaint (Yes/No)
- Automatic calculation of **Trust Score**
- Dynamic display of Trust Score on the dashboard
- Responsive layout for mobile and desktop browsers

---

## How it Works
1. The user enters the **business name**, selects a **rating**, and chooses **delivery** and **complaint** status.
2. Clicking the **Calculate Trust Score** button triggers a JavaScript function that:
   - Starts the trust score at **50** (neutral)
   - Adds **5 points per rating point**
   - Adds **10 points if delivery is confirmed**
   - Subtracts **10 points if there is a complaint**
   - Limits the score between **0 and 100**
3. The result is displayed instantly on the dashboard.

---

## Technology Stack (Phase 1)
- **Frontend:** HTML, CSS, JavaScript
- **Storage:** Browser memory (LocalStorage can be added later)
- **Compatibility:** Desktop and mobile browsers
- **Future backend:** Solidity smart contracts (Phase 2+)

---

## Phase 1 Screenshots
*(Add screenshots here once you test on browser / phone)*

---

## Future Advancements
- Multi-user roles (Customers, Businesses, Admins)
- Historical Trust Score tracking
- Blockchain-based trust record storage (Solidity)
- Automated reward/penalty system
- Mobile app / Progressive Web App (PWA) integration
- AI-assisted fraud detection
- Location and time verification for deliveries
- Analytics dashboard for business insights
- API integration for third-party platforms
- Smart contract automation for payments

---

## How to Run (Phase 1)
1. Clone or download the repository.
2. Open `index.html` in a browser (desktop or mobile).
3. Enter a business name, customer rating, delivery status, and complaint status.
4. Click **Calculate Trust Score** to see the result.

> **Note:** Currently Phase 1 runs locally. Hosting online (GitHub Pages, Netlify, or Vercel) is required for public mobile access.

---

## Author
- Derick Spoiler and NEXUS COLLECTIVE team
- Phase 1 implementation: frontend dashboard and trust calculation logic

