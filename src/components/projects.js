import React,{Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions,  CardMenu, IconButton } from 'react-mdl';


class Projects extends Component{
    state = { activeTab: 0 };
    toggleCategories = ()=>{
        if(this.state.activeTab ===0){
            return (<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{
                    color: '#000',
                    height: '176px',
                    background:'url(https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg) center/cover'
                }}/>
                <CardText>
                   React burger is a simple react application which is used for order specific ingredients burger. Redux is used for manage data and Firebase is used for backend API.
                </CardText>
                <CardActions border>

                    <a rel="noopener noreferrer" href="https://react-burger-2e1f8.firebaseapp.com/" target="_blank" style={{textDecoration: 'none',color:'#3399ff',fontSize:'15px'}}>URL Link</a>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>)
        }else if(this.state.activeTab ===1){
            return (<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{
                    color: '#000',
                    height: '176px',
                    background: "url('https://cdn.auth0.com/blog/laravel-auth/logo.png') center / cover"
                }}/>
                <CardText>
                   Peer-marking system is an online web system which is used for both lecturers and students to mark students' uploaded job.
                </CardText>
                <CardActions border>

                    <a rel="noopener noreferrer" href="http://dochyper.unitec.ac.nz/peermarking/public/" target="_blank" style={{textDecoration: 'none',color:'#3399ff',fontSize:'15px'}}>URL Link</a>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>)
        }else if (this.state.activeTab ===2){
            return (<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{
                    color: '#000',
                    height: '176px',
                    background:'url(http://assets.myntassets.com/assets/images/7277341/2018/12/6/85c38f32-55e7-4b3e-8ba7-249609f7c0ca1544088044580-Roadster-Unisex-Grey--Black-Embroidered-Baseball-Cap-5881544-1.jpg) center/cover'
                }}/>
                <CardText>
                    Quality caps is an online shopping website which allows registered customer to take their own cap order and admin to manage and control all the stuff.
                </CardText>
                <CardActions border>

                    <a rel="noopener noreferrer" href="http://dochyper.unitec.ac.nz/hex29/asp_application1" target="_blank" style={{textDecoration: 'none',color:'#3399ff',fontSize:'15px'}}>URL Link</a>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>)
        }
    }
    render() {
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Laravel</Tab>
                    <Tab>ASP.NET</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export  default Projects;
