import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ report }) {
    return (
        <AuthenticatedLayout header={<h2 className="fw-bold text-dark">Détails du rapport</h2>}>
            <Head title="Voir rapport" />
         <a href={route('reports.index')} className="btn btn-secondary mt-3">
                                <i className="bi bi-arrow-left"/>
 Liste de Raport 
                            </a>
            <div className="container py-4">
                
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <h4 className="fw-bold mb-3">{report.title}</h4>
                        <p><strong>Type :</strong> {report.type}</p>
                        <p><strong>Date de création :</strong> {report.created_at}</p>

                        {report.file ? (
                            <a href={route('reports.download', report.id)} className="btn btn-success mt-3">
                                <i className="bi bi-download me-2"></i> Télécharger le fichier
                            </a>
                        ) : (
                            <p className="text-muted mt-3">Aucun fichier associé à ce rapport.</p>
                        )}
                    </div>
                </div>
                
            </div>
        </AuthenticatedLayout>
    );
}
