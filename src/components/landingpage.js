import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landingpage extends Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className='avater-img' src='https://cdn1.iconfinder.com/data/icons/professions-and-jobs/842/avatar_user_jobs_profession_programmer_professions_and_jobs-512.png' alt='This is me'/>
                        <div className='banner-text'>
                            <h1>Front-End-Developer</h1>
                        </div>
                        <hr/>
                        <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
                        <div className="social-links">


                            <a href="https://www.linkedin.com/in/he-xianze-9a658996/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>


                            <a href="https://github.com/hexianze" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>


                            <a href="https://stackoverflow.com/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-stack-overflow" aria-hidden="true" />
                            </a>


                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-google" aria-hidden="true" />
                            </a>

                        </div>

                    </Cell>

                </Grid>
            </div>
        )
    }
}

export  default Landingpage;
