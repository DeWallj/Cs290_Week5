//Create page content - 4X4 table, 4 directional buttons, and Mark Cell button
var pageBody = document.body;

//Table
var table = document.createElement("table")
var headerRow = document.createElement("tr")
var dataRow = document.createElement("tr")

pageBody.appendChild(table)
table.appendChild(headerRow)
table.appendChild(dataRow)

for(var i = 0; i <= 4; i++)
{
	var newHeader = document.createElement("th")
	headerRow.appendChild(newHeader)
	var newCell = document.createElement("td")
	newCell.innerHTML = "text"
	dataRow.appendChild(newCell)
}

//Function that changes border thickness of table cell based on directional buttons being "pressed"
//Function that permanently changes the background of the selected table cell to yellow when "Mark Cell" is hit