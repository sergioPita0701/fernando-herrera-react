import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
        //setCategories([categories => [...categories,'Valoran']);
    }

    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                )
                )
            }
        </>
    )
}
