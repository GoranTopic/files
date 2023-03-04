import fs from 'fs'
/*
 * this are the format files to handle json files

/**
 * write_json.
 *
 * @param {} obj
 * @param {} path
 */
const write_json = (obj, path) => {
    try{
        let str = JSON.stringify(obj)
        fs.writeFileSync(path, str);
        return true
    }catch(e) {
        console.error('could not write file');
        return false
    }
}

/**
 * read_json.
 *
 * @param {} path
 */
const read_json = path => {
    try{
        let str = fs.readFileSync(path);
        return JSON.parse(str)
    }catch(e) {
        console.error('could not read file ' + e);
        return null
    }
}

/**
 * delete_json.
 *
 * @param {} path
 */
const delete_json = path => {
    try{
        return fs.unlinkSync(path);
    }catch(e) {
        console.error('could not delete json file ' + e);
        return null
    }
}

/**
 * write_binary_file.
 * this function writes down a binary file to disk
 *
 * @param {} bin_file
 * @param {} path
 */
const write_binary_file = ( bin_file, path ) => {
    fs.writeFileSync(path, bin_file);
}

export { 
    write_json,
    read_json,
    delete_json,
}


