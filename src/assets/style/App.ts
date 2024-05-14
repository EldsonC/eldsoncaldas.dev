import styled from "styled-components";

export const Section = styled.section<{ $paddingTop: string, $paddingBottom: string, $backgroundColor: string }>`
    padding-top: ${props => props.$paddingTop};
    padding-Bottom: ${props => props.$paddingBottom};

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${props => props.$backgroundColor};
`;

export const ContentHome = styled.div<{
    $h1Size: string,
    $h1MaxWidth: string,

    $pSize: string,
    $pMaxWidth: string,
}>`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-top: 0.799rem;
        text-align: center;

        max-width: ${props => props.$h1MaxWidth};

        font-size: ${props => props.$h1Size};
        font-weight: 600;
        color: var(--black-600);

        span {
            color: var(--primary-color);
        }
    }

    p {
        margin-top: 0.313rem ;
        max-width: ${props => props.$pMaxWidth};
        text-align: center;

        font-size: ${props => props.$pSize};
        color: var(--black-400);
    }

    button {
        margin-top: 1.5rem;
        margin-bottom: 4.875rem;
        padding: 0.563rem 1.313rem;
        display: flex;
        align-items: center;
        gap: 0.875rem;

        cursor: pointer;

        border-radius: 0.813rem;
        background-color: var(--yellow-color);

        p {
            margin: 0;
            font-size: 9pt;
            font-weight: 600;
            color: var(--black-600);
        }

        .go_right {
            width: 1.625rem;
            height: 1.625rem;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 0.313rem;
            background-color: var(--secundary-color);
        }
    }
`;