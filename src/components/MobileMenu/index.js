import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';

const menus = [
    {
        id: 1,
        title: 'About Us',
        link: '/about',
    },
    {
        id: 2,
        title: 'Our Programs',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'Supporting Disability',
                link: '/disability'
            },
            {
                id: 32,
                title: 'Education',
                link: '/education'
            },
            {
                id: 33,
                title: 'Medical Support',
                link: '/medical'
            },
            {
                id: 34,
                title: 'Child trafficking',
                link: '/childtraffic'
            },
            {
                id: 35,
                title: 'Trip to India',
                link: '/tripofindia'
            },
            {
                id: 36,
                title: 'Before/ After school program',
                link: '/nurturingplaytime'
            },
            {
                id: 37,
                title: 'Disaster emergency relief',
                link: '/disasterrelief'
            }
        ]
    },
    {
        id: 3,
        title: 'Our Partners',
        link: '/',
        submenu: [
            {
                id: 41,
                title: 'Center GC',
                link: '/childcenter'
            },
            {
                id: 42,
                title: 'Pavani',
                link: '/pavani'
            },
            {
                id: 43,
                title: 'CARDS',
                link: '/cards'
            },
            {
                id: 44,
                title: 'Asha jyothi',
                link: '/asha'
            }
        ]
    },
    {
        id: 4,
        title: 'Our Impacts',
        link: '/',
    },

    {
        id: 5,
        title: 'Stay Informed',
        link: '/stayinformed',

    },
    // {
    //     id: 6,
    //     title: 'How to be involved?',
    //     link: '/contact',
    // },
    {
        id: 7,
        title: 'Resources',
        link: '/resources',

    },
    {
        id: 8,
        title: 'F.A.Q',
        link: '/faq',
    },
    // {
    //     id: 9,
    //     title: 'Subscribe',
    //     link: '/contact',
    // }


]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? (
                                        <p onClick={this.setIsOpen(item.id)}>
                                            {item.title}
                                            {item.submenu ? (
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            ) : ''}
                                        </p>
                                    ) : (
                                        <Link to={item.link} onClick={this.menuHandler}>
                                            {item.title}
                                        </Link>
                                    )}

                                    {item.submenu ? (
                                        <Collapse isOpen={item.id === isOpen}>
                                            <Card>
                                                <CardBody>
                                                    <ul>
                                                        {item.submenu.map(submenu => (
                                                            <li key={submenu.id}>
                                                                <Link
                                                                    className="active"
                                                                    to={submenu.link}
                                                                    onClick={this.menuHandler}
                                                                >
                                                                    {submenu.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    ) : ''}
                                </li>
                            )
                        })}
                    </ul>


                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}
