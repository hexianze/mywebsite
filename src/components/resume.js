import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './eduaction';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render() {
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                       <div style={{textAlign: 'center'}}>
                           <img
                               src="https://www.shareicon.net/data/256x256/2016/01/24/708382_people_512x512.png"
                               alt="developer"
                               style={{height: '200px'}}
                           />

                       </div>
                       <h2 style={{paddingTop: '2em'}}>Xianze He</h2>
                       <h4 style={{color: 'grey'}}>Programmer</h4>
                       <hr style={{borderTop: '3px solid #42adf4', width: '80%'}}/>
                       <p>A recent computer science graduate with a bachelor degree from Unitec Institute of Technology.Currently looking for a front-end or full-stack developer's job.High enthusiasm for learning new technologies and apply them to build real application.</p>
                       <hr style={{borderTop: '3px solid #42adf4', width: '80%'}}/>
                       <h5>Address</h5>
                       <p>Mt Eden, Auckland,NewZealand</p>
                       <h5>Phone</h5>
                       <p>64+21867678</p>
                       <h5>Email</h5>
                       <p>1256jhz@gmail.com</p>
                   </Cell>
                   <Cell col={8} className='resume-right-col'>
                       <h2>Education</h2>

                       <Education
                           startYear={2016}
                           endYear={2018}
                           schoolName="Unitec Institute Technology"
                           schoolDescription="Unitec Institute of Technology is the largest institute of technology in Auckland, New Zealand. Over 15,000 students study programmes from certificate to postgraduate degree level across a range of subjects from architecture to zookeeping. Unitec is a member of the International Association of Universities."
                       />
                       <hr style={{borderTop: '3px solid #e22947'}} />
                       <h2>Experience</h2>

                       <Experience
                           startYear={"2018/07"}
                           endYear={"2018/11"}
                           jobName="Peermarking system team's developer"
                           jobDescription="Responsible for implementing both back-end and front-end function implementation. Mainly focused on the back-end part of function ,especially for database extraction and modify. Also responsible for writing test documents and part of project summary reports"
                       />
                       <hr style={{borderTop: '3px solid #e22947'}} />
                       <h2>Skills</h2>
                       <Skills
                           skill="javascript"
                           progress={75}
                       />
                       <Skills
                           skill="HTML/CSS"
                           progress={75}
                       />
                       <Skills
                           skill="PHP"
                           progress={60}
                       />
                       <Skills
                           skill="React"
                           progress={55}
                       />
                       <Skills
                           skill="MySql"
                           progress={65}
                       />
                       <Skills
                           skill="Laravel"
                           progress={67}
                       />
                   </Cell>
               </Grid>
            </div>
        )
    }
}

export  default Resume;
