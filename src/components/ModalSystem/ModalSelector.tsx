import { ModalType } from "../../reducers/modal/modalReducer"
import { HistoryModal } from "./modals/HistoryModal"

interface ModalSelectorProps {
    type: ModalType
}

export const ModalSelector = ({
    type
}: ModalSelectorProps) => {
    switch (type) {
        case "history":
            return <HistoryModal />
        default:
            return <></>
    }
}
