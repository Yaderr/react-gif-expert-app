import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('GifItem component tests', () => {
    const testGif = {
        url: 'https://media1.giphy.com/media/Y82PJo20tfF1n48vPR/giphy.gif',
        title: 'My Test Gif'
    }

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem gif={testGif} />)
        expect(container).toMatchSnapshot()
    })

    test('debe tener un h6 con el titulo', () => {
        render(<GifItem gif={testGif} />)
        expect(screen.getByRole('heading', { level: 6 }).innerHTML).toBe(testGif.title)
    })

    test('debe tener una imagen con la url en el src', () => {
        render(<GifItem gif={testGif} />)
        expect(screen.getByRole('img').src).toBe(testGif.url)
    })
})