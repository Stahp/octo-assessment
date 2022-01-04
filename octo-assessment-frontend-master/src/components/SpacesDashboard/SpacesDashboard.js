import React, { useEffect } from 'react'
import './SpacesDashboard.css';
import TitleCard from './TitleCard/TitleCard';
import SpaceCard from '../Cards/SpaceCard/SpaceCard';
import PlusCard from '../Cards/PlusCard';
import UserDetails from './UserDetails/UserDetails';
import SideBar from '../SideBar/SideBar';
import SpacesCharts from './SpacesCharts/SpacesCharts';
import { connect } from 'react-redux';
import { keycloakAuth, fetchSpaces } from '../../redux';
import { Card } from 'react-bootstrap';

function SpacesDashboard({ spaceData, authData, fetchSpaces, keycloakAuth }) {
    useEffect(() => {
        fetchSpaces(authData.kc.token);
    }, [])
    console.log(authData.kc.token);
    return (
        <div className="h-container">
          {/*
            <div className="side-bar">
                <SideBar></SideBar>
            </div>
          */}
            <div className="dashboard-container">
                <div onClick={console.log(authData)} className="details-container">
                    <UserDetails name={authData.kc.idTokenParsed.name} email={authData.kc.idTokenParsed.email} resume={authData.kc.idTokenParsed.resume} creationDate="Coming"/>

                </div>
                <div className="spaces-list-container">
                    <div className="spaces-title">Spaces</div>

                    <div className="active-spaces-list-container h-container">
                        {/*
                          <TitleCard state={false} name="Closed" description={randomText}></TitleCard>
                          */}
                        {
                            spaceData.loading ?
                                spaceData.spaces.map(s => {
                                    if (!s.privacy)
                                        return (
                                            <SpaceCard key={s.id} id= {s.id} name={s.name} date={s.creationDate} subspaces={s.subspaces} state={s.privacy}/>
                                        )
                                })
                                :
                                console.log('Loading ...')
                        }
                        <PlusCard href= "/Add/Space"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        spaceData: state.space,
        authData: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSpaces: (token) => dispatch(fetchSpaces(token)),
        keycloakAuth: () => dispatch(keycloakAuth())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpacesDashboard)
