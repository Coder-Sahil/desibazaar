import { useEffect, useState } from "react";
import { getAllCategories } from "../../api/productsApi";

const FilterCard = ({ onCategorySelect }) => {

    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        const data = await getAllCategories();
        setCategories(data);
    }


    useEffect(() => {
        getCategories();
    }, [])

    return (
        <>
            {
                categories.length > 0 &&
                categories.map(category => (
                     <div key={category.id} className="flex gap-3 m-1 hover:bg-rose-600 p-2 hover:rounded-lg hover:text-slate-100 cursor-pointer" onClick={() => onCategorySelect(prev => prev?.id === category.id ? null : category)}>
                        {/* <span>
                            <img className="w-10 h-10" src={category.image} />
                        </span> */}
                        <p id={category.id}>{category.name}</p>
                    </div>
                ))
            }
        </>
    )

}

export default FilterCard;
