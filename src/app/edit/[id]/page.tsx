/*import VendorForm from '@/components/VendorForm';
import api from '@/lib/api';



export default async function EditVendorPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await api.get(`/vendors/${params.id}`);

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-8 transition hover:shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Vendor</h1>
        <VendorForm initialData={res.data} />
      </div>
    </main>
  );
}
  */

import VendorForm from '@/components/VendorForm';
import api from '@/lib/api';
import { Vendor } from '@/types/vendor';

type PageProps = {
  params: { id: string };
};

export default async function EditVendorPage({ params }: PageProps) {
  let vendor: Vendor | null = null;

  try {
    const res = await api.get(`/vendors/${params.id}`);
    vendor = res.data;
  } catch (error) {
    console.error('Failed to fetch vendor:', error);
    // You could also redirect or show an error message
  }

  if (!vendor) {
    return (
      <main className="min-h-screen flex items-center justify-center text-gray-800">
        <p>Vendor not found or failed to load.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-8 transition hover:shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Vendor</h1>
        <VendorForm initialData={vendor} />
      </div>
    </main>
  );
}


