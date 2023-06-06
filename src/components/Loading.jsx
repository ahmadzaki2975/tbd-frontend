import { LoadingContext } from "@/contexts/LoadingContext";
import { useContext } from "react";

export default function Loading() {
  const { loading } = useContext(LoadingContext);
  console.log(loading)
  if (loading)
    return (
      <div className="bg-black/70 w-screen h-screen fixed top-0 z-[99] grid place-items-center">
        <h1 className="text-[30px] text-white animate-pulse">Ksabar...</h1>
      </div>
    );
}
