import { readFile } from 'fs'
import { resolve } from 'path'

const read = async () => {
    const fileToReadPath = resolve('files', 'fileToRead.txt')

    readFile(fileToReadPath, {encoding: 'utf-8'}, (eror, data) => {
        if (eror) throw new Error('FS operation failed !')
        console.log(data)
    })
};

await read();