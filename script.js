
document.getElementById("ticket-form").addEventListener("submit",function(event){
    event.preventDefault();

    //Gather user input
    var name = document.getElementById("name").value;
    var seat = document.getElementById("seat").value;
    var date = document.getElementById("date").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;


    //Generate ticket ID(simple demonstration)
    var ticketId = "T" + Math.floor(Math.random() * 10000);

    //Add ticket details to history table
    var tableBody = document.getElementById("history-table-body");
    var newRow = tableBody.insertRow();
    newRow.innerHTML = "<td>" + ticketId + "</td><td>" + name + "</td><td>" + seat + "</td><td>" + date + "</td><td>" + from + "</td><td>" + to + "</td><td>booked</td><td><button class= 'delete-btn' data-ticket-id='" + ticketId + "'>Delete</button></td>";

    //Display alert for successful booking and generated ticket ID
    alert ("Ticket with ID"  + ticketId + " has booked successfully.");
    document.getElementById("ticket-form").reset();

});

document.getElementById("view-history-btn").addEventListener("click", function(){
    document.getElementById("ticket-history").style.display = "block";
});

document.getElementById("tickect-history").addEventListener("click", function(event){
    if(event.target.classList.contains('delete-btn')) {
        var ticketIdToDelete = event.target.getAttribute('data-ticket-id');

        //delete tickect logic(for demonstration and will remove row from the table)
        event.target.closest('tr').remove();
        alert("Ticket with ID" + ticketIdToDelete + " has been deleted.");
    }
    
});
