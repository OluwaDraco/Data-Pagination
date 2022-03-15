/*
Treehouse Techdegree: Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab
   Reach out in your Slack community if you have questions
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const linkList = document.querySelector('.link-list');
const studentList = document.querySelector(".student-list");

function showPage(list,page){
   
   const startIndex =  page* 9 - 9;
   const endIndex = page * 9;
   
   studentList.innerHTML = '';
   for(let i = 0; i<list.length;i++){
      

      if(i>=startIndex && i< endIndex){
         let studentItem = list[i]
         
         const studentInfo = `
          <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${studentItem.picture.large}" alt="${studentItem.name.first} ${studentItem.name.last}">
            <h3>${studentItem.name.first} ${studentItem.name.last}</h3>
            <span class="email">${studentItem.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${studentItem.registered.date}</span>
          </div>
        </li>
         
          `;
           studentList.insertAdjacentHTML('beforeend',studentInfo)
      }
     

   }

}
showPage(data,1);



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons

*/
/**
 * 
 * @param {*} list takes a list as an parameter
 * finds the number of pages need by dividing the length of the {list} by the number of items displayed.
 * loops through and creates btns while adding the className 'active' to the first element. 
 */

function addPagination(list){
   const NumberOfPages = Math.ceil((list.length)/9);
   
   linkList.innerHTML ='';

   for(let i = 1; i<=NumberOfPages;i++){
      btn = 
      `
      <li>
         <button type="button">${i}</button>
      </li> 
      `
      linkList.insertAdjacentHTML('beforeend',btn)
      document.querySelector('button').className= 'active';
   }
  
  

}

// Call functions




linkList.addEventListener('click', (event)=>{
   const target = event.target;
   if(target.tagName === "BUTTON"){
      linkList.firstElementChild.firstElementChild.className= '';
      target.className = 'active';
      showPage(data, target.textContent)

   }
})

addPagination(data)

