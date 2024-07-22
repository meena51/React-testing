import {render,screen} from "@testing-library/react"
import Button from "./button"
test("button",()=>{
    render(<Button/>)
    const buttonElement = screen.getByText("ClickMe")
    expect(buttonElement).toBeInTheDocument();
})