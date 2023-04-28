import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('GifExpertApp component tests', () => {
    
    test('debe hacer math con el snapshot', () => {

        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot()
    })

    test('se deben mostrar las categorias iniciales', () => {
        const defaultCategories = [ 'Noticias', 'Tractor' ]
        
        render(<GifExpertApp />)
        
        expect(screen.getByText(defaultCategories[0]))
        expect(screen.getByText(defaultCategories[1]))
    })

    

    test('debe mostrar la categoria añadidad desde el form', () => {
        
        const category = 'NewCat'
        render(<GifExpertApp />)

        const input = screen.getByRole('searchbox')
        const form = screen.getByRole('form')
        
        fireEvent.input(input, {target: { value: category }})
        fireEvent.submit(form)

        expect(screen.getByText(category)).toBeTruthy()
    })
})