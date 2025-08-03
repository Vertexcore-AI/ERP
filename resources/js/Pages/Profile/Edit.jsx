import FarmerLayout from '@/Layouts/FarmerLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status, auth }) {
    return (
        <FarmerLayout
            header="Profile Settings"
            user={auth.user}
        >
            <Head title="Profile" />

            <div className="space-y-6">
                <div className="bg-card p-6 shadow-sm rounded-lg border">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </div>

                <div className="bg-card p-6 shadow-sm rounded-lg border">
                    <UpdatePasswordForm className="max-w-xl" />
                </div>

                <div className="bg-card p-6 shadow-sm rounded-lg border">
                    <DeleteUserForm className="max-w-xl" />
                </div>
            </div>
        </FarmerLayout>
    );
}
