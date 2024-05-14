import styled from "styled-components";

export const Email = styled.div<{
    $bottom: string,
    $right: string,
}>`
    width: 3.75rem;
    height: 3.75rem;

    position: fixed;
    bottom: ${props => props.$bottom};
    right: ${props => props.$right};

    border-radius: 50%;
    background-color: var(--primary-color);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;