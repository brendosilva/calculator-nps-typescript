import { UserController } from './controllers/UserController';
import { SurveyController } from './controllers/SurveyController';
import { Router } from 'express';
import { SendMailController } from './controllers/SendMailControll';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post("/user", userController.create);
router.post("/surveys", surveyController.create);
router.post("/sendMail", sendMailController.execute);

router.get("/surveys", surveyController.show);
router.get("/answers/:value", answerController.execute);
router.get("/nps/:survey_id", npsController.execute);

export { router }; 