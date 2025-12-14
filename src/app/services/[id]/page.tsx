import {redirect} from 'next/navigation';

export default function ServiceProviderRedirectPage({ params }: { params: { id: string } }) {
    redirect(`/en/services/${params.id}`);
}
