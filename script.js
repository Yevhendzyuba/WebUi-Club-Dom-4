function sendBtn() {

    let textAreaValue = document.getElementById("textarea_lower").value;
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date + ' ' + time;


    var h1El = document.createElement("p");
    var pEL = document.createElement("p");



    if (textAreaValue.length > 0) {
        let textContainer = document.getElementById("textarea-container");

        h1El.appendChild(document.createTextNode(textAreaValue));
        pEL.appendChild(document.createTextNode(dateTime));

        textContainer.appendChild(h1El);
        textContainer.appendChild(pEL);
    }

    document.getElementById("textarea_lower").value = "";

}