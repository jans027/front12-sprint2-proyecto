import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Div2, DivRutas, HomeStyled } from '../styles/HomePage'


import FanciNavBar from './FanciNavBar'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';



export default class Usuario extends Component {
    render() {
        return (
            <HomeStyled>
                <FanciNavBar />

                <Div2>
                    <DivRutas>
                        <PermIdentityOutlinedIcon />
                        <NavLink
                            to={"/Profile"}>
                            Personal information
                        </NavLink>
                    </DivRutas>

                    <DivRutas>
                        <ImportExportIcon />
                        <NavLink
                            to={""}>
                            Trasaction history
                        </NavLink>
                    </DivRutas>

                    <DivRutas>
                        <AccountBalanceWalletOutlinedIcon />
                        <NavLink
                            to={""}>
                            Payment
                        </NavLink>
                    </DivRutas>

                    <DivRutas>
                        <FeedOutlinedIcon />
                        <NavLink
                            to={""}>
                            Terms of use
                        </NavLink>
                    </DivRutas>

                    <DivRutas>
                        <ContactSupportOutlinedIcon />
                        <NavLink
                            to={""}>
                            Support
                        </NavLink>
                    </DivRutas>
                </Div2>

            </HomeStyled>
        )
    }
}
