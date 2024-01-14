window.onload = function(){

const registerBtn = document.getElementById("signUp").onclick = (async (e) => {
    e.preventDefault()

    const username = document.getElementById("nameS").value
    const password = document.getElementById("passwordS").value
    const email = document.getElementById("emailS").value

    db.collection("cities").doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
})
}