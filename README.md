🔐 How Encryption & Decryption Work in PrivShare 


Encryption: When you enter a location, the backend uses AES-256-CBC encryption to lock it. A random secret key and IV (Initialization Vector) are created, and your location is turned into unreadable text (ciphertext). This keeps it secure from others.

Decryption: The receiver pastes the encrypted text, key, and IV into the site. The backend then uses these to unlock (decrypt) the original location using the same AES algorithm.
