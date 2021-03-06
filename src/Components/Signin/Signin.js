import React from 'react'
import './Signin.css';

function Signin({onRouteChange}) {
    return (
        <article class="shadow-5 w-25-l center">
        <main className="pa4 black-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                    </label>
                    <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                    </label>
                    <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    />
                </div>
                </fieldset>
                
                <input
                    onClick={() => onRouteChange('home')}
                    className="b ph3 pv2 input-reset ba bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Sign in"
                />
              
                <div className="lh-copy mt3">
                <p className="register-name" onClick={() => onRouteChange('register')} >
                    Don't have an account? Register now.
                </p>
                </div>
            </div>
        </main>
        </article>
    )
}

export default Signin
