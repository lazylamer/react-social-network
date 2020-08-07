import React, {Suspense} from "react";
import Spinner from "../components/common/Spinner/Spinner";

const withSuspense = Component =>
    props => {
        return (
            <Suspense fallback={<Spinner />} >
                <Component {...props} />
            </Suspense>
        )
    }

export default withSuspense;