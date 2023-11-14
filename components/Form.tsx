export default function Form() {
  return (
    <form action="">
        <div className="input-type">
            <input 
                type="text" 
                name="firname"
                className="border w-full focus:outline-none rounded-md"
                placeholder="firstname"
                />
        </div>
        <div className="input-type">
            <input 
                type="email" 
                name="email"
                className="border w-full focus:outline-none rounded-md"
                placeholder="name@gmail.com"
                />
        </div>
        <div className="input-type">
            <input 
                type="number"
                name="number"
                className="border w-full focus:outline-none rounded-md"
                placeholder="$234"
                />
        </div>
        <div className="form-check">
            <input 
                type="radio" 
                name="status"
                className="
                    border 
                    w-full 
                    focus:outline-none 
                    rounded-full 
                    h-4 
                    border-gray-500 
                    bg-slate-50 
                    checked:bg-green-600 
                    checked:border-gray-500 
                    transition duration-200 
                    mt-1 
                    align-top 
                    bg-no-repeat 
                    bg-container 
                    float-left 
                    cursor-pointer 
                    mr-2 "
                    placeholder="firstname"
                />
        </div>
        {/* <div className="input-type">
            <input 
                type="text" 
                name="firname"
                className="border w-full focus:outline-none rounded-md"
                placeholder="firstname"
                />
        </div>
        <div className="input-type">
            <input 
                type="text" 
                name="firname"
                className="border w-full focus:outline-none rounded-md"
                placeholder="firstname"
                />
        </div> */}
    </form>
  )
}
