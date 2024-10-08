import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CustomCard = ({ title, description, content, footer }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-4xl font-bold">{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};

export default CustomCard;
