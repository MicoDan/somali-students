import express from 'express';
import { UnitModel } from '../models/UnitModel.js';

const lessonRouter = express.Router();

// Retrieve all units
lessonRouter.get('/units', async (req, res) => {
  try {
    const units = await UnitModel.find();
    res.json(units);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Retrieve a single unit by unitNumber
lessonRouter.get('/units/:unitNumber', async (req, res) => {
  const { unitNumber } = req.params;

  try {
    const unit = await UnitModel.findOne({ unitNumber: parseInt(unitNumber) });
    if (!unit) {
      return res.status(404).json({ message: 'Unit not found' });
    }
    res.json(unit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new unit
lessonRouter.post('/units', async (req, res) => {
    try {
      const {
        unitNumber,
        description,
        backgroundColor,
        textColor,
        borderColor,
        tiles, 
      } = req.body;
  
      // Create a new unit instance
      const newUnit = new UnitModel({
        unitNumber,
        description,
        backgroundColor,
        textColor,
        borderColor,
        tiles, // Assuming tiles data is provided in the request body
      });
  
      // Save the unit to the database
      await newUnit.save();
  
      res.status(201).json(newUnit); // Respond with the newly created unit
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  

export default lessonRouter;
