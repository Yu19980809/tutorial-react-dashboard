import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Header from '../../components/Header'
import { tokens } from '../../theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
          <Typography variant='h5' color={ colors.greenAccent[500] }>
            An Important Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
          <Typography variant='h5' color={ colors.greenAccent[500] }>
            Another Important Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
          <Typography variant='h5' color={ colors.greenAccent[500] }>
            Your Favorite Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
          <Typography variant='h5' color={ colors.greenAccent[500] }>
            Some Random Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
          <Typography variant='h5' color={ colors.greenAccent[500] }>
            The Final Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ
