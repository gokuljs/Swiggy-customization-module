import React from "react";
import './search.styles.scss';

const SearchField =()=>(
    <div className="field">
        <table className="field-table">
            <tr>
                <td className="field-table-1">
                    <i class="fas fa-search field-logo"></i>
                    <input className="field-name" type="text" placeholder="search for dishes.."></input>

                </td>
                <td className="field-table-2">
                    <input type="checkbox" className="field-checkbox"></input>
                    <label className="field-label">veg only</label>
                </td>
                <td className="field-table-3">
                <i class="far fa-heart field-heart"></i>
                <label className="field-fav">Favourite</label>
                </td>
            </tr>
        </table>
    </div>
);

export default SearchField;