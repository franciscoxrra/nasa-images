import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders NASA Images title", () => {
    render(<App />)
    const linkElement = screen.getByText(/NASA Images/i)
    expect(linkElement).toBeInTheDocument()
})
