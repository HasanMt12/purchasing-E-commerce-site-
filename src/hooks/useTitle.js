import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - 99 Pro`;
    }, [title])
};

export default useTitle;