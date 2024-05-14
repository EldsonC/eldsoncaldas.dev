import styled from "styled-components";

export const Tag = styled.div `
    display: flex;
    align-items: center;

    .icon {
        min-width: 1.389rem;
        min-height: 1.389rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 0.231rem;
        background-color: var(--primary-color);
    }

    .line {
        width: 1.112rem;
        height: 0.25rem;

        background-color: #E8E8E8;
    }

    .content {
        padding: 0.313rem 0.5rem;
        background-color: #E8E8E8;
        border-radius: 0.231rem;

        p {
            font-size: 6.667pt;
            font-weight: 500;
            color: var(--black-600);
        }
    }
`;