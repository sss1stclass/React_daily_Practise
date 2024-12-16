import { Box, CircularProgress, Divider, Paper, Typography } from "@mui/material";
import { InfiniteApiContext } from "./context/InfiniteApiContext";
import { useContext, useEffect, useRef } from "react";

const Day11InfinteScrolling = () => {
    const apiContext = useContext(InfiniteApiContext);
    const { data, loading, loadMoreData, hasMore } = apiContext;

    // Scroll detection using IntersectionObserver
    const sentinelRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && hasMore && !loading) {
                    loadMoreData(); // Load more data when sentinel is visible
                }
            },
            {
                rootMargin: "100px", // Trigger when near the bottom
            }
        );
        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.disconnect();
            }
        };
    }, [hasMore, loading]);

    if (loading && data.length === 0) {
        return (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
                <CircularProgress color="secondary" />
            </Box>
        );
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
            <Paper
                elevation={3}
                sx={{
                    width: "auto",
                    maxHeight: "auto",
                    mt: 2,
                    border: "1px solid #ccc",
                    padding: "8px",
                }}
            >
                {data.map((item: any) => (
                    <Box key={item.id}>
                        <Typography>{item.title}</Typography>
                        <Divider />
                    </Box>
                ))}
            </Paper>

            {/* Sentinel for IntersectionObserver */}
            <div ref={sentinelRef}></div>

            {/* Loading Indicator for Bottom */}
            {loading && (
                <Box display="flex" justifyContent="center" mt={2}>
                    <CircularProgress />
                </Box>
            )}

            {/* No More Data */}
            {!hasMore && (
                <Typography variant="body2" textAlign="center" color="gray" mt={2}>
                    No more items to load
                </Typography>
            )}
        </Box>
    );
};

export default Day11InfinteScrolling;
