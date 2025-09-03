import { useForm, router } from "@inertiajs/react";
import { useState } from "react";
import { PencilSquare, Trash, Check, X } from "react-bootstrap-icons";

export default function Index({ empleados, areas }) {
    const { data, setData, post, put, reset } = useForm({
        nombre: "",
        apellido: "",
        email: "",
        area_id: "",
    });

    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        area_id: "",
    });

    // Crear
    const submit = (e) => {
        e.preventDefault();
        post("/empleados", { onSuccess: () => reset() });
    };

    // Actualizar
    const handleUpdate = (id) => {
        put(`/empleados/${id}`, editData, { onSuccess: () => setEditId(null) });
    };

    // Eliminar
    const handleDelete = (id) => {
        if (confirm("¿Seguro que deseas eliminar este empleado?")) {
            router.delete(`/empleados/${id}`);
        }
    };

    return (
        <div className="container py-4">
            <h1 className="mb-4 text-center">Empleados</h1>

            {/* Formulario crear empleado */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <form onSubmit={submit} className="row g-2">
                        <div className="col-md-3">
                            <input
                                type="text"
                                placeholder="Nombre"
                                value={data.nombre}
                                onChange={(e) =>
                                    setData("nombre", e.target.value)
                                }
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-3">
                            <input
                                type="text"
                                placeholder="Apellido"
                                value={data.apellido}
                                onChange={(e) =>
                                    setData("apellido", e.target.value)
                                }
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-3">
                            <input
                                type="email"
                                placeholder="Email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-2">
                            <select
                                value={data.area_id}
                                onChange={(e) =>
                                    setData("area_id", e.target.value)
                                }
                                className="form-select"
                            >
                                <option value="">-- Área --</option>
                                {areas.map((a) => (
                                    <option key={a.id} value={a.id}>
                                        {a.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-1 d-grid">
                            <button type="submit" className="btn btn-success">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Tabla empleados */}
            <div className="card shadow-sm">
                <div className="card-body p-0">
                    <table className="table table-hover mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Área</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empleados.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>
                                        {editId === e.id ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editData.nombre}
                                                onChange={(ev) =>
                                                    setEditData({
                                                        ...editData,
                                                        nombre: ev.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            e.nombre
                                        )}
                                    </td>
                                    <td>
                                        {editId === e.id ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editData.apellido}
                                                onChange={(ev) =>
                                                    setEditData({
                                                        ...editData,
                                                        apellido:
                                                            ev.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            e.apellido
                                        )}
                                    </td>
                                    <td>
                                        {editId === e.id ? (
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={editData.email}
                                                onChange={(ev) =>
                                                    setEditData({
                                                        ...editData,
                                                        email: ev.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            e.email
                                        )}
                                    </td>
                                    <td>
                                        {editId === e.id ? (
                                            <select
                                                className="form-select"
                                                value={editData.area_id}
                                                onChange={(ev) =>
                                                    setEditData({
                                                        ...editData,
                                                        area_id:
                                                            ev.target.value,
                                                    })
                                                }
                                            >
                                                <option value="">
                                                    -- Área --
                                                </option>
                                                {areas.map((a) => (
                                                    <option
                                                        key={a.id}
                                                        value={a.id}
                                                    >
                                                        {a.nombre}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            e.area?.nombre
                                        )}
                                    </td>
                                    <td className="text-center">
                                        {editId === e.id ? (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleUpdate(e.id)
                                                    }
                                                    className="btn btn-success btn-sm me-1"
                                                    title="Guardar"
                                                >
                                                    <Check />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setEditId(null)
                                                    }
                                                    className="btn btn-secondary btn-sm"
                                                    title="Cancelar"
                                                >
                                                    <X />
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => {
                                                        setEditId(e.id);
                                                        setEditData({
                                                            nombre: e.nombre,
                                                            apellido:
                                                                e.apellido,
                                                            email: e.email,
                                                            area_id:
                                                                e.area_id || "",
                                                        });
                                                    }}
                                                    className="btn btn-warning btn-sm text-dark me-1"
                                                    title="Editar"
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(e.id)
                                                    }
                                                    className="btn btn-danger btn-sm"
                                                    title="Eliminar"
                                                >
                                                    Eliminar{" "}
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {empleados.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center py-3 text-muted"
                                    >
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
