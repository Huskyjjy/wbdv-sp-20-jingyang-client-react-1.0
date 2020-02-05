import React from "react";
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({modules}) =>
    <ul className="list-group">
        {
            modules.map(module =>
                <ModuleListItem
                    key={module._id}
                    module={module}/>
            )
        }
        <li className="list-group-item">
            <button className="float-right">
                <li className="fa fa-plus"></li>
            </button>
        </li>
    </ul>

export default ModuleList
