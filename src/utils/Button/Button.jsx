

const Button = ({children, className = '', onClick}) => {
    return (
        <div>
            <button className={`bg-orange-100 rounded flex items-center py-2 px-4 text center font-semibold my-4 ${className}`}>
                {children}
            </button>
        </div>
    )
}

export default Button