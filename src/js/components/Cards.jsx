import React from "react";

const Cards = () => {
  const cardData = Array.from({ length: 4 }, (_, index) => index + 1); // IDs: 1, 2, 3, 4

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {cardData.map((id) => (
          <div className="col" key={id}>
            <div className="card h-100">
              <img
                src={`https://placedog.net/400/300?id=${id}`}
                className="card-img-top"
                alt="dog"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Doggies</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.
                </p>
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;


