// VENDOR
import express from 'express';
import { routeNotImplemented } from '../middlewares'

// CONTROLLERS
import getItemByID from '../controllers/items/get-item-by-id'
import searchItem from '../controllers/items/search-item'

const itemsRouter: express.Router = express.Router();

itemsRouter.get('/items', searchItem);
itemsRouter.get('/items/:id', getItemByID);
itemsRouter.post('/items', routeNotImplemented);
itemsRouter.patch('/items', routeNotImplemented);
itemsRouter.delete('/items/:id', routeNotImplemented);

export default itemsRouter;
