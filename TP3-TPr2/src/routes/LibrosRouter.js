import { LibrosController } from "../controllers/LibrosController.js";
import {Router} from 'express'

const librosrouter = Router();

librosrouter.get("/", LibrosController.GetAll);
librosrouter.get("/:id", LibrosController.getById);
librosrouter.post("/post/libros", LibrosController.CreateLibro);
librosrouter.put("/update/:id", LibrosController.UpdateLibroById);
librosrouter.delete("/delete/:id", LibrosController.DeleteLibro);

export {librosrouter}