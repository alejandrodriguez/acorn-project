// Grab relevant HTML elements
const tabSelect = document.querySelector(".tab-select");
const tabSelectBtns = [...tabSelect.children];
const modelContainer = document.querySelector(".model-container");

// Set up variable to hold HTML information for each tab
const modelArr = [];

// Create Model Info to be inserted into the HTML
// When no model is selected
const noModel = document.createElement("div");
noModel.classList.add("model-info");
noModel.dataset.modelarrindex = 0;
const noModelTitle = document.createElement("h3");
noModelTitle.textContent = "Find the right model to fit your needs.";
const noModelBody = document.createElement("p");
noModelBody.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium aliquam, mollitia dolorem dicta molestias nulla eaque quam minus temporibus.";
noModel.append(noModelTitle, noModelBody);
// Straight Model Chairlift
const straightModel = document.createElement("div");
straightModel.classList.add("model-info");
straightModel.dataset.modelarrindex = 1;
const straightModelTitle = document.createElement("h3");
straightModelTitle.textContent = "Our stairlift for straight stairways.";
const straightModelText = document.createElement("p");
straightModelText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium aliquam, mollitia dolorem dicta molestias nulla eaque quam minus temporibus.";
const straightModelImg = document.createElement("img");
straightModelImg.src = "img/straight-stairlift.webp";
const straightImgWrapper = document.createElement("div");
straightImgWrapper.classList.add("img-wrapper");
straightImgWrapper.append(straightModelImg);
const straightBodyWrapper = document.createElement("div");
straightBodyWrapper.classList.add("body-wrapper");
straightBodyWrapper.append(straightImgWrapper, straightModelText);
straightModel.append(straightModelTitle, straightBodyWrapper);
// Curved Model Chairlift
const curvedModel = document.createElement("div");
curvedModel.classList.add("model-info");
curvedModel.dataset.modelarrindex = 2;
const curvedModelTitle = document.createElement("h3");
curvedModelTitle.textContent = "Our stairlift for curved stairways.";
const curvedModelText = document.createElement("p");
curvedModelText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium aliquam, mollitia dolorem dicta molestias nulla eaque quam minus temporibus.";
const curvedModelImg = document.createElement("img");
curvedModelImg.src = "img/curved-stairlift.webp";
const curvedImgWrapper = document.createElement("div");
curvedImgWrapper.classList.add("img-wrapper");
curvedImgWrapper.append(curvedModelImg);
const curvedBodyWrapper = document.createElement("div");
curvedBodyWrapper.classList.add("body-wrapper");
curvedBodyWrapper.append(curvedImgWrapper, curvedModelText);
curvedModel.append(curvedModelTitle, curvedBodyWrapper);
// Outdoor Model Chairlift
const outdoorModel = document.createElement("div");
outdoorModel.classList.add("model-info");
outdoorModel.dataset.modelarrindex = 3;
const outdoorModelTitle = document.createElement("h3");
outdoorModelTitle.textContent = "Our stairlift built for the outdoors.";
const outdoorModelText = document.createElement("p");
outdoorModelText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium aliquam, mollitia dolorem dicta molestias nulla eaque quam minus temporibus.";
const outdoorModelImg = document.createElement("img");
outdoorModelImg.src = "img/outdoor-stairlift.webp";
const outdoorImgWrapper = document.createElement("div");
outdoorImgWrapper.classList.add("img-wrapper");
outdoorImgWrapper.append(outdoorModelImg);
const outdoorBodyWrapper = document.createElement("div");
outdoorBodyWrapper.classList.add("body-wrapper");
outdoorBodyWrapper.append(outdoorImgWrapper, outdoorModelText);
outdoorModel.append(outdoorModelTitle, outdoorBodyWrapper);
// Add to modelArr
modelArr.push(noModel, straightModel, curvedModel, outdoorModel);

// Change Tab on Click
tabSelect.addEventListener("click", e => {
    const selectedTab = e.target;
    if (selectedTab.nodeName !== "BUTTON") {
        return;
    }
    const prevSelectedTab = document.querySelector(".selected-tab");
    if (prevSelectedTab !== null) {
        prevSelectedTab.classList.remove("selected-tab");
    }
    let modelToDisplay;
    if (prevSelectedTab !== selectedTab) {
        selectedTab.classList.add("selected-tab");
        modelToDisplay = modelArr[selectedTab.dataset.modelarrindex];
    } else {
        modelToDisplay = modelArr[0];
    }
    console.log(selectedTab);
    document.querySelector(".model-info").remove();
    modelContainer.append(modelToDisplay);
});
