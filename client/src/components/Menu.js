import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <div>
        <ul class="nav bg-dark">
            <li class="nav-item">
                <Link class="nav-link" to="/">Ufaber Project</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/mentorCreate">Creater Mentor</Link>
            </li>
        </ul>
    </div>
);

export default Menu;