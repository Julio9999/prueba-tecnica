import { Skeleton } from "@mui/material"


export const MapContainerSkeleton = () => {
    return (
        <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            height={'80vh'}
        />
    )
}
