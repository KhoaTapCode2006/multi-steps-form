

function active_step2(){
  document.getElementById("content_step_2").classList.add("active")
  document.getElementById("content_step_1").classList.remove("active")
  document.getElementById("content_step_3").classList.remove("active")
  document.getElementById("content_step_4").classList.remove("active")

  document.getElementById("title_step_2").classList.add("active")
  document.getElementById("title_step_1").classList.remove("active")
  document.getElementById("title_step_3").classList.remove("active")
  document.getElementById("title_step_4").classList.remove("active")

   document.getElementById("goback-step-2").style.display = "inline-block"
   document.getElementById("goback-step-3").style.display = "none"
   document.getElementById("goback-step-4").style.display = "none"

   document.getElementById("step_number_2").classList.add("active")
   document.getElementById("step_number_1").classList.remove("active")
   document.getElementById("step_number_3").classList.remove("active")
   document.getElementById("step_number_4").classList.remove("active")

  document.getElementById("button-step-2").style.display = "inline-block"
  document.getElementById("button-step-1").style.display = "none"
  document.getElementById("button-step-3").style.display = "none"
  document.getElementById("button-step-4").style.display = "none"

  }

  
function active_step3(){
  document.getElementById("content_step_3").classList.add("active")
  document.getElementById("content_step_1").classList.remove("active")
  document.getElementById("content_step_2").classList.remove("active")
  document.getElementById("content_step_4").classList.remove("active")

  document.getElementById("title_step_3").classList.add("active")
  document.getElementById("title_step_1").classList.remove("active")
  document.getElementById("title_step_2").classList.remove("active")
  document.getElementById("title_step_4").classList.remove("active")

   document.getElementById("goback-step-3").style.display = "inline-block"
   document.getElementById("goback-step-2").style.display = "none"
   document.getElementById("goback-step-4").style.display = "none"

   document.getElementById("step_number_3").classList.add("active")
   document.getElementById("step_number_1").classList.remove("active")
   document.getElementById("step_number_2").classList.remove("active")
   document.getElementById("step_number_4").classList.remove("active")

  document.getElementById("button-step-3").style.display = "inline-block"
  document.getElementById("button-step-1").style.display = "none"
  document.getElementById("button-step-2").style.display = "none"
  document.getElementById("button-step-4").style.display = "none"

  }

function active_step1(){
  document.getElementById("content_step_1").classList.add("active")
  document.getElementById("content_step_2").classList.remove("active")
  document.getElementById("content_step_3").classList.remove("active")
  document.getElementById("content_step_4").classList.remove("active")

  document.getElementById("title_step_1").classList.add("active")
  document.getElementById("title_step_2").classList.remove("active")
  document.getElementById("title_step_3").classList.remove("active")
  document.getElementById("title_step_4").classList.remove("active")

  document.getElementById("goback-step-2").style.display = "none"
   document.getElementById("goback-step-3").style.display = "none"
   document.getElementById("goback-step-4").style.display = "none"

   document.getElementById("step_number_1").classList.add("active")
   document.getElementById("step_number_2").classList.remove("active")
   document.getElementById("step_number_3").classList.remove("active")
   document.getElementById("step_number_4").classList.remove("active")
    
   document.getElementById("button-step-1").style.display = "inline-block"
   document.getElementById("button-step-2").style.display = "none"
   document.getElementById("button-step-3").style.display = "none"
   document.getElementById("button-step-4").style.display = "none"
   
  }

//step1

let step_1_completed = false
let count_1 = 0
var name_form, email_form, phone_form;
function getName(){
  name_form = document.getElementById('name_form').value
}
function getEmail(){
  email_form = document.getElementById('email_form').value
}
function getPhone(){
  phone_form = document.getElementById('phone_form').value
}





function check_step1(){
  count_1 = 0;
  name_form = typeof name_form !== "undefined" ? name_form : "";
  email_form = typeof email_form !== "undefined" ? email_form : "";
  phone_form = typeof phone_form !== "undefined" ? phone_form : "";
if(name_form.length < 1){
  document.getElementById("name_form").style.border = "1px solid red"
  document.getElementById("error_name_form").style.opacity = "1"
  count_1++;
}else{
  document.getElementById("name_form").style.border = "1px solid grey"
document.getElementById("error_name_form").style.opacity = "0"

}


if(email_form.length < 1){
  document.getElementById("email_form").style.border = "1px solid red"
  document.getElementById("error_email_form").style.opacity = "1"
  count_1++;
}else{
  document.getElementById("email_form").style.border = "1px solid grey"
document.getElementById("error_email_form").style.opacity = "0"
}

if(phone_form.length < 1){
  document.getElementById("phone_form").style.border = "1px solid red"
  document.getElementById("error_phone_form").style.opacity = "1"
  count_1++;
}else{
  document.getElementById("phone_form").style.border = "1px solid grey"
document.getElementById("error_phone_form").style.opacity = "0"
}

if (count_1 == 0){
  step_1_completed = true;
  active_step2()
} else{
  step_1_completed = false;
}

}


// STEP 2

let monthly = true;
let yearly = false;

