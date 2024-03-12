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
            <form id = "form" >
                <h1> Tambah Produk </h1>

                <div class="form-input-field">
                    <label for="input-name"> Nama: </label>
                    <input name="name" id="input-name" oninput="isNameValid()" required/>
                    <p id="error-name" class="error-message"></p>
                </div>

                <div class="form-input-field">
                    <label for="input-price"> Harga (Rp): </label>
                    <input name="price" id="input-price" type="number" required/>
                    <p id="error-price" class="error-message" oninput="isPriceValid()"></p>
                </div>

                <div class="form-input-field">
                    <label for="input-stock"> Stok: </label>
                    <input name="stock" id="input-stock" type="number" oninput="isStockValid()" required/>
                    <p id="error-stock" class="error-message" ></p>
                </div>

                <div class="form-input-field">
                    <label for="input-description"> Deskripsi: </label>
                    <textarea name="description" id="input-description" oninput="isDescriptionValid()"> </textarea>
                    <p id="error-description" class="error-message"></p>
                </div>                

                <div class="form-input-field">
                    <label for="input-image"> Gambar: </label>
                    <input name="picture" id="input-image" type="file" oninput="isImageValid()" required/>
                    <p id="error-image" class="error-message"></p>
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

        // Ganti event listener dari oninput menjadi onchange
        document.getElementById("input-image").addEventListener("change", () => {
            isImageValid();
        });

        // Event listener untuk form submission
        document.getElementById("popup-form").addEventListener("submit", async (event) => {
            event.preventDefault();
            const isValid = isFormValid();

            if (isValid) {
                const formData = new FormData();
                formData.append('name', document.getElementById("input-name").value);
                formData.append('price', document.getElementById("input-price").value);
                formData.append('stock', document.getElementById("input-stock").value);
                formData.append('description', document.getElementById("input-description").value);
                formData.append('picture', document.getElementById("input-image").files[0]); // Ambil file pertama

                const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
                const response = await fetch("/admin-store-product", {
                    headers: {
                        "X-CSRF-Token": token,
                    },
                    method: "POST",
                    body: formData,
                });

                if (response.status !== 201) {
                    window.alert("Add product failed!");
                    console.log(formData);
                }

                window.location.reload();
            }
        });
    } catch (error) {
        window.alert("System error");
    }
};

