import FilterCard from "../filtercard/filtercard";

const Sidebar = ({ onCategorySelect }) => {

    return (
        <>
            <div className="w-40 h-full flex flex-col border-r-8 p-1 ">
                <div className="bg-amber-400 rounded-lg b-4 p-1 text-xl font-medium">
                    <h1 className="">Filters</h1>
                </div>
                <FilterCard onCategorySelect={onCategorySelect} />
            </div>
        </>
    )
}


export default Sidebar;