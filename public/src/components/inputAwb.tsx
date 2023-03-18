import { useForm } from 'react-hook-form';
import {trpc} from "../common/trpc"

export default function InputAwb() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const awbPattern: RegExp = /^[0-9]{10}$/;
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Input AWB</span>
        </label>
        <label className="input-group input-group-vertical">
          <span>AWB</span>
          <input
            type="text"
            className="input input-bordered"
            {...register('awb', {
              required: 'This field is required',
              pattern: {
                value: awbPattern,
                message: 'Please enter a valid 10-digit AWB number',
              },
            })}
          />
          {errors.awb && <span className="error-message">{errors.awb.message?.toString()}</span>}
          <button type="submit" onClick={handleSubmit(onSubmit)}>
            Submit
          </button>
        </label>
      </div>
    </section>
  );
}