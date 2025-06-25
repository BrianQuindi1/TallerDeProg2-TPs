import { JsonHandler } from "../utils/jsonHandler.js";

export const JsonRepository = {
	deleteById: async (id) => {
		try {
			const libros = await JsonRepository.getAll();
			if (!libros) return null; //me traigo todos y si hay null devuelvo null

			const libroEncontrado = libros.find((libro) => libro.id === id);
			if (libroEncontrado == null) return null; //valido buscando si hay un libro con el id recibido

			const librosActualizados = libros.filter((libro) => libro.id !== id);
			//creo un array sin el libro a eliminar
			await JsonHandler.write(librosActualizados); //sobreescribo el json con este nuevo array

			return libroEncontrado;
		} catch (error) {
			console.error(error);
			return null;
		}
	},
	updateById: async (id, cambios) => {
		try {
			const libro = await JsonRepository.getById(id);
			if (libro == null) return null;
			const libroActualizado = { ...libro, ...cambios };
			const libros = await JsonRepository.getAll();
			const librosActualizados = libros.map((libro) =>
				libro.id === id ? libroActualizado : libro,
			);

			await JsonHandler.write(librosActualizados);
			return libroActualizado;
		} catch (error) {
			console.error(error);
			return null;
		}
	},
	createOne: async (libro) => {
		try {
			const libros = await JsonRepository.getAll();
			libros.push(libro);
			await JsonHandler.write(libros);
		} catch (error) {
			console.error("Error en createOne:", error.message);
			throw error;
		}
	},
	getById: async (id) => {
		const libros = await JsonHandler.read();
		if (!libros) return null;
		const libro = libros.find((libro) => libro.id === id);
		if (!libro) return null;
		return libro;
	},
	getAll: async () => await JsonHandler.read(),
};
