

// Function to load saved content from localStorage
function loadSavedContent() {
    var savedContent = localStorage.getItem('savedContent');
    if (savedContent) {
        document.getElementById('contentContainer').innerHTML = savedContent;
    }
}

// Function to save content to localStorag
function saveContentToLocalStorage() {
    var contentContainer = document.getElementById('contentContainer').innerHTML;
    localStorage.setItem('savedContent', contentContainer);
}

// Load saved content when the page load
window.onload = loadSavedContent;


function addPost() {
    var heading = document.getElementById("headingInput").value;
    var content = document.getElementById("contentInput").value;

    var postContainer = document.createElement("div");
    postContainer.classList.add("post");

    var headerDiv = document.createElement("div");
    headerDiv.classList.add("header");

    var leftHeaderDiv = document.createElement("div");
    leftHeaderDiv.classList.add("left-header");
    var headerIconImg = document.createElement("img");
    headerIconImg.src = "../images/drone-surveillance-concept-illustration/report2.svg";
    headerIconImg.alt = "";
    headerIconImg.classList.add("header-icon");
    var headP = document.createElement("p");
    headP.classList.add("head");
    headP.textContent = "Crime Report";
    leftHeaderDiv.appendChild(headerIconImg);
    leftHeaderDiv.appendChild(headP);

    var rightHeaderDiv = document.createElement("div");
    rightHeaderDiv.classList.add("right-header");
    var dotP = document.createElement("p");
    dotP.classList.add("dot");
    dotP.textContent = "...";
    rightHeaderDiv.appendChild(dotP);

    headerDiv.appendChild(leftHeaderDiv);
    headerDiv.appendChild(rightHeaderDiv);

    var profileDiv = document.createElement("div");
    profileDiv.classList.add("profile");
    // Create profile elements here as needed

    /////////////////////////////////////////

    var profileDiv = document.createElement("div");
    profileDiv.classList.add("profile");

    var container2Div = document.createElement("div");
    container2Div.classList.add("container2");

    var profilePicDiv = document.createElement("div");
    profilePicDiv.classList.add("profile-pic");
    var profilePicImg = document.createElement("img");
    profilePicImg.src = "../images/drone-surveillance-concept-illustration/download.png";
    profilePicImg.alt = "";
    profilePicImg.classList.add("pic");
    profilePicDiv.appendChild(profilePicImg);

    container2Div.appendChild(profilePicDiv);

    var container3Div = document.createElement("div");
    container3Div.classList.add("container3");

    var nameContainerDiv = document.createElement("div");
    nameContainerDiv.classList.add("name-container");
    var nameP = document.createElement("p");
    nameP.classList.add("name");
    nameP.textContent = "Aman Sharma";
    nameContainerDiv.appendChild(nameP);

    var dateContainerDiv = document.createElement("div");
    dateContainerDiv.classList.add("date-container");
    var dateP = document.createElement("p");
    dateP.classList.add("date");
    dateP.textContent = "Just Now";
    dateContainerDiv.appendChild(dateP);

    container3Div.appendChild(nameContainerDiv);
    container3Div.appendChild(dateContainerDiv);

    profileDiv.appendChild(container2Div);
    profileDiv.appendChild(container3Div);

    ///////////////////////////////////////


    var contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    var headingH1 = document.createElement("h1");
    headingH1.classList.add("content-title");
    headingH1.textContent = heading;
    var contentP = document.createElement("p");
    contentP.classList.add("discription");
    contentP.textContent = content;

    contentDiv.appendChild(headingH1);
    contentDiv.appendChild(contentP);

    var toolsDiv = document.createElement("div");
    toolsDiv.classList.add("tools");
    // Create tools elements here as needed

    postContainer.appendChild(headerDiv);
    postContainer.appendChild(profileDiv);
    postContainer.appendChild(contentDiv);
    postContainer.appendChild(toolsDiv);

    var contentContainer = document.getElementById("contentContainer");
    contentContainer.appendChild(postContainer);

    saveContentToLocalStorage();

}

