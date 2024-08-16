

//   =========== START DEFINITION =================


var right = document.getElementById("right");
var right2 = document.getElementById("right2");
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var firstname = document.getElementById("firstname");
var youremail = document.getElementById("youremail");
var pass = document.getElementById("pass");
var copass = document.getElementById("copass");
var phone = document.getElementById("phone");
var firstname1 = document.getElementById("firstname1");
var lastname1 = document.getElementById("lastname1");
var firstname1 = document.getElementById("firstname1");
var youremail1 = document.getElementById("youremail1");
var pass1 = document.getElementById("pass1");
var copass1 = document.getElementById("copass1");
var phone1 = document.getElementById("phone1");
var home = document.getElementById("home");
var profile = document.getElementById("profile");
var home1 = document.getElementById("home1");
var profile1 = document.getElementById("profile1");
var button = document.getElementById("button");
var button1 = document.getElementById("button1");


var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var icon5 = document.getElementById("icon5");
var icon6 = document.getElementById("icon6");
var icon7 = document.getElementById("icon7");
var icon8 = document.getElementById("icon8");




//   =========== START DEFINITION ERROSR FOR PAGE1 =================




var small1 = document.getElementById("small1");

var small2 = document.getElementById("small2");

var small3 = document.getElementById("small3");

var small = document.getElementById("small");
var smalls = document.getElementById("smalls");
var small4 = document.getElementById("small4");

var small5 = document.getElementById("small5");
var small6 = document.getElementById("small6");
var small7 = document.getElementById("small7");
var small8 = document.getElementById("small8");

var small9 = document.getElementById("small9");
var small10 = document.getElementById("small10");
var small11 = document.getElementById("small11");

//   =========== END DEFINITION ERROSR FOR PAGE1 =================





//   =========== START DEFINITION ERROSR FOR PAGE2 =================


var small_1 = document.getElementById("small_1");

var small_2 = document.getElementById("small_2");

var small_3 = document.getElementById("small_3");

var small_ = document.getElementById("small_");
var small_s = document.getElementById("small_s");
var small_4 = document.getElementById("small_4");

var small_5 = document.getElementById("small_5");
var small_6 = document.getElementById("small_6");
var small_7 = document.getElementById("small_7");
var small_8 = document.getElementById("small_8");

var small_9 = document.getElementById("small_9");
var small_10 = document.getElementById("small_10");
var small_11 = document.getElementById("small_11");

//   =========== END DEFINITION ERROSR FOR PAGE1 =================



//   =========== END DEFINITION ==================================




// =============== التبديل بين الصفحتين =========================


profile.onclick = function(){
right2.style.display="none";
// right.style.display="block";
home1.style.background="none";
home1.style.border="none";
profile1.style.background="white";
profile1.style.borderRadius="20PX";
};

home1.onclick = function(){
right.style.display="none";
// right2.style.display="block";
profile.style.background="none";
profile.style.border="none";
};


// ================================================================




// ==========================  icons  =============================

icon1.onclick = function(){
    pass.setAttribute("type","text");
    this.style.visibility = "hidden";
    icon2.style.visibility = "visible";
}

icon2.onclick = function(){
    pass.setAttribute("type","password");
    this.style.visibility = "hidden";
    icon1.style.visibility = "visible";
}


icon3.onclick = function(){
    copass.setAttribute("type","text");
    this.style.visibility = "hidden";
    icon4.style.visibility = "visible";
}

icon4.onclick = function(){
    copass.setAttribute("type","password");
    this.style.visibility = "hidden";
    icon3.style.visibility = "visible";
}






icon5.onclick = function(){
    pass1.setAttribute("type","text");
    this.style.visibility = "hidden";
    icon6.style.visibility = "visible";
}

icon6.onclick = function(){
    pass1.setAttribute("type","password");
    this.style.visibility = "hidden";
    icon5.style.visibility = "visible";
}


icon7.onclick = function(){
    copass1.setAttribute("type","text");
    this.style.visibility = "hidden";
    icon8.style.visibility = "visible";
}

