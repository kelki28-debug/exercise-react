import React from 'react';
import './Form.css'


const form = (props =>{
    return( <div class="section-form">
<div class="form-text">
    <h2 class="h2">
        Log In
    </h2>
</div>
<form action="#" class="form">
    <div class="form-group">
        <input
            type="email"
            class="form-input"
            placeholder="Email"
            id="email"
            required
        />
        <label class="label" for="email">Email</label>
    </div>
    <div class="form-group">
        <input
            type="password"
            class="form-input"
            placeholder="Password"
            id="password"
            required
        />
        <label class="label" for="password">Passowrd</label>
    </div>
</form>
<div class="button-box">
    <a href="#" class="button">Sign In</a>
    </div>
    </div>
    )
})

export default form;
