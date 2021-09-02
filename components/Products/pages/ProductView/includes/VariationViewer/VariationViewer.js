import React from "react";

// styles
import productViewStyles from "../../../../styles/products.module.scss";

// types
import Rectangle from "./includes/Rectangle";
import Radio from "./includes/Radio";
import Dropdown from "./includes/Dropdown";

export default function VariationViewer(props) {
    // consts
    const { variantMainFields } = props;
    console.log("variantMainFields ", variantMainFields);
    return (
        <React.Fragment>
            {variantMainFields?.length
                ? variantMainFields.map((item) => {
                      return (
                          <div
                              key={item.id}
                              className={`${productViewStyles["item"]} st-fs-14 pb-3`}
                          >
                              {item?.display_type === "rectangle_list" && (
                                  <Rectangle data={item} />
                              )}
                              {item?.display_type === "radio_buttons" && (
                                  <Radio data={item} />
                              )}
                              {item?.display_type === "dropdown" && (
                                  <Dropdown data={item} />
                              )}
                          </div>
                      );
                  })
                : null}
        </React.Fragment>
    );
}
