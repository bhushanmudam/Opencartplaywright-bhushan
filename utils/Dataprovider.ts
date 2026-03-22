import fs from 'fs';

import {parse} from "csv-parse/sync";

export class Dataprovider{

    static getTestDataFromJson(filepath:string){
        let data:string = JSON.parse(fs.readFileSync(filepath,'utf-8'));
        return data;
    }
    
    static getTestDataFromCsv(filepath:string){
        let data = parse(fs.readFileSync(filepath),{columns:true,skip_empty_lines:true});
        return data;
    }
}
