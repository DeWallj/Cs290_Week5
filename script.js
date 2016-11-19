/*
* Jennifer DeWall
* Week 5 Assignment: DOM and Events
*/

//Create page content-4X4 table, 4 directional buttons, and Mark Cell button
var pageBody = document.body;

//Create Table Elements
var table = document.createElement("table");
var tableHead = document.createElement("thead");
var tableBody = document.createElement("tbody");
var headerRow = document.createElement("tr");

//Insert Table Elements
pageBody.appendChild(table);
table.appendChild(tableHead);
table.appendChild(tableBody);
tableHead.appendChild(headerRow);

//Global variables
var g_CurrRow = 0;
var g_CurrColumn = 0;


for(var i = 0; i < 4; i++)
{
    //Create and fill header rows
	var header = document.createElement("th");
	headerRow.appendChild(header);
    header.textContent = "Header " + (i+1);
    //Create cell border
    header.style.border = "1px solid black";
}


for(var j = 0; j < 3; j++)
{
    //Create and fill data rows
    var newRow = document.createElement("tr");
    tableBody.appendChild(newRow);

    for(var i = 0; i < 4; i++)
    {
        //Create and add columns
        var newCell = document.createElement("td");
        newCell.textContent = (i+1) + ", " + (j+1);
        newRow.appendChild(newCell);
        //Create cell border
        newCell.style.border = "1px solid black";
    }
}

var directions = ["Up", "Down", "Left", "Right"];

directions.forEach(function(direction)
{
    //Create and Fill Directional Buttons
    var newButton = document.createElement("button");
    pageBody.appendChild(newButton);

    newButton.textContent = direction;
    newButton.onclick = function(){
        moveCell(this.textContent)
    }
});

//Create Mark Cell Button
var markButton = document.createElement("button");
pageBody.appendChild(markButton);
markButton.textContent = "Mark Cell";
markButton.onclick = function(){
    colorCell();
}

//Highlight upper-left, non-header cell of table
cellOne = getCell(tableBody, g_CurrRow, g_CurrColumn);
highlightCell(cellOne, true);
/***functions**/

/*
* highlightCell()
* Helper function that thickens or unthickens border of cell
* Param: cell to highlight/unhighlight and boolean that declares if cell 
* should/shouldn't be highlighted
*/
function highlightCell(cell, shouldHighlight)
{
    //Check if cell should be highlighted
    if(shouldHighlight)
    {
        cell.style.border = "4px solid black";
    }
    else
    {
        //Else, unhighlight cell
        cell.style.border = "1px solid black";
    }
}

/*
* getCell()
* Helper function that gets cell to be worked on
* Param: Table and row/column of cell
* Return: Cell to be worked on
*/
function getCell(tableBody, row, column)
{
    //Get first row cell from table body
    var currRow = tableBody.firstElementChild;
    //Keep track of current row index
    var currRowIndex = 0;
    //Search for row
    while(currRowIndex != row)
    {
        currRow = currRow.nextElementSibling;
        currRowIndex += 1;
    }

    //Get first column cell from current row
    var currColumn = currRow.firstElementChild;
    //Keep track of current column index
    var currColumnIndex = 0;
    //Search for column
    while(currColumnIndex != column)
    {
        currColumn = currColumn.nextElementSibling;
        currColumnIndex += 1;
    }

    //Return cell
    return currColumn;
}

/*
* moveHighlighterHelper()
* Helper function that assist in highlighting/unhighlighting cells
* Param: function updateIndices
*/
function moveHighlightHelper(updateIndices)
{
    //Unhighlight old cell
    var oldCellSelect = getCell(tableBody, g_CurrRow, g_CurrColumn);
    highlightCell(oldCellSelect, false);
    
    //Highlight new cell
    updateIndices();
    var cellSelect = getCell(tableBody, g_CurrRow, g_CurrColumn);
    highlightCell(cellSelect, true);
}

/*
* moveCell()
* This function moves the highlight from one cell to another based on
* direction given
* Param: A direction as a string: "up", "down", "left", "right"
*/
function moveCell(direction)
{
    switch(direction)
    {
        case "Up":
            //Check if current cell has not reached top of table
            if(g_CurrRow != 0)
            {
                //Move highlight up one cell
                moveHighlightHelper(function()
                {
                    g_CurrRow -= 1;
                });
            }
            break;
        case "Down":
            //Check if current cell has not reached buttom of table
            if(g_CurrRow != 2)
            {
                //Move highlight down one cell
                moveHighlightHelper(function()
                {
                    g_CurrRow += 1;
                });
            }
            break;
        case "Left":
            //Check if current cell has not reached furthest left column of table
            if(g_CurrColumn != 0)
            {
                //Move highlight left one cell
                moveHighlightHelper(function()
                {
                    g_CurrColumn -= 1;
                });
            }
            break;
        case "Right":
            //Check if current cell has not reached furthest right column of table
            if(g_CurrColumn != 3)
            {
                //Move highlight left one cell
                moveHighlightHelper(function()
                {
                    g_CurrColumn += 1;
                });
            }
            break;
    }
}

/*
* colorCell()
* Function that permanently changes the background of the selected table
* cell to yellow when "Mark Cell" is hit
*/
function colorCell()
{
    var cellSelect = getCell(tableBody, g_CurrRow, g_CurrColumn);
    //Color cell yellow
    cellSelect.style.background = "yellow";
}