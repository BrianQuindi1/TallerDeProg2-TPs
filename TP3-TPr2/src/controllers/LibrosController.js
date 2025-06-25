import { LibroService } from "../service/LibroService.js";

export const LibrosController = {
	GetAll: async (req, res) => {
		const libros = await LibroService.GetAll();
		if (!libros) {
			res.status(500).json({
				message: "Error interno en la bdd",
				payload: null,
				ok: false,
			});
			return;
		}
		res.status(200).json({
			message: "Exito!!!",
			payload: libros,
			ok: true,
		});
		return;
	},
	getById: async (req, res) => {
		const { id } = req.params;
		const libro = await LibroService.GetById(id);
		if (!libro) {
			res.status(404).json({
				message: "Error 404 not found",
				payload: null,
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Libro encontrado!!",
			payload: libro,
			ok: true,
		});
		return;
	},
	UpdateLibroById: async (req, res) => {
		const { id } = req.params;
		const updates  = req.body; 
		const responseUpdate = await LibroService.UpdateLibroById(id, updates);
		if (!responseUpdate) {
			res.status(404).json({
				message: "Error al actualizar libro",
				payload: null,
				ok: false,
			});
			return;
		}
		res.status(200).json({
			message: "Libro Actualizado con exito",
			payload: responseUpdate,
			ok: true,
		});
		return;
	},
	CreateLibro: async (req, res) => {
		const libro = req.body;
		try {
			const libroResponse = await LibroService.CreateLibro(libro);
			res.status(200).json({
				message: "Success",
				payload: libroResponse,
				ok: true,
			});
			return;
		} catch (error) {
			console.log({ message: error.message, message: "algo salio mal" });
			res.status(404).json({
				payload: null,
				message: "No se pudo crear el libro",
				ok: false,
			});
			return;
		}
	},
	DeleteLibro: async (req, res) => {
		const { id } = req.params;
		const idLibro = await LibroService.DeleteLibro(id);

		if (!idLibro) {
			return res.status(404).json({
				payload: null,
				message: "No se pudo eliminar el libro",
				ok: false,
			});
		}

		return res.status(200).json({
			message: "Success: libro eliminado con exito!!",
			payload: idLibro,
			ok: true,
		});
	},
};
