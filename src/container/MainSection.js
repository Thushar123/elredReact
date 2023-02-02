import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Card, Button } from "react-bootstrap";
import { AppstoreOutlined, CodeSandboxOutlined,TeamOutlined, UserAddOutlined,ArrowLeftOutlined,PlusCircleOutlined, GoldOutlined,DeleteOutlined, IdcardOutlined,PhoneOutlined, TrophyOutlined,InstagramOutlined,MailOutlined,FacebookOutlined, TwitterOutlined,GlobalOutlined, LinkOutlined, VerticalAlignMiddleOutlined, MedicineBoxOutlined, TranslationOutlined,EnvironmentOutlined, PayCircleOutlined, IssuesCloseOutlined, EditOutlined } from '@ant-design/icons';
import { QuestionCircle } from 'react-bootstrap-icons';
import { Tabs, Modal, Form, Input } from 'antd';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const TabPane = Tabs.TabPane;

library.add(faUser);
const MainSection = () => {
    const [active, setActive] = useState(6);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contctCards, setContctCards] = useState([
        { id: 1, name: 'Sales Team',email: 'salesteam@br.in / salesteam2@br.in',contactNum:'+91 8599598547 / +91 8598898547' },
        { id: 2, name: 'Marketing Team',email: 'marketingteam@br.in / marketingteam2@br.in',contactNum:'+91 8599598547 / +91 8598898547' },
        { id: 3, name: 'Marketing Team',email: 'marketingteam@br.in / marketingteam2@br.in',contactNum:'+91 8599598547 / +91 8598898547' },
      ]);
    const [isContactEdit, setIsContactEdit] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const removeElement = (id) => {
        const newCards = contctCards.filter(
          (contctCard) => contctCard.id !== id
        );
        setContctCards(newCards);
    };
    return(
        <React.Fragment>
             <div className='container-fluid pl-0 pr-0'>
                <section className='main-section'>
                        <div className='row'>
                            <div className='col-lg-2 col-sm-12'>
                                <Navbar className="d-md-block sidebar" id="sidebar">
                                    <Nav className="flex-column">
                                        <Nav.Link href="#" style={{fontSize:'16px',color:'#252525',textAlign:'left'}}>
                                            <span><img src={require("../container/images/at-inks-logo.png")} alt="" title='' width="15%" /></span>&nbsp;&nbsp;<strong>A.T.Inks</strong></Nav.Link>
                                        <Nav.Link className={active == 0 ? 'activeLink':'sideNavLink'} href="#" onClick={()=>{setActive(0)}}><span><AppstoreOutlined /></span>&nbsp;&nbsp;Dashboard</Nav.Link>
                                        <Nav.Link className={active == 1 ? 'activeLink':'sideNavLink'} href="#" onClick={()=>{setActive(1)}}><span><CodeSandboxOutlined /></span>&nbsp;&nbsp;Orders</Nav.Link>
                                        <Nav.Link className={active == 2 ? 'activeLink':'sideNavLink'} href="#" onClick={()=>{setActive(2)}}><span><TeamOutlined /></span>&nbsp;&nbsp;Team Members</Nav.Link>
                                        <Nav.Link className={active == 3 ? 'activeLink':'sideNavLink'} href="#" onClick={()=>{setActive(3)}}><span><UserAddOutlined /></span>&nbsp;&nbsp;Partners</Nav.Link>
                                        <Nav.Link className={active == 4 ? 'activeLink':'sideNavLink'} href="#" onClick={()=>{setActive(4)}}><span><GoldOutlined /></span>&nbsp;&nbsp;Product Listings</Nav.Link>
                                        <Nav.Link className={active == 5 ? 'activeLink':'sideNavLink'} href="#" onClick={()=>{setActive(5)}}><span><TrophyOutlined /></span>&nbsp;&nbsp;Awards & Honours</Nav.Link>
                                        <Nav.Link className={active == 6 ? 'activeLink':'sideNavLink'} href="#" onClick={()=>{setActive(6)}}><span><TranslationOutlined /></span>&nbsp;&nbsp;About Us</Nav.Link>
                                        <Nav.Link className={active == 7 ? 'activeLink':'sideNavLink'} href="#" onClick={()=>{setActive(7)}}><span><PayCircleOutlined /></span>&nbsp;&nbsp;Payment info</Nav.Link>
                                        <Card style={{margin:'16px',padding: '0 10px 6px'}} className="feedback-card">
                                            <div><QuestionCircle /></div>
                                            <h3><strong>Need Help?</strong></h3>
                                            <p>Our support team is at your disposal</p>
                                            <Button className='btn-dark'>Get Help</Button>
                                        </Card>
                                    </Nav>
                                </Navbar>
                            </div>
                            <div className='col-lg-10 col-sm-12'>
                                <section id='main-view-section'>
                                     {active == 0 && 
                                     <div className='main-view-block'>
                                        <h2><strong>Dashboard</strong> </h2>
                                        <div className='info-block'>
                                            <img src={require("../container/images/at-inks-logo.png")} alt="" title='' width="55" />
                                            <span><h2><strong>A.T.Inks<br /><span style={{color:'#c3c3c3'}}>Digital Inks</span></strong></h2></span>
                                            <span style={{color: '#555', fontSize:'16px'}}><IssuesCloseOutlined />&nbsp;&nbsp;<span style={{color:'blue',fontSize:'11px',textDecoration:'underline'}}> Verify Company</span></span>
                                        </div>
                                        <div className='info-text'>
                                            <span className='info-pera'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                            <span style={{color:'red', fontSize: '18px',fontWeight: '600'}}><EditOutlined /></span>
                                        </div>
                                    </div>
                                     }
                                     {active == 1 && 
                                     <div className='main-view-block'>
                                        <h2><strong>Orders</strong> </h2>
                                        <div className='info-block'>
                                            <img src={require("../container/images/at-inks-logo.png")} alt="" title='' width="55" />
                                            <span><h2><strong>A.T.Inks<br /><span style={{color:'#c3c3c3'}}>Digital Inks</span></strong></h2></span>
                                            <span style={{color: '#555', fontSize:'16px'}}><IssuesCloseOutlined />&nbsp;&nbsp;<span style={{color:'blue',fontSize:'11px',textDecoration:'underline'}}> Verify Company</span></span>
                                        </div>
                                        <div className='info-text'>
                                            <span className='info-pera'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                            <span style={{color:'red', fontSize: '18px',fontWeight: '600'}}><EditOutlined /></span>
                                        </div>
                                    </div>
                                     }
                                     {active == 2 && 
                                        <div className='main-view-block'>
                                            <h2><strong>Team Members</strong> </h2>
                                            <div className='info-block'>
                                                <img src={require("../container/images/at-inks-logo.png")} alt="" title='' width="55" />
                                                <span><h2><strong>A.T.Inks<br /><span style={{color:'#c3c3c3'}}>Digital Inks</span></strong></h2></span>
                                                <span style={{color: '#555', fontSize:'16px'}}><IssuesCloseOutlined />&nbsp;&nbsp;<span style={{color:'blue',fontSize:'11px',textDecoration:'underline'}}> Verify Company</span></span>
                                            </div>
                                            <div className='info-text'>
                                                <span className='info-pera'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                                <span style={{color:'red', fontSize: '18px',fontWeight: '600'}}><EditOutlined /></span>
                                            </div>
                                        </div>
                                     }
                                     {active == 3 && 
                                     <div className='main-view-block'>
                                        <h2><strong>Partners</strong> </h2>
                                        <div className='info-block'>
                                            <img src={require("../container/images/at-inks-logo.png")} alt="" title='' width="55" />
                                            <span><h2><strong>A.T.Inks<br /><span style={{color:'#c3c3c3'}}>Digital Inks</span></strong></h2></span>
                                            <span style={{color: '#555', fontSize:'16px'}}><IssuesCloseOutlined />&nbsp;&nbsp;<span style={{color:'blue',fontSize:'11px',textDecoration:'underline'}}> Verify Company</span></span>
                                        </div>
                                        <div className='info-text'>
                                            <span className='info-pera'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                            <span style={{color:'red', fontSize: '18px',fontWeight: '600'}}><EditOutlined /></span>
                                        </div>
                                    </div>
                                     }
                                     {active == 4 && 
                                     <div className='main-view-block'>
                                        <h2><strong>Product Listings</strong> </h2>
                                        <div className='info-block'>
                                            <img src={require("../container/images/at-inks-logo.png")} alt="" title='' width="55" />
                                            <span><h2><strong>A.T.Inks<br /><span style={{color:'#c3c3c3'}}>Digital Inks</span></strong></h2></span>
                                            <span style={{color: '#555', fontSize:'16px'}}><IssuesCloseOutlined />&nbsp;&nbsp;<span style={{color:'blue',fontSize:'11px',textDecoration:'underline'}}> Verify Company</span></span>
                                        </div>
                                        <div className='info-text'>
                                            <span className='info-pera'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                            <span style={{color:'red', fontSize: '18px',fontWeight: '600'}}><EditOutlined /></span>
                                        </div>
                                     </div>
                                     }
                                     {active == 5 && 
                                     <div className='main-view-block'>
                                        <h2><strong>Awards & Honours </strong></h2>
                                        <div className='info-block'>
                                            <img src={require("../container/images/at-inks-logo.png")} alt="" title='' width="55" />
                                            <span><h2><strong>A.T.Inks<br /><span style={{color:'#c3c3c3'}}>Digital Inks</span></strong></h2></span>
                                            <span style={{color: '#555', fontSize:'16px'}}><IssuesCloseOutlined />&nbsp;&nbsp;<span style={{color:'blue',fontSize:'11px',textDecoration:'underline'}}> Verify Company</span></span>
                                        </div>
                                        <div className='info-text'>
                                            <span className='info-pera'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                            <span style={{color:'red', fontSize: '18px',fontWeight: '600'}}><EditOutlined /></span>
                                        </div>
                                     </div>
                                     }
                                     {active == 6 && 
                                     <div className='main-view-block'>
                                        <h2><strong>About Us</strong></h2>
                                        <div className='info-block'>
                                            <img src={require("../container/images/at-inks-logo.png")} alt="" title='' width="55" />
                                            <span><h2><strong>A.T.Inks<br /><span style={{color:'#c3c3c3'}}>Digital Inks</span></strong></h2></span>
                                            <span style={{color: '#555', fontSize:'16px'}}><IssuesCloseOutlined />&nbsp;&nbsp;<span style={{color:'blue',fontSize:'11px',textDecoration:'underline'}}> Verify Company</span></span>
                                        </div>
                                        <div className='info-text'>
                                            <span className='info-pera'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                            <span style={{color:'red', fontSize: '18px',fontWeight: '600'}}><EditOutlined /></span>
                                        </div>
                                        <Tabs defaultActiveKey="1" tabBarUnderlineStyle={{ backgroundColor: 'red'}}>
                                            <TabPane tab="Info" key="1">
                                                <div className='row mb-4'>
                                                    <div className='col-lg-4 col-sm-12'>
                                                        <Card className="text-center">
                                                            <Card.Header>
                                                                <div style={{fontSize:'16px',display:'flex',alignItems:'center'}}><IdcardOutlined />&nbsp;&nbsp; <strong>Contanct</strong></div>
                                                                <div style={{color:'red'}}><EditOutlined onClick={showModal} /></div></Card.Header>
                                                            <Card.Body>
                                                                <Card.Title>
                                                                    <div className='card-body-text'>
                                                                        <div><MailOutlined />&nbsp;&nbsp; salesteam@br.in/<br />salesteam2@br.in</div>
                                                                        <div><span className='count-circle'>+5</span></div>
                                                                    </div>
                                                                </Card.Title>
                                                                <Card.Text>
                                                                    <PhoneOutlined />&nbsp;&nbsp; +91 8599598547 / +91 8598898547
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                    <div className='col-lg-4 col-sm-12' style={{display: 'inline-flex'}}>
                                                        <Card className="text-center">
                                                            <Card.Header><div style={{fontSize:'16px',display:'flex',alignItems:'center'}}><EnvironmentOutlined />&nbsp;&nbsp; <strong>Address</strong></div><div style={{color:'red'}}><EditOutlined /></div></Card.Header>
                                                            <Card.Body>
                                                                <Card.Text>
                                                                C-1 / 351/ 4, GIDC Makarpura, Vadodara - 960010, Gujarat, India                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                    <div className='col-lg-4 col-sm-12' style={{display: 'inline-flex'}}>
                                                        <Card className="text-center">
                                                            <Card.Header><div style={{fontSize:'16px',display:'flex',alignItems:'center'}}><MedicineBoxOutlined />&nbsp;&nbsp; <strong>Hours of Operations</strong></div><div style={{color:'red'}}><EditOutlined /></div></Card.Header>
                                                            <Card.Body>
                                                                <Card.Text>Monday to Friday - 9:00 Am To 6:00 Pm</Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-sm-12'>
                                                        <Card className="text-center">
                                                            <Card.Header><div style={{fontSize:'16px',display:'flex',alignItems:'center'}}><LinkOutlined />&nbsp;&nbsp; <strong>Social Media & Links</strong></div><div style={{color:'red'}}><EditOutlined /></div></Card.Header>
                                                            <Card.Body>
                                                                <Card.Text>
                                                                    <ul className='social-list'>
                                                                        <li><div><GlobalOutlined /></div><div>Website</div></li>
                                                                        <li><div><InstagramOutlined /></div><div>Instagram</div></li>
                                                                        <li><div><FacebookOutlined /></div><div>Facebook</div></li>
                                                                        <li><div><TwitterOutlined /></div><div>Tweeter</div></li>
                                                                    </ul>
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                    <div className='col-lg-4 col-sm-12' style={{display: 'inline-flex'}}>
                                                        <Card className="text-center">
                                                            <Card.Header><div style={{fontSize:'16px',display:'flex',alignItems:'center'}}><VerticalAlignMiddleOutlined />&nbsp;&nbsp; <strong>Statement</strong></div><div style={{color:'red'}}><EditOutlined /></div></Card.Header>
                                                            <Card.Body>
                                                                <Card.Title>
                                                                    <div className='card-body-text'>
                                                                        <div>You think it we Ink it</div>
                                                                        <div><span className='count-circle'>+1</span></div>
                                                                    </div>
                                                                </Card.Title>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                </div>
                                            </TabPane>
                                            <TabPane tab="FAQ" key="2">FAQ Block </TabPane>
                                            <TabPane tab="Complaints and Feedback" key="3">Complaints and Feedback Block</TabPane>
                                            <TabPane tab="Privacy Policy" key="4">Privacy Policy Block</TabPane>
                                            <TabPane tab="Terms and Conditions" key="5">Terms and Conditions Block</TabPane>
                                        </Tabs>
                                     </div>
                                     }
                                     {active == 7 && 
                                     <div className='main-view-block'>
                                        <h2><strong>Payment info</strong></h2>
                                        <div className='info-block'>
                                            <img src={require("../container/images/at-inks-logo.png")} alt="" title='' width="55" />
                                            <span><h2><strong>A.T.Inks<br /><span style={{color:'#c3c3c3'}}>Digital Inks</span></strong></h2></span>
                                            <span style={{color: '#555', fontSize:'16px'}}><IssuesCloseOutlined />&nbsp;&nbsp;<span style={{color:'blue',fontSize:'11px',textDecoration:'underline'}}> Verify Company</span></span>
                                        </div>
                                        <div className='info-text'>
                                            <span className='info-pera'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                            <span style={{color:'red', fontSize: '18px',fontWeight: '600'}}><EditOutlined /></span>
                                        </div>
                                     </div>
                                     }
                                     <Modal 
                                       style={{ top: 0, bottom: 0 }}
                                       bodyStyle={{height: '100%',minHeight: '100vh', overflowY: 'auto' }}
                                       title={
                                        <>
                                          <div style={{display:'flex',alignItems: 'center'}}><ArrowLeftOutlined onClick={()=>{setIsContactEdit(false)}} />&nbsp;&nbsp;Contancts</div>
                                          <p style={{fontSize:'13px',color:'#a2a2a2'}}>Please provide the Company's Email & Contancts </p>
                                        </>
                                       } 
                                       open={isModalOpen} 
                                       onOk={handleOk} 
                                       onCancel={handleCancel} 
                                       footer={false}>
                                           {isContactEdit==false && <div className='contact-popup-default'>
                                                {contctCards.map((contctCard) =>(
                                                    <Card className="text-center mb-3" key={contctCard.id}>
                                                        <Card.Header>
                                                            <div style={{fontSize:'16px',display:'flex',alignItems:'center'}}><IdcardOutlined />&nbsp;&nbsp; <strong>{contctCard.name}</strong></div>
                                                            <div style={{color:'red'}}><DeleteOutlined onClick={() => removeElement(contctCard.id)} />&nbsp;&nbsp;<EditOutlined onClick={()=>{setIsContactEdit(true)}} /></div></Card.Header>
                                                        <Card.Body>
                                                            <Card.Title>
                                                                <div className='card-body-text'>
                                                                    <div><MailOutlined />&nbsp;&nbsp; {contctCard.email}</div>
                                                                </div>
                                                            </Card.Title>
                                                            <Card.Text>
                                                                <PhoneOutlined />&nbsp;&nbsp; {contctCard.contactNum}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                ))}
                                            </div>}
                                            {isContactEdit== true && <div className='contact-popup-Edit'>
                                                <Form
                                                    layout="vertical"
                                                    autoComplete="off"
                                                    >
                                                    <Form.Item
                                                        name="emailid"
                                                        label={<div style={{fontSize:'12px',fontWeight:'550'}}>Email ID</div>}
                                                        rules={[
                                                            {
                                                                required: true,
                                                            }
                                                        ]}
                                                    >
                                                        <Input placeholder="eg.salesteam@br.in" style={{backgroundColor:'#f8f9fa'}} />
                                                    </Form.Item>
                                                    <Form.Item>
                                                       <Button className='btn-danger btn-lg w-100 add-more-btn'><PlusCircleOutlined />&nbsp;Add More </Button>
                                                    </Form.Item>
                                                    <Form.Item
                                                        name="contactNumber"
                                                        label={<div style={{fontSize:'12px',fontWeight:'550'}}>Contact Number</div>}
                                                        rules={[
                                                            {
                                                                required: true,
                                                            }
                                                        ]}
                                                    >
                                                        <Input placeholder="eg.8511591740" style={{backgroundColor:'#f8f9fa'}} />
                                                    </Form.Item>
                                                    <Form.Item>
                                                       <Button className='btn-danger btn-lg w-100 add-more-btn'><PlusCircleOutlined />&nbsp;Add More </Button>
                                                    </Form.Item>
                                                </Form>
                                            </div>}
                                            <Button className='btn-danger btn-lg w-100 save-btn'>Save </Button>
                                    </Modal>
                                </section>
                            </div>
                        </div>
                </section>
            </div>
        </React.Fragment>
    );
}

export default MainSection;