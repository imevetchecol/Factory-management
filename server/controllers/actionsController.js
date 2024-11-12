
const express = require('express');
const jf = require('jsonfile');

const FILE = './data/actions.json';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const actionsObjDta = req.body;
        
        //Reading the file asynchronously with await
       const dataFromFile = await jf.readFile(FILE);
       
       const userAction = dataFromFile.actions.filter(data => (data.id === actionsObjDta.id)&&(data.date === actionsObjDta.date))
       
        // If the file is empty
        if(!userAction.length){
            const actionAllowd = actionsObjDta.maxActions -1
            actionsObjDta.actionAllowd = actionAllowd
            
            // Update the data by adding the new data to the object
            dataFromFile.actions.push(actionsObjDta);

            // Rewriting to file
            await jf.writeFile(FILE, dataFromFile, { spaces: 1 }); 

            //Sending a response to the client after success
            res.send(dataFromFile);
        }
        else{
            // Extracting the last ver from the object
            const lastActionObjFromFile = userAction.pop();
            //check if the number of actionAllowd remaining is different from 0
            if(Number(lastActionObjFromFile.actionAllowd) !== 0){
                
                actionsObjDta.actionAllowd = lastActionObjFromFile.actionAllowd -1
                // Update the data by adding the new data to the object
                dataFromFile.actions.push(actionsObjDta);

                // Rewriting to file
                await jf.writeFile(FILE, dataFromFile, { spaces: 1 }); 

                // Sending a response to the client after success
                res.send(actionsObjDta);
            }
            else{  
                res.send(lastActionObjFromFile);
            }
        }
    } catch (err) {
        //Error handling - JSON reading or writing
        console.error(err);
        res.status(500).send('Error reading or writing file');
    }
});


module.exports = router;