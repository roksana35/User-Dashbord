import React, { useState } from 'react';

interface FormData {
    fname: string;
    lname: string;
    email: string;
    password: string;
    cpassword: string;
}

const Registration: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: ''
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validate = (): boolean => {
        const newErrors: Partial<FormData> = {};

        // First Name Validation
        if (!formData.fname.trim()) {
            newErrors.fname = "First Name Required";
        }

        // Last Name Validation
        if (!formData.lname.trim()) {
            newErrors.lname = "Last Name Required";
        }

        // Email Validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is Required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        // Password Validation
        if (!formData.password.trim()) {
            newErrors.password = "Password is Required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Must be at least 6 characters";
        }

        // Confirm Password Validation
        if (!formData.cpassword.trim()) {
            newErrors.cpassword = "Confirm Password is Required";
        } else if (formData.cpassword !== formData.password) {
            newErrors.cpassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            alert("Registered Successfully!");
            // Optionally reset form
            setFormData({
                fname: '',
                lname: '',
                email: '',
                password: '',
                cpassword: ''
            });
            setErrors({});
        }
    };

    return (
        <div className="w-[750px] bg-base-200 mx-auto p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Create Your Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            className="input input-bordered w-full"
                            value={formData.fname}
                            onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                        />
                        {errors.fname && <p className="text-red-600 text-sm">{errors.fname}</p>}
                    </div>

                    {/* Last Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            className="input input-bordered w-full"
                            value={formData.lname}
                            onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                        />
                        {errors.lname && <p className="text-red-600 text-sm">{errors.lname}</p>}
                    </div>
                </div>

                {/* Email */}
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="input input-bordered w-full"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>

                {/* Password */}
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="input input-bordered w-full"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="input input-bordered w-full"
                        value={formData.cpassword}
                        onChange={(e) => setFormData({ ...formData, cpassword: e.target.value })}
                    />
                    {errors.cpassword && <p className="text-red-600 text-sm">{errors.cpassword}</p>}
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                        Signup Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Registration;
