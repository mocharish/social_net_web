
import './people.css'
import erin from '../images/erin.jpg';
import nick from '../images/nick.jpg';
import gabi from '../images/gabi.jpg';
import tim from '../images/tim.jpg';
import matt from '../images/matt.jpg';


function People({isDarkMode}){
    return(
        <div class="list-container">
            <h2 class="shortcuts-title ">Contacts</h2> 
        <ul class="list-group">
  <li class="list-group-item00 d-flex align-items-center">
  <img src={erin} alt="Circular Image" class="circular-image"/>
    <span class="w-10 m-4"> Erin Moss</span>
    
  </li>
  <li class="list-group-item00 d-flex align-items-center">  <img src={nick} alt="Circular Image" class="circular-image"/>
<span class="w-10 m-4"> Nick Miller</span>
    
  </li>
  <li class="list-group-item00 d-flex align-items-center"> 
  <img src={gabi} alt="Circular Image" class="circular-image"/>
<span class="w-10 m-4"> Gabi Li</span>
    
  </li>
  <li class="list-group-item00 d-flex align-items-center">  <img src={tim} alt="Circular Image" class="circular-image"/>
  <span class="w-10 m-4"> Tim Brown</span>
    
  
  </li>
  <li class="list-group-item00 d-flex align-items-center">  <img src={matt} alt="Circular Image" class="circular-image"/>
  <span class="w-10 m-4"> Matt Clark </span>
    
  </li>
</ul>
</div>
    )
}

export default People;