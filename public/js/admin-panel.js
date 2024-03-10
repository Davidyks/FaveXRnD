// FIXME: Change with real productsList
const getProductsList = () => {
  return ([
  {
      id: 1,
      name: "High collar wool sweater",
      description: "Sweater berbahan lembut dan premium dari katun original asli...",
      image: "demo-image.png",
      price: 899000,
      stock: 10,
  }, 
  {
      id: 2,
      name: "Low collar wool sweater",
      description: "Sweater berbahan kasar dan murahan dari katun original palsu...",
      image: "demo-image.png",
      price: 1899000,
      stock: 1,        
  },
  ]);
}

//  FIXME: Change with real API
const getProductsById = (id) => {
  try {
      for (let i = 0; i < productsList.length; i++) {
          if (productsList[i].id == id) {
              return productsList[i];
          }
      }        
  }
  catch (error) {
      window.alert("System error!");
  }
}

// FIXME: Change with real API
const updateData =  (id) => {
  try {
      const product = getProductsById(id);
      showFormUpdate(product);        
  }
  catch (error) {
      window.alert("System error!");
  }

}

// FIXME: Change with real API
const deleteData = (id) => {
  try {
      const product = getProductsById(id);
      showFormDelete(id, product.name);
  }
  catch (erorr) {
      window.alert("System error!");
  }
}

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

//Validation
function validateName(){
  let inputName = document.querySelector("#input-name");
  let valueName = inputName.value;
  let errorName = document.querySelector("#error-name");

  if (valueName == "") {
      errorName.innerHTML = "Product’s name must be filled.";
      inputName.style.borderBottom = "2px solid red";
      inputName.placeholder = "";
      return false;
  } else {
      errorName.innerHTML = "";
      inputName.style.borderBottom = "2px solid #392A2A";
      return true;
  }
}

function validatePrice() {
  let inputPrice = document.querySelector("#input-price");
  let valuePrice = inputPrice.value;
  let errorPrice = document.querySelector("#error-price");
  
  if (valuePrice === "") {
  errorPrice.innerHTML = "Product's price must be filled.";
  inputPrice.style.borderBottom = "2px solid red";
  inputPrice.placeholder = "";
  return false;
  }else if (isNaN(valuePrice)) {
    errorPrice.innerHTML = "Only numbers are allowed.";
    inputPrice.style.borderBottom = "2px solid red";
    return false;
  }else if (valuePrice < 1) {
  errorPrice.innerHTML = "Sorry, your price has to be at least Rp1";
  inputPrice.style.borderBottom = "2px solid red";
  return false;
  } else if(valuePrice >= 1000000000){
  errorPrice.innerHTML = "Sorry, your price has to be lower than Rp1.000.000.000";
  inputPrice.style.borderBottom = "2px solid red";
  return false;
  } else {
  errorPrice.innerHTML = "";
  inputPrice.style.borderBottom = "2px solid #392A2A";
  return true;
  }
}

function validateStock(){
  let inputStock = document.querySelector("#input-stock");
  let valueStock = inputStock.value;
  let errorStock = document.querySelector("#error-stock");

  if (valueStock == "") {
    errorStock.innerHTML = "Product's stock must be filled.";
    inputStock.style.borderBottom = "2px solid red";
    inputStock.placeholder = "";
    return false;
}else if (isNaN(valueStock)) {
  errorStock.innerHTML = "Only numbers are allowed.";
  inputStock.style.borderBottom = "2px solid red";
  return false;
}else if (valueStock < 0) {
  errorStock.innerHTML = "Sorry, stock amount can’t be negative.";
  inputStock.style.borderBottom = "2px solid red";
  return false;
}else if (valueStock == 0) {
  errorStock.innerHTML = "Your product is non-active. Are you sure?";
  inputStock.style.borderBottom = "2px solid red";
  return false;
}else if(!/^\d+$/.test(valueStock)){
  errorStock.innerHTML = "Stock amount must be an integer.";
  inputStock.style.borderBottom = "2px solid red";
  return false;
}else {
    errorStock.innerHTML = "";
    inputStock.style.borderBottom = "2px solid #392A2A";
    return true;
}
}

function validateDescription(){
  let inputDescription = document.querySelector("#input-description");
  let valueDescription = inputDescription.value;
  let errorDescription = document.querySelector("#error-description");

  if (valueDescription == "") {
      errorDescription.innerHTML = "Product's description must be filled.";
      inputDescription.style.borderBottom = "2px solid red";
      inputDescription.placeholder = "";
      return false;
  } else {
      errorDescription.innerHTML = "";
      inputDescription.style.borderBottom = "2px solid #392A2A";
      return true;
  }
}

function validateImage(){
  let inputImage = document.querySelector("#input-image");
  let valueImage = inputImage.value;
  let errorImage = document.querySelector("#error-image");
  let format = /(\.jpg|\.jpeg|\.png)$/i; 

  if (valueImage == "") {
      errorImage.innerHTML = "Product's image must be attached.";
      inputImage.style.borderBottom = "2px solid red";
      inputImage.placeholder = "";
      return false;
  }else if(!format.exec(valueImage)){
    errorImage.innerHTML = "Image's format must be .jpg/.jpeg/.png";
    inputImage.style.borderBottom = "2px solid red";
    inputImage.placeholder = "";
    return false;
  } else {
      errorImage.innerHTML = "";
      inputImage.style.borderBottom = "2px solid #392A2A";
      return true;
  }
}

