
import { config } from 'dotenv';

config();

export default{
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
    secret: process.env.SECRET || 'secret',
    expires: process.env.EXPIRES || '24h',
    rounds: process.env.ROUNDS || 10
}