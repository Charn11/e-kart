import { Select } from '@radix-ui/themes';
import '/src/styles/dropdown.css'
import { useContext, useEffect } from 'react'
import { CategoryContext, ThemeContext } from '../App'
import { Theme } from '@radix-ui/themes';

const Dropdown = () => {

    const categoryValue = useContext(CategoryContext);
    const value = categoryValue.value;
    const setValue = categoryValue.setValue;

    const { theme } = useContext(ThemeContext);
    const [mode, setMode] = theme;

    //change theme
    useEffect(() => {
        if(mode==='dark'){
            document.getElementById("dropdown").style.backgroundColor = "black"
            document.getElementById("dropdown").style.color = "white"
        }
        if(mode==='light'){
            document.getElementById("dropdown").style.backgroundColor = "white"
            document.getElementById("dropdown").style.color = "black"
        }
    },[mode])

    return(
        <Theme>
        <div className='dropdown' id='dropdown'>
            <div className='drop-heading'><p>Choose Category:</p></div>
            <div className='dropmenu'>
                <Select.Root size="2" value={value} onValueChange={setValue}>
                    <Select.Trigger variant="surface" color="cyan" radius="large" className='dropbutton'/>
                    <Select.Content position="popper" color="cyan">
                        <Select.Item value="All">All</Select.Item>
                        <Select.Item value="men's clothing" >Men's Clothing</Select.Item>
                        <Select.Item value="jewelery">Jwellery</Select.Item>
                        <Select.Item value="electronics">Electronics</Select.Item>
                        <Select.Item value="women's clothing">Women's Clothing</Select.Item>
                    </Select.Content>
                </Select.Root>
            </div>
        </div>
        </Theme>
      
    )
}

export default Dropdown;