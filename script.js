$(document).ready(function(){
    $(document).ajaxStart(function() {
        $("#loading").show();
      });

      // Hide loading when AJAX request is complete
      $(document).ajaxStop(function() {
        $("#loading").hide();
    });
    $("#click").click(function(){

        $.get("https://eptracker.onrender.com/expense_of_0310_testing", function(data, status){
            console.log(data);
            var tableBody = $("#studentTable tbody");
        
            // Clear existing rows
            tableBody.empty();
    
            // Loop through the JSON data and create table rows
            $.each(data, function(index, student) {
              var exp_date=student.exp_date.slice(0,10);
              console.log(student.id);  
              var row = $("<tr>");
              row.append($("<td>").text(student.id));
              row.append($("<td>").text(student.exp_tag));
              row.append($("<td>").text(exp_date));
              row.append($("<td>").text(student.exp_amount));
              tableBody.append(row);
            });
        });
        $("#click").hide();

    });
});