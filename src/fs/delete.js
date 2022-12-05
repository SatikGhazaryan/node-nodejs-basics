import { unlink } from 'fs';
import { resolve } from 'path';

const remove = async () => {
    const fileToRemovePath = resolve('files', 'fileToRemove.txt')

    unlink(fileToRemovePath, (eror) => {
        if (eror) throw new Error('FS operation failed')
        console.log('Removed Successfully!')
    })
};

await remove();