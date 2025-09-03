import { useForm, Link, router } from "@inertiajs/react";

export default function Edit({ empleado, areas }) {
  const { data, setData, put, errors } = useForm({
    id: empleado.id || "",
    nombre: empleado.nombre || "",
    apellido: empleado.apellido || "",
    email: empleado.email || "",
    area_id: empleado.area_id || ""
  });

  const submit = (e) => {
    e.preventDefault();
    put(`/empleados/update/${empleado.id}`);
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Editar Empleado</h1>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={submit} className="row g-3" method="put">
            <input type="hidden" name="_method" value="put" /> 
            <input type="hidden" name="id" value={data.id} />
            <div className="col-md-6">
              <label className="form-label">Nombre</label>
              <input type="text" value={data.nombre} onChange={(e) => setData("nombre", e.target.value)} className="form-control" />
              {errors.nombre && <div className="text-danger">{errors.nombre}</div>}
            </div>
            <div className="col-md-6">
              <label className="form-label">Apellido</label>
              <input type="text" value={data.apellido} onChange={(e) => setData("apellido", e.target.value)} className="form-control" />
              {errors.apellido && <div className="text-danger">{errors.apellido}</div>}
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" value={data.email} onChange={(e) => setData("email", e.target.value)} className="form-control" />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="col-md-6">
              <label className="form-label">Área</label>
              <select value={data.area_id} onChange={(e) => setData("area_id", e.target.value)} className="form-select">
                <option value="">-- Selecciona área --</option>
                {areas.map((a) => (
                  <option key={a.id} value={a.id}>{a.nombre}</option>
                ))}
              </select>
              {errors.area_id && <div className="text-danger">{errors.area_id}</div>}
            </div>
            <div className="col-12 d-flex justify-content-between">
              <Link href="/empleados" className="btn btn-secondary">Cancelar</Link>
              <button type="submit" className="btn btn-primary">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
