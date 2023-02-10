import React from 'react'

const FormField = ({
	labelName,
	type,
	name,
	placeholder,
	value,
	handleChange,
	isSupriseMe,
	handleSurpriseMe,
}) => {
	return (
		<div>
			<div className='flex items-center gap-2 mb-2'>
				<label htmlFor={name} className='block font-medium text-gray-900'>
					{labelName}
				</label>
				{isSupriseMe && (
					<button
						className='font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black'
						type='button'
						onClick={handleSurpriseMe}>
						Surprise me
					</button>
				)}
			</div>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required
				className='block w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-2 focus:ring-[#6469ff] focus:border-[#6469ff]'
			/>
		</div>
	)
}

export default FormField
