import { ModalContainer } from "../ModalContainer"
import styled from "@emotion/styled"
import React, { useCallback } from "react"
import { useSelector } from "react-redux"
import { selectSettings } from "../../../reducers/settings/settingsReducer"
import {
    useResetSettings,
    useSetResultsPerPage
} from "../../../reducers/actions/settings"

const SettingsList = styled.div`
    label: SettingsList;
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
            <SettingsList>
                <div>
                    <div>Results per page</div>
                    <select
                        name="resultsPerPage"
                        value={settings.resultsPerPage}
                        onChange={onResultsPerPageChange}
                    >
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <button onClick={onResetClick}>
                    Reset Settings
                </button>
            </SettingsList>
        </ModalContainer>
    )
}