let arcade_chosen = true;
let pro_chosen = false;
let advanced_chosen = false;




let switcher_count = true;
const sales = document.querySelectorAll('.sales')
function switcher_sliding(){
  if(switcher_count == true){
    switcher_count = false;
    document.getElementById("switcher-slider").style.left = "55%"
    document.getElementById("monthly").style.opacity = "0.4"
    document.getElementById("yearly").style.opacity = "1"
    
    document.getElementById("arcade-price").innerText = "$90/yr"
    document.getElementById("advanced-price").innerText = "$120/yr"
    document.getElementById("pro-price").innerText = "$150/yr"

    document.getElementById("add-on-price-1").innerText = "+$10/yr"
    document.getElementById("add-on-price-2").innerText = "+$20/yr"
    document.getElementById("add-on-price-3").innerText = "+$20/yr"

    document.getElementById("content_step_2").style.marginBottom = "77px"
   sales.forEach(sale => {
    sale.style.display = "block"
   })

   yearly = true;
   monthly = false;
  }else if(switcher_count == false){
    switcher_count = true;
    document.getElementById("switcher-slider").style.left = "10%"
    document.getElementById("monthly").style.opacity = "1"
    document.getElementById("yearly").style.opacity = "0.4"
  
    document.getElementById("arcade-price").innerText = "$9/mo"
    document.getElementById("advanced-price").innerText = "$12/mo"
    document.getElementById("pro-price").innerText = "$15/mo"
    
    document.getElementById("add-on-price-1").innerText = "+$1/mo"
    document.getElementById("add-on-price-2").innerText = "+$2/mo"
    document.getElementById("add-on-price-3").innerText = "+$2/mo"
    
    document.getElementById("content_step_2").style.marginBottom = "97px"
    sales.forEach(sale => {
      sale.style.display = "none"
     })

     yearly = false;
     monthly = true;
  }
}

function arcade_choice(){
document.getElementById("arcade").classList.add("active")
document.getElementById("advanced").classList.remove("active")
document.getElementById("pro").classList.remove("active")

arcade_chosen = true;
advanced_chosen = false
pro_chosen = false;
}

function advanced_choice(){
  document.getElementById("advanced").classList.add("active")
  document.getElementById("arcade").classList.remove("active")
  document.getElementById("pro").classList.remove("active")
  
  arcade_chosen = false;
advanced_chosen = true
pro_chosen = false;
}

  function pro_choice(){
    document.getElementById("pro").classList.add("active")
    document.getElementById("arcade").classList.remove("active")
    document.getElementById("advanced").classList.remove("active")
    arcade_chosen = false;
advanced_chosen = false
pro_chosen = true;
  }

    function goBackStep1(){
    if(step_1_completed == true){
      active_step1()
      
    }
    }

function check_step2(){
  active_step3()
}
    // STEP 3