icon8.onclick = function(){
    copass1.setAttribute("type","password");
    this.style.visibility = "hidden";
    icon7.style.visibility = "visible";
}


// =================================================================



//============= ايقاف عمل زرار Register1 ===========================


button.onclick = function(event){
    if(firstname.value === ""){
        firstname.style.border = "1px solid red";
        small1.style.display = "block";
        event.preventDefault();
    }
    if(youremail.value === ""){
        youremail.style.border = "1px solid red";
        small2.style.display = "block";
        event.preventDefault();
    }
    if(lastname.value === ""){
        lastname.style.border = "1px solid red";
        small3.style.display = "block";
        event.preventDefault();
    }
    if(phone.value == ""){
        phone.style.border = "1px solid red";
        small4.style.display = "block";
        event.preventDefault();
    }
    if(phone.value.length > 11){
        event.preventDefault();
    }
    if(phone.value.length < 11){
        event.preventDefault();
    }
    if(pass.value === ""){
        pass.style.border = "1px solid red";
        small5.style.display = "block";
        event.preventDefault();
    }
    if(copass.value != pass.value){
        copass.style.border = "1px solid red";
        small10.style.display = "block";
        small11.style.display = "none";
        event.preventDefault();
    }
    if(copass.value === ""){
        copass.style.border = "1px solid red";
        small9.style.display = "block";
        small10.style.display = "none";
        event.preventDefault();
    }
}

// ======================================================================





// ==============  الصفحه الاولي Inputالفانكشن الخاصه  ب ================


firstname.oninput = function(){
    if(this.value.length >= 1) {
        this.style.border = "1px solid gray"
        small1.style.display = "none";
    }
}

lastname.oninput = function(){
    if(this.value.length >= 1) {
        this.style.border = "1px solid gray"
        small3.style.display = "none"
    }
}

youremail.oninput = function(){
    if(this.value.length >= 1) {
        this.style.border = "1px solid gray"
        small2.style.display = "none";
    }
}

phone.oninput = function(){
    if(this.value.length == 11) {
        this.style.border = "1px solid gray"
        small4.style.display = "none";
        small.style.display = "none";
        smalls.style.display = "none";
    }

    if(this.value.length > 11){
        this.style.border = "1px solid red";
        small.style.display = "block";
        smalls.style.display = "none";
    }

    if(this.value.length < 11){
        this.style.border = "1px solid red";
        small4.style.display = "none";
        small.style.display = "none";
        smalls.style.display = "block";
    }
    if(this.value === ""){
        this.style.border = "1px solid red";
        small4.style.display = "block";
        small.style.display = "none";
        smalls.style.display = "none";
    }
    
}

pass.oninput = function(){
    if(this.value.length <= 4){
        this.style.border = "1px solid gray";
        small5.style.display = "none";
        small6.style.display = "block";
    }
    else{
        small6.style.display = "none";
    }


    if(this.value.length > 4){
        this.style.border = "1px solid gray";
        small6.style.display = "none";
        small7.style.display = "block";
    }
    else{
        small7.style.display = "none";
    }


    if(this.value.length > 7){
        this.style.border = "1px solid gray";
        small7.style.display = "none";
        small8.style.display = "block";
    }
    else{
        small8.style.display = "none";
    }
    if(this.value.length == ""){
        this.style.border = "1px solid red";
        small5.style.display = "block";
        small6.style.display = "none";
        small7.style.display = "none";
    }
    
}

copass.oninput = function(){
    if(this.value != pass.value){
        this.style.border = "1px solid red";
        small9.style.display = "none";
        small10.style.display = "block";
    }
    else{
        this.style.border = "1px solid gray";
        small10.style.display = "none";
    }
    
    if(this.value == pass.value){
        small11.style.display = "block";
    }
    else{
        this.style.border = "1px solid gray";
        small11.style.display = "none";
    }
    if(this.value.length == ""){
        this.style.border = "1px solid red";
        small9.style.display = "block";
        small10.style.display = "none";
        small11.style.display = "none";
    }
    
}


// ===================================================================








//============= ايقاف عمل زرار Register2 ============================


