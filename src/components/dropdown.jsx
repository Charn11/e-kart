import { Select } from '@radix-ui/themes';
import '/src/styles/dropdown.css'
import { useContext } from 'react'
import { CategoryContext } from '../App'

const Dropdown = () => {

    const categoryValue = useContext(CategoryContext);
    const value = categoryValue.value;
    const setValue = categoryValue.setValue;

    return(
        <div className='dropdown'>
            <div className='drop-heading'><p>Choose Category:</p></div>
            <div className='dropmenu'>
                <Select.Root size="3" value={value} onValueChange={setValue}>
                    <Select.Trigger variant="surface" color="cyan" radius="large" className='dropbutton'/>
                    <Select.Content position="popper" color="cyan" >
                        <Select.Item value="All">All</Select.Item>
                        <Select.Item value="men's clothing" >Men's Clothing</Select.Item>
                        <Select.Item value="jewelery">Jwellery</Select.Item>
                        <Select.Item value="electronics">Electronics</Select.Item>
                        <Select.Item value="women's clothing">Women's Clothing</Select.Item>
                    </Select.Content>
                </Select.Root>
            </div>
        </div>
      
    )
}

export default Dropdown;