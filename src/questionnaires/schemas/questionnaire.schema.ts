import * as mongoose from 'mongoose';

export const QuestionnaireSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  players: [{
    pseudo: {
      type: String,
      required: true,
      trim: true,
    },
    score: {
      type: Number,
      required: true,
      trim: true,
    },
  }],
  questionnaire: [{
    title: {
      type: String,
      required: true,
      trim: true,
    },
    choices: [
      {
        choice: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    response: {
      type: String,
      required: true,
      trim: true,
    },
  }],
}, {
  toJSON: { virtuals: true },
  versionKey: false,
});
