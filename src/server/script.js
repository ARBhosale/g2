import { gs } from '@servicenow/glide'
const a = 44;
export function showStateUpdate(current, previous) {
    const currentState = current.getValue('state')
    const previousState = previous.getValue('state')

    gs.addInfoMessage(`state updated from "${previousState}" to "${currentState}"`)
}