let addOn1 = false;
let addOn2 = false;
let addOn3 = false;




    function addOnChosen1(){
      if(addOn1 == false){
      document.getElementById("add-on-1").style.backgroundColor = "hsl(217, 100%, 97%)"
      document.getElementById("add-on-1").style.border = "2px solid hsl(213, 96%, 18%)"

      document.getElementById("checkbox-1").classList.add("active")
      addOn1 = true
    }else{
      document.getElementById("add-on-1").style.backgroundColor = "transparent"
      document.getElementById("add-on-1").style.border = "2px solid  rgba(128, 128, 128, 0.492)"

      document.getElementById("checkbox-1").classList.remove("active")
      addOn1 = false
      }
    }

    function addOnChosen2(){
      if(addOn2 == false){
      document.getElementById("add-on-2").style.backgroundColor = "hsl(217, 100%, 97%)"
      document.getElementById("add-on-2").style.border = "2px solid hsl(213, 96%, 18%)"

      document.getElementById("checkbox-2").classList.add("active")
      addOn2 = true
    }else{
      document.getElementById("add-on-2").style.backgroundColor = "transparent"
      document.getElementById("add-on-2").style.border = "2px solid  rgba(128, 128, 128, 0.492)"

      document.getElementById("checkbox-2").classList.remove("active")
      addOn2 = false
      }
    }

    function addOnChosen3(){
      if(addOn3 == false){
      document.getElementById("add-on-3").style.backgroundColor = "hsl(217, 100%, 97%)"
      document.getElementById("add-on-3").style.border = "2px solid hsl(213, 96%, 18%)"

      document.getElementById("checkbox-3").classList.add("active")
      addOn3 = true
    }else{
      document.getElementById("add-on-3").style.backgroundColor = "transparent  "
      document.getElementById("add-on-3").style.border = "2px solid  rgba(128, 128, 128, 0.492)"

      document.getElementById("checkbox-3").classList.remove("active")
      addOn3 = false
      }
    }

    function goBackStep2(){
     active_step2()
      }

      // STEP 4

      function check_step3(){
        let total_price = 0;
       if(monthly == true){
        if(arcade_chosen == true){
          document.getElementById("arcade_title").innerText ="Arcade (Monthly)"
          document.getElementById("arcade-chosen").classList.add("active")
          document.getElementById("pro-chosen").classList.remove("active")
          document.getElementById("advanced-chosen").classList.remove("active")
         document.getElementById("price-planArcade").innerText = "$9/mo"
          total_price += 9
        }

        if(pro_chosen == true){
          document.getElementById("pro_title").innerText ="Pro (Monthly)"
          document.getElementById("arcade-chosen").classList.remove("active")
          document.getElementById("pro-chosen").classList.add("active")
          document.getElementById("advanced-chosen").classList.remove("active")
         document.getElementById("price-planPro").innerText = "$12/mo"

          total_price += 12
        }

        if(advanced_chosen == true){
          document.getElementById("advanced_title").innerText ="Advanced (Monthly)"
          document.getElementById("arcade-chosen").classList.remove("active")
          document.getElementById("pro-chosen").classList.remove("active")
          document.getElementById("advanced-chosen").classList.add("active")
         document.getElementById("price-planAdvanced").innerText = "$15/mo"
          
          total_price += 15
        }

      if(addOn1 == true){
        document.getElementById("price-addOn1").innerText = "+1$/mo"
        document.getElementById("online-service").classList.add("active")
      total_price += 1
      }else{
        document.getElementById("online-service").classList.remove("active")
      }

      if(addOn2 == true){
        document.getElementById("price-addOn2").innerText = "+2$/mo"
        document.getElementById("larger-storage").classList.add("active")
      total_price += 2
      }else{
        document.getElementById("larger-storage").classList.remove("active")
      }

      if(addOn3 == true){
        document.getElementById("price-addOn3").innerText = "+2$/mo"
        document.getElementById("customizable-profile").classList.add("active")
        total_price += 2
      }else{
        document.getElementById("customizable-profile").classList.remove("active")
      }

      document.getElementById("total_price_final").innerText = "+" + total_price +"$/mo"
      }

      if(yearly == true){
        if(arcade_chosen == true){
          document.getElementById("arcade_title").innerText ="Arcade (Yearly)"
          document.getElementById("arcade-chosen").classList.add("active")
          document.getElementById("pro-chosen").classList.remove("active")
          document.getElementById("advanced-chosen").classList.remove("active")
         document.getElementById("price-planArcade").innerText = "$90/yr"
          total_price += 90
        }

        if(pro_chosen == true){
          document.getElementById("pro_title").innerText ="Pro (Yearly)"
          document.getElementById("arcade-chosen").classList.remove("active")
          document.getElementById("pro-chosen").classList.add("active")
          document.getElementById("advanced-chosen").classList.remove("active")
         document.getElementById("price-planPro").innerText = "$120/yr"

          total_price += 120
        }

        if(advanced_chosen == true){
          document.getElementById("advanced_title").innerText ="Advanced (Yearly)"
          document.getElementById("arcade-chosen").classList.remove("active")
          document.getElementById("pro-chosen").classList.remove("active")
          document.getElementById("advanced-chosen").classList.add("active")
         document.getElementById("price-planAdvanced").innerText = "$150/yr"
          
          total_price += 150
        }

      if(addOn1 == true){
        document.getElementById("price-addOn1").innerText = "+10$/yr"
        document.getElementById("online-service").classList.add("active")
      total_price += 10
      }else{
        document.getElementById("online-service").classList.remove("active")
      }

      if(addOn2 == true){
        document.getElementById("price-addOn2").innerText = "+20$/yr"
        document.getElementById("larger-storage").classList.add("active")
      total_price += 20
      }else{
        document.getElementById("larger-storage").classList.remove("active")
      }

      if(addOn3 == true){
        document.getElementById("price-addOn3").innerText = "+20$/yr"
        document.getElementById("customizable-profile").classList.add("active")
        total_price += 20
      }else{
        document.getElementById("customizable-profile").classList.remove("active")
      }

      document.getElementById("total_price_final").innerText = "+" + total_price +"$/yr"
      }

      document.getElementById("content_step_2").classList.remove("active")
      document.getElementById("content_step_1").classList.remove("active")
      document.getElementById("content_step_3").classList.remove("active")
      document.getElementById("content_step_4").classList.add("active")
    
      document.getElementById("title_step_2").classList.remove("active")
      document.getElementById("title_step_1").classList.remove("active")
      document.getElementById("title_step_3").classList.remove("active")
      document.getElementById("title_step_4").classList.add("active")
    
      document.getElementById("goback-step-2").style.display = "none"
      document.getElementById("goback-step-3").style.display = "none"
      document.getElementById("goback-step-4").style.display = "inline-block"
   
      document.getElementById("step_number_2").classList.remove("active")
      document.getElementById("step_number_1").classList.remove("active")
      document.getElementById("step_number_3").classList.remove("active")
      document.getElementById("step_number_4").classList.add("active")
    
      document.getElementById("button-step-3").style.display = "none"
      document.getElementById("button-step-1").style.display = "none"
      document.getElementById("button-step-2").style.display = "none"
      document.getElementById("button-step-4").style.display = "inline-block"
    
    
    }


    function goBackStep3(){
      active_step3()
      }






