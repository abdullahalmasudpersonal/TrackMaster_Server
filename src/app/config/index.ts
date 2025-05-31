import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  // backend_url: process.env.BACKEND_URL,
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
  // bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  // jwt_access_token: process.env.JWT_ACCESS_TOKEN,
  // jwt_access_token_expires_in: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
  // jwt_refresh_token: process.env.JWT_REFRESH_TOKEN,
  // jwt_refresh_token_expires_in: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
  // ssl: {
  //   ssl_store_id: process.env.SSL_STORE_ID,
  //   ssl_store_passwd: process.env.SSL_STORE_PASSWD,
  //   ssl_success_url: process.env.SSL_SUCCESS_URL,
  //   ssl_fail_url: process.env.SSL_FAIL_URL,
  //   ssl_cancel_url: process.env.SSL_CANCEL_URL,
  //   ssl_payment_url: process.env.SSL_PAYMENT_URL,
  //   ssl_validation_api: process.env.SSL_VALIDATION_API,
  // },
  // cloudinary: {
  //   cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  //   cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  //   cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
  // },
};
