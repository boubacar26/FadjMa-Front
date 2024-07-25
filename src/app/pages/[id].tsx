"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

type Medicament = {
  name: string;
  _id: string;
  groupName: string;
  stock: string;
};

export default function MedicamentDetail() {
  const router = useRouter();
  const { id } = useParams();
  const [medicament, setMedicament] = useState<Medicament | null>(null);

  useEffect(() => {
    if (id) {
      const fetchMedicament = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/admin/medicament/${id}`
          );
          setMedicament(response.data);
        } catch (error) {
          console.error("Error fetching medicament:", error);
        }
      };

      fetchMedicament();
    }
  }, [id]);

  if (!medicament) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">{medicament.name}</h1>
      <p>ID: {medicament._id}</p>
      <p>Group: {medicament.groupName}</p>
      <p>Stock: {medicament.stock}</p>
      {/* Add more details as needed */}
    </div>
  );
}
