import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmpassword: string;
}

const Registration: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validate = (): boolean => {
        const newErrors: Partial<FormData> = {};

        // First Name Validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First Name Required";
        }

        // Last Name Validation
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last Name Required";
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
        if (!formData.confirmpassword.trim()) {
            newErrors.confirmpassword = "Confirm Password is Required";
        } else if (formData.confirmpassword !== formData.password) {
            newErrors.confirmpassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
           try {
            const response = await axios.post("http://localhost:8000/users",formData)
            console.log(response);
            toast.success('Register Successfully');
            navigate('/login', )
            
           } catch (error) {
            console.error("Error submitting form:", error);
            toast.error('Failed to register. Please try again.');
            
           }
            

            // Optionally reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmpassword: ''
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
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                        {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
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
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                        {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
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
                        value={formData.confirmpassword}
                        onChange={(e) => setFormData({ ...formData, confirmpassword: e.target.value })}
                    />
                    {errors.confirmpassword && <p className="text-red-600 text-sm">{errors.confirmpassword}</p>}
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
