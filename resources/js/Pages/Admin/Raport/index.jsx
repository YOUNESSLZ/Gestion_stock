import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Reports({ reports }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="fw-bold text-dark">Rapports</h2>
            }
        >
            <Head title="Rapports" />

            <div className="container py-4">
                {/* Actions rapides */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold">Liste des rapports</h4>
                    <Link href={route('reports.create')} className="btn btn-primary">
                        <i className="bi bi-file-earmark-plus me-2"></i> Nouveau rapport
                    </Link>
                </div>

                {/* Tableau des rapports */}
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <table className="table table-hover align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Titre</th>
                                    <th>Type</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reports && reports.length > 0 ? (
                                    reports.map((report, index) => (
                                        <tr key={report.id}>
                                            <td>{index + 1}</td>
                                            <td>{report.title}</td>
                                            <td>{report.type}</td>
                                            <td>{new Date(report.created_at).toLocaleString('fr-FR')}</td>
                                            <td>
                                                <div className="btn-group">
                                                    <Link 
                                                        href={route('reports.show', report.id)} 
                                                        className="btn btn-sm btn-info"
                                                    >
                                                        <i className="bi bi-eye"></i>
                                                    </Link>
<a href={route('reports.download', report.id)} className="btn btn-success btn-sm py-0">
    <i className="bi bi-download"></i>
</a>
                                                    <Link 
                                                        href={route('reports.edit', report.id)} 
                                                        className="btn btn-sm btn-warning"
                                                    >
                                                        <i className="bi bi-pencil"></i>
                                                    </Link>
                                                    <Link 
                                                        href={route('reports.destroy', report.id)} 
                                                        method="delete"
                                                        as="button"
                                                        className="btn btn-sm btn-danger"
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center text-muted">
                                            Aucun rapport disponible
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
