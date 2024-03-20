import { Select } from '@radix-ui/themes';
import '/src/styles/dropdown.css'

const Dropdown = () => {

    return(
        <div className='dropdown'>
            <div className='drop-heading'><p>Choose Category:</p></div>
            <div className='dropmenu'>
            <Select.Root size="3" defaultValue="All" >
                <Select.Trigger variant="surface" color="cyan" radius="large" className='dropbutton'/>
                <Select.Content position="popper" color="cyan">
                    <Select.Item value="All">All</Select.Item>
                    <Select.Item value="Men's Clothing">Men's Clothing</Select.Item>
                    <Select.Item value="Jwellery">Jwellery</Select.Item>
                    <Select.Item value="Electronics">Electronics</Select.Item>
                    <Select.Item value="Women's Clothing">Women's Clothing</Select.Item>
                </Select.Content>
            </Select.Root>
            </div>
        </div>
      
    )
}

export default Dropdown;