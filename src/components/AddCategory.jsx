import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSearch = (e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 1) return 
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <>
            <div className="addCategory-container">
                <form onSubmit={ onSearch }>
                    <input 
                        value={ inputValue }
                        onChange={ onInputChange }
                        type="search" 
                        name="" 
                        placeholder="Busca todos lo gif" 
                    />
                </form>
            </div>
        </>
    )
}