let multiArray = [["Home", "Profile"], ["Setting"], ["Logout"]];
let sidebar = document.querySelector(".sidebar");

multiArray.forEach((item) => {
  let row = document.createElement("p");
  item.forEach((innerArray) => {
    let column = document.createTextNode(innerArray);
    row.appendChild(column);
    console.log(row);
    
    let br = document.createElement("br");
    row.appendChild(br);
  });
  let column = document.createElement("hr");
  sidebar.appendChild(row);
  sidebar.appendChild(column);
});