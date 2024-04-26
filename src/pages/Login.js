import DropdownMenu from '../components/DropdownMenu';
import '../styles/Login.css'
import React, {useState} from 'react'


function Login() {
    document.body.style = 'background: #5271ff;';
    const [selectAccount, setAccount] = useState('Volunteer')

    const [volunteerFormData, setVolunteerFormData] = useState({
        volunteerName: "",
        volunteerEmail: "",
        volunteerPassword: ""
    })

    const [organizationFormData, setOrganizationFormData] = useState({
        orgName:"",
        orgLink:"",
        orgEmail:"",
        orgPassword:""
    })
    
    const accountChange = (account) => {
        setAccount(account)
    }

    const volunteerChange = e => {
        setVolunteerFormData((prev)=>{
            let helper = {...prev}

            helper[`${e.target.id}`] = e.target.value;
            return helper
        })
    }

    function HandleVolunteerData() {
        console.log(volunteerFormData.volunteerName)
        console.log(volunteerFormData.volunteerEmail)
        console.log(volunteerFormData.volunteerPassword)
    }

    const organizationChange = e => {
        setOrganizationFormData((prev)=>{
            let helper = {...prev}

            helper[`${e.target.id}`] = e.target.value;
            return helper
        })
    }

    function HandleOrganizationData(event) {
        console.log(organizationFormData.orgName)
        console.log(organizationFormData.orgLink)
        console.log(organizationFormData.orgEmail)
        console.log(organizationFormData.orgPassword)
        event.preventDefault()
    }

    return (
        <div className="main">
            <img className="logo-image" alt="logo" src="images/logoBig.png"></img>   
            <div className="loginText"><h2>Welcome to Volunteerise!</h2></div>
            <div className="account-buttons-container">
                <button className="account-buttons" onClick={() => accountChange('Volunteer')}> Volunteer </button>
                <button className="account-buttons" onClick={() => accountChange('Organization')}> Organization </button>
            </div>
            
            {selectAccount ==='Volunteer' && (
                <div className="rectangle">
                    <p className="loginText">Volunteer Account</p>


                    <div className="input">
                        <input value={volunteerFormData.volunteerName}  onChange={volunteerChange} name="name" id ="volunteerName" placeholder="Name"/>
                    </div>

                    <div className="input">
                        <input value={volunteerFormData.volunteerEmail} onChange={volunteerChange} name="e-mail" id="volunteerEmail" placeholder="E-mail"/>
                    </div>

                    <div className="input">
                        <input value={volunteerFormData.volunteerPassword} onChange={volunteerChange} name="password" id="volunteerPassword" placeholder="Password"/>
                    </div>

                    <div className="submit">
                        <button type="submit" onClick={HandleVolunteerData} onChange={volunteerChange} className="submit-button">Submit</button>
                    </div>
                    <span className = "submit">
                        <div className="accountLinks">
                            <a href="www.google.com">Create Account</a>
                        </div>
                        <div className = "accountLinks">
                            <a href="www.google.com">Forgot Password?</a>
                        </div>
                        
                    </span>

                </div>
            )}
            {selectAccount === 'Organization' &&(
                <div className="rectangle">
                    <p className="loginText">Organization Account</p>

                    <div className="input">
                        <input value={organizationFormData.orgName} id="orgName" onChange={organizationChange} name="orgName"  placeholder="Organization Name"/>
                    </div>

                    <div className="input">
                        <input value={organizationFormData.orgLink} id="orgLink" onChange={organizationChange} name="orgWebLink" placeholder="Organization Website"/>
                    </div>

                    <div className="input"> 
                        <input value={organizationFormData.orgEmail} id="orgEmail" onChange={organizationChange} name="e-mail" placeholder="E-mail"/>

                    </div>

                    <div className="input">
                        <input value={organizationFormData.orgPassword} id="orgPassword" onChange={organizationChange} name="password" placeholder="Password"/>
                    </div>

                    <div className="submit">
                        <button type="submit" onClick={HandleOrganizationData} className="submit-button">Submit</button>
                    </div>
                    <span className = "submit">
                        <div className="accountLinks">
                            <a href="www.google.com">Create Account</a>
                        </div>
                        <div className = "accountLinks">
                            <a href="www.google.com">Forgot Password?</a>
                        </div>
                    </span>                   
                </div>
            )}
        
        <DropdownMenu/>
    </div>
    )
}

export default Login;