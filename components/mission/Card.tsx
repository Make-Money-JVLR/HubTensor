function Card({
  title,
  description,
  footer,
  color
}: {
  title: string;
  description: string;
  footer: string;
  color: string;
}) {
  return (
    <>
    <style>
      {`
        .card-${footer}::before {
          background: linear-gradient(180deg, rgba(5, 5, 29, 0.00) 0%, ${color} 42.72%, ${color} 86.76%, ${color} 115.06%, ${color} 136.57%) border-box;
        }
      `}
    </style>
    <div style={{
      }} className={`card card-${footer}`}>
        <div className=" flex flex-col backdrop-filter-[20px] bg-[#010214] font-segoe bg-transparent" >
          <h2 className="text-2xl font-extrabold mb-4">{title}</h2>
          <p className="text-[var(--Subtext,_#918DA4)]">{description}</p>
          <div className="flex flex-row-reverse">
            <div className="size-fit bg-black font-jetbrains p-2 rounded-lg border-[#353539] border-[1px]" style={{
              color: color,
              background: "linear-gradient(182deg, #555 -59.29%, #010214 98.41%)"
            }}>{footer}</div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Card;