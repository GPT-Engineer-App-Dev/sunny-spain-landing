const Tourism = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl mb-4">Tourism in Spain</h2>
      <p className="mb-4">Spain offers a variety of tourist destinations...</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/placeholder.svg?w=400&h=300" alt="placeholder" className="mx-auto object-cover w-full h-[300px]" />
        <img src="/placeholder.svg?w=400&h=300" alt="placeholder" className="mx-auto object-cover w-full h-[300px]" />
        <img src="/placeholder.svg?w=400&h=300" alt="placeholder" className="mx-auto object-cover w-full h-[300px]" />
      </div>
    </div>
  );
};

export default Tourism;