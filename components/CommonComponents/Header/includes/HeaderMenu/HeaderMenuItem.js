import React from "react";

// nextjs - link
import Link from "next/link";

// header styles
import headerStyles from "../../styles/header.module.scss";

// icons : feather
import FeatherIcon from "feather-icons-react";

export default function HeaderMenuItem(props) {
    // props
    const { menuItem, menuItemIndex, catName } = props;

    // variables
    let multiLevelCategories = null;

    // if the category has sub items
    if (menuItem?.sub_categories?.length) {
        multiLevelCategories = (
            // multilevel data
            <ul
                className={`${headerStyles["st-sub-menu-nav-in-head"]} st-sub-menu-nav list-unstyled position-absolute`}
            >
                {menuItem?.sub_categories?.length
                    ? menuItem?.sub_categories.map((item, index) => {
                        return (
                            <React.Fragment key={item.category_id}>
                                <HeaderMenuItem
                                    menuItem={item}
                                    catName={catName}
                                    menuItemIndex={index}
                                />
                            </React.Fragment>
                        );
                    })
                    : null}
            </ul>
        );
    }

    return (
        <li
            data-index={menuItemIndex}
            className="st-sub-menu-nav-item position-relative"
        >
            <Link
                href={`/shop/${menuItem.category_url}?id=${menuItem.category_id}`}
            >
                <a className="st-sub-menu-nav-link d-block text-decoration-none text-uppercase d-flex align-items-center">
                    <span className="media-body">{menuItem.category_name}</span>
                    {menuItem?.sub_categories?.length ? (
                        <FeatherIcon
                            icon="chevron-right"
                            size="15"
                            className="icon text-center d-flex align-items-center justify-content-center"
                            style={{ top: 1 }}
                        />
                    ) : null}
                </a>
            </Link>
            {/* SUB MENU */}
            {multiLevelCategories}
        </li>
    );
}
