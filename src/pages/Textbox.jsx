import { useForm } from 'react-hook-form';

function Textbox() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container">
        <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Radio boutons</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate="">
            <div className="row g-3">
                <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                    First name
                </label>
                <input
                    type="text"
                    className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                    id="firstName"
                    placeholder=""
                    {...register("firstName", { required: true })}
                />
                {errors.firstName && <div className="invalid-feedback">Valid first name is required.</div>}
                </div>
                <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                    Last name
                </label>
                <input
                    type="text"
                    className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                    id="lastName"
                    placeholder=""
                    {...register("lastName", { required: true })}
                />
                {errors.lastName && <div className="invalid-feedback">Valid last name is required.</div>}
                </div>
                <div className="col-12">
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                    type="text"
                    className={`form-control ${errors.username ? "is-invalid" : ""}`}
                    id="username"
                    placeholder="Username"
                    {...register("username", { required: true })}
                    />
                    {errors.username && <div className="invalid-feedback">Your username is required.</div>}
                </div>
                </div>
                <div className="col-12">
                <label htmlFor="email" className="form-label">
                    Email <span className="text-body-secondary">(Optional)</span>
                </label>
                <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="email"
                    placeholder="you@example.com"
                    {...register("email", { pattern: /^\S+@\S+$/i })}
                />
                {errors.email && <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>}
                </div>
                <div className="col-12">
                <label htmlFor="address" className="form-label">
                    Address
                </label>
                <input
                    type="text"
                    className={`form-control ${errors.address ? "is-invalid" : ""}`}
                    id="address"
                    placeholder="1234 Main St"
                    {...register("address", { required: true })}
                />
                {errors.address && <div className="invalid-feedback">Please enter your shipping address.</div>}
                </div>
                <button className="w-50 btn btn-primary btn-lg" type="submit">
                Continue
                </button>
            </div>
            </form>
        </div>
    </div>
  );
}
export default Textbox;