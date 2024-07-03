const Culture = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl mb-4">Spanish Culture</h2>
      <p className="mb-4">Spain is known for its rich and diverse culture...</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/placeholder.svg?w=400&h=300" alt="placeholder" className="mx-auto object-cover w-full h-[300px]" />
        <img src="/placeholder.svg?w=400&h=300" alt="placeholder" className="mx-auto object-cover w-full h-[300px]" />
        <img src="/placeholder.svg?w=400&h=300" alt="placeholder" className="mx-auto object-cover w-full h-[300px]" />
      </div>
      <ul className="mt-4 list-disc list-inside">
        <li>Flamenco</li>
        <li>Bullfighting</li>
        <li>Festivals</li>
      </ul>
    </div>
  );
};

export default Culture;