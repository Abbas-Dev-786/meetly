import React from "react";
import { features } from "@/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const FeatureSection = () => {
  return (
    <div className="my-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;

          return (
            <Card key={index}>
              <CardHeader>
                <IconComponent className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                <CardTitle className="text-center text-blue-600">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
