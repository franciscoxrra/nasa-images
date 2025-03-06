import { ModalType } from "../../reducers/modal/modalReducer"
import { HistoryModal } from "./modals/HistoryModal"
import { SettingsModal } from "./modals/SettingsModal"

interface ModalSelectorProps {
    type: ModalType
}

export const ModalSelector = ({
    type
}: ModalSelectorProps) => {
    switch (type) {
        case "history":
            return <HistoryModal />
        case "settings":
            return <SettingsModal />
        default:
            return <></>
    }
}
