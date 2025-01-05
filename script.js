{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const ingredientInput = document.getElementById("ingredient");\
const addIngredientButton = document.getElementById("add-ingredient");\
const ingredientList = document.getElementById("ingredient-list");\
const findRecipesButton = document.getElementById("find-recipes");\
const recipeResultsSection = document.getElementById("recipe-results");\
const recipesContainer = document.getElementById("recipes");\
\
const ingredients = [];\
const recipeDatabase = [\
    \{\
        name: "Tomato Pasta",\
        ingredients: ["tomato", "pasta", "olive oil", "garlic"],\
        instructions: "Cook pasta. Saut\'e9 garlic in olive oil, add tomatoes, and mix with pasta.",\
        image: "https://unsplash.com/photos/Nm70URdtf3c/download?force=true&w=640",\
    \},\
    \{\
        name: "Vegetable Stir Fry",\
        ingredients: ["broccoli", "carrot", "soy sauce", "onion"],\
        instructions: "Saut\'e9 vegetables in soy sauce until tender.",\
        image: "https://unsplash.com/photos/V-VA5Mx0ZJY/download?force=true&w=640",\
    \},\
    \{\
        name: "Garlic Bread",\
        ingredients: ["bread", "butter", "garlic"],\
        instructions: "Spread garlic butter on bread and toast.",\
        image: "https://unsplash.com/photos/IlyADJYVR54/download?force=true&w=640",\
    \},\
];\
\
function renderIngredientList() \{\
    ingredientList.innerHTML = ingredients\
        .map((ingredient, index) => `<li>$\{ingredient\} <button onclick="removeIngredient($\{index\})">\uc0\u10060 </button></li>`)\
        .join("");\
\}\
\
function removeIngredient(index) \{\
    ingredients.splice(index, 1);\
    renderIngredientList();\
\}\
\
addIngredientButton.addEventListener("click", () => \{\
    const ingredient = ingredientInput.value.trim().toLowerCase();\
    if (ingredient && !ingredients.includes(ingredient)) \{\
        ingredients.push(ingredient);\
        renderIngredientList();\
        ingredientInput.value = "";\
    \}\
\});\
\
findRecipesButton.addEventListener("click", () => \{\
    const matchedRecipes = recipeDatabase.filter((recipe) =>\
        recipe.ingredients.every((ingredient) => ingredients.includes(ingredient))\
    );\
\
    recipesContainer.innerHTML =\
        matchedRecipes.length > 0\
            ? matchedRecipes\
                  .map(\
                      (recipe) => `\
            <div class="recipe-card">\
                <img src="$\{recipe.image\}" alt="$\{recipe.name\}" class="recipe-image">\
                <h3>$\{recipe.name\}</h3>\
                <p><strong>Ingredients:</strong> $\{recipe.ingredients.join(", ")\}</p>\
                <p>$\{recipe.instructions\}</p>\
            </div>`\
                  )\
                  .join("")\
            : `<p>No matching recipes found. Try adding more ingredients!</p>`;\
\
    recipeResultsSection.classList.remove("hidden");\
\});\
}