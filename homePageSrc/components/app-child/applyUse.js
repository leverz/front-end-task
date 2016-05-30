/**
 * Created by Lever on 16/5/12.
 */

// import React, { Component } from 'react';
const React = require('react');
const Component = React.Component;
import { render } from 'react-dom';
require("./../apply-use/tryusebackground.css");
var TryuseComponent=require("./../apply-use/usebackground.js");
export class ApplyUse extends Component{
    render(){
        return (
            <div>
                <TryuseComponent></TryuseComponent>   
            </div>
        ) 
    }
}