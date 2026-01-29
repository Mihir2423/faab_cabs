# FaabCabs Website Design

A simple cab booking website with a Next.js frontend and a Flask backend that sends form submissions to WhatsApp.

## Running the backend locally

1. Go to the backend folder:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Add your WhatsApp credentials (phone ID, access token, recipient phone).
   ```
   cp .env.example .env
   ```

4. Start the server:
   ```
   python app.py
   ```

   The API runs at [http://localhost:5000](http://localhost:5000). For dev testing without approved templates, set `USE_WHATSAPP_TEMPLATES=false` in `.env`.


## Running the frontend locally

1. Go to the frontend folder:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the dev server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.