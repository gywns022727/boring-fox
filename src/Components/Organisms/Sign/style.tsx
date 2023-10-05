import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 15px 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    >h1 {
        font-weight: 800;
        font-size: 50px;
    }
    >h2{
        text-align: right;
        font-size: 100px;
    }
    >p{
        font-size: 14px;
        position: absolute;
        left: -15%;
        bottom: 22%;
        transform: rotate(-90deg);
    }
`