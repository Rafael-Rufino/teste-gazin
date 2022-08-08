import { Request, Response } from "express";

import { v4 as uuidv4 } from "uuid";

import Developer from "../models/developer";

export type IDeveloper = {
  name: string;
  gender: string;
  birthDate: Date;
  age: number;
  hobby: string;
  level: string;
};

const getAllDevelopers = async (req: Request, res: Response) => {
  try {
    const developers = await Developer.find();
    return res.status(200).json({ developers });
  } catch (err: any) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

const createDeveloper = async (req: Request, res: Response) => {
  const { name, gender, birthDate, age, hobby, level }: IDeveloper = req.body;

  if (!name || !gender || !birthDate || !age || !hobby || !level) {
    return res.status(400).json({
      error: "Missing fields",
    });
  }

  try {
    const developer = new Developer({
      _id: uuidv4(),
      name,
      gender,
      birthDate,
      age,
      hobby,
      level,
    });
    await developer.save();
    return res.status(201).json({ message: "Developer created succesfully!" });
  } catch (err: any) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

const updateDeveloper = async (req: Request, res: Response) => {
  const { name, gender, birthDate, age, hobby, level }: IDeveloper = req.body;

  if (!name && !gender && !birthDate && !age && !hobby && !level) {
    return res.status(400).json({
      error: "You must inform a new fields",
    });
  }
  if (name) res.developer.name = name;
  if (gender) res.developer.gender = gender;
  if (birthDate) res.developer.birthDate = birthDate;
  if (age) res.developer.age = age;
  if (hobby) res.developer.hobby = hobby;
  if (level) res.developer.level = level;

  try {
    await res.developer.save();
    return res
      .status(200)
      .json({ message: "Developer update with successfully!" });
  } catch (err: any) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

const deleteDeveloper = async (req: Request, res: Response) => {
  try {
    await res.developer.remove();
    return res.status(200).json({ message: "Developer deleted successfully!" });
  } catch (err: any) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

export { getAllDevelopers, createDeveloper, updateDeveloper, deleteDeveloper };
