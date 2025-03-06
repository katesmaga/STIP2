document.getElementById("loadEvents").addEventListener("click", () => {
    fetch("http://localhost:3000/api/events") 
        .then(response => response.json())
        .then(events => {
            console.log("Отримані події:", events); 
            const eventList = document.getElementById("eventList");
            eventList.innerHTML = ""; 
            events.forEach(event => {
                const li = document.createElement("li");
                li.textContent = `${event.title} - ${event.date}`;
                eventList.appendChild(li);
            });
        })
        .catch(error => console.error("Помилка:", error));
});
