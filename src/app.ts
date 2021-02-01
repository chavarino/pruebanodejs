import express from 'express';
import { services } from './services/services';
import fs from "fs";
const app = express();
const port = 3000;




app.get('/', (req, res) => {
    
    fs.readFile('config.json', "utf8", (err, data : string) => {
        if (err) throw err;
        let config  = JSON.parse(data);
        console.log(config);
        res.send(services.correrAlgoritmos(config));
    });


   
   
});




app.listen(port,"localhost", 1, () => {
  /*if (err) {
    return console.error(err);
  }*/
  return console.log(`server is listening on ${port}`);
});