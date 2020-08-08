export const YearCard = ({ year }) => {
  return (
	<div className="max-w-sm w-full lg:max-w-full lg:flex card">
		<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
			<div className="mb-8">
				<div className="text-gray-900 font-bold text-xl mb-2">{year}</div>
			</div>
		</div>
	</div>
  )
}

export default YearCard