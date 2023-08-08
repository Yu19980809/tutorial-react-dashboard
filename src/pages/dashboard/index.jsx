import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import LineChart from '../../components/LineChart'
import GeographyChart from '../../components/GeographyChart'
import BarChart from '../../components/BarChart'
import StatBox from '../../components/StatBox'
import ProgressCircle from '../../components/ProgressCircle'
import Header from '../../components/Header'
import { tokens } from '../../theme'
import { mockTransactions } from '../../data/mockData'

const index = () => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )

  return (
    <Box m='20px'>
      {/* HEADER */}
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />

        <Box>
          <Button
            sx={{
              padding: '10px 20px',
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              backgroundColor: colors.blueAccent[700]
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display='grid'
        gridTemplateColumns='repeat( 12, 1fr )'
        gridAutoRows='140px'
        gap='20px'
      >
        {/* ROW 1 */}
        {/* BOX 1 */}
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          gridColumn='span 3'
          backgroundColor={ colors.primary[400] }
        >
          <StatBox
            title='12,361'
            subtitle='Emails Sent'
            progress='0.75'
            increase='+14%'
            icon={ <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} /> }
          />
        </Box>

        {/* BOX 2 */}
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          gridColumn='span 3'
          backgroundColor={ colors.primary[400] }
        >
          <StatBox
            title='431,225'
            subtitle='Sales Obtained'
            progress='0.50'
            increase='+21%'
            icon={ <PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} /> }
          />
        </Box>

        {/* BOX 3 */}
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          gridColumn='span 3'
          backgroundColor={ colors.primary[400] }
        >
          <StatBox
            title='32,441'
            subtitle='New Clients'
            progress='0.30'
            increase='+5%'
            icon={ <PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} /> }
          />
        </Box>

        {/* BOX4 */}
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          gridColumn='span 3'
          backgroundColor={ colors.primary[400] }
        >
          <StatBox
            title='1,325,134'
            subtitle='Traffic Received'
            progress='0.80'
            increase='+43%'
            icon={ <TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} /> }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridRow='span 2'
          gridColumn='span 8'
          backgroundColor={ colors.primary[400] }
        >
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            mt='25px'
            p='0 30px'
          >
            <Box>
              <Typography variant='h5' fontWeight='600' color={ colors.grey[100] }>
                Revenue Generated
              </Typography>

              <Typography variant='h3' fontWeight='bold' color={ colors.grey[500] }>
                $59,342.32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: '26px', color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>

          <Box height='250px' m='-20px 0 0 0'>
            <LineChart isDashboard={ true } />
          </Box>
        </Box>

        <Box
          gridRow='span 2'
          gridColumn='span 4'
          backgroundColor={ colors.primary[400] }
          overflow='auto'
        >
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            p='15px'
            colors={ colors.grey[100] }
            borderBottom={ `4px solid ${ colors.primary[500] }` }
          >
            <Typography variant='h5' color={ colors.grey[100] } fontWeight='600'>
              Recent Transactions
            </Typography>
          </Box>

          { mockTransactions.map( ( transaction, index ) => (
            <Box
              key={ `${ transaction.txId }-${ index }` }
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              p='15px'
              borderBottom={ `4px solid ${ colors.primary[500] }` }
            >
              <Box>
                <Typography
                  variant='h5'
                  color={ colors.greenAccent[500] }
                  fontWeight='600'
                >
                  { transaction.txId }
                </Typography>

                <Typography color={ colors.grey[100] }>
                  { transaction.user }
                </Typography>
              </Box>

              <Box color={ colors.grey[100] }>{ transaction.date }</Box>

              <Box
                p='5px 10px'
                backgroundColor={ colors.greenAccent[500] }
                borderRadius='4px'
              >
                ${ transaction.cost }
              </Box>
            </Box>
          ) ) }
        </Box>

        {/* ROW 3 */}
        <Box
          gridRow='span 2'
          gridColumn='span 4'
          p='30px'
          backgroundColor={ colors.primary[400] }
        >
          <Typography variant='h5' fontWeight='600'>
            Campaign
          </Typography>

          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mt='25px'
          >
            <ProgressCircle size='125' />
            <Typography
              variant='h5'
              color={ colors.greenAccent[500] }
              sx={{ mt: '15px' }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        {/* BAR CHART */}
        <Box
          gridRow='span 2'
          gridColumn='span 4'
          backgroundColor={ colors.primary[400] }
        >
          <Typography
            variant='h5'
            fontWeight='600'
            sx={{ padding: '30px 30px 0 30px' }}
          >
            Sales Quantity
          </Typography>
          <Box height='250px' mt='-20px'>
            <BarChart isDashboard={ true } />
          </Box>
        </Box>

        {/* GEOGRAPHY CHART */}
        <Box
          gridRow='span 2'
          gridColumn='span 4'
          padding='30px'
          backgroundColor={ colors.primary[400] }
        >
          <Typography
            variant='h5'
            fontWeight='600'
            sx={{ marginBottom: '15px' }}
          >
            Geography Based Traffic
          </Typography>
          <Box height='200px'>
            <GeographyChart isDashboard={ true } />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default index