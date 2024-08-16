import { Input } from "../input";

type CustomInputProps = {
    label: string;
    value?: string;
    id: string;
    name: string;
    type: string;
    placeholder: string;
}
export default function CustomInput({label, value, id, name, type, placeholder}: CustomInputProps) {
    return(
        <div >
            <label htmlFor="username" className="text-md block font-medium leading-6 text-white">
                {label}
            </label>
            <div className="mt-2">
                <Input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    className="block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}