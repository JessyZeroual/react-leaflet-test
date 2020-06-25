import { useState, useEffect } from "react";

const useInfiniteScroll = (cities) => {
  const [fetchingMoreElements, setFetchingMoreElements] = useState(false);
  const [hasNextElements, setHasNextElements] = useState(true);
  const [numberOfElements, setNumberOfElements] = useState(20);
  useEffect(() => {
    const mainSideBar = document.getElementById("mainSideBarID");

    const fetchMore = () => {
      setFetchingMoreElements(false);
      setNumberOfElements(numberOfElements + 20);
    };

    const handleScroll = (e) => {
      if (
        e.target.scrollHeight ===
        e.target.clientHeight + e.target.scrollTop
      ) {
        if (numberOfElements > cities.length) {
          setHasNextElements(false);
          setFetchingMoreElements(false);
        } else {
          setFetchingMoreElements(true);
          setTimeout(() => {
            fetchMore();
          }, 300);
        }
      }
    };

    mainSideBar.addEventListener("scroll", handleScroll);
    return () => {
      mainSideBar.removeEventListener("scroll", handleScroll);
    };
  }, [cities.length, fetchingMoreElements, numberOfElements]);

  return { numberOfElements, fetchingMoreElements, hasNextElements };
};

export default useInfiniteScroll;
