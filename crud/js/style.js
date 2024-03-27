var i=0;














var productContainer=[];
// make above becouse logic of local storage if i reload the local sorage have a data 
//and variable productcontainer cleear and this notice 
// if you add product you will override in all data which  you store  and this false 
// you need get data from local storage and put it in array and push as you run and not face any problem
// you will check of local storage if have data put it data in array

if (localStorage.getItem('ourProduct') !=null) //
{
    productContainer=JSON.parse(localStorage.getItem('ourProduct')) 
    // you need to pars becouse in set to local 
    //in set you parse to string andd you need to storage image of object in array 
    // you must store n local storage key:string and his valu:string 
    // and ypur array must stpre data in object like;

    displayProducts(); // this becouse you need to display product when everytime you open 

}




var productName=document.getElementById('productName')
var productPrice=document.getElementById('productPrice')
var productCategory=document.getElementById('productCategory')
var productDescription=document.getElementById('productDescription')
//inputs...



//array to contain all product which add becouse if not have array every product you add will override and we need keep product by push it in array 

// when we make reload all variable in memory will clear
//and all script will run as first time 
//and we will learn how to save data when we make reload !!!




function addProduct()
{
    if(addProductButton.innerHTML == "updated"){
        update(i);
        displayProducts()
        clearProduct()
        return;

      }
    var Product= { 
        
        "productName": productName.value,
        "productPrice": productPrice.value,
        "productCategory": productCategory.value,
        "productDescription": productDescription.value

    }
    productContainer.push(Product)
   
    localStorage.setItem('ourProduct',JSON.stringify(productContainer))
    console.log(productContainer)
    clearProduct()
    displayProducts()
}
// why we when make console log to productContainer not show object 
function update(icon){
    i=icon
    addProductButton.innerHTML="updated"

    productName.value= productContainer[icon].productName
    productContainer[icon].productName=   productName.value
     productPrice.value= productContainer[icon].productPrice
     productCategory.value=  productContainer[icon].productCategory
     productDescription.value=productContainer[icon].productDescription
      
     productContainer[icon].productName= productName.value
     productContainer[icon].productPrice= productPrice.value
     productContainer[icon].productCategory=  productCategory.value
     productContainer[icon].productDescription=    productDescription.value
     
    //  productContainer.splice(icon, 1);




}













function clearProduct(){

    productCategory.value=""
    productDescription.value=""
    productPrice.value=""
    productName.value=""

    //make anther function to clear and call it in add product not need to add event lister .
}



function displayProducts(){
    var cartona=``

    for(var i=0;i<productContainer.length;i++ )
    {
         cartona+=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].productName}</td>
        <td>${productContainer[i].productPrice}</td>
        <td>${productContainer[i].productCategory}</td>
        <td>${productContainer[i].productDescription}</td>
        <td><button onclick='update(${i})' class="btn btn-outline-info id="UPDATE">Update</button></td>
        <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger">Delete</button></td>
        

    </tr>
         `
// in delete func i apply in buuton delete and send specfic index 
    }
    document.getElementById('tableBody').innerHTML=cartona;

}

function deleteProduct(index){
    //i splice from array with index and delete 

    productContainer.splice(index,1)
    localStorage.setItem('ourProduct',JSON.stringify(productContainer));

    //we must delete from lacal storage becouse if not delete it will get all data and put again when you turn
    //turn of your browser and  return to application 
    // and set action of local make replace and put actul data 
    
    displayProducts();// to show data becouse if not call you will show perv data and not 
    // actaul array which you dekete froom it 

}


function Search(term){

    if(productContainer.includes(term))
    {

    }
}


function searchProduct(term){
var cartona=''
    for (var i =0 ; i<productContainer.length;i++)
    {
        if (productContainer[i].productName.toLowerCase().includes(term.toLowerCase())==true )
        {

            cartona+=`<tr>
            <td>${i}</td>
            <td>${productContainer[i].productName}</td>
            <td>${productContainer[i].productPrice}</td>
            <td>${productContainer[i].productCategory}</td>
            <td>${productContainer[i].productDescription}</td>
            <td><button class="btn btn-outline-info>Update</button></td>
            <td><button onclick='deleteProduct(${i} )' class="btn btn-outline-danger">Delete</button></td>
            
    
        </tr>
             `
        }

    }
    document.getElementById('tableBody').innerHTML=cartona
}

let addProductButton=document.getElementById('addProduct')


//----------------------------------------------------------



































// var product=[

//     {
//         "productName":'Toshipa',
//         "productPrice":99,
//         "productCategory":'tv',
//         "productDesc":'smart tv',

//         "wife":['gamal','khaled']
//     },

//     {
//         "productName":'hp',
//         "productPrice":9900,
//         "productCategory":'lap',
//         "productDesc":'smart lap',
//         "wife":['gamal','khaled']

//     },
//     {
//         "productName":'dell',
//         "productPrice":888,
//         "productCategory":'friut',
//         "productDesc":'aplle',
//         "wife":['gamal','khaled']

//     },
//     {
//         "productName":'mobile',
//         "productPrice":99876,
//         "productCategory":'smart',
//         "productDesc":'iphonex ',
//         "wife":['gamal','khaled'] //what will i do in this case in data retrive

//     }
    
// ]







// function addProduct(){

//     let cartona=''
//     for (let i=0;i<product.length;i++)
//     {
//         cartona+=`<tr>
//                  <td>${i}</td>
//                  <td>${product[i].productName}</td>
//                 <td>${product[i].productPrice}</td>
//                 <td>${product[i].productCategory}</td>
//                 <td>${product[i].productDescription}</td>
//                 <td>${product[i].wife[1] } 
                
//                 ${product[i].wife[2] }</td>

//                 </tr>`
                
//                 document.getElementById('tableBody').innerHTML=cartona


//     }

// }
    