function shakeElement() {
  const element = document.getElementById('form');
  element.classList.add('error-shake');
  setTimeout(() => {
    element.classList.remove('error-shake');
  }, 300); 
}

function submitForm(){

  let isNameValid = validateName();
  let isPriceValid = validatePrice();
  let isStockValid = validateStock();
  let isDescriptionValid = validateDescription();
  let isImageValid = validateImage();

  if (isNameValid&&isPriceValid&&isStockValid&&isDescriptionValid&&isImageValid) {
      return true;
  }else{
    shakeElement();
    return false;
  }
}


// FIXME: Change with real API
const showFormCreate = () => {
  try {
      const createForm = 
      `
          <form id="form" onsubmit="return submitForm()" method="POST" action="/store-product" enctype="multipart/form-data">
              
              <h1> Tambah Produk </h1>

              <div class="form-input-field">
                  <label for="input-name"> Nama: </label>
                  <input name="name" id="input-name" oninput="validateName()" required/>
                  <p id="error-name" class="error-message"></p>
              </div>

              <div class="form-input-field">
                  <label for="input-price"> Harga (Rp): </label>
                  <input name="price" id="input-price" type="number" oninput="validatePrice()" required/>
                  <p id="error-price" class="error-message"></p>
              </div>

              <div class="form-input-field">
                  <label for="input-stock"> Stok: </label>
                  <input name="stock" id="input-stock" type="number" oninput="validateStock()" required/>
                  <p id="error-stock" class="error-message"></p>
              </div>

              <div class="form-input-field">
                  <label for="input-description"> Deskripsi: </label>
                  <textarea name="description" id="input-description" oninput="validateDescription()" > </textarea>
                  <p id="error-description" class="error-message"></p>
              </div>                

              <div class="form-input-field">
                  <label for="input-image"> Gambar: </label>
                  <input name="picture" id="input-image" type="file" oninput="validateImage()" required/>
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

      document.getElementById("popup-form").addEventListener("submmit", async (event) => {
          try {
              event.preventDefault();
          }
          finally {
              window.location.reload();
          }
      });
      
  }
  catch (error) {
      window.alert("System error");
  }
}

// FIXME: Change with real API
const showFormUpdate = (product) => {
  try {
      const updateForm = 
      `
          <form id="form" onsubmit="return submitForm()" method="POST" action="/update-product-${product.id}" enctype="multipart/form-data">
            
              <h1> Update Data Produk </h1>

              <div class="form-input-field">
                  <label for="input-name"> Nama: </label>
                  <input name="name" id="input-name" value="${product.name}" oninput="validateName()" required/>
                  <p id="error-name" class="error-message"></p>
              </div>

              <div class="form-input-field">
                  <label for="input-price"> Harga (Rp): </label>
                  <input name="price" id="input-price" type="number" value="${String(product.price)}" oninput="validatePrice()" required/>
                  <p id="error-price" class="error-message"></p>
              </div>

              <div class="form-input-field">
                  <label for="input-stock"> Stok: </label>
                  <input name="stock" id="input-stock" type="number" value="${String(product.stock)}" oninput="validateStock()" required/>
                  <p id="error-stock" class="error-message"></p>
              </div>

              <div class="form-input-field">
                  <label for="input-description"> Deskripsi: </label>
                  <textarea name="description" id="input-description" oninput="validateDescription()" >  ${product.description} </textarea>
                  <p id="error-description" class="error-message"></p>
              </div>                

              <div class="form-input-field">
                  <label for="input-image"> Gambar: </label>
                  <input name="picture" id="input-image" type="file" oninput="validateImage()" required/>
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

      document.getElementById("popup-form").innerHTML = updateForm;
      createDropshadowEffect();

      document.getElementById("popup-form").addEventListener("submmit", async (event) => {
          try {
              event.preventDefault();
          }
          finally {
              window.location.reload();
          }
      });
  }
  catch (error) {
      window.alert("System error");
  }
}

// FIXME: Change with real API
const showFormDelete = (id, productName) => {
  try {
      if (window.confirm(`Are you sure want to delete "${productName}"?`)) {
          window.location.href = `/delete-product-${id}`; 
          window.alert("Delete success!");
      }        
  }
  catch (error) {
      window.alert("System error");
  }
  finally {
      window.location.reload();
  }
}

const productsList = getProductsList();
const Products = () => {
  try {
      if (productsList == null || productsList.length == 0) {
          return (
              `
                  <p> There is no product. </p>
              `
          )
      }

      return productsList.map((product) => {
          return (
              `
                  <tr id="${product.id}">
                      <td>
                          <div class="table-data-product-name">
                              <img
                                  src="image/${product.image}"
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
document.getElementById("table-products").innerHTML = Products();
addProductsButtonsEventListener();

document.getElementById("button-create").addEventListener("click", () => {
  showFormCreate();
})