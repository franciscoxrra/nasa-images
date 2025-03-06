import { ModalContainer } from "../ModalContainer"
import { useSelector } from "react-redux"
import { selectHistory } from "../../../reducers/history/historyReducer"
import styled from "@emotion/styled"
import { getSearchPath } from "../../../util/paths"
import { Link } from "react-router-dom"
import { useRemoveHeadFromModalPipeline } from "../../../reducers/actions/modal"
import React, { useCallback } from "react"

const ModalList = styled.ol`
    label: ModalList;

    text-align: initial;
    padding: 1.5rem 5rem;
    display: grid;
    gap: 1.5rem;
    font-size: ${(props) => props.theme.fonts.sizes.big};
`

export const HistoryModal = () => {
    const searchHistory = useSelector(selectHistory)
    const removeHeadFromModalPipeline =
        useRemoveHeadFromModalPipeline()
    const onClickClose = useCallback<
        React.MouseEventHandler<HTMLLIElement>
    >(() => {
        removeHeadFromModalPipeline()
    }, [removeHeadFromModalPipeline])
    return (
        <ModalContainer
            hasCloseX={true}
            title="Recent History"
        >
            <ModalList>
                {searchHistory.previousSearchExpressions.map(
                    ({
                        expression,
                        lastViewPage,
                        lastViewDate
                    }) => (
                        <li
                            key={lastViewDate}
                            onClick={onClickClose}
                        >
                            <Link
                                to={getSearchPath(
                                    expression,
                                    lastViewPage
                                )}
                            >
                                "{expression}" (page{" "}
                                {lastViewPage}){" "}
                                {lastViewDate}
                            </Link>
                        </li>
                    )
                )}
            </ModalList>
        </ModalContainer>
    )
}
