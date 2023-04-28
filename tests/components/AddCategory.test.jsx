import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('AddCategory component test', () => {
    
    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => {}} />)
        const input = screen.getByRole('searchbox')
        fireEvent.input(input, { target: { value: 'tests' }})
        expect(input.value).toBe('tests')
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Tests'
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={ onNewCategory } />)

        const input = screen.getByRole('searchbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue }})
        fireEvent.submit(form)
        
        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('no debe llamar a onNewCategory si el input está vació', () => {
        const inputValue = ''
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={ onNewCategory } />)

        const input = screen.getByRole('searchbox')
        const form = screen.getByRole('form')
        
        fireEvent.input(input, {target :{ value: inputValue }})
        fireEvent.submit(form)
        
        expect(onNewCategory).toHaveBeenCalledTimes(0)

    })
})