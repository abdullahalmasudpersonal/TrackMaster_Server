import mongoose from 'mongoose';
import express, { Application } from 'express';
import config from './app/config';
import app from './app';

async function trackMaster() {
  try {
     await mongoose.connect(config.databaseUrl as string);

    app.listen(config.port, () => {
      console.log(`TrackMaster Server listening on port ${config.port}`);
    });
  } catch (error) {
    console.log('Error starting server:', error);
  }
}

trackMaster();
