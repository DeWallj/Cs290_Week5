/*
* Jennifer DeWall
* Week 5 Assignment: DOM and Events
*/

//Create page content-4X4 table, 4 directional buttons, and Mark Cell button
var pageBody = document.body;

//Create Table Elements
var table = document.createElement("table")
var tableHead = document.createElement("thead")
var tableBody = document.createElement("tbody")
var headerRow = document.createElement("tr")

//Insert Table Elements
pageBody.appendChild(table)
table.appendChild(tableHead)
table.appendChild(tableBody)
tableHead.appendChild(headerRow)


for(var i = 0; i < 4; i++)
{
    //Create and fill header rows
	var header = document.createElement("th")
	headerRow.appendChild(header)
    header.innerHTML = "Header " + (i+1)
    //Create cell border
    header.style.border = "1px solid black"
}


for(var j = 0; j < 3; j++)
{
    //Create and fill data rows
    var newRow = document.createElement("tr")
    tableBody.appendChild(newRow)

    for(var i = 0; i < 4; i++)
    {
        //Create and add columns
        var newCell = document.createElement("td")
        newCell.innerHTML = (i+1) + ", " + (j+1)
        newRow.appendChild(newCell)
        //Create cell border
        newCell.style.border = "1px solid black"
    }
}

var directions = ["Up", "Down", "Left", "Right"]

directions.forEach(function(direction)
{
    //Create and Fill Directional Buttons
    var newButton = document.createElement("button")
    pageBody.appendChild(newButton)

    newButton.innerHTML = direction
});

//Create Mark Cell Button
var markButton = document.createElement("button")
pageBody.appendChild(markButton)
markButton.innerHTML = "Mark Cell"

/*
* 
* This function changes the border thickness of a table cell based on 
* directional button that was pressed
* Param: Takes table
*/
//'Select' upper left, non-header cell
//If directional button up
//Check if already at top, bottom, furthest left, furthest right
//False, move up
//If down
//Check if already at top, bottom, furthest left, furthest right
//False, move down
//If left
//Check if already at top, bottom, furthest left, furthest right
//False, move left
//If right
//Check if already at top, bottom, furthest left, furthest right
//False, move right


/*
* 
* Function that permanently changes the background of the selected table
* cell to yellow when "Mark Cell" is hit
* Param: Takes currently selected table cell
*/