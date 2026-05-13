import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function CreateProduit({ categories }) {
   
    const { data, setData, post, processing, errors } = useForm({
        nom: '',
        description: '',
        prix: '',
        quantiteStock: '',
        seuilAlert: '',
        photo:null,
        categorie_id: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.produits.store'));
    };

    return (
        <AuthenticatedLayout header="Ajouter un produit">
            <Head title="Ajouter produit" />

            <div className="container py-4">
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <h4 className="fw-bold mb-4">Ajouter un nouveau produit</h4>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nom du produit</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.nom}
                                    onChange={(e) => setData('nom', e.target.value)}
                                    required
                                />
                                {errors.nom && <div className="text-danger">{errors.nom}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                ></textarea>
                                {errors.description && <div className="text-danger">{errors.description}</div>}
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Prix (MAD)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={data.prix}
                                        onChange={(e) => setData('prix', e.target.value)}
                                        required
                                    />
                                    {errors.prix && <div className="text-danger">{errors.prix}</div>}
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Quantité en stock</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={data.quantiteStock}
                                        onChange={(e) => setData('quantiteStock', e.target.value)}
                                        required
                                    />
                                    {errors.quantiteStock && <div className="text-danger">{errors.quantiteStock}</div>}
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Seuil d’alerte</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={data.seuilAlert}
                                        onChange={(e) => setData('seuilAlert', e.target.value)}
                                        required
                                    />
                                    {errors.seuilAlert && <div className="text-danger">{errors.seuilAlert}</div>}
                                </div>
                                                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Photo produit</label>
                                    <input 
                                        type="file" 
                                        className="form-control"
                                        style={{width: 'auto'}}
                                        accept="image/*"
                                        onChange={(e) => setData('photo', e.target.files[0])} // Direct assignment
                                    />
                                    {errors.photo && <div className="text-danger">{errors.photo}</div>}
                                </div>
                                 
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Catégorie</label>
                                <select
                                    className="form-select"
                                    value={data.categorie_id}
                                    onChange={(e) => setData('categorie_id', e.target.value)}
                                    required
                                >
                                    <option value="">-- Sélectionner une catégorie --</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.nom}
                                        </option>
                                    ))}
                                </select>
                                {errors.categorie_id && <div className="text-danger">{errors.categorie_id}</div>}
                            </div>

                            <div className="d-flex justify-content-between mt-4">
                                <Link href={route('admin.produits.index')} className="btn btn-secondary">
                                    <i className="bi bi-arrow-left me-2"></i> Liste des produits
                                </Link>
                                <button type="submit" className="btn btn-primary" disabled={processing}>
                                    <i className="bi bi-save me-2"></i> Enregistrer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
