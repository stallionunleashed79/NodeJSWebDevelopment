        document.addEventListener("DOMContentLoaded", function() {
            const button = document.getElementById("btn");
            button.addEventListener("click", function() {
                let payload = '';
                for (let i = 0; i < 10000; i++) {
                    payload += `Message: ${i + 1}\n`;
                }
                fetch("/api/data", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ data: payload })
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Response received:",JSON.stringify(data));
                    document.getElementById('msg').textContent = data.statusText
                    document.getElementById('body').textContent = `Resp ${data.text()}`
                    data.text().then(body => {
                        document.getElementById('body').textContent = body
                    });
                })
                .catch(error => console.error("Error fetching data:", error));
            });
        });