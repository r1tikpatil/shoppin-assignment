import { ColorRing } from 'react-loader-spinner'
import styled from 'styled-components';

const LoaderContainer = styled.div`
    text-align: center;
    color: #888;
    margin-top: 20px;
`;

const Loader = ({ width = 80, height = 80 }) => {
    return (
        <LoaderContainer>
            <ColorRing
                visible={true}
                height={height}
                width={width}
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </LoaderContainer>
    )
}

export default Loader;