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

    height: 95%;
    width: 95%;
    max-height: 50rem;
    max-width: 50rem;
    background-color: ${(props) =>
        props.theme.colors.background.primary};
    border-radius: 1rem;
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
