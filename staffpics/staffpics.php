<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


<?php

  $xml = file_get_contents("https://spreadsheets.google.com/feeds/cells/1HyjghGLVBsSerlred60DwpXrH85wCBduFksLaQmm2jg/1/public/full?alt=json");

  $obj = json_decode($xml);

  $rows = $obj->feed->entry;

  $temp = "\$t";
  $temp2 = $rows[6]->content->$temp;




  $staffname = array();
  $designation = array();
  $rank = array();
  $emptype = array();
  $empstatus = array();
  $url = array();


  $temp = "\$t";

  for ($i=6; $i < count($rows) ; $i+=6) { 
    
    array_push($staffname, $rows[$i]->content->$temp);
    array_push($designation, $rows[$i+1]->content->$temp);
    array_push($rank, $rows[$i+2]->content->$temp);
    array_push($emptype, $rows[$i+3]->content->$temp);
    array_push($empstatus, $rows[$i+4]->content->$temp);
    array_push($url, $rows[$i+5]->content->$temp);
  }



?>


<script type="text/javascript">


// Send request
</script>



<div class="container inputcontainer">
  <div class="row">
    <div class="col-md-2">
    </div>

    <div class="col-md-8">
    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names..">
    </div>

    <div class="col-md-2">
    </div>

  </div>





</div>

<div class="cont d-flex flex-wrap">

  <div class="row" style="margin:auto">

    <div class="col">



          <select class="form-control" id="selectdesignation" onchange="filterStaff1(this.options[this.selectedIndex].value,'designation')">
            <option selected = "selected" value="Designation">Designation (All)</option>
            <option value="Faculty">Faculty</option>
            <option value="Admin Staff">Admin Staff</option>
            <option value="Project Staff">Project Staff</option>
          </select>
  </div>



    <div class="col">

          <select class="form-control" id="selecttype"   onchange="filterStaff1(this.options[this.selectedIndex].value,'type')">
            <option value="Type">Type (All)</option>
            <option value="Permanent">Permanent</option>
            <option value="Temporary">Temporary</option>
            <option value="Individual Contract of Services">Individual Contract of Services</option>
          </select>


  </div>



    <div  class="col">

          <select class="form-control" id="selectstatus"   onchange="filterStaff1(this.options[this.selectedIndex].value,'status')">
            <option value="Status">Status (All)</option>
            <option value="Active">Active</option>
            <option value="On-Study Leave">On-Study Leave</option>

          </select>
  </div>



  </div>


</div>

<div class="cont d-flex flex-wrap">



  <div class="row" id="parent">


      <?php

      for ($i=0; $i < count($staffname) ; $i++) { 


      ?>


      <div class="col profilecard" id="testcard">
                <a style='display:none;'><?php echo $staffname[$i]?></a>
                <a style='display:none;'><?php echo $designation[$i]?></a>
                <a style='display:none;'><?php echo $emptype[$i]?></a>
                <a style='display:none;'><?php echo $empstatus[$i]?></a>

        <div class="card" style="width: 10rem;">
        

          <img class="card-img-top" src=<?php echo $url[$i]?> >
          <div class="card-body">
          

          </div>
        </div>
      </div>


      <?php

        }
      ?>
    

   <!--  end of row -->
  </div>



</div>

<style>
#myInput {
  background-image: url('/css/searchicon.png');
  /* Add a search icon to input */
  background-position: 10px 12px;
  /* Position the search icon */
  background-repeat: no-repeat;
  /* Do not repeat the icon image */
  width: 100%;
  /* Full-width */
  font-size: 16px;
  /* Increase font-size */
  padding: 12px 20px 12px 40px;
  /* Add some padding */
  border: 1px solid #ddd;
  /* Add a grey border */
  margin-bottom: 12px;
  /* Add some space below the input */
}

.card{
  margin:20px auto;
  transition: visibility 0s, opacity 0.5s linear;
}

.cont{
  margin: 0 5%;
}

.inputcontainer{
  margin: 20px auto;
}


.hidebydesignation{
  display: none;
}

.hidebystatus{
  display: none;
}

.hidebytype{
  display: none;
}
</style>

<script>
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("parent");
  li = document.getElementsByClassName('profilecard');
  
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    console.log(li[i].getElementsByTagName("a")[1]);
     console.log(li[i].getElementsByTagName("a")[2]);
      console.log(li[i].getElementsByTagName("a")[3]);
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      console.log("showww");
      console.log(li[i]);
      li[i].style.display = ""
    } else {
      console.log("hidethis");
      console.log(li[i]);
      li[i].style.display = "none"

    }
  }
}


function filterStaff1(filter,category) {

  if (category=='designation'){
    filterby = 1;
    filterClass = "hidebydesignation";

  }else if (category=='type') {
    filterby = 2;
    filterClass = "hidebytype";
    
  }else if (category=='status') {
    filterby = 3;
    filterClass = "hidebystatus";
    
  }

  filter = filter.toUpperCase();


  ul = document.getElementById("parent");
  li = document.getElementsByClassName('profilecard');
  for (i = 0; i < li.length; i++) {


    a = li[i].getElementsByTagName("a")[filterby];
    txtValue = a.textContent || a.innerText;


    console.log(txtValue.toUpperCase()+" "+filter);

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].classList.remove(filterClass);
      
    } else {

      li[i].classList.add(filterClass);


    }

    if ((filter == 'DESIGNATION') || (filter == 'TYPE')|| (filter == 'STATUS')){
      console.log("removeCLass");
      li[i].classList.remove(filterClass);
    }



    
    }




}
</script>