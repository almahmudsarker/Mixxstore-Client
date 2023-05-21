import React, { useState } from "react";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  // Mocked data for demonstration
  const [toys, setToys] = useState([
    {
      id: 1,
      name: "Toy 1",
      price: 10,
      quantity: 5,
      description: "Description 1",
    },
    {
      id: 2,
      name: "Toy 2",
      price: 15,
      quantity: 3,
      description: "Description 2",
    },
  ]);

  const [selectedToy, setSelectedToy] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleUpdateToy = (updatedToy) => {
    // Find the index of the updated toy in the toys array
    const index = toys.findIndex((toy) => toy.id === updatedToy.id);

    if (index !== -1) {
      // Update the toy with the new information
      setToys((prevToys) => {
        const updatedToys = [...prevToys];
        updatedToys[index] = updatedToy;
        return updatedToys;
      });

      toast.success("Toy updated successfully");
    } else {
      toast.error("Failed to update toy");
    }

    // Close the update modal
    setSelectedToy(null);
    setShowUpdateModal(false);
  };

  const handleDeleteToy = (toyId) => {
    // Filter out the toy to be deleted from the toys array
    const updatedToys = toys.filter((toy) => toy.id !== toyId);

    setToys(updatedToys);

    toast.success("Toy deleted successfully");
  };

  return (
    <div>
      <h1>My Toys</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy.id}>
              <td>{toy.name}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>{toy.description}</td>
              <td>
                <button
                  onClick={() => {
                    setSelectedToy(toy);
                    setShowUpdateModal(true);
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this toy?"
                      )
                    ) {
                      handleDeleteToy(toy.id);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Toy Modal */}
      {showUpdateModal && selectedToy && (
        <div className="modal">
          <div className="modal-content">
            <h2>Update Toy</h2>
            {/* Update toy form */}
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={selectedToy.name}
                  onChange={(e) =>
                    setSelectedToy((prevToy) => ({
                      ...prevToy,
                      name: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  id="price"
                  value={selectedToy.price}
                  onChange={(e) =>
                    setSelectedToy((prevToy) => ({
                      ...prevToy,
                      price: parseInt(e.target.value),
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  value={selectedToy.quantity}
                  onChange={(e) =>
                    setSelectedToy((prevToy) => ({
                      ...prevToy,
                      quantity: parseInt(e.target.value),
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  value={selectedToy.description}
                  onChange={(e) =>
                    setSelectedToy((prevToy) => ({
                      ...prevToy,
                      description: e.target.value,
                    }))
                  }
                />
              </div>
            </form>

            <button onClick={() => handleUpdateToy(selectedToy)}>Save</button>
            <button onClick={() => setShowUpdateModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToys;
