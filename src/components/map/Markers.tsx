import { Fragment } from "react/jsx-runtime";
import { useUsersQuery } from "../../hooks"
import { Result } from "../../interfaces";
import { useUsersStore } from "../../stores";
import { CustomMarker } from "..";



export const Markers = () => {

    const { data } = useUsersQuery();

    const results = data?.data.results as Result[]

    const { selectedUser } = useUsersStore()


    return (
        <>
            {
                results.map((userData) => (
                    <Fragment key={userData.location.coordinates.latitude + userData.location.coordinates.longitude}>
                        {
                            selectedUser
                                ? (
                                    userData.location.coordinates == selectedUser?.id &&
                                    <CustomMarker
                                        userData={userData} />
                                )
                                : (<CustomMarker
                                    userData={userData} />)
                        }
                    </Fragment>
                ))
            }
        </>
    )
}