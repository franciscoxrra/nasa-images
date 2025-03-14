import styled from "@emotion/styled"
import { useRemoveHeadFromModalPipeline } from "../../reducers/actions/modal"
import React, { useCallback } from "react"

const Container = styled.div`
    label: ModalContainer;

    display: grid;
    grid-template-rows: max-content max-content auto;
    row-gap: 1rem;
    box-sizing: border-box;
    padding: 1rem;
    height: 100%;
`

const ModalTab = styled.div`
    label: ModalTab;

    display: grid;
    justify-items: right;
`

const XButton = styled.button`
    label: XButton;

    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: ${(props) => props.theme.fonts.sizes.big};

    &:hover {
        color: ${({ theme }) => theme.colors.standard.link};
        text-decoration: underline;
    }
`

const ModalTitle = styled.div`
    label: ModalTitle;

    font-size: ${(props) =>
        props.theme.fonts.sizes.biggest};
`

const ModalContent = styled.div`
    label: ModalContent;

    height: 100%;
`

interface ModalContainerProps {
    hasCloseX: boolean
    title?: string
    children?: React.ReactNode
}

export const ModalContainer = ({
    hasCloseX,
    title,
    children: modalBody
}: ModalContainerProps) => {
    const removeHeadFromModalPipeline =
        useRemoveHeadFromModalPipeline()
    const onClickXButton = useCallback<
        React.MouseEventHandler<HTMLButtonElement>
    >(() => {
        removeHeadFromModalPipeline()
    }, [removeHeadFromModalPipeline])

    return (
        <Container>
            <ModalTab>
                {hasCloseX && (
                    <XButton onClick={onClickXButton}>
                        X
                    </XButton>
                )}
            </ModalTab>
            <ModalTitle>{title}</ModalTitle>
            <ModalContent>{modalBody}</ModalContent>
        </Container>
    )
}