button1.onclick = function(event){
    if(firstname1.value === ""){
        firstname1.style.border = "1px solid red";
        small_1.style.display = "block";
        event.preventDefault();
    }
    if(youremail1.value === ""){
        youremail1.style.border = "1px solid red";
        small_2.style.display = "block";
        event.preventDefault();
    }
    if(lastname1.value === ""){
        lastname1.style.border = "1px solid red";
        small_3.style.display = "block";
        event.preventDefault();
    }
    if(phone1.value == ""){
        phone1.style.border = "1px solid red";
        small_4.style.display = "block";
        event.preventDefault();
    }
    if(phone1.value.length > 11){
        event.preventDefault();
    }
    if(phone1.value.length < 11){
        event.preventDefault();
    }
    if(pass1.value === ""){
        pass1.style.border = "1px solid red";
        small_5.style.display = "block";
        event.preventDefault();
    }
    if(copass1.value != pass1.value){
        copass1.style.border = "1px solid red";
        small_10.style.display = "block";
        small_11.style.display = "none";
        event.preventDefault();
    }
    if(copass1.value === ""){
        copass1.style.border = "1px solid red";
        small_9.style.display = "block";
        small_10.style.display = "none";
        event.preventDefault();
    }
}

// =========================================================================




// ==============  الصفحه الثانيه Inputالفانكشن الخاصه  ب ================
firstname1.oninput = function(){
    if(this.value.length >= 1) {
        this.style.border = "1px solid gray"
        small_1.style.display = "none";
    }
}

lastname1.oninput = function(){
    if(this.value.length >= 1) {
        this.style.border = "1px solid gray"
        small_3.style.display = "none"
    }
}

youremail1.oninput = function(){
    if(this.value.length >= 1) {
        this.style.border = "1px solid gray"
        small_2.style.display = "none";
    }
}

phone1.oninput = function(){
    if(this.value.length == 11) {
        this.style.border = "1px solid gray"
        small_4.style.display = "none";
        small_.style.display = "none";
        small_s.style.display = "none";
    }

    if(this.value.length > 11){
        this.style.border = "1px solid red";
        small_.style.display = "block";
        small_s.style.display = "none";
    }

    if(this.value.length < 11){
        this.style.border = "1px solid red";
        small_4.style.display = "none";
        small_.style.display = "none";
        small_s.style.display = "block";
    }
    if(this.value === ""){
        this.style.border = "1px solid red";
        small_4.style.display = "block";
        small_.style.display = "none";
        small_s.style.display = "none";
    }
    
}

pass1.oninput = function(){
    if(this.value.length <= 4){
        this.style.border = "1px solid gray";
        small_5.style.display = "none";
        small_6.style.display = "block";
    }
    else{
        small_6.style.display = "none";
    }


    if(this.value.length > 4){
        this.style.border = "1px solid gray";
        small_6.style.display = "none";
        small_7.style.display = "block";
    }
    else{
        small_7.style.display = "none";
    }


    if(this.value.length > 7){
        this.style.border = "1px solid gray";
        small_7.style.display = "none";
        small_8.style.display = "block";
    }
    else{
        small_8.style.display = "none";
    }
    if(this.value.length == ""){
        this.style.border = "1px solid red";
        small_5.style.display = "block";
        small_6.style.display = "none";
        small_7.style.display = "none";
    }
    
}

copass1.oninput = function(){
    if(this.value != pass1.value){
        this.style.border = "1px solid red";
        small9.style.display = "none";
        small_10.style.display = "block";
    }
    else{
        this.style.border = "1px solid gray";
        small_10.style.display = "none";
    }
    
    if(this.value == pass1.value){
        small_11.style.display = "block";
    }
    else{
        this.style.border = "1px solid gray";
        small_11.style.display = "none";
    }
    if(this.value.length == ""){
        this.style.border = "1px solid red";
        small_9.style.display = "block";
        small_10.style.display = "none";
        small_11.style.display = "none";
    }
    else{
        small_9.style.display = "none";
    }
    
}


// ===================================================================



