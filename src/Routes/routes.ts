import express, { Router } from 'express';
import {Demo} from '../Controllers/cotroller';

const routes = Router()

routes.post('/', express.json(), Demo) 

export default routes
