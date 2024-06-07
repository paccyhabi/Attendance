import axios from "axios";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";

const DeleteInst = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const deleteMutation = useMutation(
    async () => {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return await axios.delete(`https://attendance-management-ipoq.onrender.com/api/institutions/${id}`, config);
    },
    {
      onSuccess: () => {
        window.location.replace("/manageInst");
      },
      onError: (error) => {
        console.error("Deletion error:", error);
      },
    }
  );

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  if (!token) {
    return <p>You are not authorized to delete institutions.</p>;
  }

  return (
    <div>
      <h2>Confirm Institution Deletion</h2>
      <p>Are you sure you want to delete this institution?</p>
      <button onClick={handleDelete} disabled={deleteMutation.isLoading}>
        {deleteMutation.isLoading ? "Deleting..." : "Delete"}
      </button>
      <button onClick={() => window.location.replace("/manageInst")}>
        Cancel
      </button>
    </div>
  );
};

export default DeleteInst;
