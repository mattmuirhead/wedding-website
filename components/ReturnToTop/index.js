import { Box, IconButton } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'

const ReturnToTop = () => {
  const handleClick = event => {
    event.preventDefault()
    const section =  document.getElementById('top')
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Box 
      position="fixed"
      right={10}
      bottom={10}
    >
      <IconButton 
        onClick={handleClick}
        aria-label="Return to top" 
        icon={<ChevronUpIcon />} 
      />
    </Box>
  )
}

export default ReturnToTop