// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function enterClicked() {
  // input
  const streetNumber = document.getElementById("street-number").value
  const streetName = document.getElementById("street-name").value

  // process
  const address = streetNumber + streetName 


  // output
  document.getElementById("address").innerHTML = "Your address is: " + streetNumber + ", " + streetName + "."
}