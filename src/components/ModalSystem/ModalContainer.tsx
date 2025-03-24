import styled from "@emotion/styled"
import { useRemoveHeadFromModalPipeline } from "../../reducers/actions/modal"
import React, { useCallback } from "react"
import { IconButton } from "../buttons/IconButton"

const Container = styled.div`
    label: ModalContainer;

    display: grid;
    grid-template-rows: max-content auto;
    row-gap: 0.25rem;
    box-sizing: border-box;
    padding: 1rem;
    height: 100%;
`

const ModalTab = styled.div`
    label: ModalTab;

    display: grid;
    justify-items: right;
`

const ModalContent = styled.div`
    label: ModalContent;

    display: grid;
    grid-template-rows: max-content auto;
    row-gap: max(1rem, 10%);
    overflow-y: auto;
    padding: 0 3rem 3rem;

    @media (width < ${(props) =>
            props.theme.breakpoints.width.small}) {
        padding: 0 1rem 1rem;
        grid-template-rows: max-content max-content;
        align-content: center;
    }
`

const ModalTitle = styled.div`
    label: ModalTitle;

    font-size: ${(props) =>
        props.theme.fonts.sizes.biggest};
`

const ModalBody = styled.div`
    label: ModalBody;

    height: 100%;
    min-height: 10rem;
    display: grid;
    align-items: center;
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
                    <IconButton onClick={onClickXButton}>
                        X
                    </IconButton>
                )}
            </ModalTab>
            <ModalContent>
                <ModalTitle>{title}</ModalTitle>
                <ModalBody>{modalBody}</ModalBody>
            </ModalContent>
        </Container>
    )
}
