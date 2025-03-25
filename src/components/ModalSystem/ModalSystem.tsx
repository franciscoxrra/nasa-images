import React, { useCallback } from "react"
import styled from "@emotion/styled"
import { useSelector } from "react-redux"
import { selectHeadModal } from "../../reducers/modal/modalReducer"
import { useRemoveHeadFromModalPipeline } from "../../reducers/actions/modal"
import { ModalSelector } from "./ModalSelector"
import { css, Global } from "@emotion/react"

export const scrollbarPaddingFlag = "scrollbar-padding-flag"

const ModalContainer = styled.div`
    label: ModalContainer;

    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: ${(props) =>
        props.theme.colors.background.grayout};
    display: grid;
    justify-items: center;
    align-items: center;
`

const Modal = styled.div`
    label: Modal;

    width: 100%;
    max-height: min(42rem, 95vh);
    max-width: min(42rem, 95vw);
    background-color: ${(props) =>
        props.theme.colors.background.primary};
    border-radius: 1rem;

    @media (width < ${(props) =>
            props.theme.breakpoints.width.small}) {
        height: 100vh;
        width: 100vw;
        max-height: none;
        max-width: none;
        border-radius: 0;
    }
`

const ContentContainer = styled.div`
    label: ContentContainer;
`

const RemoveScrollbarGlobal = () => (
    <Global
        styles={css`
            body {
                overflow: hidden;
            }

            .${scrollbarPaddingFlag} {
                padding-right: ${window.innerWidth -
                document.body.clientWidth}px !important;
            }
        `}
    />
)

interface ModalSystemProps {
    children?: React.ReactNode
}

export const ModalSystem = ({
    children: body
}: ModalSystemProps) => {
    const headModal = useSelector(selectHeadModal)
    const hasModal = !!headModal

    const removeHeadFromModalPipeline =
        useRemoveHeadFromModalPipeline()
    const onClickContainer = useCallback<
        React.MouseEventHandler<HTMLDivElement>
    >(() => {
        if (headModal?.hasBlurClose) {
            removeHeadFromModalPipeline()
        }
    }, [headModal, removeHeadFromModalPipeline])
    const onClickModal = useCallback<
        React.MouseEventHandler<HTMLDivElement>
    >((event) => {
        event.stopPropagation()
    }, [])

    return (
        <>
            {hasModal && (
                <>
                    <RemoveScrollbarGlobal />
                    <ModalContainer
                        onClick={onClickContainer}
                    >
                        <Modal onClick={onClickModal}>
                            <ModalSelector
                                type={headModal.type}
                            />
                        </Modal>
                    </ModalContainer>
                </>
            )}
            <ContentContainer>{body}</ContentContainer>
        </>
    )
}
