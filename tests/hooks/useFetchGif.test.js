import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGif } from "../../src/hooks/useFetchGif"

describe('useFetchGif hook test', () => {
    test('debe retornar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGif('Testign'))
        const { images, isLoading } = result.current 

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('debe retornar un arreglo de imagenes y isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGif('Testing'))
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 1000
            }
        )

        const { images, isLoading } = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).not.toBeTruthy()  

    })
})