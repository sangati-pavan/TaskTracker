import Button from "./Button"


function NoForm(props) {
    return (
        <div className="flex  flex-col gap-1">
            <img
                src='https://cdn4.vectorstock.com/i/1000x1000/70/48/notebook-and-pen-vector-1557048.jpg'
                alt="An empty task list"
                className="w-16 h-16 object-contain mx-auto"
            />
            <h2 className="text-xl text-center font-bold text-stone-700 my-4">No Project Selected</h2>
            <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
            <Button onClick={() => props.onStartAddProject(null)} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Project</Button>
        </div>
    )
}

export default NoForm