import React, { useState } from 'react';

import { BsCheck } from 'react-icons/bs';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown 
} from 'react-icons/md';


import styles from '../../../../styles/parentdashboard.module.css';


const Classcontentcard = ({contentId, course_sorted}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [firstTermId, setFirstTermId] = useState('5fc8d1b20fae0a06bc22db5c')
  const [secondTermId, setSecondTermId] = useState('600047f67cabf80f88f61735')
  const [thirdTermId, setThirdTermId] = useState('600048197cabf80f88f61736')

  console.log("contentId***** from Card", course_sorted)


  //function to extract Courses based on click:
  let show_course_sorted = course_sorted?.filter((course_sorted_child) => course_sorted_child.mainSubjectId.id === contentId)

  //function to filter courses based on subject

  const show_term_courses = (messages) => {
    return messages?.filter((obj) => {
      return obj.relatedLessons[0];
     })
  }


  //function to sort base on terms:
  let first_term = [];
  let second_term = [];
  let third_term = [];
  const all_courses_in_term = [];

  const filtered_course_term = () => {
  let sorted_courses_term = show_term_courses(show_course_sorted)
  for(let i = 0; i < sorted_courses_term?.length; i++){
    all_courses_in_term.push(sorted_courses_term[i].relatedLessons)
  }
  return all_courses_in_term;
}

const share_course_to_term = () => {
  let sorting_courses = filtered_course_term()
  for(let i = 0; i < sorting_courses.length; i++){
      for(let j = 0; j < sorting_courses[i].length; j++){
        if(sorting_courses[i][j].termId === firstTermId){
            first_term.push(sorting_courses[i][j])
        }else if(sorting_courses[i][j].termId === secondTermId){
          second_term.push(sorting_courses[i][j])
        }else if(sorting_courses[i][j].termId === thirdTermId){
          third_term.push(sorting_courses[i][j])
        }
      }
  }
  // return first
}

// filtered_course_term();
share_course_to_term();
console.log("first_term", first_term)
console.log("second_term", second_term)
console.log("third_term", third_term)
  // show_term_courses(show_course_sorted)
      
  const toggleItem = (id) => {
    if(selectedItem === id){
      return setSelectedItem(null)
    }

    setSelectedItem(id)
  }

  return (
    <div className={styles.cardcontentwrapper}>
      <div className={styles.innercontentwrapper} onClick={() => toggleItem(1)}>
      <div className={styles.contentquestionwrapper}>
          <h4> First Term <span>{selectedItem === 1 ? <MdOutlineKeyboardArrowDown size={30} /> : <MdOutlineKeyboardArrowUp size={30}/>}</span>
          </h4>
        </div>

        <div className={ selectedItem === 1  ? styles.contentshow :  styles.contenthidewrapper}>
                { first_term && first_term.map((first_term_course) => 
               <div>
                  <h5><BsCheck className={styles.checkbg} color="white"/> {first_term_course.title}</h5>
                    <ul>
                          <li>Class note</li>
                          <li>Practice quiz</li>
                          <li>Video link</li>
                    </ul>
               </div> 
                )

                }
          </div>  
      </div>

      <div className={styles.innercontentwrapper} onClick={() => toggleItem(2)}>
      <div className={styles.contentquestionwrapper}>
        <h4> Second Term  <span>{selectedItem === 2 ? <MdOutlineKeyboardArrowDown size={30} /> : <MdOutlineKeyboardArrowUp size={30}/>}</span></h4>
        </div>
        <div className={ selectedItem === 2  ? styles.contentshow :  styles.contenthidewrapper}>
        { second_term && second_term.map((second_term_course) => 
               <div>
                  <h5><BsCheck className={styles.checkbg} color="white"/> {second_term_course.title}</h5>
                    <ul>
                          <li>Class note</li>
                          <li>Practice quiz</li>
                          <li>Video link</li>
                    </ul>
               </div> 
                )

                }
          </div>  
      </div>
      <div className={styles.innercontentwrapper} onClick={() => toggleItem(3)}>
      <div className={styles.contentquestionwrapper}>
        <h4> Third Term <span>{selectedItem === 3 ? <MdOutlineKeyboardArrowDown size={30} /> : <MdOutlineKeyboardArrowUp size={30}/>}</span></h4>
        </div>
        <div className={ selectedItem === 3  ? styles.contentshow :  styles.contenthidewrapper}>
        { third_term && third_term.map((third_term_course) => 
               <div>
                  <h5><BsCheck className={styles.checkbg} color="white"/> {third_term_course.title}</h5>
                    <ul>
                          <li>Class note</li>
                          <li>Practice quiz</li>
                          <li>Video link</li>
                    </ul>
               </div> 
                )

                }
          </div>  
      </div>
    </div>
  )
}

export default Classcontentcard