import { useForm } from "react-hook-form";
const AddProfile = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        // alert(JSON.stringify(data));
        console.log(data);
    };
    return (
        <div className="p-5 ">
            <h1 className="text-[36px] text-white">Items <span className=" text-[16px]">Add/Update Profile</span></h1>

            <div className="bg-[#FFFFFF] rounded-lg p-8  mt-2 text-xl">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="grid grid-cols-3 gap-x-10 ">

                        {/* first col section  */}
                        <div className="space-y-2">
                            <div>
                                <label className='text-xs font-bold'>Name<span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("name", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'>Place of Birth<span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("place_of_birth", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'>Date of Birth<span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("birth_of_date", { required: true, })} type="date" />
                            </div>

                            <div>
                                <label className='text-xs font-bold'>Father Name<span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("father_name", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Nationality <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("nationality", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'>Gender<span className='text-red-500'>*</span></label>
                                <select {...register("gender")} className="border w-full rounded">
                                    <option value="female" className="capitalize">female</option>
                                    <option value="male" className="capitalize">male</option>
                                    <option value="other" className="capitalize">other</option>
                                </select>
                            </div>


                            <div>
                                <label className='text-xs font-bold'>Basic Profession<span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("basic_profession", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'>Agent<span className='text-red-500'>*</span></label>
                                <select {...register("agent")} className="border w-full rounded">
                                    <option value="">-Select-</option>
                                    <option value="" className="capitalize">md zahid </option>
                                    <option value="" className="capitalize">union</option>
                                    <option value="" className="capitalize">akash bormon</option>
                                    <option value="" className="capitalize">prince sir</option>
                                </select>
                            </div>



                            <div>
                                <label className='text-xs font-bold'> profile <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("profile", { required: true, })} type="file" />
                            </div>

                        </div>
                        {/* second col section  */}
                        <div className="space-y-2">
                            <div>
                                <label className='text-xs font-bold'> Surname <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("surname", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Locality <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("locality", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Passport Expire Date <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("passport_expire_date", { required: true, })} type="date" />
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Mother Name <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("mother_name", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Home Address <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("home_address", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'> professional Qualifications <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("professional_qualifications", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Foreign Languages <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("foreign_languages", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Country <span className='text-red-500'>*</span></label>
                                <select {...register("country")} className="border w-full rounded">
                                    <option value="">-Select-</option>
                                    <option value="" className="capitalize">romania </option>

                                </select>
                            </div>


                            <div>
                                <label className='text-xs font-bold'> Document <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("document", { required: true, })} type="file" />
                            </div>

                        </div>

                        {/* third col section */}

                        <div className="space-y-2">
                            <div>
                                <label className='text-xs font-bold'>Previous Surname <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("previous_surname", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Passport Number <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("surname", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Police Clearance Date <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("surname", { required: true, })} type="date" />
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Citizenship <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("citizenship", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Martial Status <span className='text-red-500'>*</span></label>
                                <select {...register("martial_status")} className="border w-full rounded">
                                    <option value="">-Select-</option>
                                    <option value="" className="capitalize">Unmarried </option>
                                    <option value="" className="capitalize">Married</option>
                                    <option value="" className="capitalize">work permit</option>

                                </select>
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Professional Route <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("professional_route", { required: true, })} />
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Status <span className='text-red-500'>*</span></label>
                                <select {...register("status")} className="border w-full rounded">
                                    <option value="">-Select-</option>
                                    <option value="" className="capitalize">submission </option>
                                    <option value="" className="capitalize">not working</option>
                                    <option value="" className="capitalize">work permit</option>
                                    <option value="" className="capitalize">visa</option>
                                    <option value="" className="capitalize">flight</option>
                                </select>
                            </div>

                            <div>
                                <label className='text-xs font-bold'> Company Name <span className='text-red-500'>*</span></label>
                                <input className="border w-full rounded"{...register("company_name", { required: true, })} />
                            </div>
                        </div>

                    </div>
                    <div className="mt-5">
                        <hr className="mb-5" />
                        <hr />
                    </div>
                    <div className="mt-5">
                        <hr className="mb-5" />
                        <hr />
                    </div>
                    <div className="flex items-center justify-center gap-20 mt-16 mb-5">
                        <input type="submit" className="bg-green-500 text-white rounded py-1 px-10" />
                        <button className="bg-yellow-500 text-white rounded py-1 px-10">Close </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProfile;
