import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import notFound from './app/middlewares/notFound';
import fs from 'fs';
import router from './app/routes';
// import globalErrorHandler from './middlewares/globalErrorhandler';

const app: Application = express();

const corsOptions = {
  // origin: [ 'http://localhost:5173'],
  credentials: true,
};

/// parsers
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
//   app.use(setVisitorCookie);

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('TrackMaster Server In Progress!');
});

// app.post('/upload', (req, res) => {
//   const data = req.body;
//   fs.writeFileSync('logs/system_data.json', JSON.stringify(data, null, 2));
//   res.send('Data received');
// });

// app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;
