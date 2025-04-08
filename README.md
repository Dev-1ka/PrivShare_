⚙️ How PrivShare Works (Simple Explanation)
User Enters Location:

You type your location (like 10.123, 76.456) into the input box on the website.

Data is Encrypted:

When you click "Encrypt", your location is sent to the backend server.

The backend uses a strong encryption algorithm (AES-256-CBC) to lock the location using a secret key and IV (Initialization Vector).

The encrypted result, key, and IV are returned to you.

Encrypted Data is Shared:

You can now copy the encrypted message, key, and IV and share it safely with someone (e.g., through email, message, or QR code).

Even if someone sees the message, they cannot decrypt it without the key and IV.

Recipient Decrypts It:

The receiver pastes the encrypted message, key, and IV into the website and clicks "Decrypt".

The backend safely decrypts the location and returns the original text.

🔐 Key Point:
The server does not store any location or keys. Everything is encrypted on-the-fly and shared only by the user. This gives more privacy control than apps like WhatsApp or Telegram.
