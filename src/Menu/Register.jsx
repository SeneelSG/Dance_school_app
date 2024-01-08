import React from "react";
import RegisterForm from "../RegisterForm";
const Register=()=>{
    return(
            <div className="flex flex-col flex-auto w-full h-screen">
                <div className="h-full">
                    <div className="grid grid-cols-3 h-full">
                        <div className="bg-yellow-300"><h1 className="text-black-300 font-extrabold text-center text-8xl underline">DANCE MOVES</h1>
                        <br /><br /><br /><h4 className="text-black-300 font-medium text-center">"Dance is the joy of movement and the heart of life." </h4>
                        <br /><h4 className="text-black-300 font-medium text-center">"Dancing is the poetry of the foot."</h4>
                        <br /><h4 className="text-black-300 font-medium text-center">"Dancing is like taking a mini vacation from the stress of the every day." </h4>
                        <br /><h4 className="text-black-300 font-medium text-center">"To watch us dance is to hear our hearts speak." </h4></div>
                        <div className="col-span-2 flex justify-center items-center max-w-5xl">
                            <div className="min-w-[450] px-8">
                                <div className="mb-8">
                                    <h1 className="text-4xl text-center font-semibold font-medium text-black">Registation</h1>
                                    <p className="text-white" >Please enter your credentails to register!</p>
                                </div>
                                <RegisterForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
}
export default Register