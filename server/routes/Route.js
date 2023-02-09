import express from 'express'; 
import { getNews} from '../controller/news-controller.js';

const route = express.Router();

route.get('/news', getNews);
//route.get('/.well-known/pki-validation/89B06F6928DBF00C2F645B11B145F472.txt', fileSend)

export default route;