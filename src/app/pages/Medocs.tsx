"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import FormButton from "../components/Formulaire";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

type Medicament = {
  name: string;
  _id: string;
  groupName: string;
  stock: string;
};

export default function Medocs() {
  const [modalOpen, setModalOpen] = useState(false);
  const [medicamentData, setMedicamentData] = useState<Medicament[]>([]);
  const [newMedicament, setNewMedicament] = useState<Medicament>({
    name: "",
    _id: "",
    groupName: "",
    stock: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchMedicaments = async () => {
      try {
        const response = await axios.get(
          "https://fadjma-back.onrender.com/admin/medicament/liste-medocs"
        );
        setMedicamentData(response.data);
      } catch (error) {
        console.error("Error fetching medicaments:", error);
      }
    };

    fetchMedicaments();
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMedicament({ ...newMedicament, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("https://fadjma-back.onrender.com/admin/medicament", newMedicament);
      const response = await axios.get(
        "https://fadjma-back.onrender.com/admin/medicament/liste-medocs"
      );
      setMedicamentData(response.data);
      setNewMedicament({ name: "", _id: "", groupName: "", stock: "" });
      closeModal();
    } catch (error) {
      console.error("Erreur ajout medicament:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = medicamentData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(medicamentData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-10">
      <div className="flex justify-between mt-8">
        <div>
          <h5 className="font-bold text-2xl">
            medicaments({medicamentData.length})
          </h5>
          <p className="text-sm font-normal">
            Liste des médicaments disponibles à la vente.
          </p>
        </div>

        <FormButton onClick={openModal} />


        {/* MODAL */}
        
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          onSubmit={handleSubmit}
          formValues={newMedicament}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-between mt-8">
        <input
          type="text"
          className="w-96 h-10 bg-white border border-black"
          placeholder="Rechercher dans l'inventaire des médicaments."
        />
        <select className="w-56 h-10 bg-white border border-black">
          <option value="">Sélectionnez un groupe</option>
          {/* Options de groupe */}
        </select>
      </div>

      <div className="mt-8">
        <table className="table-auto bg-white w-full text-center mx-auto">
          <thead className="text-start border-b border-black">
            <tr className="text-start p-8">
              <th className="p-4">Nom du médicament</th>
              <th>ID du médicament</th>
              <th>Nom de groupe</th>
              <th>Stock en quantité</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((medicament, index) => (
              <tr key={index}>
                <td className="p-4 border-b">{medicament.name}</td>
                <td className="border-b">{medicament._id}</td>
                <td className="border-b">{medicament.groupName}</td>
                <td className="border-b">{medicament.stock}</td>
                <td className="border-b">
                  <Link href={`/dashboard/medicaments/${medicament._id}`}>
                    Voir tous les détails »
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between">
        <div className="mt-4">
          <p>
            Affichage de 1 à {itemsPerPage} résultats sur{" "}
            {medicamentData.length}
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="bg-white p-2 border rounded-full"
          >
            <span>
              <IoIosArrowBack />
            </span>
          </button>
          <p className="mx-4 mt-1">Page ({currentPage})</p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-white p-2 border rounded-full"
          >
            <span>
              <IoIosArrowForward />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Modal from "../components/Modal";
// import FormButton from "../components/Formulaire";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import Link from "next/link";

// type Medicament = {
//   name: string;
//   _id: string;
//   groupName: string;
//   stock: string;
// };

// export default function Medocs() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [medicamentData, setMedicamentData] = useState<Medicament[]>([]);
//   const [newMedicament, setNewMedicament] = useState<Medicament>({
//     name: "",
//     _id: "",
//     groupName: "",
//     stock: "",
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     // Fetch medicaments from API when component mounts
//     const fetchMedicaments = async () => {
//       try {
//         const response = await axios.get(
//           "https://fadjma-back.onrender.com/admin/medicament/liste-medocs"
//         );
//         setMedicamentData(response.data);
//       } catch (error) {
//         console.error("Error fetching medicaments:", error);
//       }
//     };

//     fetchMedicaments();
//   }, []);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setNewMedicament({ ...newMedicament, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8080/admin/medicament", newMedicament);
//       const response = await axios.get(
//         "http://localhost:8080/admin/medicament/liste-medocs"
//       );
//       setMedicamentData(response.data);
//       setNewMedicament({ name: "", _id: "", groupName: "", stock: "" });
//       closeModal();
//     } catch (error) {
//       console.error("Erreur ajout medicament:", error);
//     }
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = medicamentData.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(medicamentData.length / itemsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="p-10">
//       <div className="flex justify-between mt-8">
//         <div>
//           <h5 className="font-bold text-2xl">
//             medicaments({medicamentData.length})
//           </h5>
//           <p className="text-sm font-normal">
//             Liste des médicaments disponibles à la vente.
//           </p>
//         </div>

//         <FormButton onClick={openModal} />

//         <Modal
//           isOpen={modalOpen}
//           onClose={closeModal}
//           onSubmit={handleSubmit}
//           formValues={newMedicament}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="flex justify-between mt-8">
//         <input
//           type="text"
//           className="w-96 h-10 bg-white border border-black"
//           placeholder="Rechercher dans l'inventaire des médicaments."
//         />
//         <select className="w-56 h-10 bg-white border border-black">
//           <option value="">Sélectionnez un groupe</option>
//           {/* Options de groupe */}
//         </select>
//       </div>

//       <div className="mt-8">
//         <table className="table-auto bg-white w-full text-center mx-auto">
//           <thead className="text-start border-b border-black">
//             <tr className="text-start p-8">
//               <th className="p-4">Nom du médicament</th>
//               <th>ID du médicament</th>
//               <th>Nom de groupe</th>
//               <th>Stock en quantité</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((medicament, index) => (
//               <tr key={index}>
//                 <td className="p-4 border-b">{medicament.name}</td>
//                 <td className="border-b">{medicament._id}</td>
//                 <td className="border-b">{medicament.groupName}</td>
//                 <td className="border-b">{medicament.stock}</td>
//                 <td className="border-b">
//                   <Link href={`components/Detail`}>
//                     <p>Voir tous les détails »</p>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-between">
//         <div className="mt-4">
//           <p>
//             Affichage de 1 à {itemsPerPage} résultats sur{" "}
//             {medicamentData.length}
//           </p>
//         </div>
//         <div className="flex justify-end mt-4">
//           <button
//             onClick={handlePreviousPage}
//             disabled={currentPage === 1}
//             className="bg-white p-2 border rounded-full"
//           >
//             <span>
//               <IoIosArrowBack />
//             </span>
//           </button>
//           <p className="mx-4 mt-1">Page ({currentPage})</p>
//           <button
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//             className="bg-white p-2 border rounded-full"
//           >
//             <span>
//               <IoIosArrowForward />
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
