import { MessageCircleWarning } from 'lucide-react'
import { Button } from '../common/Button.jsx'

function ObjectionButton({ onSubmit }) {
  return (
    <Button icon={MessageCircleWarning} onClick={onSubmit} variant="secondary">
      Objection!
    </Button>
  )
}

export { ObjectionButton }
