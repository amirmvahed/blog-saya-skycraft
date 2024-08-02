import ClipLoader from "react-spinners/ClipLoader";
export default function Loading() {

    return (
        <div className={'m-auto'}>
            <ClipLoader
                color={'#000'}
                loading={true}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}
