import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGif } from "../../src/hooks/useFetchGif"

jest.mock('../../src/hooks/useFetchGif')

describe('GifGrid component test', () => {

    const category = 'Testing'
    
    test('debe mostrar el loading', () => {

        useFetchGif.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={ category } />)

        expect(screen.getByText('Loading...')).toBeTruthy()
        expect(screen.getByText(category)).toBeTruthy()

    })

    test('deben mostrarse items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 123,
                url: "https://giphy.com/gifs/thegoodfilms-art-black-and-white-FmTBAySyc7HHy",
                title: "black and white art GIF by The Good Films"
            },
            {
                id: 124,
                url: "https://giphy.com/gifs/pepsi-love-romance-cola-occasions-jpQkuoHi7JZY14yIZf",
                title:  "Date Night Love GIF by Pepsi"
            }
        ]

        useFetchGif.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={ category } />)
        
        expect(screen.getAllByRole('img').length).toBe(2)
    })
})