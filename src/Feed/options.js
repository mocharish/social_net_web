import './options.css'
import hikes from '../images/hikes.jpg';
import friends from '../images/friends.jpg';
import tv from '../images/tv.jpg';
import calendar from '../images/calendar.jpg';
import glass from '../images/glass.jpg';
import beach from '../images/beach.jpg';
import hotel from '../images/hotel.jpg';
import rest from '../images/rest.jpg';
import UserInput from './userInput.js';


function Options({isDarkMode}){
    return(
    <div >
        <ul class="list-group1">

        <li class="list-group-item1 d-flex align-items-center">
  
    <UserInput/>
  </li>


  <li class={`list-group-item1 d-flex align-items-center ${isDarkMode ? 'night-mode-list2' : ''}`}>
  <i class="bi bi-tv"></i>
    <span class="w-10 m-4"> Watch</span>
    
  </li>
  <li class={`list-group-item1 d-flex align-items-center ${isDarkMode ? 'night-mode-list2' : ''}`}>
  <i class="bi bi-calendar2-date"></i>
<span class="w-10 m-4"> Events</span>
    
  </li>
  <li class={`list-group-item1 d-flex align-items-center ${isDarkMode ? 'night-mode-list2' : ''}`}>
 
  <i class="bi bi-people"></i>
<span class="w-10 m-4"> Friends</span>
    
  </li>
  <li class={`list-group-item1 d-flex align-items-center ${isDarkMode ? 'night-mode-list2' : ''}`}>
  <i class="bi bi-hourglass-split"></i>
  <span class="w-10 m-4"> Memories</span>
    
  </li>
</ul>


<hr className={`divider ${isDarkMode ? 'night-mode-list2' : ''}`}/>

<h2 class={`shortcuts-title ${isDarkMode ? 'night-mode-list2' : ''}`}>Shortcuts</h2> 

<ul class="list-group1 shortcuts">
  <li class={`list-group-item1 d-flex align-items-center ${isDarkMode ? 'night-mode-list2' : ''}`}>
  <img src={hikes} alt="Sample" width="35" height="35" />
    <span class="w-10 m-4"> Hikes</span>
    
  </li>
  <li class={`list-group-item1 d-flex align-items-center ${isDarkMode ? 'night-mode-list2' : ''}`}>
  <img src={beach} alt="Sample" width="35" height="35" />
<span class="w-10 m-4"> Vacations</span>
    
  </li>
  <li class={`list-group-item1 d-flex align-items-center ${isDarkMode ? 'night-mode-list2' : ''}`}>
 
  <img src={hotel} alt="Sample" width="38" height="38" />
<span class="w-10 m-4"> Hotels</span>
    
  </li>
  <li class={`list-group-item1 d-flex align-items-center ${isDarkMode ? 'night-mode-list2' : ''}`}>
  <img src={rest} alt="Sample" width="38" height="38" />
  <span class="w-10 m-4"> Restaurant</span>
    
  </li>
</ul>


</div>
    )
}

export default Options;