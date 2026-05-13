import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, router } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    const { auth } = usePage().props;
    const user = auth.user;

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const formData = new FormData();
        formData.append('photo', file);
        
        router.post(route('profile.photo.update'), formData, {
            onError: () => alert('Upload failed - please try again')
        });

        e.target.value = '';
    };
    
    const handleDeletePhoto = () => {
        if (confirm('Delete your profile photo?')) {
            router.delete(route('profile.photo.delete'), {
                onError: () => alert('Delete failed - please try again')
            });
        }
    };

    return (
        <AuthenticatedLayout header={<h2>Profile</h2>}>
            <Head title="Profile" />

            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            
                            {/* Profile Photo Section */}
                            <div className="text-center mb-4">
                                {user.photo ? (
                                    <img 
                                        src={`/storage/${user.photo}`} 
                                         className="rounded-circle object-fit-cover border border-3 border-primary shadow-sm"
                                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                        alt="Profile"
                                    />
                                ) : (
                                    <div className="bg-secondary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                        style={{width: '150px', height: '150px', fontSize: '50px', color: 'white'}}>
                                        {user.name?.charAt(0).toUpperCase() || 'U'}
                                    </div>
                                )}<div className="d-flex gap-2 justify-content-center">
                               {!user.photo ? (  
                                
                                    <input 
                                        type="file" 
                                        className="form-control"
                                        style={{width: 'auto'}}
                                        accept="image/*"
                                        onChange={handlePhotoUpload}
                                    />
                                      ):(
                                   
                                        <button 
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={handleDeletePhoto}
                                        >
                                            Delete
                                        </button>
                                    )}
                              </div>
                            </div>

                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                            />
                            
                            <hr />
                            
                            <UpdatePasswordForm />
                            
                            <hr />
                            
                            <DeleteUserForm />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}