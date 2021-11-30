import dotenv from 'dotenv';

dotenv.config();

export const braze_server = process.env.BRAZE_SERVER;
export const braze_apikey = process.env.BRAZE_API_KEY;
