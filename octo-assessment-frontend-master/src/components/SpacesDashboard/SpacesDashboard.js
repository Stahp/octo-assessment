import React, { useEffect } from 'react'
import './SpacesDashboard.css';
import TitleCard from './TitleCard/TitleCard';
import SpaceCard from './SpaceCard/SpaceCard';
import PlusCard from './SpaceCard/PlusCard';
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
    const randomText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text."
    const randomDate = "Mar. 9, 2020"

    return (
        <div className="h-container">
            <div className="side-bar">
                <SideBar></SideBar>
            </div>
            <div className="dashboard-container">
                <div onClick={console.log(authData)} className="details-container">
                    <UserDetails name={authData.kc.idTokenParsed.name} email={authData.kc.idTokenParsed.email} resume={authData.kc.idTokenParsed.resume} creationDate={randomDate}></UserDetails>
                </div>
                <div className="spaces-list-container">
                    <div className="spaces-title">Spaces</div>
                    <div className="active-spaces-list-container h-container">
                    {/*
                      <TitleCard state={true} name="Recently added" description={randomText}></TitleCard>
                      {
                          spaceData.loading ?
                              spaceData.spaces.map(s => {
                                  if (s.privacy)
                                      return (
                                          <SpaceCard key={s.id} name={s.name} date="5 minutes ago" subspaces="6" state={s.privacy}></SpaceCard>
                                      )
                              })
                              :
                              console.log('Loading ...')
                      }
                      */}

                    </div>
                    <br />
                    <div className="active-spaces-list-container h-container">
                        {/*
                          <TitleCard state={false} name="Closed" description={randomText}></TitleCard>
                          */}
                        {
                            spaceData.loading ?
                                spaceData.spaces.map(s => {
                                    if (!s.privacy)
                                        return (
                                            <SpaceCard key={s.id} id= {s.id} name={s.name} date={s.creationDate} subspaces={s.subspaces} state={s.privacy}></SpaceCard>
                                        )
                                })
                                :
                                console.log('Loading ...')
                        }
                        <PlusCard> </PlusCard>
                    </div>
                    <br />
                    <div className="spaces-title">Reviews</div>
                    <div className="">
                        <SpacesCharts></SpacesCharts>
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
