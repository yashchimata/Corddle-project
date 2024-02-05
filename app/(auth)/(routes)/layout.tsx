const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (
        
        <div className="text-emerald-500 text-4xl font-bold">
            Introducing Corddle
            <div className="h-full flex items-center justify-center">
                {children}
            </div>
        </div>
     );
}
 
export default AuthLayout