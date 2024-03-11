var productsList;
//#region API
const getProductsList = async () => {
    try {
        const response = await fetch("/api/products", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        });

        return await response.json();        
    }
    catch (error) {
        window.alert("System error!");
    }

}

const getProductsById = async (id) => {
    try {
        const response = await fetch(`api/product-${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        });


        console.log(response);
        return await response.json();
    }
    catch (error) {
        console.log(error);
        window.alert("System error!");
    }
}

const updateData = async (id) => {
    try {
        const product = await getProductsById(id);
        if (product == null || product == undefined) {
            window.alert("System error!");
            return;
        }

        showFormUpdate(product);        
    }
    catch (error) {
        window.alert("System error!");
    }

}

const deleteData = async (id) => {
    try {
        const product = await getProductsById(id);
        if (product == null || product == undefined) {
            console.log("test");
            window.alert("System error!");
            return;
        }

        showFormDelete(id, product.name);
    }
    catch (erorr) {
        window.alert("System error!");
    }
}

const showFormCreate = () => {
    try {
        const createForm = 
        `
            <form id = "form-create">
                <h1> Tambah Produk </h1>

                <div class="form-input-field">
                    <label for="input-name"> Nama: </label>
                    <input name="name" id="input-name" oninput="isNameValid()" required/>
                    <p id="error-name" class="error-message" Product's name must be filled. ></p>
                </div>

                <div class="form-input-field">
                    <label for="input-price"> Harga (Rp): </label>
                    <input name="price" id="input-price" type="number" required/>
                    <p id="error-price" class="error-message" oninput="isPriceValid()"> Product's price must be filled and  between 0 and 1,000,000,000. </p>
                </div>

                <div class="form-input-field">
                    <label for="input-stock"> Stok: </label>
                    <input name="stock" id="input-stock" type="number" oninput="isStockValid()" required/>
                    <p id="error-stock" class="error-message" > Product's stock must be filled and can't be negative </p>
                </div>

                <div class="form-input-field">
                    <label for="input-description"> Deskripsi: </label>
                    <textarea name="description" id="input-description" oninput="isDescriptionValid()"> </textarea>
                    <p id="error-description" class="error-message"> Product's description must be filled. </p>
                </div>                

                <div class="form-input-field">
                    <label for="input-image"> Gambar: </label>
                    <input name="picture" id="input-image" type="file" oninput="isImageValid()" required/>
                    <p id="error-image" class="error-message"> Product's image must be filled. </p>
                </div>

                <div class="form-button-container">
                    <button id="form-button-cancel" type="button">
                        Cancel
                    </button>

                    <button id="form-button-submit" type="submit">
                        Submit
                    </button>                
                </div>
            </form>
        `;

        document.getElementById("popup-form").innerHTML = createForm;
        createDropshadowEffect();

        document.getElementById("popup-form").addEventListener("submit", async (event) => {
            event.preventDefault();
            const isValid = isFormValid();

            if (isValid) {
                const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
                const response = await fetch("/store-product", {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-Token": token,
                    },
                    method: "POST",
                    body: JSON.stringify({
                        name: document.getElementById("input-name").value,
                        price: document.getElementById("input-price").value,
                        stock: document.getElementById("input-stock").value,
                        description: document.getElementById("input-description").value,
                        picture: document.getElementById("input-image").files,
                    }),
                });

                if (response.status != 201) {
                    window.alert("Add product failed!");
                }

                window.location.reload();                
            }
        });
        
    }
    catch (error) {
        window.alert("System error");
    }
}

const showFormUpdate = (product) => {
    try {
        const updateForm = 
        `
            <form id="form-edit">
                <h1> Update Data Produk </h1>

                <div class="form-input-field">
                    <label for="input-name"> Nama: </label>
                    <input name="name" id="input-name" value="${product.name}" oninput="isNameValid()" required/>
                    <p id="error-name" class="error-message"> Product’s name must be filled. </p>
                </div>

                <div class="form-input-field">
                    <label for="input-price"> Harga (Rp): </label>
                    <input name="price" id="input-price" type="number" value="${String(product.price)}" oninput="isPriceValid()" required/>
                    <p id="error-price" class="error-message"> Product's price must between 0 and 1,000,000,000.  </p>
                </div>

                <div class="form-input-field">
                    <label for="input-stock"> Stok: </label>
                    <input name="stock" id="input-stock" type="number" value="${String(product.stock)}"  oninput="isStockValid()" required/>
                    <p id="error-stock" class="error-message"> Product's stock can't negative. </p>
                </div>

                <div class="form-input-field">
                    <label for="input-description"> Deskripsi: </label>
                    <textarea name="description" id="input-description"  oninput="isDescriptionValid()"> ${product.description} </textarea>
                    <p id="error-description" class="error-message"> Product's description must be filled. </p>
                </div>                

                <div class="form-input-field">
                    <label for="input-image"> Gambar: </label>
                    <input name="picture" id="input-image" type="file"  oninput="isImageValid()" required/>
                    <p id="error-image" class="error-message"> Product's image must be filled. </p>
                </div>

                <div class="form-button-container">
                    <button id="form-button-cancel" type="button">
                        Cancel
                    </button>

                    <button id="form-button-submit" type="submit">
                        Submit
                    </button>                
                </div>
            </form>
        `;

        document.getElementById("popup-form").innerHTML = updateForm;
        createDropshadowEffect();

        document.getElementById("popup-form").addEventListener("submit", async (event) => {
            event.preventDefault();

            const isValid = isFormValid();
            if (isValid) {
                const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
                const response = await fetch(`/update-product-${product.id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-Token": token,
                    },
                    method: "PATCH",
                    body: JSON.stringify({
                        name: document.getElementById("input-name").value,
                        price: document.getElementById("input-price").value,
                        stock: document.getElementById("input-stock").value,
                        description: document.getElementById("input-description").value,
                        picture: document.getElementById("input-image").files,
                    }),
                });

                if (response.status != 201) {
                    window.alert("System error!");
                }

                window.location.reload();                
            }


        });
    }
    catch (error) {
        window.alert("System error");
    }
}

