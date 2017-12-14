/*
    Deli Counter
        The local deli is putting in a new computerized queue to keep track of their customers and improve productivity. 
        At the beginning of the day, the deli is empty so the queue should be represented by an empty array. 
        Build an array of objects that holds the customer’s name, and what they ordered. 
        Build a function that puts a string containing what the person ordered and a string containing the name of the person wishing to join the line in the array. 
        Build a function that displays everyone’s current place in line on an HTML table. If there is nobody in line, it should say "The line is currently empty.". 
        Remember that people like to count from 1, not from 0 ("zero") like computers. Build a function which should call out (i.e. display on the webpage) the next person in line and then remove them from the front. 
        If there is nobody in line, it should call out (display on the webpage) that "There is nobody waiting to be served!".

        body | div #one | div #two
        div #one | h1 | section #groupI | section #groupI2
        div #two | 
        section #groupI | input #nameI | button #addCus -> addCus() | button #cusServed -> cusServed()
        section #groupI2 | input .orderI | erasI(this) | button #addOrd | addOrder() 
*/

var cusL=[]/*length=0*/;

function orderIn(name1, order1){
    var customer={
        name: name1,
        order: order1
    }

    return customer;
}

function addCus(){
    var name1 = document.getElementById('nameI').value;
    var order1 = document.getElementsByName('orderI');
    var orders1=[];
    var count=0;
    for(var i = 0; i < order1.length; i++){
        var temp = order1[i].value;
        if(temp.length){
            orders1.push(temp);
            count++;
        }
    }
    if(name1 && count){
        var cus = orderIn(name1, orders1); 
        cusL.push(cus);
        showCus();       
    } else if(!name1){
        alert("You have not enter the customer's name.")
    }else{
        alert("You have not input any order for this customer.");
    } 
    erasI2();    
}

function cusServed(){
    cusL.shift();
    if(cusL.length >0){        
        showCus();
    }else{
        showCus();
    }
}

function showCus(){
    var show = document.getElementById('groupS');
    var str;
    if(cusL.length === 0){
        emptyT();
    }else{
        for(var i=0; i<cusL.length; i++){
            if(i===0){
                str = "<table><tr><th>#</th><th>Customer&#039s Name</th><th>Customer&#039s Orders</th></tr>";
            }          
            str += '<tr>';
            str+= '<td>' + (i+1) + '</td>'+ '<td>' + cusL[i].name + '</td>' + '<td>' + (cusL[i].order)[0] +'</td>';
            for(var j=1; j<cusL[i].order.length; j++){
                str += '<tr><td></td><td></td><td>' + (cusL[i].order)[j] + '</td></tr>';
            }                    
        }
        str += '</tr></table>';
        document.getElementById('groupS').innerHTML = str;
    }    
}

function emptyT(){
    var str;
    str = "<table><tr><th>#</th><th>Customer&#039s Name</th><th>Customer&#039s Orders</th></tr>";
    str += "<tr><td colspan='3'>You don't have any customers waiting to be served.</td></tr></table>";
    document.getElementById('groupS').innerHTML = str;
}

function addOrder(){
    var ele = document.getElementById('addOrd');
    var a = document.getElementById('groupI2');
    var orders = document.getElementsByName('orderI');
    var tempO=[];
    for(var i=0; i<orders.length; i++){
        tempO.push(orders[i].value);
    }
    a.removeChild(ele);
    a.innerHTML += "<br><input type='text' name='orderI' class='orderI' placeholder='Enter customer&#039s order'>";    
    a.innerHTML += "<button id='addOrd' onclick='addOrder()'>Add Another Order</button>";
    for(var j=0; j<tempO.length; j++){
        orders[j].value = tempO[j];
    }
}

function erasI(n){
    var tempP = n.placeholder;
    n.placeholder="";
    if(!n.value){
        setInterval(function(){n.placeholder=tempP;}, 5000);
    }
}

function erasI2(){
    document.getElementById('nameI').value = "";
    var order = document.getElementsByName('orderI');
    if(order.length >1){
        document.getElementById('groupI2').innerHTML = "<input type='text' name='orderI' class='orderI' placeholder='Enter customer&#039s order' onclick='erasI(this)'><button id='addOrd' onclick='addOrder()'>Add Another Order</button>"; 
    }else{
        order[0].value ='';
    }
}
