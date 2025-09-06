import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 w-full max-w-screen-xl mx-auto">
      <div className="flex items-center justify-center">
        <Image src="/doma-logo.svg" alt="Doma" width={30} height={30} />
      </div>

      <DynamicWidget />
    </header>
  );
}
