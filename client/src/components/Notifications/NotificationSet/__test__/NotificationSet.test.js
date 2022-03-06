import React from "react";
import { ReactDOM } from "react";
import NotificationSet from "../NotificationSet";
import { ListGroup } from "react-bootstrap";
import { render, cleanup } from '@testing-library/react'
import { getByDisplayValue, getByText, waitFor } from "@testing-library/dom";
import renderer from 'react-test-renderer'
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// Reset DOM after each test.

it("Render Notification Sets",()=>{
    const {getByTestId} = render(
    <MemoryRouter>
        <NotificationSet/> 
    </MemoryRouter>
)
    expect(getByTestId('NotificationSet'))
})

it("Count each Notification Card",()=>{
    const {getByTestId} = render(
    <MemoryRouter>
        <NotificationSet/> 
    </MemoryRouter>
)
    expect(getByTestId('NotificationSet').childElementCount === 6)
})
