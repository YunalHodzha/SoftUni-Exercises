import { render ,html } from "../../node_modules/lit-html/lit-html.js"
import { getAllFurniture } from "../api/data.js";

const catalogTemplate = (data) => html`
     <div class="row space-top">
        <!-- START FURNITURE -->
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="./images/table.png" />
                            <p>Description here</p>
                            <footer>
                                <p>Price: <span>235 $</span></p>
                            </footer>
                            <div>
                                <a href="#" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
             <!-- END FURNITURE -->
    </div>
`;

export async function catalogView() {
    console.log("....CatalogView...")

    const data = await getAllFurniture();
    console.log(data)
};