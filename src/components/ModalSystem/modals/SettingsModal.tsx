import { ModalContainer } from "../ModalContainer"
import styled from "@emotion/styled"
import React, { useCallback } from "react"
import { useSelector } from "react-redux"
import { selectSettings } from "../../../reducers/settings/settingsReducer"
import {
    useResetSettings,
    useSetResultsPerPage
} from "../../../reducers/actions/settings"
import { ModalBodyAndButtons } from "./common/ModalBodyAndButtons"
import { ModalButtons } from "./common/ModalButtons"

const SettingsList = styled.div`
    label: SettingsList;

    & > div:nth-child(2n + 1) {
        background-color: ${(props) =>
            props.theme.colors.background.tertiary};
    }
`

const SettingsItem = styled.div`
    label: SettingsItem;

    display: grid;
    grid-template-columns: auto max-content;
    justify-items: left;
    align-items: center;
    padding: 0.25rem;
`

export const SettingsModal = () => {
    const settings = useSelector(selectSettings)
    const setResultsPerPage = useSetResultsPerPage()
    const resetSettings = useResetSettings()
    const onResultsPerPageChange = useCallback<
        React.ChangeEventHandler<HTMLSelectElement>
    >(
        (e) => {
            setResultsPerPage(
                parseInt(e.currentTarget.value, 10)
            )
        },
        [setResultsPerPage]
    )
    const onResetClick = useCallback<
        React.MouseEventHandler<HTMLButtonElement>
    >(() => {
        resetSettings()
    }, [resetSettings])

    return (
        <ModalContainer hasCloseX={true} title="Settings">
            <ModalBodyAndButtons>
                <SettingsList>
                    <SettingsItem>
                        <div>Results per page</div>
                        {/** TODO add line between setting name and setter **/}
                        <select
                            name="resultsPerPage"
                            value={settings.resultsPerPage}
                            onChange={
                                onResultsPerPageChange
                            }
                        >
                            {/** TODO make array for available options **/}
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </SettingsItem>
                </SettingsList>
                <ModalButtons>
                    <button onClick={onResetClick}>
                        Reset Settings
                    </button>
                </ModalButtons>
            </ModalBodyAndButtons>
        </ModalContainer>
    )
}
