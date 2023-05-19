
import { Link } from "react-router-dom";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ShopCategory = () => {
    const categories = [
      {
        name: "Soccer Toys",
        subCategories: [
          {
            name: "Football Toys",
            toys: [
              {
                name: "Football",
                price: "$9.99",
                rating: 4.5,
                image: "toy1.jpg",
              },
              // Add more toys...
            ],
          },
          {
            name: "Goal Post",
            toys: [
              {
                name: "Bars",
                price: "$9.99",
                rating: 4.5,
                image: "toy1.jpg",
              },
              // Add more toys...
            ],
          },
          {
            name: "Player Set",
            toys: [
              {
                name: "Player statue",
                price: "$9.99",
                rating: 4.5,
                image: "toy1.jpg",
              },
              // Add more toys...
            ],
          },
        ],
      },
      {
        name: "Cricket Toys",
        subCategories: [
          {
            name: "Cricket Bats",
            toys: [
              {
                name: "Bat",
                price: "$9.99",
                rating: 4.5,
                image: "toy1.jpg",
              },
              // Add more toys...
            ],
          },
          {
            name: "Cricket Balls",
            toys: [
              {
                name: "Ball",
                price: "$9.99",
                rating: 4.5,
                image: "toy1.jpg",
              },
              // Add more toys...
            ],
          },
          {
            name: "Player sets",
            toys: [
              {
                name: "Players statue",
                price: "$9.99",
                rating: 4.5,
                image: "toy1.jpg",
              },
              // Add more toys...
            ],
          },
        ],
      },
      {
        name: "Basketball Toys",
        subCategories: [
          {
            name: "Basketball Post",
            toys: [
              {
                name: "Bars",
                price: "$9.99",
                rating: 4.5,
                image: "toy1.jpg",
              },
              // Add more toys...
            ],
          },
          {
            name: "Basketball",
            toys: [
              {
                name: "Ball",
                price: "$9.99",
                rating: 4.5,
                image: "toy1.jpg",
              },
              // Add more toys...
            ],
          },
          {
            name: "Player Sets",
            toys: [
              {
                name: "Players statue",
                price: "$9.99",
                rating: 4.5,
                image: "toy1.jpg",
              },
              // Add more toys...
            ],
          },
        ],
      },
      // Add more categories...
    ];

    return (
      <div>
        <div>
          <h1 className="text-5xl mt-5 mb-5 font-bold text-center">
            Shop by Category
          </h1>
        </div>
        <div>
          <Tabs>
            <TabList className="flex">
              {categories.map((category) => (
                <Tab
                  key={category.name}
                  className="p-4 border-b-2 border-gray-200"
                >
                  {category.name}
                </Tab>
              ))}
            </TabList>

            {categories.map((category) => (
              <TabPanel key={category.name} className="p-4">
                {category.subCategories.map((subCategory) => (
                  <div key={subCategory.name}>
                    <h3 className="text-lg font-bold mb-4">
                      {subCategory.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {subCategory.toys.map((toy) => (
                        <div
                          key={toy.name}
                          className="p-4 border border-gray-200 rounded"
                        >
                          <img
                            src={toy.image}
                            alt={toy.name}
                            className="w-full h-40 object-cover mb-2"
                          />
                          <h4 className="text-md font-semibold">{toy.name}</h4>
                          <p className="text-gray-600">{toy.price}</p>
                          <p className="text-yellow-500">{toy.rating} stars</p>
                          <Link to="/">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                              View Details
                            </button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    );
};

export default ShopCategory;