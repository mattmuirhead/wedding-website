import { Box, IconButton } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'

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
        className="returnToTop"
        onClick={handleClick}
        aria-label="Return to top" 
        icon={<ArrowUpIcon />} 
        borderRadius={100}
      />
    </Box>
  )
}

export default ReturnToTop