// from data.js
var tableData = data;
//append table data
//select tbody
tbody = d3.select("tbody")
//loop through to append data
function displayData(data)
{ 
    tbody.text("")
    data.forEach(function(sighting)
        {
            new_tr = tbody.append("tr");
            Object.entries(sighting).forEach(function([key, value])
            {
                new_td = new_tr.append("td").text(value);
            })
        }
    )
};
displayData(tableData) //displays the appended data
//end of appending table
//filter table button
var inputText = d3.select("#datetime")
var button = d3.select("filter-btn")
//filter table based on date
function changeHandler()
{
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var new_table = tableData.filter(sighting => sighting.datetime===inputText.property("value"))
    displayData(new_table)
}
//event listener for onclick of filter button
inputText.on("change", changeHandler)
button.on("click", changeHandler)
