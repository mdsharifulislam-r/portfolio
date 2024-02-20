import React from 'react'
/**
 * 
 * @param {String} name 
 * @param {any} state 
 * @returns 
 */
export default function SetL(name, state) {
    localStorage.setItem(name, JSON.stringify(state))
}
