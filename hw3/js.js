document.getElementById("submit").onclick = function(){
    var left_min = document.getElementById("left_min").value;
    var left_max = document.getElementById("left_max").value;
    var right_min = document.getElementById("right_min ").value;
    var right_max = document.getElementById("min_left").value;
}

function check_left_min() {                            // Declare function
    var elMsg = document.document.getElementById("left_min").value;
    if (this.value <-50) {
        elMsg.textContent = 'Your input is too small, must be larger than -50';  // Set msg
    } else {                                            // Otherwise
        elMsg.textContent = '';                           // Clear message
    }
}
    function check_left_max() {                            // Declare function
        var elMsg = document.document.getElementById("left_min").value;
        if (this.value >50) {
            elMsg.textContent = 'Your input is too big, must be smaller than 50';  // Set msg
        } else {                                            // Otherwise
            elMsg.textContent = '';                           // Clear message
        }
}


function check_right_min() {                            // Declare function
    var elMsg = document.document.getElementById("left_min").value;
    if (this.value <-50) {
        elMsg.textContent = 'Your input is too small, must be larger than -50';  // Set msg
    } else {                                            // Otherwise
        elMsg.textContent = '';                           // Clear message
    }
}
function check_right_max() {                            // Declare function
    var elMsg = document.document.getElementById("left_min").value;
    if (this.value >50) {
        elMsg.textContent = 'Your input is too big, must be smaller than 50';  // Set msg
    } else {                                            // Otherwise
        elMsg.textContent = '';                           // Clear message
        
    }
    
}
 


document.write("<table border='2px'>");//needed to be defined
document.write("<tr style='font-size:13px;color:white;background-color:black;'>");

for(i = 0; i < 11; i++)
{
    document.write("<th> "+ i + "</th>");
}
document.write("</tr>");
for(k = 0; k< 11; k++)
{
    for(j= 0; j< 11; j++)
    {
        document.write("<td style='font-size:12px;'>" + j*k + "</td>")
    }
    document.write("</tr>");
}
document.write("</table>");

document.write("<table border='2px'>");//needed to be defined
document.write("<tr style='font-size:13px;color:white;background-color:black;'>");



for(i = left_min; i < left_max; i++)
{
    document.write("<th> "+ i + "</th>");
}
document.write("</tr>");
for(k = right_min; k< right_max; k++)
{
    for(j= 0; j< 11; j++)
    {
        document.write("<td style='font-size:12px;'>" + j*k + "</td>")
    }
    document.write("</tr>");
}
document.write("</table>");
