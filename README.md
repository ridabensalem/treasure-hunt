

# 🏴‍☠️ **Treasure Hunt API**  
**Embark on an epic adventure, explore mysterious locations, and collect hidden treasures!**  

Are you ready to become the ultimate treasure hunter? This API lets you dive into the world of treasure hunting by exploring areas, collecting treasures, and tracking your progress. Get your map ready and let the hunt begin!  

---

## 🚀 **Features**
- **Explore Areas**: Discover magical and adventurous places like the *Golden Forest* and *Crystal Cave*.  
- **Collect Treasures**: Grab the treasures before they disappear (because someone else might get there first)!  
- **Leaderboard** *(coming soon)*: Compete with other treasure hunters for glory and fame.  

---

## 🛠️ **Getting Started**

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/treasure-hunt-api.git
cd treasure-hunt-api
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Start the Server**
```bash
node app.js
```

The server will start at [http://localhost:3000](http://localhost:3000).

---

## 🧭 **API Endpoints**

### **1. Get All Areas**
Retrieve all available areas to explore.  

- **Endpoint**: `GET /api/areas`  
- **Response**:
  ```json
  [
    { "id": 1, "name": "Golden Forest", "treasure": 50 },
    { "id": 2, "name": "Crystal Cave", "treasure": 100 },
    { "id": 3, "name": "Sunken Ship", "treasure": 75 }
  ]
  ```

---

### **2. Collect Treasure**
Claim the treasure from a specific area. But hurry! Once it’s collected, it’s gone.  

- **Endpoint**: `POST /api/areas/:id/collect`  
- **Example**: `POST /api/areas/1/collect`  
- **Response (Success)**:
  ```json
  {
    "message": "You collected treasure from Golden Forest!",
    "totalTreasureCollected": 50
  }
  ```
- **Response (Already Collected)**:
  ```json
  {
    "error": "Treasure already collected"
  }
  ```
- **Response (Invalid Area)**:
  ```json
  {
    "error": "Area not found"
  }
  ```

---

## 🔬 **Run Tests**
Ensure your API is behaving as expected by running the tests.  

```bash
npm test
```

---

## 💡 **Ideas for Expansion**
- Add new exotic areas like *Dragon’s Lair* or *Pirate’s Cove*.  
- Include player-specific treasure tracking.  
- Introduce a **time-limited quest system** to collect treasures faster!  
- Build a **frontend game interface** using React or Vue.js.  

---

## 🏆 **Contributing**
Want to make this adventure even better? Fork the repo, create a feature branch, and submit a pull request. We’d love to see your ideas!  

---

## 🤩 **Credits**
Created with ❤️ and a thirst for adventure by [Rida Bensalem](https://github.com/ridabensalem).  

---

Start your treasure hunt today and collect them all! 🌟
