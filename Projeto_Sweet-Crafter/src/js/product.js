// CARDS DE OUTROS USUÁRIOS
const selectedId = Number(localStorage.getItem("selectedProductId"));

const selectedProduct = products.find(p => p.id === selectedId);

document.getElementById("productImage").src = selectedProduct.image;
document.getElementById("productName").textContent = selectedProduct.name;
document.getElementById("productCreator").textContent = selectedProduct.creator;
document.getElementById("productDifficulty").textContent = selectedProduct.difficulty;

const ingredientsList = document.getElementById("productIngredients");

selectedProduct.ingredients.forEach(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
});