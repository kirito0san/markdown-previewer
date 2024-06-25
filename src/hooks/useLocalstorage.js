import { useEffect } from "react";
export function useLocalstorage(code, compiled) {
    useEffect(() => {
        localStorage.setItem("code", code);
        localStorage.setItem("compiled", compiled);
    }, [code, compiled]);
}
