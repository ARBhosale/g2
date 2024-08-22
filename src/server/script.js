import { gs } from '@servicenow/glide'
const a = 47;
const b = 48;
const c = 49;
export function showStateUpdate(current, previous) {
    const currentState = current.getValue('state')
    const previousState = previous.getValue('state')

    gs.addInfoMessage(`state updated from "${previousState}" to "${currentState}"`)
}
