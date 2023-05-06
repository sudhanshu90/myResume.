import { useMediaQuery } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function UserReviewCard() {
  const people = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
  ];
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const responsive = useMediaQuery("(min-width:800px)");

  const nextPerson = useCallback(() => {
    // your function logic here
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > people.length - 1) {
        return 0;
      }
      if (newIndex < 0) {
        return people.length - 1;
      }
      return newIndex;
    });
  }, [people.length]);

  useEffect(() => {
    setInterval(() => {
      nextPerson();
    }, 5000);
  }, [nextPerson]);
  return (
    <React.Fragment>
      <article
        className="review"
        style={{
          height: !responsive ? "400px" : "380px",
        }}
      >
        <div className="img-container">
          <img src={image} alt={name} className="person-img" loading="lazy" />
          <span className="quote-icon">
            <FormatQuoteIcon />
          </span>
        </div>
        <div style={{ height: !responsive ? "200px" : "100px" }}>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">
            {text.length > 200 ? `${text?.slice(0, 200)}...` : text}
          </p>
        </div>
      </article>
    </React.Fragment>
  );
}

export default UserReviewCard;