const showFormUpdate = (product) => {
    try {
        const updateForm = 
        `
            <form id="form" >
                <h1> Update Data Produk </h1>

                <div class="form-input-field">
                    <label for="input-name"> Nama: </label>
                    <input name="name" id="input-name" value="${product.name}" oninput="isNameValid()" required/>
                    <p id="error-name" class="error-message">  </p>
                </div>

                <div class="form-input-field">
                    <label for="input-price"> Harga (Rp): </label>
                    <input name="price" id="input-price" type="number" value="${String(product.price)}" oninput="isPriceValid()" required/>
                    <p id="error-price" class="error-message"> </p>
                </div>

                <div class="form-input-field">
                    <label for="input-stock"> Stok: </label>
                    <input name="stock" id="input-stock" type="number" value="${String(product.stock)}"  oninput="isStockValid()" required/>
                    <p id="error-stock" class="error-message">  </p>
                </div>

                <div class="form-input-field">
                    <label for="input-description"> Deskripsi: </label>
                    <textarea name="description" id="input-description"  oninput="isDescriptionValid()"> ${product.description} </textarea>
                    <p id="error-description" class="error-message"> </p>
                </div>                

                <div class="form-input-field">
                    <label for="input-image"> Gambar: </label>
                    <input name="picture" id="input-image" type="file"  oninput="isImageValid()" required/>
                    <p id="error-image" class="error-message">  </p>
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

        document.getElementById("input-image").addEventListener("change", () => {
            isImageValid();
        });

        document.getElementById("popup-form").addEventListener("submit", async (event) => {
            event.preventDefault();
            const isValid = isFormValid();

            if (isValid) {
                const formData = new FormData();
                formData.append('name', document.getElementById("input-name").value);
                formData.append('price', document.getElementById("input-price").value);
                formData.append('stock', document.getElementById("input-stock").value);
                formData.append('description', document.getElementById("input-description").value);
                formData.append('picture', document.getElementById("input-image").files[0]); // Ambil file pertama

                const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
                const response = await fetch(`/admin-update-product-${product.id}`, {
                    headers: {
                        "X-CSRF-Token": token,
                    },
                    method: "POST",
                    body: formData,
                });

                if (response.status !== 201 && response.status !==200) {
                    window.alert("Update product failed!");
                    console.log('error update: ', response);
                }

                window.location.reload();
            }
        });
    } catch (error) {
        window.alert("System error");
    }
};

const showFormDelete = async (id, productName) => {
    try {
        if (window.confirm(`Are you sure want to delete "${productName}"?`)) {
            
            const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

            const response = await fetch(`admin-delete-product-${id}`, {
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
    let inputName = document.querySelector("#input-name");
    let valueName = inputName.value;
    let errorName = document.querySelector("#error-name");

    if (valueName == "") {
        errorName.innerHTML = "Product’s name must be filled.";
        inputName.placeholder = "";
        return false;
    } else {
        errorName.innerHTML = "";
        return true;
    }
}

const isPriceValid = () => {
    let inputPrice = document.querySelector("#input-price");
    let valuePrice = inputPrice.value;
    let errorPrice = document.querySelector("#error-price");
    
    if (valuePrice === "") {
        errorPrice.innerHTML = "Product's price must be filled.";
        inputPrice.placeholder = "";
        return false;
    }else if (isNaN(valuePrice)) {
        errorPrice.innerHTML = "Only numbers are allowed.";
        return false;
    }else if (valuePrice < 1) {
        errorPrice.innerHTML = "Sorry, your price has to be at least Rp1";
        return false;
    } else if(valuePrice >= 1000000000){
        errorPrice.innerHTML = "Sorry, your price has to be lower than Rp1.000.000.000";
        return false;
    } else {
        errorPrice.innerHTML = "";
        return true;
    }
}

const isStockValid = () => {
    let inputStock = document.querySelector("#input-stock");
    let valueStock = inputStock.value;
    let errorStock = document.querySelector("#error-stock");
  
    if (valueStock == "") {
      errorStock.innerHTML = "Product's stock must be filled.";
      inputStock.placeholder = "";
      return false;
  }else if (isNaN(valueStock)) {
    errorStock.innerHTML = "Only numbers are allowed.";
    return false;
  }else if (valueStock < 0) {
    errorStock.innerHTML = "Sorry, stock amount can’t be negative.";
    return false;
  }else if (valueStock == 0) {
    errorStock.innerHTML = "Your product is non-active. Are you sure?";
    return false;
  }else if(!/^\d+$/.test(valueStock)){
    errorStock.innerHTML = "Stock amount must be an integer.";
    return false;
  }else {
      errorStock.innerHTML = "";
      return true;
  }
}

const isDescriptionValid = () => {
    let inputDescription = document.querySelector("#input-description");
    let valueDescription = inputDescription.value;
    let errorDescription = document.querySelector("#error-description");
  
    if (valueDescription == "") {
        errorDescription.innerHTML = "Product's description must be filled.";
        inputDescription.placeholder = "";
        return false;
    } else {
        errorDescription.innerHTML = "";
        return true;
    }
}

const isImageValid = () => {
    let inputImage = document.querySelector("#input-image");
    let valueImage = inputImage.value;
    let errorImage = document.querySelector("#error-image");
    let format = /(\.jpg|\.jpeg|\.png)$/i; 
  
    if (valueImage == "") {
        errorImage.innerHTML = "Product's image must be attached.";
        inputImage.placeholder = "";
        return false;
    }else if(!format.exec(valueImage)){
      errorImage.innerHTML = "Image's format must be .jpg/.jpeg/.png";
      inputImage.placeholder = "";
      return false;
    } else {
        errorImage.innerHTML = "";
        return true;
    }
}

const isFormValid = () => {
    if(isNameValid() && isPriceValid() && isDescriptionValid() && isImageValid() && isStockValid()){
        return true;
    }else{
        shakeElement();
        return false;
    }
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
                                    src="storage/${product.picture}"
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