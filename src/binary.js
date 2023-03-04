import fs from 'fs'

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


export { write_binary_file }


