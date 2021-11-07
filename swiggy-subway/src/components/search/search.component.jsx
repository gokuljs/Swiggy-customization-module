import React from "react";
import './search.styles.scss';

const SearchField =()=>(
    <div className="field">
        <table className="field-table">
            <tr>
                <td className="field-col-1">
                    <i class="fas fa-search field-logo common"></i>
                <input type="text" className="field-search common" placeholder="Search for dishes..."></input>
                </td>
                <td className="field-col-2">
                    <input type="checkbox" name="" id="" className="field-checkbox common" />
                    <label className="common">Veg only</label>
                </td>
                <td className="field-col-3">
                <i class="far fa-heart field-heart common"></i>
                <label className="field-fav common">Favourite</label>
                </td>

            </tr>
        </table>
    </div>
);

export default SearchField;