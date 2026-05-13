import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout header={<h2 className="fw-bold text-dark">Tableau de bord Employé</h2>}>
            <Head title="Dashboard" />

            <div className="container py-4">
                {/* Welcome Section */}
                <div className="alert alert-primary shadow-sm mb-4">
                    <i className="bi bi-person-check me-2"></i>
                    Bienvenue sur votre tableau de bord, vous êtes connecté !
                </div>

                {/* Quick Actions */}
      <div className="row g-4 mb-4 justify-content-center">
    <div className="col-md-3">
        <div className="card h-100 shadow-sm border-0 text-center">
            <div className="card-body">
                <i className="bi bi-box-seam display-5 text-primary"></i>
                <h5 className="mt-3">Produits</h5>
                <p className="text-muted">Consultez et gérez vos articles.</p>
                <Link href={route('employee.produits.index')} className="btn btn-primary btn-sm">
                    Voir produits
                </Link>
            </div>
        </div>
    </div>

    <div className="col-md-3">
        <div className="card h-100 shadow-sm border-0 text-center">
            <div className="card-body">
                <i className="bi bi-graph-up-arrow display-5 text-danger"></i>
                <h5 className="mt-3">Rapports</h5>
                <p className="text-muted">Analysez vos ventes et stocks.</p>
                <Link className="btn btn-danger btn-sm" href={route('employee.reports.create')}>
                    Voir rapports
                </Link>
            </div>
        </div>
    </div>
</div>

            </div>
        </AuthenticatedLayout>
    );
}
