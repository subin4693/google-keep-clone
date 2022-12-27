import React from "react";
import Card from "./Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useUserContext } from "../../context/Context";

const CardContainer = ({ card, page, Notes }) => {
  //console.log(Notes)
  const { search } = useUserContext();
  return (
    <div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 1300: 5, 1250: 4, 950: 3, 640: 2, 550: 1 }}
      >
        <Masonry className={card}>
          {search.length > 0
            ? Notes.map((value) => {
                if (value.title.includes(search) || value.text.includes(search))
                  return (
                    <Card
                      title={value.title}
                      para={value.text}
                      key={value.key}
                      page={page}
                      uniquKey={value.key}
                    />
                  );
                return null;
              })
            : Notes.map((value) => {
                return (
                  <Card
                    title={value.title}
                    para={value.text}
                    key={value.key}
                    page={page}
                    uniquKey={value.key}
                  />
                );
              })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default CardContainer;
