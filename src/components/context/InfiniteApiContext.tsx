import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const InfiniteApiContext = createContext<any>(null);

export const InfiniteApiProvider = ({ children }: any) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true); // Tracks if there is more data to fetch

    const fetchData = async () => {
        if (loading) return; // Prevent multiple requests at the same time
        try {
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: page,
                    _limit: 10,
                },
            });

            setData((prevData: any) => [...prevData, ...response.data]);

            // If the fetched data is less than the limit, we are at the end of the data
            if (response.data.length < 10) {
                setHasMore(false); // No more data to load
            }
        } catch (error: any) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Fetch initial data and handle pagination on page change
    useEffect(() => {
        fetchData();
    }, [page]);

    // Function to trigger fetching the next page of data
    const loadMoreData = () => {
        if (hasMore && !loading) {
            setPage(prevPage => prevPage + 1); // Increment page number to fetch next set of data
        }
    };

    const contextValue = { data, loading, loadMoreData, hasMore };

    return (
        <InfiniteApiContext.Provider value={contextValue}>
            {children}
        </InfiniteApiContext.Provider>
    );
};
