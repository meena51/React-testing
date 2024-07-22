const { default: Form } = require("./Form")
import { render, screen, fireEvent } from "@testing-library/react"
test("fireEvent test",()=>{
    const handleSubmit = jest.fn()
    render(<Form onSubmit={handleSubmit}/>)
    const inputElement = screen.getByRole('textbox')
    const submitButton = screen.getByRole('button',{name:/submit/i})
    fireEvent.change(inputElement,{target:{value : 'Meena'}})
    fireEvent.submit(submitButton)
    expect(handleSubmit).toHaveBeenCalledWith('Meena')
})