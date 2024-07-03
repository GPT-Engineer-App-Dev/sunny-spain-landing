import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <div className="relative w-full h-[400px]">
        <img src="/placeholder.svg?w=1200&h=400" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl text-white">Welcome to Spain</h1>
        </div>
      </div>
      <p className="mt-4 text-lg">Discover the beauty and culture of Spain.</p>
      <Button className="mt-4" variant="primary">Explore Now</Button>
    </div>
  );
};

export default Index;