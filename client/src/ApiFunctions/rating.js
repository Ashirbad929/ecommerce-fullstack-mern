import React from "react";
import StarRating from "react-star-ratings";
export const showAverage = (p) => {
    if (p && p.ratings) {
      let ratingsArray = p.ratings;
      let total = 0;
      let length = ratingsArray.length;
  
      // Calculate the sum of all ratings
      ratingsArray.forEach((r) => {
        total += r.star;
      });
  
      // Calculate the average rating
      let averageRating = total / length;
  
      // Round the average rating to 1 decimal place
      averageRating = Math.round(averageRating * 10) / 10;
  
      return (
        <div>
          <StarRating
            rating={averageRating}
            starRatedColor="#FFD700"
            starEmptyColor="#D3D3D3"
            starDimension="20px" // Adjust this value to change the size of stars
            starSpacing="2px" // Adjust this value to set the spacing between stars
          />
          <span>({length})</span>
        </div>
      );
    } 
  };
  