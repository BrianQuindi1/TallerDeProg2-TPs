const fs = require('fs');

function leerArchivoComoString(ruta) {
    try {
        return fs.readFileSync(ruta, 'utf8');
    } catch (error) {
        console.error(`Error al leer el archivo: ${error.message}`);
        return null;
    }
}

function escribirTextoEnArchivo(ruta, texto, flag) {
    const existe = fs.existsSync(ruta);
    
    if (!existe && !flag) {
        throw new Error("El archivo no existe");
    }
    
    fs.writeFileSync(ruta, texto, 'utf8');
}

const texto = '123 | 456 | 789 | 1bc | 10';
const separador = ' | ';

function transformarStringEnArrayDeNumeros(texto, separador) {
    return texto.split(separador)
                .filter(num => !isNaN(Number(num)) && num.trim() !== "")
                .map(num => parseInt(num));
                
}

console.log(transformarStringEnArrayDeNumeros(texto, separador)); // [123, 456, 789, 10]

const array = [123, 456, 789, 10];
const separador2 = ',';

function transformarArrayDeNumerosAUnSoloString(array, separador2) {
    return array.join(separador2);
}

console.log(transformarArrayDeNumerosAUnSoloString(array, separador2)); // '123,456,789,10'

const array1 = [1, 5, 10];
const array2 = [2, 3, 8, 11];

function combinarDosArrays(array1, array2) {
    return [...new Set([...array1, ...array2])].sort((a, b) => a - b);
}

console.log(combinarDosArrays(array1, array2)); // [1, 2, 3, 5, 8, 10, 11]


const arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]];

function combinarNArrays(arrays) {
    return [...new Set(arrays.flat())].sort((a, b) => a - b);
}

console.log(combinarNArrays(arrays)); // [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]


module.exports = {leerArchivoComoString, escribirTextoEnArchivo, transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString, combinarDosArrays, combinarNArrays};