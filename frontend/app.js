async function sendAction() {
    const action = {
        type: "TRANSFER",
        value: 50
    };

    const constraints = {
        allowedActions: ["TRANSFER"],
        maxValue: 75
    };

    const response = await fetch("http://localhost:3000/validate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ action, constraints })
    });

    const data = await response.json();
    document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}