const showFormDelete = async (id, productName) => {
    try {
        if (window.confirm(`Are you sure want to delete "${productName}"?`)) {
            
            const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

            const response = await fetch(`delete-product-${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": token,
                },
                method: "DELETE",
            });

            console.log(response.status);
            if (response.status != 200) {
                window.alert("System error!");
            }

            window.alert("Delete success!");
        }        
    }
    catch (error) {
        window.alert("System error!");
    }
    finally {
        window.location.reload();
    }
}
//#endregion

//#region Utils
const createDropshadowEffect = () => {
    document.getElementsByTagName("header")[0].style.opacity = "0.2";
    document.getElementsByTagName("main")[0].style.opacity = "0.2";

    document.getElementById("form-button-cancel").addEventListener("click", () => {
        if (window.confirm("Are you sure? Your changes will not be saved!")) {
            removeDropshadowEffect(); 
        }
    });
}

const removeDropshadowEffect = () => {
    document.getElementsByTagName("header")[0].style.opacity = "1";
    document.getElementsByTagName("main")[0].style.opacity = "1";
    document.getElementById("popup-form").innerHTML = "";
}

const isNameValid = () => {
    const isNameValid = document.getElementById("input-name").value.trim() != "";
    if (isNameValid) {
        document.getElementById("error-name").style.display = "none";
    }
    else {
        document.getElementById("error-name").style.display = "block";
    }

    return isNameValid;
}

const isPriceValid = () => {
    const isPriceValid = (document.getElementById("input-price").value > 0) && (document.getElementById("input-price").value < 1000000000) && (document.getElementById("input-price").value.trim() != "");
    if (isPriceValid) {
        document.getElementById("error-price").style.display = "none";
    }
    else {
        document.getElementById("error-price").style.display = "block";
    }    

    return isPriceValid;
}

const isStockValid = () => {
    const isStockValid = (document.getElementById("input-stock").value >= 0) && (document.getElementById("input-stock").value.trim() != "");
    if (isStockValid) {
        document.getElementById("error-stock").style.display = "none";
    }
    else {
        document.getElementById("error-stock").style.display = "block";
    }  
    
    return isStockValid;
}

const isDescriptionValid = () => {
    const isDescriptionValid = document.getElementById("input-description").value.trim() != "";
    if (isDescriptionValid) {
        document.getElementById("error-description").style.display = "none";
    }
    else {
        document.getElementById("error-description").style.display = "block";
    }

    return isDescriptionValid;
}

const isImageValid = () => {
    const isImageValid = document.getElementById("input-image").files.length > 0;
    if (isImageValid) {
        document.getElementById("error-image").style.display = "none";
    }
    else {
        document.getElementById("error-image").style.display = "block";
    }

    return isImageValid;
}

const isFormValid = () => {
    return (isNameValid() && isPriceValid() && isDescriptionValid() && isImageValid() && isStockValid());
}

const shakeElement = () => {
    const element = document.getElementById('form');
    element.classList.add('error-shake');
    setTimeout(() => {
        element.classList.remove('error-shake');
    }, 300); 
}

//#endregion

const Products = async () => {
    try {
        productsList = await getProductsList();
        if (productsList == null || productsList.length == 0) {
            return (
                `
                    <p> There is no product. </p>
                `
            )
        }
        return productsList.map((product) => {
            console.log(product);
            return (
                `
                    <tr id="${product.id}">
                        <td>
                            <div class="table-data-product-name">
                                <img
                                    src="image/${product.picture}"
                                    alt="Image of ${product.name}"
                                />
                                <div>
                                    <p class = "table-data-product-name-title"> ${product.name} </p>
                                    <p class = "table-data-product-name-description"> ${product.description} </p>
                                </div>                            
                            </div>

                        </td>

                        <td> 
                            <div class="table-data-product-price">
                                <p> Rp. ${product.price} </p>
                            </div>
                            
                        </td>

                        <td> 
                            <div class="table-data-product-stock">
                                <p> ${product.stock} </p>
                            </div>
                            
                        </td>

                        <td> 
                            <div class="table-data-product-action">
                                <button id="update-${product.id}" class="table-data-product-action-update">
                                    <p> 
                                        Edit 
                                        <span>
                                            <img
                                                src = "image/icon-update.svg"
                                                alt = "Update data"
                                            />
                                        </span>                                    
                                    </p>
                                </button>
                                <button id="delete-${product.id}" class="table-data-product-action-delete">
                                    <p>
                                        Hapus
                                        <span>
                                            <img
                                                src = "image/icon-update.svg"
                                                alt = "Update data"
                                            />                            
                                        </span>                                    
                                    </p>

                                </button>                            
                            </div>

                        </td>
                    </tr>
                `
            );
        }).join("");        
    }
    catch (error) {
        return (
            `
                <p> System error </p>
            `
        );
    }

}

const addProductsButtonsEventListener = () => {
    const updateButtons = document.getElementsByClassName("table-data-product-action-update");
    for (let button of updateButtons) {
        button.addEventListener("click", () => {
            updateData(button.id.split("-")[1]);
        });
    }
    const deleteButtons = document.getElementsByClassName("table-data-product-action-delete");
    for (let button of deleteButtons) {
        button.addEventListener("click", () => {
            deleteData(button.id.split("-")[1]);
        })
    }
}

window.addEventListener("load", async () => {
    document.getElementById("table-products").innerHTML = await Products();
    addProductsButtonsEventListener();

    document.getElementById("button-create").addEventListener("click", () => {
    showFormCreate();
    })
})
