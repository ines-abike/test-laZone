"use client";

import { Button } from "@chakra-ui/react";
import Test from "@/components/Test";

const Page = () => {
  return (
    <div>
      <Button variant="ghost" colorPalette="secondary">
        Solid Button
      </Button>
      <Test />
    </div>
  );
};

export default Page;
