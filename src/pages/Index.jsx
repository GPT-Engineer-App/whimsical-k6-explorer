import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">All About Dogs</h1>
        
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
            alt="Cute dog" 
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Paw className="mr-2" /> Introduction to Dogs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Dogs, often referred to as "man's best friend," are domesticated mammals known for their loyalty, 
              companionship, and diverse roles in human society. They belong to the Canidae family and are 
              descendants of wolves. Dogs have been bred for thousands of years, resulting in a wide variety of 
              breeds with different characteristics and purposes.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Paw className="mr-2" /> Characteristics of Dogs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Loyal and affectionate companions</li>
              <li>Highly intelligent and trainable</li>
              <li>Excellent sense of smell and hearing</li>
              <li>Wide range of sizes, shapes, and coat types</li>
              <li>Diverse temperaments and energy levels</li>
              <li>Ability to perform various tasks and jobs</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Paw className="mr-2" /> Popular Dog Breeds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-4">
              <li>Labrador Retriever</li>
              <li>German Shepherd</li>
              <li>Golden Retriever</li>
              <li>French Bulldog</li>
              <li>Bulldog</li>
              <li>Poodle</li>
              <li>Beagle</li>
              <li>Rottweiler</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
