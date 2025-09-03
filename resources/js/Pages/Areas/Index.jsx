import { useForm, router } from "@inertiajs/react";
import { useState } from "react";
import { PencilSquare, Trash, Check, X } from "react-bootstrap-icons";

export default function Index({ areas }) {
  const { data, setData, post, put, reset } = useForm({ nombre: "" });
  const [editId, setEditId] = useState(null);
  const [editNombre, setEditNombre] = useState("");

  const submit = (e) => { e.preventDefault(); post("/areas", { onSuccess: () => reset() }); };
  const handleUpdate = (id) => { put(`/areas/${id}`, { nombre: editNombre }, { onSuccess: () => setEditId(null) }); };
  const handleDelete = (id) => { if (confirm("¿Seguro que deseas eliminar esta área?")) { router.delete(`/areas/${id}`); } };

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Áreas de Trabajo</h1>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <form onSubmit={submit} className="row g-2 align-items-center">
            <div className="col-sm">
              <input type="text" placeholder="Nueva área" value={data.nombre} onChange={(e) => setData("nombre", e.target.value)} className="form-control" />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">Agregar</button>
            </div>
          </form>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr><th>ID</th><th>Nombre</th><th className="text-center">Acciones</th></tr>
            </thead>
            <tbody>
              {areas.map((a) => (
                <tr key={a.id}>
                  <td>{a.id}</td>
                  <td>{editId === a.id ? <input value={editNombre} onChange={(e) => setEditNombre(e.target.value)} className="form-control" /> : a.nombre}</td>
                  <td className="text-center">
                    {editId === a.id ? (
                      <>
                        <button onClick={() => handleUpdate(a.id)} className="btn btn-success btn-sm me-1"><Check /></button>
                        <button onClick={() => setEditId(null)} className="btn btn-secondary btn-sm"><X /></button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => { setEditId(a.id); setEditNombre(a.nombre); }} className="btn btn-warning btn-sm text-dark me-1">Editar</button>
                        <button onClick={() => handleDelete(a.id)} className="btn btn-danger btn-sm">Eliminar</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
              {areas.length === 0 && <tr><td colSpan="3" className="text-center py-3 text-muted">No hay áreas registradas.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
