import { readdir } from 'fs'
import { resolve } from 'path';

const list = async () => {
    const folderPath = resolve('files')

    readdir(folderPath, (eror, files) => {
        if (eror) throw new Error('FS operation failed !')
        console.log(files)
    })
};

await list();