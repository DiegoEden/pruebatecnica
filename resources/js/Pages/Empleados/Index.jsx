import { useForm, router, Link } from "@inertiajs/react";

export default function Index({ empleados, areas }) {
  const { data, setData, post, reset } = useForm({
    nombre: "", apellido: "", email: "", area_id: ""
  });

  const submit = (e) => { 
    e.preventDefault(); 
    post("/empleados", { onSuccess: () => reset() }); 
  };

  const handleDelete = (id) => {
    if (confirm("¿Seguro que deseas eliminar este empleado?")) {
      router.delete(`/empleados/${id}`);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Empleados</h1>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <form onSubmit={submit} className="row g-2">
            <div className="col-md-3">
              <input type="text" placeholder="Nombre" value={data.nombre} onChange={(e) => setData("nombre", e.target.value)} className="form-control" />
            </div>
            <div className="col-md-3">
              <input type="text" placeholder="Apellido" value={data.apellido} onChange={(e) => setData("apellido", e.target.value)} className="form-control" />
            </div>
            <div className="col-md-3">
              <input type="email" placeholder="Email" value={data.email} onChange={(e) => setData("email", e.target.value)} className="form-control" />
            </div>
            <div className="col-md-2">
              <select value={data.area_id} onChange={(e) => setData("area_id", e.target.value)} className="form-select">
                <option value="">-- Área --</option>
                {areas.map(a => <option key={a.id} value={a.id}>{a.nombre}</option>)}
              </select>
            </div>
            <div className="col-md-1 d-grid">
              <button type="submit" className="btn btn-success">Guardar</button>
            </div>
          </form>
        </div>
      </div>

      {/* Tabla */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>ID</th><th>Nombre</th><th>Apellido</th><th>Email</th><th>Área</th><th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.nombre}</td>
                  <td>{e.apellido}</td>
                  <td>{e.email}</td>
                  <td>{e.area?.nombre}</td>
                  <td className="text-center">
                    <Link href={`/empleados/${e.id}/edit`} className="btn btn-warning btn-sm me-2 text-dark">Editar</Link>
                    <button onClick={() => handleDelete(e.id)} className="btn btn-danger btn-sm">Eliminar</button>
                  </td>
                </tr>
              ))}
              {empleados.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-3 text-muted">
                    No hay empleados registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
