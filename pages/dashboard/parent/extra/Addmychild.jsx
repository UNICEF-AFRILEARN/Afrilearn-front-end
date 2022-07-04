import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import styles from '../../../../styles/parentdashboard.module.css';

const Addmychild = () => {
  return (
    <div className={styles.parentchildformwrapper}>
         <div className={styles.innerformwrapper}>
            <h3>Add My Child</h3>
         <Form>
            <Form.Label>Add your child to the league of world class learners on Afrilearn</Form.Label>
            <Form.Group>
                    <Form.Control type="text" placeholder="student" className="my-3" />
                    <Form.Control type="text" placeholder="Select class" className="my-3" />
                    <Form.Control type="text" placeholder="Full Name" className="my-3" />
                    <Form.Control type="email" placeholder="Email" className="my-3" />
                    <Form.Control type="password" placeholder="Password" className="my-3" />
                    <Form.Control type="password" placeholder="Confirm Password"  className="my-3" />
            </Form.Group>
            <Button variant="primary" type="submit">
                GENERATE PERFORMANCE
            </Button>
            </Form>
         </div>   
    </div>
  )
}

export default Addmychild