import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';

export default function EmployeesList({ employees }) {
    return (
        <AuthenticatedLayout header={<h2 className="fw-bold text-dark">👥 Gestion des employés</h2>}>
            <div className="container py-4">
                <div className="card shadow-sm border-0">
                    <div className="card-header d-flex justify-content-between align-items-center bg-light">
                        <h5 className="mb-0 fw-semibold">Liste des employés</h5>
                        <Link
                            href={route('admin.employees.create')}
                            className="btn btn-primary btn-sm fw-bold"
                        >
                            <i className="bi bi-person-plus me-1"></i> Ajouter
                        </Link>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-hover table-sm align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Nom</th>
                                    <th>Email</th>
                                    <th>Statut</th>
                                    <th>Validation</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => (
                                    <tr key={employee.id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <span className={`badge ${employee.estActif ? 'bg-success' : 'bg-danger'}`}>
                                                {employee.estActif ? 'Actif' : 'Inactif'}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`badge ${employee.estValide ? 'bg-success' : 'bg-warning text-dark'}`}>
                                                {employee.estValide ? 'Validé' : 'En attente'}
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <div className="btn-group btn-group-sm" role="group">
                                                {!employee.estValide && (
                                                    <Link
                                                        href={route('admin.employees.approve', employee.id)}
                                                        method="post"
                                                        as="button"
                                                        className="btn btn-success"
                                                    >
                                                        <i className="bi bi-check-circle"></i>
                                                    </Link>
                                                )}
                                                <Link
                                                    href={route('admin.employees.toggle-active', employee.id)}
                                                    method="put"
                                                    as="button"
                                                    className="btn btn-warning"
                                                >
                                                    {employee.estActif ? (
                                                        <i className="bi bi-person-dash"></i>
                                                    ) : (
                                                        <i className="bi bi-person-check"></i>
                                                    )}
                                                </Link>
                                                <Link
                                                    href={route('admin.employees.destroy', employee.id)}
                                                    method="delete"
                                                    as="button"
                                                    className="btn btn-danger"
                                                    onClick={(e) => confirm('Supprimer cet employé ?')}
                                                >
                                                    <i className="bi bi-trash"></i>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
