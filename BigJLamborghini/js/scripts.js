// JavaScript Document
"use strict";

// Initialize when loading for the first time
var totCat = 4;
var totInCat1 = 5;
var totInCat2 = 4;
var totInCat3 = 3;
var totInCat4 = 1;

// Open the modal window
function openDetailedView(imgSrc, catCounter, carCounter)
{
	var _openModal = document.getElementById('openModal');
	_openModal.getElementsByTagName('h2')[0].innerHTML = carList[catCounter - 1].carsList[carCounter - 1].model;
	_openModal.getElementsByTagName('img')[0].src = imgSrc;
	_openModal.getElementsByTagName('h4')[0].innerHTML = "Color: " + carList[catCounter - 1].carsList[carCounter - 1].color + ", Mileage: " + carList[catCounter - 1].carsList[carCounter - 1].mileage + "km";
	document.getElementById('openModelAnc').click();
}

// Create a new div to display the car
function divCreate(id, className) {
    var div= document.createElement('div');
	div.setAttribute("alt", "Invalid Image");
    div.setAttribute("id", id);
	div.setAttribute("class", className);
    return div;
}

// Create a new div to display the car
function btnCreate(id, className, catCounter) {
    var btn= document.createElement('button');
    btn.setAttribute("id", id);
	btn.setAttribute("class", className);
	btn.innerHTML = "Add New";
	btn.setAttribute("onclick", "addNewCarForm(" + catCounter + ")");
    return btn;
}

// Create a new image to display the car image
function imgCreate(src, width, catCounter, carCounter) {
    var img= document.createElement('img');
	img.setAttribute("src", src);
    img.setAttribute("width", width);
	img.setAttribute("onclick", "openDetailedView('" + src + "'," + catCounter + ", " + carCounter + ")");
    return img;
}

// Add a new car
function addNewCarForm(catCounter)
{
	document.getElementById('carUploadForm').reset();
	var _openModal = document.getElementById('openModalForm');
	_openModal.getElementsByTagName('h2')[0].innerHTML = "Add a new " + carList[catCounter].category;
	document.getElementById('catNumber').value = catCounter;
	document.getElementById('openModelFormAnc').click();
}

// Upload a new car
function uploadCar()
{
	var errFlag = 0;
	var _model = document.getElementById('model');
	var _color = document.getElementById('color');
	var _mileage = document.getElementById('mileage');
	var _imageURL = document.getElementById('imageURL');
	var _catNumber = document.getElementById('catNumber');
	
	_model.style.borderColor="#ccc";
	_color.style.borderColor="#ccc";
	_mileage.style.borderColor="#ccc";
	_imageURL.style.borderColor="#ccc";
	
	if(_model.value == "")
	{
		_model.style.borderColor="#ff0000";
		errFlag = 1;
	}
		
	if(_color.value == "")
	{
		_color.style.borderColor="#ff0000";
		errFlag = 1;
	}
	
	if(_mileage.value == "" || isNaN(_mileage.value))
	{
		_mileage.style.borderColor="#ff0000";
		errFlag = 1;
	}
		
	if(!_imageURL.value.match(/\.(jpg)$/))
	{
		_imageURL.style.borderColor="#ff0000";
		errFlag = 1;
	}
	
	if(errFlag == 0)
	{
		carList[_catNumber.value].carsList.push({"model" : _model.value.toUpperCase(), "color" : _color.value.toUpperCase(), "mileage" : _mileage.value, "imagePath" : _imageURL.value});
		window['totInCat' + (parseInt(_catNumber.value) + 1)] += 1;
		loadImages();
		document.getElementById('closeForm').click();
	}
}

// Retrieve the details from a javascript array and display the cars
function loadImages()
{
	var _models = document.getElementById('models');
	document.getElementById('models').innerHTML= "";
	
	//for(var catCtr = 1; catCtr <= totCat; catCtr++) {
	for(var catCtr = 1; catCtr <= totCat; catCtr++) {
		var rowCtr = 1;
		var newCarRowId = "cat" + catCtr + "Row_" + rowCtr;
		
		var newCarRowTitle = divCreate(newCarRowId + "Title", "row");
		_models.appendChild(newCarRowTitle);
		
		var newCarRow = divCreate(newCarRowId, "row");
		_models.appendChild(newCarRow);
		
		for(var ictr = 1; ictr <= window['totInCat' + catCtr]; ictr++) {
			
			var newCarRowTitleContent = "<br><h3>" + carList[catCtr - 1].category + "</h3>";
			newCarRowTitle.innerHTML = newCarRowTitleContent;
			var newCarRowBtn = btnCreate("", "btn btn-default btn-lg", catCtr - 1);
			newCarRowTitle.appendChild(newCarRowBtn);
			
			var newCarDivId = "Cat" + catCtr + "_" + ictr;
			
			var newCarDiv = divCreate(newCarDivId, "col-md-3")
			document.getElementById(newCarRowId).appendChild(newCarDiv);
			
			var newCarImg = imgCreate(carList[catCtr - 1].carsList[ictr - 1].imagePath,"100%", catCtr, ictr);
			document.getElementById(newCarDivId).appendChild(newCarImg);
			
			var descriptionDiv = document.createElement('div');
			var newCarDescription = "<br><strong>" + carList[catCtr - 1].carsList[ictr - 1].model + "</strong>";
			newCarDescription += "<br><br>";
			
			document.getElementById(newCarDivId).appendChild(descriptionDiv);
			descriptionDiv.innerHTML = newCarDescription;
			
			if(ictr%4 == 0)
			{
				newCarRowId = "cat" + catCtr + "Row_" + ++rowCtr;
				newCarRow = divCreate(newCarRowId, "row");
				_models.appendChild(newCarRow);
			}
		}
	}
}
loadImages();